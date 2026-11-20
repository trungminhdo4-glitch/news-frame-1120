// news-frame-1120: one image summing up the world news of Friday 20 November 2026.
// The picture is designed in design/frame.html (drawn with HTML/SVG, no photos) and rendered once
// at build time to entry.png by design/render.mjs. This program, run by the grader with no network,
// writes those exact bytes to /output/entry.png, so both runs produce identical files.
//
// Local run: mkdir out; MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

// Self-check against the gate before writing: PNG signature, at most 1 MiB, at most 1024 x 1024.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error('entry.png is not a PNG');
if (image.length > 1048576) throw new Error(`entry.png is ${image.length} bytes, over 1 MiB`);
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
