// Hero brain loader. Tiny on purpose: it decides whether the brain should run at all,
// waits until the page has painted and gone idle, then pulls in the renderer.
// Nothing here touches layout, so the headline, buttons and photo never wait on it.
(function () {
  var el = document.querySelector('[data-hero-brain]');
  if (!el || el.dataset.heroBrainStarted) return;
  var me = document.currentScript;
  var base = me && me.src ? me.src.replace(/[^/]*$/, '') : 'assets/hero-brain/';

  // Phones get the wide crop and a much smaller picture. data-phone="off" skips them.
  var phone = el.dataset.phone || 'off';
  if (phone === 'off' && window.matchMedia('(max-width:1000px)').matches) return;

  // No WebGL, no brain: the page is exactly the page without it.
  if (!window.WebGLRenderingContext) return;
  try {
    var probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
  } catch (e) { return; }

  function go() {
    if (el.dataset.heroBrainStarted) return;
    el.dataset.heroBrainStarted = '1';
    var s = document.createElement('script');
    s.type = 'module';
    s.src = base + 'hero-brain.core.js';
    document.head.appendChild(s);
  }
  function idle() {
    if ('requestIdleCallback' in window) window.requestIdleCallback(go, { timeout: 2500 });
    else setTimeout(go, 700);
  }
  if (document.readyState === 'complete') idle();
  else window.addEventListener('load', idle, { once: true });
})();
