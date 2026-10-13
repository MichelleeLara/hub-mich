import imageManifest from './imageManifest.json';

// Preview gallery art direction: AnamSeals is the unchanged photographic reference.
// Originals remain available to case studies and other layouts.
export const projectGalleryCovers: Record<string, keyof typeof imageManifest> = {
  'luzia-agentes-ia': 'luzia-studio-v2',
  'anamseals-firmware': 'anamseals',
  'inteligencia-logistica': 'logistica-studio-v2',
  'monitoreo-white-label': 'white-label-studio-v2',
  'tracking-aduanal': 'tracking-studio-v2',
};
