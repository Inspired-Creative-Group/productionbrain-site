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

// The demo's replay runs on its own 29 s clock. Real time is mapped onto it so the first
// seconds move fast and the last ones settle: u in 0..1 of real time -> 1 - (1-u)^warp.
function warpTime(elapsed, duration, speed, warp) {
  const real = duration / speed;
  const u = Math.min(1, Math.max(0, elapsed) / real);
  return duration * (1 - Math.pow(1 - u, warp));
}
// A resting heartbeat: a strong beat and a softer one, about 62 a minute, smooth.
function heartCurve(t, period = .97) {
  const u = (t % period) / period;
  const bump = (c, w, h) => h * Math.exp(-((u - c) * (u - c)) / (2 * w * w));
  return bump(.09, .038, 1) + bump(.27, .05, .55);
}
// The breath: a quick expansion on every Nth heartbeat, then a slow settle back to
// normal size, timed off the same clock as the heart so the two agree.
function breathCurve(t, every = 6, period = .97) {
  const P = every * period;
  const local = (((t - .09 * period) % P) + P) % P;
  if (local < .34) { const u = local / .34; return 1 - Math.pow(1 - u, 3); }
  const u = Math.min(1, (local - .34) / 1.9);
  return 1 - u * u * (3 - 2 * u);
}
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
    speed: num(d.speed, 1.8),     // how much faster than the demo's 29 s the brain fills in
    warp: num(d.warp, 1.6),       // >1 front-loads the growth: fast early, easing into the full shape
    turn: num(d.turn, 1.5),       // rotation, as a multiple of the demo's speeds
    pulse: d.pulse !== '0',       // the heartbeat across the hero before the first node
    heart: d.heart !== '0',      // the core beats like a heart
    signals: num(d.signals, 40), // sparks travelling node to node along lit links (0 = none)
    breath: d.breath !== '0',    // the whole brain expands and settles every N heartbeats
    breathEvery: num(d.breathEvery, 6),
    lights: d.lights !== '0',    // the machine's own lights, on the photo, driven by the brain
    // where they sit, as % of the painted photo: the status LED and the three ports
    lightsAt: (d.lightsAt || '48.13,64.74;59.7,62.62;61.27,62.39;62.78,62.08').split(';').map((pair) => pair.split(',').map(Number)),
    lightsAtPhone: (d.lightsAtPhone || '42.28,63.14;55.18,59.54;56.9,59.11;58.87,59.95').split(';').map((pair) => pair.split(',').map(Number)),
    labels: d.labels !== '0',    // name the selected note and its neighbours
    interactive: d.interactive !== '0',  // drag to turn, tap a node to light up its connections (once grown)
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
  const cs = getComputedStyle(img);
  if (cs.objectFit !== 'cover') return r;
  const scale = Math.max(r.width / nw, r.height / nh);
  const w = nw * scale, h = nh * scale;
  // object-position decides which part of the picture survives the crop (the phone
  // hero uses 45% 53%). Percentages only; keywords and lengths fall back to centre.
  const pos = (cs.objectPosition || '50% 50%').split(/\s+/).map((v) => v.endsWith('%') ? parseFloat(v) / 100 : NaN);
  const px = Number.isFinite(pos[0]) ? pos[0] : .5, py = Number.isFinite(pos[1]) ? pos[1] : .5;
  return { left: r.left + (r.width - w) * px, top: r.top + (r.height - h) * py, width: w, height: h, right: 0, bottom: 0 };
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
  // The heartbeat: two rings and a soft flash, centred on the brain, sized to reach the
  // corners of the hero. CSS-animated, so it costs the GPU nothing worth counting.
  const beat = document.createElement('div');
  beat.className = 'hero-brain-beat';
  beat.innerHTML = '<i class="hero-brain-flash"></i><i class="hero-brain-ring"></i><i class="hero-brain-ring hero-brain-ring-2"></i>';
  el.appendChild(beat);
  const PULSE_LEAD = .55;   // seconds between the first beat and the first node
  // Labels: the demo names the selected note and its neighbours. DOM text over the
  // canvas, moved with the projection, decluttered so nothing overlaps.
  const labels = document.createElement('div');
  labels.className = 'hero-brain-labels';
  el.appendChild(labels);
  const labelEl = new Map();
  // The machine's lights: one status LED and three ports on the box front. DOM glows
  // placed on the photo, brightness written every frame from what the brain is doing.
  const lightsLayer = document.createElement('div');
  lightsLayer.className = 'hero-brain-lights';
  el.appendChild(lightsLayer);
  const lightEls = s.lightsAt.map((_, i) => { const l = document.createElement('i'); l.className = i === 0 ? 'hero-brain-led' : 'hero-brain-port'; lightsLayer.appendChild(l); return l; });
  const lightLevel = s.lightsAt.map(() => 0);   // current brightness, eased

  // ---- data: the public demo brain, nothing else ----
  const colorOf = Object.fromEntries(DATA.sources.map((x) => [x.id, new THREE.Color(x.color)]));
  let nodes = DATA.nodes.map((n) => ({ id: n.id, source: n.s, degree: n.d, title: n.t || '' }));
  if (light) {
    // Phones: the busiest half of the brain, which keeps its shape and halves the work.
    nodes = nodes.filter((n) => n.degree >= 2);
  }
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const links = DATA.links.map(([a, b, kind]) => ({ source: a, target: b, kind })).filter((l) => byId.has(l.source) && byId.has(l.target));
  composeGlobe(nodes, DATA.sources);
  for (const n of nodes) { n.r = Math.min(11, 2.2 + Math.sqrt(n.degree || 0) * .85); n.home = { x: n.x, y: n.y, z: n.z }; }
  // Which links stay drawn once the brain is grown (the demo's "quiet" set).
  const neighbours = new Map(nodes.map((n) => [n.id, new Set()]));
  for (const l of links) { neighbours.get(l.source).add(l.target); neighbours.get(l.target).add(l.source); }
  const quiet = new Set();
  links.forEach((l, i) => {
    const a = byId.get(l.source), b = byId.get(l.target);
    if (Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < 330 || i % 7 === 0) quiet.add(l);
  });

  // ---- scene ----
  const scene = new THREE.Scene();
  const brain = new THREE.Group();   // everything that breathes
  scene.add(brain);
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
  brain.add(lines);
  const halos = light ? null : makePoints(haloSize, haloAlpha, haloFrag);
  if (halos) brain.add(halos);
  brain.add(makePoints(coreSize, coreAlpha, coreFrag));
  const orbitals = s.rings ? makeOrbitals(brain, { ring1: '#D9963A', ring2: '#F2EDE6', glow: '#D9963A' }) : null;

  // Signals: sparks that run along lit links and hop onward at each node.
  const M = light ? Math.min(s.signals, 14) : s.signals;
  const sparkPos = new THREE.BufferAttribute(new Float32Array(Math.max(1, M) * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const sparkColor = new THREE.BufferAttribute(new Float32Array(Math.max(1, M) * 3), 3);
  const sparkSize = new THREE.BufferAttribute(new Float32Array(Math.max(1, M)), 1).setUsage(THREE.DynamicDrawUsage);
  const sparkAlpha = new THREE.BufferAttribute(new Float32Array(Math.max(1, M)), 1).setUsage(THREE.DynamicDrawUsage);
  const sparkHaloSize = new THREE.BufferAttribute(new Float32Array(Math.max(1, M)), 1).setUsage(THREE.DynamicDrawUsage);
  const sparkHaloAlpha = new THREE.BufferAttribute(new Float32Array(Math.max(1, M)), 1).setUsage(THREE.DynamicDrawUsage);
  for (let i = 0; i < M; i++) sparkColor.setXYZ(i, 1, .97, .9);
  const makeSparks = (size, alpha, frag) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', sparkPos); g.setAttribute('color', sparkColor);
    g.setAttribute('size', size); g.setAttribute('alpha', alpha);
    const p = new THREE.Points(g, additive(new THREE.ShaderMaterial({ uniforms: { halfHeight }, vertexShader: spriteVert, fragmentShader: frag })));
    p.frustumCulled = false; return p;
  };
  if (M > 0) { if (!light) brain.add(makeSparks(sparkHaloSize, sparkHaloAlpha, haloFrag)); brain.add(makeSparks(sparkSize, sparkAlpha, coreFrag)); }
  const sparks = [];
  const linksOf = new Map(nodes.map((n) => [n.id, []]));
  for (const l of links) { linksOf.get(l.source).push(l); linksOf.get(l.target).push(l); }
  const lit = new Set();   // links currently drawn bright enough to carry a signal
  let haze = null, heart = null;
  if (orbitals) {
    // The demo draws these over black; over a photo they only need to add light.
    scene.traverse((o) => {
      if (o instanceof THREE.Sprite) haze = o;
      if (o.geometry && o.geometry.type === 'IcosahedronGeometry') heart = o;
      if (o.material && o !== lines && !(o instanceof THREE.Points)) { o.material.blending = THREE.AdditiveBlending; o.material.depthTest = false; o.material.depthWrite = false; }
    });
  }
  const white = new THREE.Color('#F2EDE6');

  // ---- growth (the demo's replay, verbatim in growth.js) ----
  const still = motion.matches;    // reduced motion: one fully grown frame, nothing moves
  let plan, elapsed = 0, angle = .35, pitch = .04, phase = 'grow', holdSince = 0, fading = false;
  let selected = null, spin = 0, spinY = 0, lastTouch = 0, dragging = false;   // interaction
  function reset() {
    for (const n of nodes) { n.x = n.home.x; n.y = n.home.y; n.z = n.home.z; }
    plan = planGrowth(nodes, links);
    for (const r of plan.records) { r.origin = null; r.node.x = r.node.y = r.node.z = 0; }
    elapsed = (s.pulse && !still) ? -PULSE_LEAD : 0; phase = 'grow';
  }
  function heartbeat() {
    if (!s.pulse || still || !visible) return;
    beat.classList.remove('is-beating'); void beat.offsetWidth; beat.classList.add('is-beating');
  }
  reset();

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
      // With a node selected, the demo's rule: it and its neighbours stay lit, the rest recede.
      const isSel = selected && selected.id === n.id;
      const near = selected && neighbours.get(selected.id).has(n.id);
      const dim = selected && !isSel && !near;
      const scale = isSel ? 1.5 : near ? 1.15 : 1;
      coreSize.setX(i, n.r * 2 * (.3 + .7 * appear) * scale);
      coreAlpha.setX(i, (dim ? .19 : isSel ? 1 : .95) * appear);
      haloSize.setX(i, n.r * 2 * (3.2 + 3 * (1 - appear)) * scale);
      haloAlpha.setX(i, dim ? 0 : (isSel ? .5 : .30) + .35 * (1 - appear));
    }
    positions.needsUpdate = coreSize.needsUpdate = coreAlpha.needsUpdate = haloSize.needsUpdate = haloAlpha.needsUpdate = true;

    let k = 0;
    for (const l of links) {
      const a = byId.get(l.source), b = byId.get(l.target);
      const ra = plan.byNode.get(a.id), rb = plan.byNode.get(b.id);
      let alpha = 0, tint = colorOf[b.source] || white;
      if (done && selected) {
        if (a === selected || b === selected) { alpha = .72; tint = colorOf[selected.source] || white; }
        else if (quiet.has(l)) { alpha = .05; tint = white; }
      } else if (done) {
        if (quiet.has(l)) { alpha = l.kind === 'bridge' ? .18 : .2; tint = l.kind === 'bridge' ? white : (colorOf[a.source] || white); }
      } else if (ra && rb && Math.max(ra.born, rb.born) <= t) {
        const age = t - Math.max(ra.born, rb.born);
        const tree = plan.treeLinks.has(l);
        if (tree && (age < 4 || live < 20)) alpha = .5;
        else if (t > 13 && quiet.has(l)) alpha = .12;
        else if (tree) alpha = .12;
      }
      if (alpha > .1) lit.add(l); else lit.delete(l);
      linkPos.setXYZ(k, a.x, a.y, a.z); linkPos.setXYZ(k + 1, b.x, b.y, b.z);
      linkTint.setXYZW(k, tint.r, tint.g, tint.b, alpha); linkTint.setXYZW(k + 1, tint.r, tint.g, tint.b, alpha);
      k += 2;
    }
    linkPos.needsUpdate = linkTint.needsUpdate = true;
    return done;
  }

  // Move the signals. Each runs one link at a steady speed, then picks a lit link
  // leaving the node it arrived at; with nowhere to go it restarts somewhere lit.
  const litList = [];
  function pickFrom(nodeId, avoid) {
    const options = linksOf.get(nodeId).filter((l) => l !== avoid && lit.has(l));
    return options.length ? options[Math.floor(Math.random() * options.length)] : null;
  }
  function launch(sp, link, fromId) {
    sp.link = link; sp.from = fromId; sp.to = link.source === fromId ? link.target : link.source;
    const a = byId.get(sp.from), b = byId.get(sp.to);
    const len = Math.max(20, Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z));
    sp.u = 0; sp.rate = Math.min(2.2, Math.max(.45, 300 / len));
  }
  function moveSparks(dt) {
    if (!M) return;
    litList.length = 0; for (const l of lit) litList.push(l);
    for (let i = 0; i < M; i++) {
      let sp = sparks[i];
      if (!sp) { sp = sparks[i] = { link: null, u: 0, rate: 1, from: null, to: null, wait: Math.random() * 2 }; }
      if (!sp.link || !lit.has(sp.link)) {
        sp.wait -= dt;
        if (sp.wait > 0 || !litList.length) { sparkAlpha.setX(i, 0); sparkHaloAlpha.setX(i, 0); continue; }
        const l = litList[Math.floor(Math.random() * litList.length)];
        launch(sp, l, Math.random() < .5 ? l.source : l.target); sp.u = Math.random() * .5;
      }
      sp.u += dt * sp.rate;
      if (sp.u >= 1) {
        // A signal reached a node: the machine shows it on one of its ports.
        // Not every arrival: one in six, so the ports blink instead of staying lit.
        const port = 1 + (byId.get(sp.to).i % 3);
        if (port < lightLevel.length && Math.random() < .16) lightLevel[port] = 1;
        const next = pickFrom(sp.to, sp.link);
        if (next) launch(sp, next, sp.to); else { sp.link = null; sp.wait = .2 + Math.random() * 1.2; sparkAlpha.setX(i, 0); sparkHaloAlpha.setX(i, 0); continue; }
      }
      const a = byId.get(sp.from), b = byId.get(sp.to);
      const u = sp.u, ease = Math.sin(u * Math.PI);   // brightest mid-link, soft at both nodes
      sparkPos.setXYZ(i, a.x + (b.x - a.x) * u, a.y + (b.y - a.y) * u, a.z + (b.z - a.z) * u);
      sparkSize.setX(i, 3.2 + 1.2 * ease); sparkAlpha.setX(i, .35 + .6 * ease);
      sparkHaloSize.setX(i, 14 + 6 * ease); sparkHaloAlpha.setX(i, .18 + .22 * ease);
    }
    sparkPos.needsUpdate = sparkSize.needsUpdate = sparkAlpha.needsUpdate = sparkHaloSize.needsUpdate = sparkHaloAlpha.needsUpdate = true;
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
    labels.style.left = canvas.style.left; labels.style.top = canvas.style.top; labels.style.width = labels.style.height = `${px}px`;
    const at = narrow ? s.lightsAtPhone : s.lightsAt;
    lightEls.forEach((l, i) => {
      const [lx, ly] = at[i] || at[0];
      const size = pr.width * (i === 0 ? .03 : .026);
      l.style.left = `${Math.round(pr.left + pr.width * lx / 100 - mount.left)}px`;
      l.style.top = `${Math.round(pr.top + pr.height * ly / 100 - mount.top)}px`;
      l.style.width = l.style.height = `${Math.round(size)}px`;
      l.style.display = s.lights && show ? 'block' : 'none';
    });
    const reach = Math.ceil(2 * Math.hypot(Math.max(cx - mount.left, mount.right - cx), Math.max(top + px / 2 - mount.top, mount.bottom - top - px / 2)));
    beat.style.left = `${Math.round(cx - mount.left)}px`;
    beat.style.top = `${Math.round(top + px / 2 - mount.top)}px`;
    beat.style.setProperty('--reach', `${reach}px`);
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
    camera.position.set(Math.sin(angle) * Math.cos(pitch) * d, Math.sin(pitch) * d, Math.cos(angle) * Math.cos(pitch) * d);
    camera.lookAt(0, 0, 0);
  }

  // ---- interaction: drag to turn, tap a node to see what it connects to ----
  // Only once the brain is grown, like the demo. The hit test projects the nodes
  // itself (304 points), which is cheaper and truer to the sprites than a raycaster.
  const v3 = new THREE.Vector3();
  function nodeAt(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    const px = clientX - r.left, py = clientY - r.top;
    let best = null, bestD = 1e9;
    for (const n of nodes) {
      if (coreAlpha.getX(n.i) <= 0) continue;
      v3.set(n.x, n.y, n.z).multiplyScalar(brain.scale.x).project(camera);
      if (v3.z > 1) continue;
      const sx = (v3.x + 1) / 2 * r.width, sy = (1 - v3.y) / 2 * r.height;
      const hit = Math.max(9, n.r * 1.4 * r.height / 470 + 6);
      const dd = Math.hypot(sx - px, sy - py);
      if (dd < hit && dd < bestD) { best = n; bestD = dd; }
    }
    return best;
  }
  let labelSet = [];
  function placeLabels() {
    if (!labelSet.length) return;
    const r = canvas.getBoundingClientRect();
    const taken = [];
    for (const n of labelSet) {
      const span = labelEl.get(n.id);
      v3.set(n.x, n.y, n.z).multiplyScalar(brain.scale.x).project(camera);
      const sx = (v3.x + 1) / 2 * r.width, sy = (1 - v3.y) / 2 * r.height;
      const w = span.offsetWidth || n.title.length * 6.5 + 10, hgt = 16;
      const lift = Math.round(n.r * 1.4 * r.height / 470 + 10);
      const box = { l: sx - w / 2, r: sx + w / 2, t: sy - lift - hgt, b: sy - lift };
      // Labels may overhang the canvas (the hero clips them); the selected one always shows.
      const inside = v3.z < 1 && box.l > -r.width * .7 && box.r < r.width * 1.7 && box.t > -40 && box.b < r.height + 40;
      const clash = taken.some((o) => box.l < o.r + 6 && box.r > o.l - 6 && box.t < o.b + 3 && box.b > o.t - 3);
      const show = inside && (!clash || n === selected);
      span.style.visibility = show ? 'visible' : 'hidden';
      if (show) { taken.push(box); span.style.transform = `translate(${Math.round(sx)}px, ${Math.round(sy - lift)}px) translate(-50%, -100%)`; }
    }
  }
  function setLabels(n) {
    labels.textContent = ''; labelEl.clear(); labelSet = [];
    if (!n || !s.labels) return;
    const near = [...neighbours.get(n.id)].map((id) => byId.get(id)).filter(Boolean).sort((a, b) => b.degree - a.degree).slice(0, 9);
    labelSet = [n, ...near];
    for (const m of labelSet) {
      const span = document.createElement('span');
      span.textContent = m.title.length > 42 ? m.title.slice(0, 40).replace(/\s+\S*$/, '') + '…' : m.title;
      span.className = m === n ? 'is-selected' : '';
      span.style.color = m === n ? '#fff' : (colorOf[m.source] ? '#' + colorOf[m.source].getHexString() : '#fff');
      labels.appendChild(span); labelEl.set(m.id, span);
    }
    placeLabels();
  }
  function select(n) {
    selected = n;
    setLabels(n);
    canvas.classList.toggle('has-selection', !!n);
    if (phase !== 'grow') { paint(plan.duration); if (still) renderStill(); }
  }
  function live() { return s.interactive && visible && phase !== 'grow' && !fading; }
  if (s.interactive) {
    canvas.classList.add('is-interactive');
    let downX = 0, downY = 0, lastX = 0, lastY = 0, moved = false, pointerId = null;
    canvas.addEventListener('pointerdown', (e) => {
      if (!live() || e.button > 0) return;
      pointerId = e.pointerId; downX = lastX = e.clientX; downY = lastY = e.clientY; moved = false; spin = spinY = 0;
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove', (e) => {
      if (pointerId === e.pointerId) {
        const dx = e.clientX - lastX, dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY;
        if (!moved && Math.hypot(e.clientX - downX, e.clientY - downY) > 6) { moved = true; dragging = true; canvas.classList.add('is-dragging'); }
        if (moved) {
          angle -= dx * .006; pitch = Math.max(-1.2, Math.min(1.2, pitch + dy * .004));
          spin = -dx * .006; spinY = dy * .004; lastTouch = performance.now();
          if (still) renderStill();
        }
      } else if (live() && e.pointerType === 'mouse') {
        canvas.classList.toggle('is-over', !!nodeAt(e.clientX, e.clientY));
      }
    });
    const up = (e) => {
      if (pointerId !== e.pointerId) return;
      pointerId = null; dragging = false; canvas.classList.remove('is-dragging');
      lastTouch = performance.now();
      if (!moved && live()) select(nodeAt(e.clientX, e.clientY));
    };
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
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
      done = paint(warpTime(elapsed, plan.duration, s.speed, s.warp));
      if (done) { phase = 'hold'; holdSince = now; }
      angle += dt * 2 * Math.PI / 60 * GROW_SPEED * s.turn;
    } else {
      const idle = performance.now() - lastTouch > 4000;
      if (dragging) { /* the hand owns the camera */ }
      else if (Math.abs(spin) > .0004 || Math.abs(spinY) > .0004) { angle += spin; pitch = Math.max(-1.2, Math.min(1.2, pitch + spinY)); spin *= .94; spinY *= .94; }
      else if (idle && !selected) { angle += dt * 2 * Math.PI / 60 * HOLD_SPEED * s.turn; pitch += (.04 - pitch) * Math.min(1, dt * .6); }
      if (s.mode === 'loop' && !selected && idle && !fading && now - holdSince > s.holdSeconds * 1000) {
        fading = true; canvas.classList.add('is-fading');
        setTimeout(() => { select(null); reset(); paint(0); aim(0); renderer.render(scene, camera); canvas.classList.remove('is-fading'); fading = false; heartbeat(); }, 1500);
      }
    }
    const t = phase === 'grow' ? warpTime(elapsed, plan.duration, s.speed, s.warp) : plan.duration;
    if (orbitals) { orbitals.update(now / 1000, false, phase === 'grow' ? Math.max(0, (t - 8) / 20) : 1); if (haze) haze.material.opacity *= s.glow; }
    if (heart && s.heart && elapsed >= 0) {
      const h = heartCurve(now / 1000);
      heart.scale.setScalar(1 + .16 * h);
      heart.material.opacity = .16 + .34 * h;
      if (haze) haze.material.opacity += .18 * h * s.glow;
    }
    brain.scale.setScalar(s.breath && phase !== 'grow' ? 1 + .07 * breathCurve(now / 1000, s.breathEvery) : 1);
    if (elapsed >= 0) moveSparks(dt);
    if (s.lights) {
      // The LED breathes with the heart and lifts while the brain is growing; the ports
      // flash when a signal lands and fade out over a third of a second.
      const h = s.heart ? heartCurve(now / 1000) : 0;
      const busy = phase === 'grow' ? .35 : 0;
      lightLevel[0] += ((elapsed < 0 ? 0 : .45 + .4 * h + busy) - lightLevel[0]) * Math.min(1, dt * 12);
      for (let i = 1; i < lightLevel.length; i++) lightLevel[i] = Math.max(0, lightLevel[i] - dt * 4.5);
      lightEls.forEach((l, i) => { l.style.opacity = Math.min(1, lightLevel[i]).toFixed(3); });
    }
    aim(t);
    placeLabels();
    canvas.style.visibility = phase === 'grow' && elapsed < 0 ? 'hidden' : '';
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
    placeLabels();
    if (s.lights) lightEls.forEach((l, i) => { l.style.opacity = i === 0 ? '.6' : '.25'; });
    renderer.render(scene, camera);
  }

  // Tune by eye from the console: heroBrain.set({size: 34, lift: -3}).
  window.heroBrain = {
    settings: s,
    set(patch) { Object.assign(s, patch); side = 0; relayout(); el.style.setProperty('--hero-brain-opacity', String(s.opacity)); },
    replay() { select(null); reset(); fading = false; canvas.classList.remove('is-fading'); if (still) renderStill(); else heartbeat(); },
    select(id) { select(id ? byId.get(id) || null : null); },
    state() { return { selected: selected && selected.id, angle: +angle.toFixed(3), pitch: +pitch.toFixed(3), elapsed, growthTime: phase === 'grow' ? warpTime(elapsed, plan.duration, s.speed, s.warp) : plan.duration, phase, running, visible, onScreen, frames, side, still }; },
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
  requestAnimationFrame(() => { canvas.classList.add('is-on'); heartbeat(); sync(); });
}

try {
  const el = document.querySelector('[data-hero-brain]');
  if (el && !el.dataset.heroBrainRunning) { el.dataset.heroBrainRunning = '1'; start(el); }
} catch (e) { /* the page is exactly the page without it */ }
