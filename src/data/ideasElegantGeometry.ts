type Point = { x: number; y: number; baseY: number; designX: number; designY: number; outer: boolean; strength: number };
export const ideaPoints: Point[] = [];
const project = (u: number, v: number, z: number) => ({
  x: .5 + (u - v) * .16 * 1.3225,
  y: .5 + (.11 + (u + v) * .085 - z * .183) * 1.3225,
});
function grain(u: number, v: number, z: number, outer: boolean, strength: number) {
  const plan=project(u,v,0),shape=terrace(u,v,z);
  ideaPoints.push({ ...project(shape.u, shape.v, z), baseY: project(shape.u, shape.v, 0).y, designX: plan.x, designY: plan.y, outer, strength });
}
// Setbacks keep each floor related to the same square plan, with a lighter crown.
function terrace(u: number,v: number,z: number) {
  const levels=[0,.09,.23,.4],height=Math.max(0,Math.min(3,z));
  const lower=Math.min(2,Math.floor(height)),t=height-lower;
  const inset=levels[lower]+(levels[lower+1]-levels[lower])*t;
  return {u:inset+u*(1-inset)+height*.035,v:inset+v*(1-inset)-height*.025};
}
const shapedProject=(u:number,v:number,z:number)=>{const p=terrace(u,v,z);return project(p.u,p.v,z);};
function line(a: number[], b: number[], count: number, strength = 1, outer = true) {
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    grain(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t, outer, strength);
  }
}

// The same four design planes become thin, layered slabs.
for (let z = 0; z <= 3; z++) {
  for (const offset of [0, -.035]) {
    const corners = [[0, 0, z + offset], [2, 0, z + offset], [2, 2, z + offset], [0, 2, z + offset]];
    corners.forEach((corner, i) => line(corner, corners[(i + 1) % 4], 48, offset ? .35 : .95));
  }
  for (let i = 1; i < 6; i++) {
    const p = i / 3;
    line([p, 0, z], [p, 2, z], 20, .34, false);
    line([0, p, z], [2, p, z], 20, .34, false);
  }
}

// Closely spaced facade fins give the completed volume depth and a fine rhythm.
for (let i = 0; i <= 24; i++) {
  const p = i / 12;
  line([p, 2, .04], [p, 2, 2.96], 66, i % 6 === 0 ? .85 : .42);
  line([2, p, .04], [2, p, 2.96], 66, i % 6 === 0 ? .65 : .28);
}
// Rear edges stay quiet, keeping the front faces legible through the particles.
line([0, 0, 0], [0, 0, 3], 66, .22);
line([0, 2, 0], [0, 2, 3], 66, .6);
line([2, 0, 0], [2, 0, 3], 66, .5);

// Circulating light follows the actual silhouette, including its upper setbacks.
export const ideaFlowRoute: {x:number;y:number}[]=[];
for(let z=0;z<=3;z++)for(const [u,v] of [[0,0],[2,0],[2,2],[0,2],[0,0]])ideaFlowRoute.push(shapedProject(u,v,z));
ideaFlowRoute.push(shapedProject(0,0,0));
const lengths=ideaFlowRoute.slice(1).map((p,i)=>Math.hypot(p.x-ideaFlowRoute[i].x,p.y-ideaFlowRoute[i].y));
const totalLength=lengths.reduce((a,b)=>a+b,0);
export function ideaFlowPoint(progress:number){
  let distance=((progress%1)+1)%1*totalLength;
  for(let i=0;i<lengths.length;i++){
    if(distance<=lengths[i]){const a=ideaFlowRoute[i],b=ideaFlowRoute[i+1],t=distance/lengths[i];return{x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};}
    distance-=lengths[i];
  }
  return ideaFlowRoute[0];
}
