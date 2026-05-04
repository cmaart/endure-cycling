import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const SOURCE = join(repoRoot, 'public/assets/ENDURE_E_icon_white_transparent_4k.png');
const BG = { r: 0x0a, g: 0x0a, b: 0x0f, alpha: 1 };
const SAFE_AREA = 0.76;

const targets = [
  { out: 'public/assets/favicons/favicon-16x16.png', size: 16 },
  { out: 'public/assets/favicons/favicon-32x32.png', size: 32 },
  { out: 'public/favicon-96x96.png', size: 96 },
  { out: 'public/assets/favicons/apple-touch-icon.png', size: 180 },
  { out: 'public/assets/favicons/android-chrome-192x192.png', size: 192 },
  { out: 'public/assets/favicons/android-chrome-512x512.png', size: 512 },
  { out: 'public/favicon.png', size: 512 },
];

async function compositeAt(size) {
  const inner = Math.round(size * SAFE_AREA);
  const logo = await sharp(SOURCE)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const offset = Math.round((size - inner) / 2);
  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logo, top: offset, left: offset }])
    .png()
    .toBuffer();
}

async function ensureDir(filePath) {
  await mkdir(dirname(filePath), { recursive: true });
}

async function main() {
  await readFile(SOURCE);

  for (const { out, size } of targets) {
    const abs = join(repoRoot, out);
    await ensureDir(abs);
    const buf = await compositeAt(size);
    await writeFile(abs, buf);
    console.log(`wrote ${out} (${size}x${size})`);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = [];
  for (const size of icoSizes) {
    icoBuffers.push(await compositeAt(size));
  }
  const ico = await pngToIco(icoBuffers);
  const icoPath = join(repoRoot, 'public/favicon.ico');
  await ensureDir(icoPath);
  await writeFile(icoPath, ico);
  console.log(`wrote public/favicon.ico (${icoSizes.join('+')})`);

  const svgInner = Math.round(512 * SAFE_AREA);
  const svgOffset = Math.round((512 - svgInner) / 2);
  const sourceB64 = (await readFile(SOURCE)).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" ry="96" fill="#0a0a0f"/>
  <image x="${svgOffset}" y="${svgOffset}" width="${svgInner}" height="${svgInner}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${sourceB64}"/>
</svg>
`;
  const svgPath = join(repoRoot, 'public/favicon.svg');
  await writeFile(svgPath, svg);
  console.log(`wrote public/favicon.svg`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
