import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

// Add versioned studio covers without regenerating or replacing existing assets.
const manifestPath = 'src/data/imageManifest.json';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
await mkdir('public/media/project-covers', { recursive: true });
// v3: solo la app (sin dispositivo ni fondo) para el mosaico de proyectos. v4: captura real de Ommia (Luz.ia).
for (const key of ['luzia-studio-v2', 'luzia-studio-wide-v2', 'logistica-studio-v2', 'white-label-studio-v2', 'tracking-studio-v2', 'logistica-app-v3', 'white-label-app-v3', 'tracking-app-v3', 'luzia-app-v4']) {
  const source = `assets/source-images/project-covers/${key}.png`;
  manifest[key] = [];
  // Las capturas de app (v3/v4) llevan una versión grande para que el texto se vea nítido en pantallas 2x.
  const widths = /-app-v\d/.test(key) ? [720, 1440, 2000] : [720, 1440];
  for (const width of widths) {
    const destination = `public/media/project-covers/${key}-${width}.webp`;
    const info = await sharp(source).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5 }).toFile(destination);
    manifest[key].push({ src: `/${destination.replace('public/', '')}`, width: info.width, height: info.height });
  }
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log('Added studio covers (v2) and app-only covers (v3), in two sizes each.');
