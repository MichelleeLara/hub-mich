import { useSyncExternalStore } from 'react';
const query = '(prefers-reduced-motion: reduce)';
const subscribe = callback => {
  const media = window.matchMedia(query);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};
const snapshot = () => window.matchMedia(query).matches;
// Framer Motion 11 snapshots this preference at mount; subscribe for live changes.
export function useReducedMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, () => false);
}
