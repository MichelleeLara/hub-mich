export type IdeaPoint = { x: number; y: number; birth: number; outer: boolean; baseY: number };
export const ideaAspect = 1.1;
export const ideaPoints: IdeaPoint[] = [];
// The approved isometric proposal, normalized to its own illustration area.
function project(u: number,v: number,z: number) {
  const scale = 1.3225;
  return { x: .5+(u-v)*.16*scale, y: .5+(.11+(u+v)*.085-z*.183)*scale };
}
function edge(a: number[], b: number[], count: number, birth: number, outer=true) {
  for(let j=0;j<count;j++) {
    const t=j/(count-1);
    const p=project(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t);
    ideaPoints.push({...p,baseY:project(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,0).y,birth:birth+j/count*.05,outer});
  }
}
for(let z=0;z<=3;z++) {
  const birth=.03+z*.18;
  for(const [a,b] of [
    [[0,0,z],[2,0,z]], [[2,0,z],[2,2,z]],
    [[2,2,z],[0,2,z]], [[0,2,z],[0,0,z]],
  ]) edge(a,b,30,birth);
  for(let i=1;i<4;i++) {
    const v=i*.5;
    edge([v,0,z],[v,2,z],22,birth+.035,false);
    edge([0,v,z],[2,v,z],22,birth+.035,false);
  }
}
for(const [u,v] of [[0,0],[2,0],[2,2],[0,2],[1,0],[2,1],[1,2],[0,1]]) {
  for(let z=0;z<3;z++) edge([u,v,z],[u,v,z+1],22,.14+z*.19,u%2===0&&v%2===0);
}

// A closed path through every floor and its connecting posts.
export const ideaFlowRoute = [] as { x: number; y: number }[];
for (let z=0; z<=3; z++) {
  for (const [u,v] of [[0,0],[2,0],[2,2],[0,2],[0,0]]) ideaFlowRoute.push(project(u,v,z));
}
ideaFlowRoute.push(project(0,0,0));
const lengths=ideaFlowRoute.slice(1).map((p,i)=>Math.hypot(p.x-ideaFlowRoute[i].x,p.y-ideaFlowRoute[i].y));
const routeLength=lengths.reduce((a,b)=>a+b,0);
export function ideaFlowPoint(progress: number) {
  let remaining=((progress%1)+1)%1*routeLength;
  for(let i=0;i<lengths.length;i++) {
    if(remaining<=lengths[i]) {
      const a=ideaFlowRoute[i],b=ideaFlowRoute[i+1],t=remaining/lengths[i];
      return {x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};
    }
    remaining-=lengths[i];
  }
  return ideaFlowRoute[0];
}
