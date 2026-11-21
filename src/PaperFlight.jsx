import React, {useEffect, useRef} from 'react';

const duration = 2420;
const clamp = value => Math.min(1, Math.max(0, value));

export function shouldShowFlight() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function drawPlane(ctx, x, y, angle, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.scale(size, size);
  const fold = (points, color) => {
    ctx.beginPath();
    points.forEach(([px,py], i) => i ? ctx.lineTo(px,py) : ctx.moveTo(px,py));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#30598c';
    ctx.lineWidth = .75;
    ctx.stroke();
  };
  // The nose is the origin, so all four folds meet exactly at the tear.
  fold([[0,0],[-85,-26],[-59,0]], '#fcfcf4');
  fold([[0,0],[-59,0],[-52,18]], '#95b0cf');
  fold([[0,0],[-52,18],[-46,6]], '#315985');
  fold([[0,0],[-46,6],[-76,19]], '#e3ebf2');
  ctx.restore();
}

export default function PaperFlight({onFinish}) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) { onFinish(); return; }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const startY = .39 + Math.random()*.20;
    const bend = Math.random()*Math.PI*2;
    const seam = x => startY + .065*Math.sin(x*Math.PI*2 + bend) - .08*x;
    const fibers = Array.from({length:161}, () => Math.random()*9-4.5);
    let frame, width, height;
    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = Math.round(width*dpr);
      canvas.height = Math.round(height*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    resize();
    const start = performance.now();
    function paint(now) {
      const t = clamp((now-start)/duration);
      if (t>=1) { onFinish(); return; }
      // The airplane crosses first. Each point on the paper opens only after the nose passes it.
      const nose = -0.035 + 1.70 * (t*.65 + t*t*.35);
      ctx.clearRect(0,0,width,height);
      for (const side of [-1,1]) {
        const edgeY = side<0 ? -4 : height+4;
        ctx.beginPath();
        ctx.moveTo(-2,edgeY);
        const ctxEdge = new Path2D();
        for (let i=0;i<fibers.length;i++) {
          const u=i/(fibers.length-1);
          const delay=clamp((nose-u)/.60);
          const spread=delay*delay*(3-2*delay);
          const y=seam(u)*height+fibers[i]+side*(height*1.1*spread - .8);
          const x=u*(width+4)-2;
          ctx.lineTo(x,y);
          if (i===0) ctxEdge.moveTo(x,y);
          else ctxEdge.lineTo(x,y);
        }
        ctx.lineTo(width+2,edgeY);
        ctx.closePath();
        ctx.fillStyle=side<0?'#f4f2e9':'#eeede4';
        ctx.fill();
        ctx.save();
        ctx.shadowColor='rgba(25, 59, 117, .48)';
        ctx.shadowBlur=9;
        ctx.strokeStyle='#9aabc0';
        ctx.lineWidth=1.4;
        ctx.stroke(ctxEdge);
        ctx.restore();
      }
      const angle=Math.atan2((seam(nose+.001)-seam(nose))*height,.001*width);
      drawPlane(ctx,nose*width,seam(nose)*height,angle,(.26+clamp(nose)*1.1)*Math.min(1.4,Math.max(1.03,width/500)));
      frame=requestAnimationFrame(paint);
    }
    function motionChange() { if (reduced.matches) onFinish(); }
    paint(start);
    window.addEventListener('resize',resize);
    reduced.addEventListener('change',motionChange);
    const events=['pointerdown','keydown','wheel','pagehide'];
    events.forEach(type=>window.addEventListener(type,onFinish,{capture:true,passive:true}));
    return ()=>{
      cancelAnimationFrame(frame);
      window.removeEventListener('resize',resize);
      reduced.removeEventListener('change',motionChange);
      events.forEach(type=>window.removeEventListener(type,onFinish,true));
    };
  },[onFinish]);
  return <canvas ref={ref} className="paper-flight" aria-hidden="true"/>;
}
