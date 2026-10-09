// Turns the rendered OG screenshot into the JPEG that Layout.astro references.
const sharp = require('sharp');
const path = require('path');
const dir = path.join(__dirname, '..', '..', 'public', 'assets', 'og');
sharp(path.join(dir, 'endure-og.png'))
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(dir, 'endure-og.jpg'))
  .then((info) => console.log(`endure-og.jpg ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`));
