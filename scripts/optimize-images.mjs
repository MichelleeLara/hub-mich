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
for (const [name, source] of Object.entries(images)) {
  const widths = name === 'hero-profile' ? [240, 480] : name.startsWith('portrait') ? [720] : [720, 1440];
  const original = await stat(`public/${source}`);
  for (const width of widths) {
    const path = `public/media/${name}-${width}.webp`;
    const info = await sharp(`public/${source}`).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(path);
    report.push({ source, path, originalBytes: original.size, bytes: info.size, width: info.width, height: info.height });
  }
}
await writeFile('docs/revision-2026-10-07/images.json', JSON.stringify(report, null, 2));
console.log(`Generated ${report.length} responsive WebP images.`);
