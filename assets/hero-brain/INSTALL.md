# Hero brain overlay

The `/demo` "Watch it grow" brain, playing live over the machine photograph in the
hero. It floats in the air over the box, grows from one node over 29 seconds while it
turns, then holds (or loops). The photo is untouched: the brain is a transparent WebGL
canvas placed over it at runtime. No video, no generated imagery.

Self-contained drop-in. Everything is in this folder, and the page carries one mount
element and one script tag. If the hero is restyled, the brain still follows the
picture, because its position is a percentage of the photo, not of any hero CSS.

## Files to copy

```
assets/hero-brain/
  hero-brain.js         the loader (1 KB, classic script). Decides whether to run at all,
                        waits for load + idle, then adds the module below.
  hero-brain.core.js    the renderer with the demo data baked in (591 KB, 148 KB gzipped).
                        Loaded only after the page has painted. Never blocks anything.
  INSTALL.md            this file
  src/, build.mjs, package.json   sources, only needed to change the renderer
```

## Lines to add to the page

One block, inside the hero section, after the `<figure>` that holds the photo:

```html
<!-- HERO BRAIN OVERLAY (assets/hero-brain/INSTALL.md). Delete this block to remove it. -->
<div class="hero-brain" data-hero-brain data-image=".mm-machine img" data-avoid=".partners-hero-ctas"
     data-box-x="50" data-box-y="51" data-size="30" data-lift="-10" data-mode="hold" data-phone="light" aria-hidden="true"></div>
<script src="assets/hero-brain/hero-brain.js" defer></script>
<!-- /HERO BRAIN OVERLAY -->
```

Requirements on the hero, and nothing else:

- The section the mount sits in is `position: relative` (the mount is `position:absolute; inset:0`).
- `data-image` selects the hero `<img>`. If the markup changes, change the selector.
- `data-avoid` (optional) selects the element the brain must never overlap: today the
  buttons. The brain shrinks to stay under it. Leave it empty (`data-avoid=""`) to turn
  that off.
- **Interaction needs the pointer to reach the canvas.** The current hero's text overlay
  (`.mm-over`) covers the whole section, so the injected stylesheet sets
  `.mm-over{pointer-events:none}` and re-enables it on `.partners-hero-content`. If the
  redesign uses a different overlay, mirror those two rules for it (or set
  `data-interactive="0"`).

## The numbers, and how to re-set them if the photo changes

All are percentages of the **painted photo** (object-fit: cover is accounted for).

| attribute | default | meaning |
|---|---|---|
| `data-box-x` | 50 | horizontal centre of the box, % of the photo's width |
| `data-box-y` | 51 | top edge of the box, % of the photo's height |
| `data-size` | 30 | side of the brain's square frame, % of the photo's width |
| `data-lift` | -10 | gap between the box top and the bottom of the frame, % of the photo's height. Negative dips the frame into the box, so the brain reads as projected from it. |
| `data-speed` | 1.8 | how much faster than the demo's 29 s the brain fills in (1 = the demo's pace) |
| `data-warp` | 1.6 | front-loading: above 1 the first seconds move fast and the last ones settle; 1 = linear |
| `data-turn` | 1.5 | rotation speed, as a multiple of the demo's |
| `data-pulse` | 1 | the heartbeat: two rings and a flash from the box across the whole hero, then the first node. `0` turns it off. Never runs under reduced motion. |
| `data-interactive` | 1 | once grown: drag to turn it (with a little inertia; auto-turn resumes after 4 s), tap a node to light up everything it connects to, tap empty space to clear. `0` makes it a pure picture again. |
| `data-mode` | hold | `hold`: grow once, keep turning. `loop`: hold `data-hold-seconds` (8), fade out, regrow. |
| `data-phone` | light | below 1000px (the wide crop): `light` = the busiest half of the nodes, no halos, lower pixel ratio. `off` = no brain on phones. |
| `data-box-x-phone`, `data-box-y-phone`, `data-size-phone` | 44, 39, 42 | the same anchors for the wide crop |
| `data-opacity` | .85 | the canvas opacity, so it stays dimmer than the headline |
| `data-rings` | 1 | the demo's orbit rings and warm core. `0` turns them off. |
| `data-glow` | .5 | strength of the warm haze behind the core, 0 to 1 |
| `data-min-side` | 140 | if the frame ends up smaller than this many pixels, the brain stays hidden |

**New photo?** Open it, find where the box sits, and set `data-box-x` (centre of the box)
and `data-box-y` (its top edge) as percentages. Then tune by eye in the console without
reloading:

```js
heroBrain.set({ size: 34, lift: -8 })   // any of the attributes above, camelCased
heroBrain.replay()                      // grow again from one node
heroBrain.state()                       // what it's doing right now
```

Copy the numbers you land on back into the mount element.

## What it does on its own

- **The photo paints first.** The loader is `defer`, the renderer loads after `load` and
  `requestIdleCallback`. Nothing about the hero's layout changes: no layout shift.
- **No WebGL, no brain.** The loader probes for a context and exits quietly. The page is
  exactly the page without it.
- **Transparent.** No bloom pass (UnrealBloom drops alpha and paints black). The glow is
  additive sprites on a premultiplied canvas, composited normally onto the photo.
- **Reduced motion:** one fully grown, still frame. No animation loop at all.
- **Pauses** when scrolled off screen (IntersectionObserver) and when the tab is hidden.
- **Colour** is the demo's palette from the demo data. Nothing new was invented.

## Rebuilding the renderer

```bash
cd assets/hero-brain
npm install
npm run build
```

`src/growth.js` and `src/constellation.js` are copies of the same files in the brain
dashboard (`ICG-Agentic-Memory/dashboard/brain/src/`). A change meant for both places
has to be made in both. `src/data.json` is a stripped copy of `demo/data/graph.json`
(id, source, degree, links only); regenerate it from the demo data if the demo brain
changes.
