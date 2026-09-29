import * as THREE from 'three';

export function composeGlobe(nodes, sources) {
  // Deterministic equal-area latitude samples: a round silhouette at every angle.
  sources.forEach((source, sector) => {
    const list = nodes.filter((n) => n.source === source.id).sort((a, b) => a.id.localeCompare(b.id));
    list.forEach((n, i) => {
      const y = 1 - 2 * ((i + .5) / list.length);
      const turn = (i * .61803398875) % 1;
      const a = (sector + .08 + turn * .84) / sources.length * Math.PI * 2;
      const radius = 350 + 100 * ((i * .754877666) % 1);
      const horizontal = Math.sqrt(1 - y * y);
      n.x = n.fx = radius * horizontal * Math.sin(a);
      n.y = n.fy = radius * y;
      n.z = n.fz = radius * horizontal * Math.cos(a);
    });
  });
}

// The orbits around the globe. Colours come from the theme (accent2 and textBright by
// default) so a studio's palette carries through to the scene, not only the chrome.
export function makeOrbitals(scene, palette = {}) {
  const ringColors = [new THREE.Color(palette.ring1 || '#D9963A'), new THREE.Color(palette.ring2 || '#F2EDE6')];
  const glowColor = new THREE.Color(palette.glow || '#D9963A');
  const group = new THREE.Group();
  scene.add(group);
  const rings = [];
  for (let i = 0; i < 2; i++) {
    const radius = 490 + i * 35;
    // A torus, not a 1px line, so the orbit reads at any zoom.
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 1.6, 8, 240), new THREE.MeshBasicMaterial({ color: ringColors[i], transparent: true, opacity: .3, depthWrite: false }));
    ring.rotation.set(i ? .9 : -.5, i ? -.45 : .4, .2);
    group.add(ring);
    const bead = new THREE.Mesh(new THREE.SphereGeometry(4.2, 12, 10), new THREE.MeshBasicMaterial({ color: ringColors[i] }));
    ring.add(bead);
    const beadHalo = new THREE.Mesh(new THREE.SphereGeometry(9, 12, 10), new THREE.MeshBasicMaterial({ color: ringColors[i], transparent: true, opacity: .18, depthWrite: false }));
    bead.add(beadHalo);
    rings.push({ ring, bead, radius });
  }
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(44, 1), new THREE.MeshBasicMaterial({ color: glowColor, wireframe: true, transparent: true, opacity: .16, depthWrite: false }));
  group.add(core);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = glowColor;
  const rgb = `${Math.round(g.r * 255)},${Math.round(g.g * 255)},${Math.round(g.b * 255)}`;
  const glow = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  glow.addColorStop(0, `rgba(${rgb},.5)`);
  glow.addColorStop(.25, `rgba(${rgb},.14)`);
  glow.addColorStop(1, `rgba(${rgb},0)`);
  ctx.fillStyle = glow; ctx.fillRect(0, 0, 128, 128);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  sprite.scale.set(360, 360, 1); group.add(sprite);
  return {
    update(t, focused, reveal = 1) {
      core.rotation.set(t * .09, t * .12, 0);
      sprite.material.opacity = focused ? .25 : .7 + Math.sin(t * .7) * .1;
      rings.forEach(({ring, bead, radius}, i) => {
        ring.visible = reveal > .01;
        ring.scale.setScalar(.2 + .8 * Math.min(1,reveal));
        ring.rotation.z = t * (i ? -.018 : .012);
        bead.position.set(Math.cos(t * .16 + i * 2) * radius, Math.sin(t * .16 + i * 2) * radius, 0);
        ring.material.opacity = (focused ? .09 : .3) * Math.min(1,reveal);
      });
    },
  };
}
