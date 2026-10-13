export type SystemPoint = { x:number; y:number; baseY:number; birth:number; outer:boolean; module:number; level:number; planeX:number; planeY:number; draftWeight:number };
const raw: { u:number; v:number; z:number; module:number; outer:boolean }[]=[];
const project=(u:number,v:number,z:number)=>({x:.48+(u-v)*.135,y:.40+(u+v)*.077-z*.13});
function edge(a:number[],b:number[],module:number,outer=true){
 const pa=project(...a as [number,number,number]),pb=project(...b as [number,number,number]);
 const count=Math.max(2,Math.ceil(Math.hypot(pa.x-pb.x,pa.y-pb.y)*430));
 for(let j=0;j<count;j++){const t=j/(count-1);raw.push({u:a[0]+(b[0]-a[0])*t,v:a[1]+(b[1]-a[1])*t,z:a[2]+(b[2]-a[2])*t,module,outer});}
}
function rect(u:number,v:number,w:number,h:number,z:number,module:number,outer=true){
 const corners=[[u,v,z],[u+w,v,z],[u+w,v+h,z],[u,v+h,z]];
 corners.forEach((a,i)=>edge(a,corners[(i+1)%4],module,outer));
}
function ring(u:number,v:number,r:number,z:number,module:number,gear=false){
 const segments=gear?96:56;
 for(let i=0;i<segments;i++){
  const angle=i/segments*Math.PI*2,next=(i+1)/segments*Math.PI*2;
  const radius=(n:number)=>gear?r*(Math.floor(n/3)%2?1:.8):r;
  edge([u+Math.cos(angle)*radius(i),v+Math.sin(angle)*radius(i),z],[u+Math.cos(next)*radius(i+1),v+Math.sin(next)*radius(i+1),z],module);
 }
}
// Three exploded plates, with posts that make their depth easy to read.
for(const z of [0,.64,1.28])rect(0,0,2,2,z,3);
for(const [u,v] of [[0,0],[2,0],[2,2],[0,2]]){
 for(const z of [0,.64])edge([u,v,z],[u,v,z+.22],3);
 ring(u,v,.045,.32,3);
}
// The lower plate exposes a mechanism; the middle plate carries data traces.
ring(.66,1.14,.40,.05,2,true);ring(.66,1.14,.24,.05,2);ring(.66,1.14,.075,.05,2);
rect(1.24,.30,.45,.55,.05,2);for(let i=0;i<3;i++)edge([1.2,.43+i*.13,.06],[.9,.43+i*.13,.06],2,false);
for(let i=0;i<5;i++){
 const v=.23+i*.27;edge([.2,v,.65],[.78,v,.65],3,false);edge([.78,v,.65],[.78,v+.10,.65],3,false);edge([.78,v+.10,.65],[1.12,v+.10,.65],3,false);
}
rect(1.22,.82,.5,.7,.65,3);ring(1.47,1.17,.17,.66,3);
// Top surface: processor and aperture, rather than a generic wireframe building.
rect(.3,.3,.66,.66,1.29,3);rect(.39,.39,.48,.48,1.29,3,false);
ring(1.36,1.27,.25,1.29,3);edge([1.0,.18,1.29],[1.75,.18,1.29],3,false);
// Data tower at the back-left, built from four shallow cuboids.
for(let z=0;z<=1.5;z+=.375)rect(-1.2,.36,.55,.6,z,0);
for(const [u,v] of [[-1.2,.36],[-.65,.36],[-.65,.96],[-1.2,.96]])edge([u,v,0],[u,v,1.5],0);
// Two UI sheets in front with real visual hierarchy: toolbar, tiles and rows.
for(const z of [0,.18]){
 rect(.20,2.46,2.05,1.0,z,1);edge([.20,2.62,z],[2.25,2.62,z],1);
}
for(let i=0;i<3;i++)ring(.32+i*.11,2.54,.025,.19,1);
rect(.35,2.74,.43,.45,.19,1);rect(.9,2.74,.43,.45,.19,1);rect(1.45,2.74,.6,.45,.19,1);
for(let i=0;i<3;i++)edge([.43,2.85+i*.1,.19],[.69,2.85+i*.1,.19],1,false);
ring(1.73,2.96,.13,.19,1);
// Small input and output cards flank the stack.
rect(-1.05,1.75,.8,.65,.08,1);for(let i=0;i<3;i++)edge([-.9,1.91+i*.12,.09],[-.42,1.91+i*.12,.09],1,false);
rect(2.45,.40,.85,.60,.1,1);for(let i=0;i<3;i++)edge([2.60,.54+i*.12,.11],[3.13,.54+i*.12,.11],1,false);
// Routed connections with visible nodes. They remain open space between modules.
for(const route of [
 [[-.65,.7,0],[-.25,.7,0],[-.25,.18,0],[.35,.18,0]],
 [[1.6,2,0],[1.6,2.25,0],[2.55,2.25,0],[2.55,.95,0]],
 [[-.65,2.4,0],[-.65,2.65,0],[.2,2.65,0]],
]){for(let i=1;i<route.length;i++)edge(route[i-1],route[i],2,false);for(const node of [route[0],route.at(-1)!])ring(node[0],node[1],.035,node[2],2);}
const projected=raw.map(p=>project(p.u,p.v,p.z));
const left=Math.min(...projected.map(p=>p.x)),right=Math.max(...projected.map(p=>p.x)),top=Math.min(...projected.map(p=>p.y)),bottom=Math.max(...projected.map(p=>p.y));
const draft:{u:number;v:number}[]=[];
function draftLine(a:number[],b:number[],count:number){for(let i=0;i<count;i++){const t=i/(count-1);draft.push({u:a[0]+(b[0]-a[0])*t,v:a[1]+(b[1]-a[1])*t});}}
for(const [a,b] of [[[0,0],[1,0]],[[1,0],[1,1]],[[1,1],[0,1]],[[0,1],[0,0]]])draftLine(a,b,40);
for(const value of [.25,.5,.75]){draftLine([value,0],[value,1],24);draftLine([0,value],[1,value],24);}
const counts=[0,1,2,3].map(module=>raw.filter(point=>point.module===module).length),indexes=[0,0,0,0];
export const systemPoints:SystemPoint[]=raw.map((p,i)=>{
 const point=projected[i],outer=p.outer;
 const {u,v}=draft[Math.min(draft.length-1,Math.floor(indexes[p.module]++*draft.length/counts[p.module]))];
 return {x:.04+(point.x-left)/(right-left)*.92,y:.04+(point.y-top)/(bottom-top)*.92,baseY:project(p.u,p.v,0).y,birth:0,outer,module:p.module,level:p.z/1.5*3,planeX:u-v,planeY:u+v-1,draftWeight:Math.min(1,draft.length/counts[p.module])};
});
