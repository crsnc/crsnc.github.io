const tau = Math.PI * 2;
// Sample the contour lines once. Playback only projects the same sculpture at a new angle.
let reliefContours;
function relief(ctx,w,h,phase){
  if (!reliefContours) {
    reliefContours=Array.from({length:92},(_,j)=>Array.from({length:193},(_,i)=>{
      const t=i/192*tau;
      const r=(.07+j/108)*(1+.092*Math.cos(t*5)+.14*Math.sin(t*3-j*.024));
      const x=Math.cos(t)*r, y=Math.sin(t)*r;
      const z=.61*Math.exp(-3.2*r*r)+.22*Math.cos(4*x)*Math.cos(3*y);
      return [x,y,z];
    }));
  }
  // Keep the foreground type over the quieter edge of the projected contours.
  const compact=w<=760;
  const scale=compact ? Math.max(w*.96,h*.70) : Math.max(w*.64,h*.78);
  const centerX=w*(compact ? .64 : .68), centerY=h*(compact ? .55 : .51);
  const cos=Math.cos(phase),sin=Math.sin(phase);
  ctx.lineWidth=Math.max(.85,scale/170);
  reliefContours.forEach((points,j)=>{
    ctx.beginPath();
    for(let i=0;i<points.length;i++){
      const [x,y,z]=points[i];
      const depth=x*sin+y*cos;
      const X=centerX+scale*(x*cos-y*sin+.13*depth), Y=centerY+scale*(.68*depth-z);
      if (i===0) ctx.moveTo(X,Y); else ctx.lineTo(X,Y);
    }
    ctx.strokeStyle='hsl('+ (209+j*.25)+' 78% '+(27+j*.16)+'%)';
    ctx.stroke();
  });
}
export function renderRelief(canvas,phase){
  const {width:w,height:h}=canvas.getBoundingClientRect();if(!w||!h)return;
  const d=Math.min(window.devicePixelRatio||1,1.75), cw=Math.round(w*d),ch=Math.round(h*d);
  if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch;}
  const ctx=canvas.getContext('2d');ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);
  relief(ctx,w,h,phase);
}
