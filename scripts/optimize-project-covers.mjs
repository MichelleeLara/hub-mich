import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

// Add versioned studio covers without regenerating or replacing existing assets.
const manifestPath = 'src/data/imageManifest.json';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
await mkdir('public/media/project-covers', { recursive: true });
for (const key of ['luzia-studio-v2', 'luzia-studio-wide-v2', 'logistica-studio-v2', 'white-label-studio-v2', 'tracking-studio-v2']) {
  const source = `assets/source-images/project-covers/${key}.png`;
  manifest[key] = [];
  for (const width of [720, 1440]) {
    const destination = `public/media/project-covers/${key}-${width}.webp`;
    const info = await sharp(source).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5 }).toFile(destination);
    manifest[key].push({ src: `/${destination.replace('public/', '')}`, width: info.width, height: info.height });
  }
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log('Added four studio covers plus the wide Luz.ia composition, in two sizes each.');
