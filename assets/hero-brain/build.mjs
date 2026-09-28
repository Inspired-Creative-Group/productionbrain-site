// Bundles the hero brain. Output is committed, so the site stays static:
//   hero-brain.js       the loader (classic script, ~2 KB)
//   hero-brain.core.js  the renderer + data (ES module, loaded on idle)
import { build } from 'esbuild';
import { statSync } from 'node:fs';

await build({ entryPoints: ['src/hero-brain.js'], bundle: false, minify: true, outfile: 'hero-brain.js', target: 'es2017', legalComments: 'none' });
await build({
  entryPoints: ['src/core.js'], bundle: true, minify: true, format: 'esm', outfile: 'hero-brain.core.js', target: 'es2022',
  loader: { '.css': 'text', '.json': 'json' }, legalComments: 'none',
});
for (const f of ['hero-brain.js', 'hero-brain.core.js']) console.log(f, Math.round(statSync(f).size / 1024) + ' KB');
