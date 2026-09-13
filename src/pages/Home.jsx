import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, BookOpenCheck, Bot, BrainCircuit, BriefcaseBusiness, Code2,
  Database, ExternalLink, Github, GraduationCap, HeartPulse, Leaf, Linkedin, MapPin,
  Microscope, Rocket, ScanLine, ShieldCheck, Sprout, UsersRound
} from 'lucide-react'
import { profile, professionalSummary, roles, researchAreas, futureResearch, publications, projects, people, certificates } from '../data/site'
import { SectionTitle } from '../components/UI'

const reveal={initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.08},transition:{duration:.62,ease:[.22,1,.36,1]}}
const ticker=['Plant Disease AI','Medical Imaging','Computer Vision','Explainable AI','Vision-Language Models','Multimodal AI','YOLO','Cybersecurity Analytics','Big Data','Research Applications']

function TagRow({items}){return <div className="tag-row">{items.map(x=><span key={x}>{x}</span>)}</div>}

function MedicalScan(){
  return <div className="medical-scan" aria-label="Animated medical imaging research visual">
    <div className="scan-grid"/><div className="scan-head"><span>MEDICAL VISION</span><b>AI-assisted image analysis</b></div>
    <div className="scan-body"><div className="scan-skull"><span/><i/><b/></div><div className="scan-target t1"/><div className="scan-target t2"/><div className="scan-line"/></div>
    <div className="scan-metrics"><span>ROI detection</span><span>Explainability</span><span>Confidence analysis</span></div>
  </div>
}

function BangladeshMission(){
  return <section id="bangladesh" className="mission-section">
    <div className="mission-copy">
      <span className="mission-kicker">BANGLADESH · PURPOSE BEYOND PUBLICATIONS</span>
      <h2>Research should help the country that shaped me.</h2>
      <p>I want my work to contribute to a stronger Bangladesh — supporting farmers with practical agricultural AI, improving accessible disease-screening technology, strengthening data-driven healthcare and using modern computer vision to solve problems that matter locally. The goal is not technology for its own sake; it is technology that helps people grow, work and live better.</p>
      <div className="mission-tags"><span>Farmers & agriculture</span><span>Accessible health AI</span><span>Local data</span><span>Responsible innovation</span></div>
    </div>
    <div className="mission-visual">
      <div className="flying-flag"><div className="bd-flag"><i/></div><span>Bangladesh</span></div>
      <div className="bd-map"><i/><b>AI for impact</b></div>
    </div>
  </section>
}

export default function Home(){
  return <>
    <section id="home" className="hero-v5">
      <div className="hero-copy-v5">
        <motion.div className="international-pill" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
          <span>🇧🇩 Bangladesh</span><i>↔</i><span>🇰🇷 South Korea</span><b>International research collaboration</b>
        </motion.div>
        <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.06}}>COMPUTER VISION · DATA SCIENCE · APPLIED AI</motion.p>
        <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}>
          Research that moves from <em>models</em> to <strong>real use.</strong>
        </motion.h1>
        <motion.p className="hero-summary" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.2}}>{professionalSummary}</motion.p>
        <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}}>
          <button className="primary-action" onClick={()=>document.getElementById('research')?.scrollIntoView({behavior:'smooth'})}>Explore research <ArrowDown/></button>
          <Link className="dark-action" to="/profile">Professional profile <ArrowRight/></Link>
          <button className="soft-action" onClick={()=>document.getElementById('future')?.scrollIntoView({behavior:'smooth'})}><Rocket/> Next research</button>
        </motion.div>
        <div className="hero-role-strip">
          <div><BriefcaseBusiness/><span>Remote RA</span><b>MSIP · Woosong University, Korea</b></div>
          <div><UsersRound/><span>Current GTA</span><b>East West University</b></div>
          <div><GraduationCap/><span>M.Sc.</span><b>Expected Apr 2027 · InshaAllah</b></div>
        </div>
      </div>

      <motion.div className="hero-stage" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.85}}>
        <div className="hero-name-bg"><span>SAYMON</span><strong>HOSEN</strong></div>
        <div className="hero-halo halo-orange"/><div className="hero-halo halo-green"/>
        <img className="hero-cutout" src="./assets/polash-cutout-tight.png" alt="Md. Saymon Hosen Polash"/>
        <motion.div className="float-role fr-one" animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity}}><BrainCircuit/><div><small>RESEARCH</small><b>CV · XAI · Medical AI</b></div></motion.div>
        <motion.div className="float-role fr-two" animate={{y:[0,9,0]}} transition={{duration:5,repeat:Infinity}}><Sprout/><div><small>AGRICULTURE</small><b>Low-resource vision</b></div></motion.div>
        <motion.div className="float-role fr-three" animate={{x:[0,7,0]}} transition={{duration:5.6,repeat:Infinity}}><Database/><div><small>DATA</small><b>Big data · security analytics</b></div></motion.div>
      </motion.div>
    </section>

    <div className="ticker"><div>{[...ticker,...ticker].map((t,i)=><span key={i}>{t}<b>✦</b></span>)}</div></div>

    <motion.section id="about" className="section-wrap" {...reveal}>
      <SectionTitle index="01" eyebrow="ABOUT" title="Researcher, developer, teacher and research writer." lead="I work across problem formulation, model development, reproducible experimentation, interpretation, technical writing and deployment. My aim is to build AI systems that are scientifically sound and practically useful."/>
      <div className="about-grid">
        <article className="feature-card bright-card">
          <span className="card-label">CURRENT CHAPTER</span>
          <h3>M.Sc. study, research and academic teaching — together.</h3>
          <p>I completed my B.Sc. in Computer Science & Engineering at East West University in 2026. I am now pursuing an M.Sc. in Data Science and Statistics while continuing research and teaching responsibilities.</p>
          <div className="micro-grid"><div><Microscope/><b>Research</b><span>Design · training · evaluation · interpretation</span></div><div><Code2/><b>Development</b><span>Models · pipelines · web research tools</span></div><div><BookOpenCheck/><b>Writing</b><span>Journal · IEEE · reviewer-oriented revision</span></div></div>
        </article>
        <article className="international-card">
          <div className="flag-pair large"><span>🇧🇩</span><i>↔</i><span>🇰🇷</span></div>
          <span className="card-label">INTERNATIONAL RESEARCH</span>
          <h3>Research collaboration across Bangladesh and South Korea.</h3>
          <p>I work remotely with the Multimedia Signal & Image Processing (MSIP) Research Group at Woosong University, South Korea, while continuing my academic work at East West University in Bangladesh.</p>
          <img src="./assets/msip-role.png" alt="Remote research assistant role at MSIP Research Group and Woosong University"/>
        </article>
      </div>
    </motion.section>

    <motion.section id="experience" className="section-wrap experience-surface" {...reveal}>
      <SectionTitle index="02" eyebrow="EXPERIENCE" title="Research internationally. Teach locally. Keep learning continuously." lead="My current responsibilities connect research development, international collaboration and student support."/>
      <div className="roles-grid">
        {roles.map((r,i)=><article className="role-card role-card-text" key={r.title}>
          <div className="role-symbol"><span>{r.flag}</span><b>0{i+1}</b></div>
          <div className="role-body"><div className="role-top"><span>{r.period}</span><b>{i===0?'INTERNATIONAL':i===1?'CURRENT GTA':'TEACHING'}</b></div><h3>{r.title}</h3><strong>{r.organization}</strong><em>{r.institution}</em><p>{r.text}</p></div>
        </article>)}
      </div>
    </motion.section>

    <motion.section id="research" className="section-wrap research-section" {...reveal}>
      <SectionTitle index="03" eyebrow="RESEARCH" title="Start with the problem. Choose the model after." lead="My research interests are connected by practical impact, careful validation and stronger visual intelligence."/>
      <div className="research-grid">
        {researchAreas.map((r,i)=><article className={`research-card research-card-${i+1}`} key={r.title}><span>0{i+1}</span><h3>{r.title}</h3><p>{r.text}</p><TagRow items={r.tags}/></article>)}
      </div>
      <div className="medical-research-band">
        <MedicalScan/>
        <div><span className="card-label">MEDICAL COMPUTER VISION</span><h3>From pixels to interpretable clinical signals.</h3><p>I am interested in robust visual representations, explainability, multimodal reasoning and research applications that make model output easier to inspect rather than treating prediction as a black box.</p><div className="mini-points"><span><ScanLine/> Imaging pipelines</span><span><HeartPulse/> Disease detection</span><span><ShieldCheck/> Trustworthy evaluation</span></div></div>
      </div>
    </motion.section>

    <motion.section id="future" className="section-wrap future-section" {...reveal}>
      <SectionTitle index="04" eyebrow="NEXT RESEARCH" title="Going deeper into core vision and multimodal intelligence." lead="The next stage of my work is moving toward harder computer-vision questions, VLMs, multimodal learning, real-time detection and eventually perception for intelligent robotic systems."/>
      <div className="future-grid">{futureResearch.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      <div className="app-launch-strip"><Bot/><div><small>COMING NEXT</small><h3>Another research application is in development.</h3><p>Designed to translate advanced model outputs into a faster and more accessible research interface.</p></div><button onClick={()=>document.querySelector('.assistant-launcher')?.click()}>Ask the portfolio AI <ArrowRight/></button></div>
    </motion.section>

    <motion.section id="papers" className="section-wrap" {...reveal}>
      <SectionTitle index="05" eyebrow="PUBLICATIONS" title="Selected journal and conference research." lead="My publication work spans medical imaging, agriculture, cybersecurity, materials and explainable AI."/>
      <div className="publication-list">{publications.map((p,i)=><article key={p.title}><span className="pub-no">{String(i+1).padStart(2,'0')}</span><div><div className="pub-meta"><span>{p.type}</span><span>{p.year}</span><b>{p.badge}</b></div><h3>{p.title}</h3><p>{p.venue}</p></div></article>)}</div>
      <a className="profile-link-card" href={profile.scholar} target="_blank" rel="noreferrer"><div><small>GOOGLE SCHOLAR</small><h3>View the live publication and citation profile.</h3></div><ExternalLink/></a>
    </motion.section>

    <motion.section id="projects" className="section-wrap projects-section" {...reveal}>
      <SectionTitle index="06" eyebrow="PROJECTS" title="Research prototypes designed to be used, not only reported." lead="I am interested in the full path from data and model development to a usable interface."/>
      <div className="projects-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><div className="project-media"><img src={p.image} alt={p.title}/><span>PROJECT 0{i+1}</span></div><div className="project-body"><h3>{p.title}</h3><p>{p.text}</p><TagRow items={p.tags}/></div></article>)}</div>
    </motion.section>

    <motion.section id="people" className="section-wrap people-section" {...reveal}>
      <SectionTitle index="07" eyebrow="PEOPLE" title="Supervisors, mentors and collaborators." lead="The people around my academic work have shaped how I approach teaching, research and professional growth."/>
      <div className="people-grid">{people.map((p,i)=><article className="person-card" key={p.name}><div className="person-image"><img src={p.image} alt={p.name}/><span>0{i+1}</span></div><div><small>{p.role}</small><h3>{p.name}</h3><p>{p.detail}</p></div></article>)}</div>
    </motion.section>

    <motion.section className="section-wrap opportunities-preview" {...reveal}>
      <div><span className="card-label">DEDICATION & OPPORTUNITIES</span><h2>Consistent work, curiosity and a long research horizon.</h2><p>I value disciplined experimentation, learning from failed results, helping students, writing carefully and improving systems until they are reproducible. I am actively looking for research collaborations, strong Ph.D. environments and opportunities where I can contribute to computer vision, multimodal AI and data-driven problem solving.</p></div>
      <Link to="/outlook" className="primary-action">Read my research outlook <ArrowRight/></Link>
    </motion.section>

    <motion.section id="contact" className="section-wrap contact-section" {...reveal}>
      <SectionTitle index="08" eyebrow="CONNECT" title="Research collaboration, academic opportunities and technical work." lead="I am open to meaningful research conversations, future Ph.D. opportunities and collaborations where rigorous AI can address real problems."/>
      <div className="contact-grid">
        <div className="contact-main"><a href={`mailto:${profile.email}`}><span>Email</span><b>{profile.email}</b></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><b>md-saymon-hosen-polash</b></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><b>polash102</b></a></div>
        <div className="coding-links"><a href={profile.codeforces} target="_blank" rel="noreferrer"><Code2/><div><span>Codeforces</span><b>{profile.codeforcesHandle}</b></div><ExternalLink/></a><a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2/><div><span>LeetCode</span><b>{profile.leetcodeHandle}</b></div><ExternalLink/></a><a href={profile.researchgate} target="_blank" rel="noreferrer"><Microscope/><div><span>ResearchGate</span><b>Research profile</b></div><ExternalLink/></a></div>
      </div>
    </motion.section>

    <BangladeshMission/>
  </>
}
