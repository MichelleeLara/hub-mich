import { worldLand } from './worldParticles';
import type { WorldLocation } from './worldCases';

export const WORLD_MAP_WIDTH = 1000;
export const WORLD_MAP_HEIGHT = 580;

// A flat geographic projection keeps both project locations in view.
export const projectWorldLocation = (location: Pick<WorldLocation, 'lon' | 'lat'>) => ({
  x: 40 + (location.lon + 180) / 360 * 920,
  y: 60 + (82 - location.lat) / 140 * 430,
});

// Resample the geographic rows into a regular dot grid, rather than retaining
// the curved, latitude-dependent spacing of the sphere's particle sampling.
const rows = new Map<number, number[]>();
worldLand.forEach(([lon, lat]) => {
  if (lat <= -60 || lat % 4 !== 0) return;
  const row = rows.get(lat) ?? [];
  row.push(lon);
  rows.set(lat, row);
});
export const worldMapDots = Array.from(rows).flatMap(([lat, longitudes]) => {
  longitudes.sort((a, b) => a - b);
  const spacing = 2 / Math.cos(lat * Math.PI / 180);
  const spans: [number, number][] = [];
  longitudes.forEach(lon => {
    const previous = spans[spans.length - 1];
    if (previous && lon - previous[1] <= spacing * 1.05) previous[1] = lon;
    else spans.push([lon, lon]);
  });
  const dots: { x: number; y: number }[] = [];
  const offset = (Math.abs(lat / 4) % 2) * 2;
  for (let lon = -180 + offset; lon <= 180; lon += 4) {
    if (spans.some(([start, end]) => lon >= start - spacing * .45 && lon <= end + spacing * .45)) {
      dots.push(projectWorldLocation({ lon, lat }));
    }
  }
  return dots;
});

export const worldMapRoute = (locations: WorldLocation[]) => {
  if (locations.length < 2) return '';
  const start = projectWorldLocation(locations[0]);
  const end = projectWorldLocation(locations[1]);
  const lift = Math.min(170, Math.abs(end.x - start.x) * .3);
  return `M ${start.x} ${start.y} C ${start.x + (end.x - start.x) * .28} ${start.y - lift}, ${end.x - (end.x - start.x) * .28} ${end.y - lift}, ${end.x} ${end.y}`;
};
