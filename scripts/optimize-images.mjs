import sharp from 'sharp';
import { mkdir, stat, writeFile } from 'node:fs/promises';
const images = {
  'hero-profile': 'hero-profile-left.png', 'portrait': 'hero_mich.png',
  'portrait-fallback': 'image.png', 'luzia': 'luziaOmmia.png',
  'anamseals': 'anamsealsHand.png', 'logistica': 'inteligenciaDashboard.png',
  'tracking': 'trackingAduanal.png', 'white-label': 'whiteLabelBrand.png',
};
await mkdir('public/media', { recursive: true });
const report = [];
const manifest = {};
for (const [name, source] of Object.entries(images)) {
  const widths = name === 'hero-profile' ? [240, 480] : name.startsWith('portrait') ? [720] : [720, 1440];
  manifest[name] = [];
  const original = await stat(`assets/source-images/${source}`);
  for (const width of widths) {
    const path = `public/media/${name}-${width}.webp`;
    const info = await sharp(`assets/source-images/${source}`).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(path);
    manifest[name].push({ src: '/' + path.replace('public/', ''), width: info.width, height: info.height });
    report.push({ source, path, originalBytes: original.size, bytes: info.size, width: info.width, height: info.height });
  }
}
await writeFile('docs/revision-2026-10-07/images.json', JSON.stringify(report, null, 2));
await writeFile('src/data/imageManifest.json', JSON.stringify(manifest, null, 2));
console.log(`Generated ${report.length} responsive WebP images.`);
