import type { APIRoute } from 'astro';
import { ideaPoints } from '../../data/ideasGeometry';

export const GET: APIRoute = () => {
  const paths = [0, 1, 2, 3].map(group => {
    const radius = group < 2 ? 2.6 : 1.8;
    const opacity = group % 2 === 0 ? .76 : .44;
    const d = ideaPoints.flatMap((point, i) => {
      if ((i % 11 === 0 ? 0 : 2) + (i % 4 === 0 ? 0 : 1) !== group) return [];
      const x = ((.5 + (point.x - .5) * .78) * 600 + radius).toFixed(2);
      const y = ((.5 + (point.y - .5) * .78) * 660).toFixed(2);
      return [`M${x} ${y}a${radius} ${radius} 0 1 0 -${radius * 2} 0a${radius} ${radius} 0 1 0 ${radius * 2} 0`];
    }).join('');
    return `<path d="${d}" fill="currentColor" opacity="${opacity}"/>`;
  }).join('');
  return new Response(`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="points" viewBox="0 0 600 660">${paths}</symbol></svg>`, {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
};
