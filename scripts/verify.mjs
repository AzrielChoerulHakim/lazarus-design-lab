import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const errors = [];
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');
const required = ['README.md','DESIGN_DECISIONS.md','index.html','styles.css','app.js','assets/aurel-portrait.svg'];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) errors.push('Missing file: ' + file);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

const html = read('index.html');
const css = read('styles.css');
const js = read('app.js');
const svg = read('assets/aurel-portrait.svg');
const ids = [...html.matchAll(/<template id="concept-(\d+)"/g)].map(match => Number(match[1]));
if (ids.join(',') !== '1,2,3,4,5,6,7') errors.push('Expected seven unique, ordered concept templates');
const concepts = [...html.matchAll(/data-concept="(\d+)"/g)].map(match => Number(match[1]));
if (concepts.join(',') !== '1,2,3,4,5,6,7') errors.push('Expected seven visible concept controls');
for (const id of [1,2,3,4,5,6,7]) {
  if (!css.includes('.c' + id + '{')) errors.push('Missing concept CSS: ' + id);
}
if (!html.includes('src="./app.js"') || !html.includes('href="./styles.css"')) errors.push('HTML asset references missing');
if (!css.includes("aurel-portrait.svg")) errors.push('CSS portrait path missing');
if (!css.includes('prefers-reduced-motion')) errors.push('No reduced-motion rule');
try { new vm.Script(js); } catch (error) { errors.push('App syntax error: ' + error.message); }
if (html.includes('081380191361') || html.includes('6281380191361')) errors.push('Personal phone must not be published');
const match = svg.match(/data:image\/webp;base64,([A-Za-z0-9+/=]+)/);
if (!match) errors.push('Compressed user-provided photo missing from portrait SVG');
else {
  const img = Buffer.from(match[1], 'base64');
  if (img.toString('ascii',0,4) !== 'RIFF' || img.toString('ascii',8,12) !== 'WEBP') errors.push('Photo is not valid WebP RIFF data');
  if (img.readUInt32LE(4) + 8 !== img.length) errors.push('WebP RIFF size mismatch: possible corrupted transfer');
}
if (errors.length) {
  console.error('Design Lab verification FAILED:\n' + errors.map(e => '- ' + e).join('\n'));
  process.exit(1);
}
console.log('PASS: seven distinct artboards, navigation hooks, JS parsing, privacy checks, reduced motion and embedded WebP integrity.');
