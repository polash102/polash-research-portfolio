import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Award, Bot, Cloud, FileText, Flag, Images, Leaf, Linkedin, Menu, Moon, Pause, Play, Search, Sun, UserRound, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/site'
import PortfolioAssistant from './PortfolioAssistant'

const homeSections=[
  ['home','Home'],['about','About'],['experience','Experience'],['research','Research'],['future','Next'],['papers','Papers'],['projects','Projects'],['people','People'],['contact','Contact'],['bangladesh','Mission']
]

function ParticleCanvas(){
  const ref=useRef(null)
  useEffect(()=>{
    const c=ref.current;if(!c)return
    const ctx=c.getContext('2d');let raf;let dots=[]
    const resize=()=>{
      const dpr=Math.min(devicePixelRatio||1,2);c.width=innerWidth*dpr;c.height=innerHeight*dpr;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px'
      dots=Array.from({length:Math.max(22,Math.floor(innerWidth/55))},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.12*dpr,vy:(Math.random()-.5)*.12*dpr,r:(Math.random()*1.1+.5)*dpr}))
    }
    const draw=()=>{
      ctx.clearRect(0,0,c.width,c.height)
      dots.forEach(d=>{d.x+=d.vx;d.y+=d.vy;if(d.x<0||d.x>c.width)d.vx*=-1;if(d.y<0||d.y>c.height)d.vy*=-1;ctx.beginPath();ctx.fillStyle='rgba(255,142,60,.20)';ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill()})
      raf=requestAnimationFrame(draw)
    }
    resize();draw();addEventListener('resize',resize)
    return()=>{cancelAnimationFrame(raf);removeEventListener('resize',resize)}
  },[])
  return <canvas className="particle-canvas" ref={ref}/>
}

function FloatingWorld(){
  const rain=['AI','CV','01','VLM','RAG','{}','YOLO','DL']
  return <div className="floating-world" aria-hidden="true">
    <motion.div className="float-cloud cloud-a" animate={{x:[-30,35,-30],y:[0,8,0]}} transition={{duration:23,repeat:Infinity,ease:'easeInOut'}}><Cloud/></motion.div>
    <motion.div className="float-cloud cloud-b" animate={{x:[30,-25,30],y:[0,-10,0]}} transition={{duration:31,repeat:Infinity,ease:'easeInOut'}}><Cloud/></motion.div>
    <motion.div className="float-leaf leaf-a" animate={{rotate:[-22,36,-22],y:[0,32,0]}} transition={{duration:9,repeat:Infinity,ease:'easeInOut'}}><Leaf/></motion.div>
    <motion.div className="float-leaf leaf-b" animate={{rotate:[28,-28,28],y:[0,-22,0]}} transition={{duration:12,repeat:Infinity,ease:'easeInOut'}}><Leaf/></motion.div>
    <div className="data-rain">{rain.map((r,i)=><motion.span key={r} style={{left:`${5+i*12.5}%`}} animate={{y:['-10vh','110vh'],rotate:[0,i%2?40:-40],opacity:[0,.12,.12,0]}} transition={{duration:13+i*.7,repeat:Infinity,delay:i*1.1,ease:'linear'}}>{r}</motion.span>)}</div>
  </div>
}

export default function Layout({children}){
  const [drawer,setDrawer]=useState(false)
  const [dark,setDark]=useState(false)
  const [motionOn,setMotionOn]=useState(true)
  const [progress,setProgress]=useState(0)
  const location=useLocation();const navigate=useNavigate()

  useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light'},[dark])
  useEffect(()=>{document.documentElement.dataset.motion=motionOn?'on':'off'},[motionOn])
  useEffect(()=>{
    const onScroll=()=>{const h=document.documentElement.scrollHeight-innerHeight;setProgress(h>0?scrollY/h*100:0)}
    onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)
  },[])
  useEffect(()=>{setDrawer(false);window.scrollTo({top:0,behavior:'smooth'})},[location.pathname])

  const goSection=id=>{
    setDrawer(false)
    if(location.pathname!=='/'){
      navigate('/');setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),180)
    }else document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  }
  const goPage=path=>{setDrawer(false);navigate(path)}

  return <div className="app-shell">
    <ParticleCanvas/>
    {motionOn&&<FloatingWorld/>}
    <div className="ambient warm-a"/><div className="ambient green-a"/><div className="ambient coral-a"/>
    <div className="scroll-progress" style={{width:`${progress}%`}}/>

    <header className="site-header">
      <button className="brand" onClick={()=>goSection('home')}>
        <span className="brand-mark">SH</span>
        <span className="brand-copy"><b>SAYMON HOSEN</b><small>RESEARCH · VISION · DATA</small></span>
      </button>
      <nav className="header-nav">
        <button onClick={()=>goPage('/profile')}>Profile</button>
        <button onClick={()=>goSection('research')}>Research</button>
        <button onClick={()=>goSection('papers')}>Papers</button>
        <button onClick={()=>goSection('projects')}>Projects</button>
        <button onClick={()=>goPage('/life')}>Life</button>
      </nav>
      <div className="header-right">
        <div className="flag-pair mini"><span>🇧🇩</span><i>↔</i><span>🇰🇷</span></div>
        <div className="motion-toggle"><span>MOTION</span><button className={motionOn?'on':''} onClick={()=>setMotionOn(v=>!v)}><i/></button></div>
        <button className="round-btn" onClick={()=>setDark(v=>!v)} aria-label="Toggle theme">{dark?<Sun/>:<Moon/>}</button>
        <button className={`menu-button ${drawer?'open':''}`} onClick={()=>setDrawer(v=>!v)} aria-label="Open menu"><span/><span/><span/></button>
      </div>
    </header>

    <AnimatePresence>
      {drawer&&<motion.div className="drawer-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setDrawer(false)}>
        <motion.aside className="drawer" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring',stiffness:240,damping:28}} onClick={e=>e.stopPropagation()}>
          <div className="drawer-top"><div><small>PORTFOLIO NAVIGATION</small><h2>Research, work and the person behind it.</h2></div><button onClick={()=>setDrawer(false)}><X/></button></div>
          <div className="drawer-pages">
            <button onClick={()=>goPage('/profile')}><UserRound/><div><b>Professional Profile</b><span>Research summary, appointments and teaching experience</span></div><ArrowUpRight/></button>
            <button onClick={()=>goPage('/certificates')}><Award/><div><b>Certificates</b><span>Verified learning and conference credentials</span></div><ArrowUpRight/></button>
            <button onClick={()=>goPage('/life')}><Images/><div><b>Personal Life</b><span>Ordered gallery — sport, travel, people and milestones</span></div><ArrowUpRight/></button>
            <button onClick={()=>goPage('/outlook')}><Search/><div><b>Outlook & Opportunities</b><span>Dedication, research direction and opportunities I am seeking</span></div><ArrowUpRight/></button>
          </div>
          <div className="drawer-section-links">
            {homeSections.map(([id,label],i)=><button key={id} onClick={()=>goSection(id)}><span>{String(i+1).padStart(2,'0')}</span>{label}</button>)}
          </div>
          <div className="drawer-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.codeforces} target="_blank" rel="noreferrer">Codeforces</a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
          <div className="drawer-controls"><button onClick={()=>setMotionOn(v=>!v)}>{motionOn?<Pause/>:<Play/>} Motion {motionOn?'on':'off'}</button><button onClick={()=>setDark(v=>!v)}>{dark?<Sun/>:<Moon/>} {dark?'Light':'Dark'} theme</button></div>
        </motion.aside>
      </motion.div>}
    </AnimatePresence>

    <main>{children}</main>
    <PortfolioAssistant/>
    <footer className="site-footer">
      <div><strong>{profile.name}</strong><span>Computer Vision · Data Science · Applied AI</span></div>
      <div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.codeforces} target="_blank" rel="noreferrer">Codeforces</a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a></div>
      <div className="flag-pair"><span>🇧🇩</span><i>↔</i><span>🇰🇷</span></div>
    </footer>
  </div>
}
