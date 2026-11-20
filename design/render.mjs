// Renders design/frame.html to entry.png with the locally installed Microsoft Edge (headless).
// Build-time helper only: the graded program (main.ts) just copies the committed entry.png.
//   node design/render.mjs
import { execFileSync } from 'node:child_process';
import { statSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
if (!existsSync(edge)) throw new Error('Edge not found at ' + edge);

const out = join(root, 'entry.png');
execFileSync(edge, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  '--screenshot=' + out,
  pathToFileURL(join(here, 'frame.html')).href,
], { stdio: 'inherit' });

const buf = readFileSync(out);
const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
console.log(`entry.png ${w}x${h}, ${statSync(out).size} bytes`);
if (w > 1024 || h > 1024 || statSync(out).size > 1048576) throw new Error('entry.png outside the gate limits');
