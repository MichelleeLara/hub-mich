export type EnfoqueGrain = { x: number; y: number; alpha: number; radius: number; tint: number };
export type EnfoqueParticleFrame = { points: EnfoqueGrain[]; strength: number };
export const ENFOQUE_PARTICLE_EVENT = 'enfoque-particle-frame';
