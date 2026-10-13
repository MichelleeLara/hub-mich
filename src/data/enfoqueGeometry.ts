// Every sample keeps its identity through the entire reversible story.
export const enfoqueSamples = 120;
export const enfoqueStrands = 9;
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const ease=(n:number)=>{const t=clamp(n);return t*t*(3-2*t);};
const mix=(a:number,b:number,t:number)=>a+(b-a)*t;
export function enfoquePoint(index:number,progress:number){
 const strand=Math.floor(index/enfoqueSamples),t=index%enfoqueSamples/(enfoqueSamples-1);
 const group=Math.floor(strand/3),lane=strand%3-1;
 const phase=strand*.77;
 const envelope=Math.sin(t*Math.PI);
 const scattered={x:.5+Math.sin(index*2.399)*(.12+(index%23)/75),y:.5+Math.cos(index*1.731)*(.10+(index%19)/65)};
 // A broad, irregular knot. The same endpoints and strands survive its unravelling.
 const knot={x:.12+.76*t+Math.sin(t*Math.PI*4+phase)*.20*envelope,y:.5+Math.sin(t*Math.PI*3+phase)*.25*envelope+(strand-4)*.022};
 // The crossings loosen into individual paths; their junctions are still open.
 const planned={x:.12+.76*t,y:.20+strand*.072+Math.sin(t*Math.PI*2+phase)*.045*envelope};
 // Three functional routes connect their parts, without replacing the original strands.
 const separation=Math.sin(Math.PI*t)**.7;
 const system={x:.12+.76*t,y:.26+group*.24+lane*.022*separation+Math.sin(t*Math.PI*2)*.032*separation};
 const gather=ease(progress/.14),design=ease((progress-1/3)/.29),build=ease((progress-2/3)/.27);
 const kx=mix(scattered.x,knot.x,gather),ky=mix(scattered.y,knot.y,gather);
 return {x:mix(mix(kx,planned.x,design),system.x,build),y:mix(mix(ky,planned.y,design),system.y,build),strand,t,depth:0};
}
