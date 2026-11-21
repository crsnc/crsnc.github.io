import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {profile, projects, skills} from './portfolio';
import {renderRelief} from './art';
import '@fontsource-variable/bricolage-grotesque';
import './style.css';

const two = n => String(n).padStart(2,'0');
const Arrow = ({dir='↗'}) => <span aria-hidden="true">{dir}</span>;
function Mark(){return <span className="mark" aria-hidden="true"/>}

function ReliefBackdrop(){
  const [angle,setAngle]=useState(0);
  const [playing,setPlaying]=useState(()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [dragging,setDragging]=useState(false);
  const orbit=useRef(0);
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const changed=()=>setPlaying(!preference.matches);
    preference.addEventListener('change',changed);
    return ()=>preference.removeEventListener('change',changed);
  },[]);
  const canvas=useRef(null),drag=useRef(null);
  useEffect(()=>{
    const surface=canvas.current;
    let frame=0,previous=0,visible=false;
    const draw=()=>renderRelief(surface,angle+orbit.current);
    const tick=time=>{
      if (!previous || time-previous>=1000/32) {
        if (previous) orbit.current=(orbit.current+Math.min(time-previous,100)*2*Math.PI/24000)%(2*Math.PI);
        previous=time;
        draw();
      }
      frame=requestAnimationFrame(tick);
    };
    const syncPlayback=()=>{
      cancelAnimationFrame(frame);
      previous=0;
      if (playing && !dragging && visible && !document.hidden) frame=requestAnimationFrame(tick);
    };
    const visibility=new IntersectionObserver(([entry])=>{
      visible=entry.isIntersecting;
      syncPlayback();
    });
    const resize=new ResizeObserver(draw);
    resize.observe(surface);
    visibility.observe(surface);
    document.addEventListener('visibilitychange',syncPlayback);
    draw();
    return ()=>{
      visibility.disconnect();
      resize.disconnect();
      document.removeEventListener('visibilitychange',syncPlayback);
      cancelAnimationFrame(frame);
    };
  },[angle,playing,dragging]);
  return <>
    <div className="art-surface" role="slider" tabIndex="0" aria-label="Rölyef açısı" aria-valuemin="0" aria-valuemax="360"
      aria-valuenow={Math.round((angle*180/Math.PI%360+360)%360)}
      onKeyDown={e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setAngle(a=>e.key==='Home'?0:e.key==='End'?359*Math.PI/180:a+(e.key==='ArrowLeft'?-.16:.16))}}}
      onPointerDown={e=>{setDragging(true);drag.current={x:e.clientX,angle};e.currentTarget.setPointerCapture(e.pointerId)}}
      onPointerMove={e=>{if(drag.current)setAngle(drag.current.angle+(e.clientX-drag.current.x)*.012)}}
      onLostPointerCapture={()=>{drag.current=null;setDragging(false)}}>
      <canvas ref={canvas} aria-hidden="true"/>
    </div>
    <button className="playback" onClick={()=>setPlaying(value=>!value)}
      aria-label={playing?'Rölyefi duraklat':'Rölyefi oynat'} title={playing?'Duraklat':'Oynat'}>
      {playing?'Ⅱ':'▷'}
    </button>
  </>
}
function Project({item,index}){
  const [expanded,setExpanded]=useState(false);
  const showInterior=expanded && item.detailImage;
  const detailId='project-detail-'+index;
  return <article className={'project '+item.format}>
    <div className="project-stage">
      <button type="button" className="cover" aria-expanded={expanded} aria-controls={detailId}
        aria-label={item.name+' detaylarını '+(expanded?'kapat':'aç')} onClick={()=>setExpanded(!expanded)}>
        <img loading="lazy" key={showInterior ? item.detailImage : item.image} src={import.meta.env.BASE_URL+(showInterior ? item.detailImage : item.image)} alt={showInterior ? item.detailAlt : item.alt}/>
        <span className="cover-label">{expanded?'Kapat':'Detaylar'} <span aria-hidden="true">{expanded?'−':'+'}</span></span>
      </button>
    </div>
    <div className="project-info"><small>{two(index+1)} / {item.category}</small><h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.name} <Arrow/></a> : item.name}</h3>
      <p>{expanded ? item.features : item.summary}</p>
      <div className="project-sheet" id={detailId} hidden={!expanded}>
        <ul>{item.technologies.map(tech=><li key={tech}>{tech}</li>)}</ul>
      </div>
    </div>
  </article>
}
function NameTitle({name}) {
  const parts = name.split(' ');
  const surname = parts.pop();
  return <h1 className="name-title" aria-label={name}>
    <span className="name-stack" aria-hidden="true">
      {[-1, 0, 1].map(row=><span key={row} style={{'--row':row}}>{name.toLocaleUpperCase('tr-TR')}</span>)}
    </span>
    <span className="name-final" aria-hidden="true">
      <span className="given-name">{parts.join(' ')}</span>
      <span className="surname">{surname}<i>.</i></span>
    </span>
  </h1>;
}
function App(){return <>
  <a className="skip" href="#isler">Projelere geç</a>
  <header><a className="brand" href="#baslangic" aria-label="Ahmet Can SARAÇ, başlangıç"><Mark/></a>
  <nav aria-label="Ana menü"><a href="#isler">İşler <sup>{two(projects.length)}</sup></a><a href="#hakkimda">Hakkımda</a><a href="#yetenekler">Yetenekler</a><a href="#iletisim">İletişim <Arrow dir="↘"/></a></nav></header>
  <main id="baslangic"><section className="hero" aria-label="Tanıtım">
    <div className="intro"><NameTitle name={profile.name}/>
    <p>{profile.intro}</p><a className="cta" href="#isler">İşleri keşfet <Arrow dir="↓"/></a></div>
    <ReliefBackdrop/></section>
  <section className="work" id="isler"><div className="sect-title"><h2>Seçili işler<span>.</span></h2><small>{two(projects.length)} PROJE</small></div>
    <div className="projects">{projects.map((item,index)=><Project key={item.name} item={item} index={index}/>)}
      {projects.length === 3 && <article className="upcoming-project">
        <small>04 / Sıradaki proje</small>
        <h3>Çok<br/>yakında.</h3>
      </article>}
    </div>
  </section>
  <section id="hakkimda" className="profile-section" aria-labelledby="about-title">
    <div><h2 id="about-title">Hakkımda<span>.</span></h2><small className="location">{profile.location}</small></div>
    <div className="bio">{profile.about.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
  </section>
  <section id="yetenekler" className="profile-section" aria-labelledby="skills-title">
    <h2 id="skills-title">Yetenekler<span>.</span></h2>
    <dl className="skill-index">{skills.map(({group,items})=>
      <div key={group}><dt>{group}</dt><dd><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></dd></div>
    )}</dl>
  </section></main>
  <footer id="iletisim"><h2>İletişim<span>.</span></h2><a className="email" href={'mailto:'+profile.email}>{profile.email} <Arrow/></a>
  <div className="end"><Mark/><div><a href={profile.github}>GitHub <Arrow/></a><a href={profile.linkedin}>LinkedIn <Arrow/></a></div><a href="#baslangic" aria-label="Başa dön">↑</a></div></footer>
</>}
createRoot(document.getElementById('root')).render(<App/>);
