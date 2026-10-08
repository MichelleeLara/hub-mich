export type IdeaPoint = { x: number; y: number };
export const ideaAspect = .6;
export const ideaPoints: IdeaPoint[] = [];
function line(vertices: number[][], count: number, closed = false) {
  const nodes = closed ? [...vertices, vertices[0]] : vertices;
  const lengths = nodes.slice(1).map((p,i) => Math.hypot(p[0]-nodes[i][0], (p[1]-nodes[i][1]) * ideaAspect));
  const total = lengths.reduce((a,b) => a+b,0);
  for(let i=0;i<count;i++) {
    let distance=(i+.5)/count*total, j=0;
    while(j<lengths.length-1 && distance>lengths[j]) distance-=lengths[j++];
    const t=distance/lengths[j], a=nodes[j],b=nodes[j+1];
    ideaPoints.push({x:a[0]+(b[0]-a[0])*t,y:a[1]+(b[1]-a[1])*t});
  }
}
// Interwoven context becomes a single, legible product.
for(let lane=-2;lane<=2;lane++) for(let i=0;i<100;i++) {
  const t=i/99;
  ideaPoints.push({x:.06+t*.44,y:.48+Math.sin(t*Math.PI*2.5+lane*.65)*.19*(1-t)**1.3+lane*.034*(1-t)});
}
line([[.50,.48],[.60,.48]],40);
line([[.60,.22],[.94,.22],[.94,.76],[.60,.76]],180,true);
line([[.60,.33],[.94,.33]],45);
line([[.67,.42],[.87,.42]],30);
line([[.67,.48],[.82,.48]],25);
line([[.67,.59],[.87,.59],[.87,.66],[.67,.66]],60,true);
for(let n=0;n<3;n++) for(let i=0;i<12;i++) {
  const a=i/12*Math.PI*2;
  ideaPoints.push({x:.625+n*.024+Math.cos(a)*.004,y:.275+Math.sin(a)*.0067});
}
