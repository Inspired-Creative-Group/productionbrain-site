// The hero brain: the /demo "Watch it grow" replay, rendered on a transparent canvas
// floating over the machine photograph. Plain three.js, no force graph, no bloom:
// the glow is additive sprites, so the photo shows through and nothing paints a
// black rectangle over it. Nothing here is interactive.
import * as THREE from 'three';
import { composeGlobe, makeOrbitals } from './constellation.js';
import { planGrowth, growthPosition } from './growth.js';
import DATA from './data.json';
import CSS from './hero-brain.css';

const RADIUS = 450;          // the globe's outer node radius (constellation.js)
const FIT_RADIUS = 560;      // what has to fit in the canvas: nodes, halos and the orbit rings
const FOV = 50;
const GROW_SPEED = .18, HOLD_SPEED = .45;   // OrbitControls autoRotateSpeed units, as in the demo

function num(v, d) { const n = parseFloat(v); return Number.isFinite(n) ? n : d; }
function readSettings(el) {
  const d = el.dataset;
  return {
    image: d.image || '.mm-machine img',
    avoid: d.avoid == null ? '.partners-hero-ctas' : d.avoid,
    boxX: num(d.boxX, 50),        // % of the painted photo: horizontal centre of the box
    boxY: num(d.boxY, 51),        // % of the painted photo: top edge of the box
    size: num(d.size, 30),        // % of the painted photo's width: side of the brain's square
    lift: num(d.lift, 0),         // % of the photo's height between the box top and the brain's frame
    // the wide crop phones get is a different picture, so the box sits somewhere else
    boxXPhone: num(d.boxXPhone, 44), boxYPhone: num(d.boxYPhone, 39), sizePhone: num(d.sizePhone, 42),
    mode: d.mode === 'loop' ? 'loop' : 'hold',
    holdSeconds: num(d.holdSeconds, 8),  // loop mode: how long the grown brain stays before it fades
    phone: d.phone || 'off',      // 'off' | 'light'
    opacity: num(d.opacity, .85),
    rings: d.rings !== '0',
    glow: num(d.glow, .5),        // the warm core haze, 0 to 1
    minSide: num(d.minSide, 140), // below this many pixels the brain stays hidden
  };
}

// The rectangle the photo actually paints in, accounting for object-fit: cover.
function paintedRect(img) {
  const r = img.getBoundingClientRect();
  const nw = img.naturalWidth, nh = img.naturalHeight;
  if (!nw || !nh || !r.width || !r.height) return r;
  const fit = getComputedStyle(img).objectFit;
  if (fit !== 'cover') return r;
  const scale = Math.max(r.width / nw, r.height / nh);
  const w = nw * scale, h = nh * scale;
  return { left: r.left + (r.width - w) / 2, top: r.top + (r.height - h) / 2, width: w, height: h, right: 0, bottom: 0 };
}

const spriteVert = `
  attribute float size; attribute float alpha; attribute vec3 color;
  varying vec3 vColor; varying float vAlpha;
  uniform float halfHeight;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * halfHeight * projectionMatrix[1][1] / max(1.0, -mv.z);
    vColor = color; vAlpha = alpha;
  }`;
const coreFrag = `
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.72, d) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a + vec3(0.18) * a * (1.0 - smoothstep(0.0, 0.5, d)), a);
  }`;
const haloFrag = `
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float d = min(1.0, length(gl_PointCoord - 0.5) * 2.0);
    float a = pow(1.0 - d, 2.2) * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a, a);
  }`;
const lineVert = `
  attribute vec4 tint; varying vec4 vTint;
  void main() { vTint = tint; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const lineFrag = `
  varying vec4 vTint;
  void main() { if (vTint.a < 0.003) discard; gl_FragColor = vec4(vTint.rgb * vTint.a, vTint.a); }`;

// Everything is written premultiplied and added, so overlapping glow sums instead of
// covering, and the transparent canvas composites onto the photo without a dark edge.
function additive(material) {
  material.blending = THREE.CustomBlending;
  material.blendSrc = THREE.OneFactor; material.blendDst = THREE.OneFactor;
  material.blendSrcAlpha = THREE.OneFactor; material.blendDstAlpha = THREE.OneFactor;
  material.transparent = true; material.depthWrite = false; material.depthTest = false;
  return material;
}

export function start(el) {
  const s = readSettings(el);
  const img = document.querySelector(s.image);
  if (!img) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const phoneMq = matchMedia('(max-width:1000px)');
  const light = phoneMq.matches;
  if (light && s.phone === 'off') return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !light, premultipliedAlpha: true, powerPreference: 'high-performance' });
  } catch (e) { return; }
  // Every colour here is an unlit sprite or line, so the hex values are used as they are.
  THREE.ColorManagement.enabled = false;
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  if (!document.getElementById('hero-brain-css')) {
    const style = document.createElement('style'); style.id = 'hero-brain-css'; style.textContent = CSS; document.head.appendChild(style);
  }
  el.style.setProperty('--hero-brain-opacity', String(s.opacity));
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, light ? 1.25 : 1.6));
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  el.appendChild(canvas);

  // ---- data: the public demo brain, nothing else ----
  const colorOf = Object.fromEntries(DATA.sources.map((x) => [x.id, new THREE.Color(x.color)]));
  let nodes = DATA.nodes.map((n) => ({ id: n.id, source: n.s, degree: n.d }));
  if (light) {
    // Phones: the busiest half of the brain, which keeps its shape and halves the work.
    nodes = nodes.filter((n) => n.degree >= 2);
  }
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const links = DATA.links.map(([a, b, kind]) => ({ source: a, target: b, kind })).filter((l) => byId.has(l.source) && byId.has(l.target));
  composeGlobe(nodes, DATA.sources);
  for (const n of nodes) { n.r = Math.min(11, 2.2 + Math.sqrt(n.degree || 0) * .85); n.home = { x: n.x, y: n.y, z: n.z }; }
  // Which links stay drawn once the brain is grown (the demo's "quiet" set).
  const quiet = new Set();
  links.forEach((l, i) => {
    const a = byId.get(l.source), b = byId.get(l.target);
    if (Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < 330 || i % 7 === 0) quiet.add(l);
  });

  // ---- scene ----
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 1, 8000);
  const N = nodes.length;
  const positions = new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const colors = new THREE.BufferAttribute(new Float32Array(N * 3), 3);
  const coreSize = new THREE.BufferAttribute(new Float32Array(N), 1).setUsage(THREE.DynamicDrawUsage);
  const coreAlpha = new THREE.BufferAttribute(new Float32Array(N), 1).setUsage(THREE.DynamicDrawUsage);
  const haloSize = new THREE.BufferAttribute(new Float32Array(N), 1).setUsage(THREE.DynamicDrawUsage);
  const haloAlpha = new THREE.BufferAttribute(new Float32Array(N), 1).setUsage(THREE.DynamicDrawUsage);
  nodes.forEach((n, i) => { const c = colorOf[n.source] || new THREE.Color('#ffffff'); colors.setXYZ(i, c.r, c.g, c.b); n.i = i; });
  const halfHeight = { value: 1 };
  const makePoints = (size, alpha, frag) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', positions); g.setAttribute('color', colors);
    g.setAttribute('size', size); g.setAttribute('alpha', alpha);
    const m = additive(new THREE.ShaderMaterial({ uniforms: { halfHeight }, vertexShader: spriteVert, fragmentShader: frag }));
    const p = new THREE.Points(g, m); p.frustumCulled = false; return p;
  };
  const linkGeo = new THREE.BufferGeometry();
  const linkPos = new THREE.BufferAttribute(new Float32Array(links.length * 6), 3).setUsage(THREE.DynamicDrawUsage);
  const linkTint = new THREE.BufferAttribute(new Float32Array(links.length * 8), 4).setUsage(THREE.DynamicDrawUsage);
  linkGeo.setAttribute('position', linkPos); linkGeo.setAttribute('tint', linkTint);
  const lines = new THREE.LineSegments(linkGeo, additive(new THREE.ShaderMaterial({ vertexShader: lineVert, fragmentShader: lineFrag })));
  lines.frustumCulled = false;
  scene.add(lines);
  const halos = light ? null : makePoints(haloSize, haloAlpha, haloFrag);
  if (halos) scene.add(halos);
  scene.add(makePoints(coreSize, coreAlpha, coreFrag));
  const orbitals = s.rings ? makeOrbitals(scene, { ring1: '#D9963A', ring2: '#F2EDE6', glow: '#D9963A' }) : null;
  let haze = null;
  if (orbitals) {
    // The demo draws these over black; over a photo they only need to add light.
    scene.traverse((o) => {
      if (o instanceof THREE.Sprite) haze = o;
      if (o.material && o !== lines && !(o instanceof THREE.Points)) { o.material.blending = THREE.AdditiveBlending; o.material.depthTest = false; o.material.depthWrite = false; }
    });
  }
  const white = new THREE.Color('#F2EDE6');

  // ---- growth (the demo's replay, verbatim in growth.js) ----
  let plan, elapsed = 0, angle = .35, phase = 'grow', holdSince = 0, fading = false;
  function reset() {
    for (const n of nodes) { n.x = n.home.x; n.y = n.home.y; n.z = n.home.z; }
    plan = planGrowth(nodes, links);
    for (const r of plan.records) { r.origin = null; r.node.x = r.node.y = r.node.z = 0; }
    elapsed = 0; phase = 'grow';
  }
  reset();
  const still = motion.matches;    // reduced motion: one fully grown frame, nothing moves

  function paint(t) {
    const done = t >= plan.duration;
    let live = 0;
    for (const r of plan.records) {
      const n = r.node, i = n.i;
      if (r.born > t) { coreAlpha.setX(i, 0); haloAlpha.setX(i, 0); coreSize.setX(i, 0); haloSize.setX(i, 0); continue; }
      live++;
      let p;
      if (done) p = r.home;
      else {
        if (!r.origin) r.origin = r.parent ? { x: r.parent.node.x, y: r.parent.node.y, z: r.parent.node.z } : { x: 0, y: 0, z: 0 };
        p = growthPosition(r, t);
      }
      n.x = p.x; n.y = p.y; n.z = p.z;
      positions.setXYZ(i, p.x, p.y, p.z);
      const appear = done ? 1 : Math.min(1, Math.max(.05, (t - r.born) / .6));
      coreSize.setX(i, n.r * 2 * (.3 + .7 * appear));
      coreAlpha.setX(i, .95 * appear);
      haloSize.setX(i, n.r * 2 * (3.2 + 3 * (1 - appear)));
      haloAlpha.setX(i, .30 + .35 * (1 - appear));
    }
    positions.needsUpdate = coreSize.needsUpdate = coreAlpha.needsUpdate = haloSize.needsUpdate = haloAlpha.needsUpdate = true;

    let k = 0;
    for (const l of links) {
      const a = byId.get(l.source), b = byId.get(l.target);
      const ra = plan.byNode.get(a.id), rb = plan.byNode.get(b.id);
      let alpha = 0, tint = colorOf[b.source] || white;
      if (done) {
        if (quiet.has(l)) { alpha = l.kind === 'bridge' ? .18 : .2; tint = l.kind === 'bridge' ? white : (colorOf[a.source] || white); }
      } else if (ra && rb && Math.max(ra.born, rb.born) <= t) {
        const age = t - Math.max(ra.born, rb.born);
        const tree = plan.treeLinks.has(l);
        if (tree && (age < 4 || live < 20)) alpha = .5;
        else if (t > 13 && quiet.has(l)) alpha = .12;
        else if (tree) alpha = .12;
      }
      linkPos.setXYZ(k, a.x, a.y, a.z); linkPos.setXYZ(k + 1, b.x, b.y, b.z);
      linkTint.setXYZW(k, tint.r, tint.g, tint.b, alpha); linkTint.setXYZW(k + 1, tint.r, tint.g, tint.b, alpha);
      k += 2;
    }
    linkPos.needsUpdate = linkTint.needsUpdate = true;
    return done;
  }

  // ---- placement: a square of the photo, above the box ----
  let side = 0, distance = 1, visible = false;
  function place() {
    const mount = el.getBoundingClientRect();
    const pr = paintedRect(img);
    const narrow = phoneMq.matches;
    if (!pr.width || (narrow && s.phone === 'off')) { if (visible) { visible = false; canvas.style.display = 'none'; } return; }
    let sidePx = pr.width * (narrow ? s.sizePhone : s.size) / 100;
    const cx = pr.left + pr.width * (narrow ? s.boxXPhone : s.boxX) / 100;
    const boxTop = pr.top + pr.height * (narrow ? s.boxYPhone : s.boxY) / 100;
    let bottom = boxTop - pr.height * s.lift / 100;
    let top = bottom - sidePx;
    // Never on the headline or the buttons: if that element exists, stay under it.
    const avoid = s.avoid ? document.querySelector(s.avoid) : null;
    if (avoid) {
      const ar = avoid.getBoundingClientRect();
      const floor = ar.bottom + 6;
      if (top < floor) { top = floor; sidePx = Math.max(0, bottom - top); }
    }
    const show = sidePx >= s.minSide;
    if (show !== visible) { visible = show; canvas.style.display = show ? 'block' : 'none'; }
    if (!show) return;
    const px = Math.round(sidePx);
    canvas.style.left = `${Math.round(cx - px / 2 - mount.left)}px`;
    canvas.style.top = `${Math.round(top - mount.top)}px`;
    canvas.style.width = canvas.style.height = `${px}px`;
    if (px !== side) {
      side = px;
      renderer.setSize(px, px, false);
      camera.aspect = 1; camera.updateProjectionMatrix();
      halfHeight.value = renderer.getDrawingBufferSize(new THREE.Vector2()).y / 2;
      distance = FIT_RADIUS / (.96 * Math.tan(FOV / 2 * Math.PI / 180));
    }
  }

  function aim(t) {
    const d = distance * (.56 + .44 * Math.min(1, t / 26));
    camera.position.set(Math.sin(angle) * d, d * .04, Math.cos(angle) * d);
    camera.lookAt(0, 0, 0);
  }

  // ---- loop, and when to stop it ----
  let running = false, raf = 0, previous = 0, onScreen = true, frames = 0;
  function frame(now) {
    raf = 0;
    if (!running) return;
    frames++;
    const dt = Math.min((now - previous) / 1000, .1); previous = now;
    let done = phase !== 'grow';
    if (phase === 'grow') {
      elapsed += dt;
      done = paint(Math.min(plan.duration, elapsed));
      if (done) { phase = 'hold'; holdSince = now; }
      angle += dt * 2 * Math.PI / 60 * GROW_SPEED;
    } else {
      angle += dt * 2 * Math.PI / 60 * HOLD_SPEED;
      if (s.mode === 'loop' && !fading && now - holdSince > s.holdSeconds * 1000) {
        fading = true; canvas.classList.add('is-fading');
        setTimeout(() => { reset(); paint(0); aim(0); renderer.render(scene, camera); canvas.classList.remove('is-fading'); fading = false; }, 1500);
      }
    }
    const t = phase === 'grow' ? elapsed : plan.duration;
    if (orbitals) { orbitals.update(now / 1000, false, phase === 'grow' ? Math.max(0, (t - 8) / 20) : 1); if (haze) haze.material.opacity *= s.glow; }
    aim(t);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }
  function play() {
    if (running || still) return;
    running = true; previous = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function pause() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }
  function sync() { if (onScreen && !document.hidden && visible) play(); else pause(); }

  new IntersectionObserver((entries) => { onScreen = entries.some((e) => e.isIntersecting); sync(); }, { threshold: 0 }).observe(el);
  document.addEventListener('visibilitychange', sync);
  const relayout = () => { place(); if (still) renderStill(); sync(); };
  window.addEventListener('resize', relayout, { passive: true });
  if (window.ResizeObserver) new ResizeObserver(relayout).observe(img);
  if (!img.complete) img.addEventListener('load', relayout, { once: true });

  function renderStill() {
    if (!visible) return;
    paint(plan.duration);
    if (orbitals) { orbitals.update(4, false, 1); if (haze) haze.material.opacity *= s.glow; }
    aim(plan.duration);
    renderer.render(scene, camera);
  }

  // Tune by eye from the console: heroBrain.set({size: 34, lift: -3}).
  window.heroBrain = {
    settings: s,
    set(patch) { Object.assign(s, patch); side = 0; relayout(); el.style.setProperty('--hero-brain-opacity', String(s.opacity)); },
    replay() { reset(); fading = false; canvas.classList.remove('is-fading'); if (still) renderStill(); },
    state() { return { elapsed, phase, running, visible, onScreen, frames, side, still }; },
    snap() {
      renderer.render(scene, camera);
      const gl = renderer.getContext(), w = gl.drawingBufferWidth, h = gl.drawingBufferHeight;
      const px = new Uint8Array(w * h * 4); gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
      let lit = 0; for (let i = 3; i < px.length; i += 4) if (px[i]) lit++;
      let alive = 0, sz = 0; for (let i = 0; i < N; i++) { if (coreAlpha.getX(i) > 0) alive++; sz += coreSize.getX(i); }
      return { lit, of: w * h, alive, meanSize: sz / N, cam: camera.position.toArray().map(Math.round), pos0: [positions.getX(0), positions.getY(0), positions.getZ(0)].map(Math.round), halfHeight: halfHeight.value, distance };
    },
  };

  place();
  if (still) renderStill(); else { paint(0); aim(0); renderer.render(scene, camera); }
  requestAnimationFrame(() => { canvas.classList.add('is-on'); sync(); });
}

try {
  const el = document.querySelector('[data-hero-brain]');
  if (el && !el.dataset.heroBrainRunning) { el.dataset.heroBrainRunning = '1'; start(el); }
} catch (e) { /* the page is exactly the page without it */ }
