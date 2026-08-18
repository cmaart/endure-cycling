// Converts raw app screenshots into the WebP files the site ships.
//
//   node tools/optimize-screenshots.mjs <source-dir> [target-dir]
//
// Every PNG/JPEG in <source-dir> is re-encoded to WebP at its original pixel
// width and written to <target-dir> (default public/assets/app/) under the same
// base name. Re-run it whenever the screenshots are refreshed — the site only
// references the .webp names, so replacing the files is the whole update.
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const SOURCE = process.argv[2];
const TARGET = process.argv[3] ?? 'public/assets/app';

if (!SOURCE) {
  console.error('Usage: node tools/optimize-screenshots.mjs <source-dir> [target-dir]');
  process.exit(1);
}

await mkdir(TARGET, { recursive: true });

const inputs = (await readdir(SOURCE))
  .filter((f) => /\.(png|jpe?g)$/i.test(f))
  .sort();

if (inputs.length === 0) {
  console.error(`No PNG/JPEG files found in ${SOURCE}`);
  process.exit(1);
}

for (const file of inputs) {
  const from = join(SOURCE, file);
  const to = join(TARGET, `${basename(file, extname(file))}.webp`);

  const { width, height } = await sharp(from).metadata();
  await sharp(from).webp({ quality: 82, effort: 6 }).toFile(to);

  const before = (await stat(from)).size;
  const after = (await stat(to)).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(
    `${file} → ${basename(to)}  ${width}×${height}  ` +
    `${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (−${saved}%)`
  );
}

console.log(`\n${inputs.length} screenshot(s) written to ${TARGET}/`);
