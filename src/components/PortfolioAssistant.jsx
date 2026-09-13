import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, ChevronDown, Cpu, Database, Send, Sparkles, X } from 'lucide-react'
import { profile, professionalSummary, roles, publications, researchAreas, futureResearch, certificates, people } from '../data/site'

const glossary = [
  {q:'computer vision cv image vision', a:'Computer vision is the area of AI that enables machines to interpret images and video. Saymon uses it in plant-disease recognition, medical imaging, detection and explainability.'},
  {q:'vlm vision language model', a:'A vision-language model (VLM) connects visual information with language reasoning. It is one of Saymon’s next research directions for richer multimodal understanding.'},
  {q:'rag retrieval augmented generation', a:'RAG retrieves relevant knowledge before generating a response. This portfolio assistant uses a lightweight local retrieval approach over Saymon’s portfolio knowledge and an AI glossary.'},
  {q:'yolo object detection real time', a:'YOLO is a family of real-time object-detection models. Saymon is interested in going deeper into detection, localization and efficient computer-vision systems.'},
  {q:'gradcam explainable ai xai', a:'Grad-CAM highlights image regions that influence a CNN prediction. It is useful for making medical and agricultural image-classification decisions easier to inspect.'},
  {q:'multimodal ai', a:'Multimodal AI combines more than one information type, such as images, text and structured clinical data. Saymon plans to expand further into this direction.'},
  {q:'cybersecurity', a:'Saymon’s cybersecurity interest includes imbalanced attack-detection data, machine-learning analysis and reliable evaluation of security datasets.'},
  {q:'big data', a:'Saymon is interested in scalable preprocessing, structured-data pipelines and handling larger datasets as part of his data-science and research work.'}
]

function tokenize(s=''){
  return s.toLowerCase().replace(/[^a-z0-9+.# ]/g,' ').split(/\s+/).filter(x=>x.length>1)
}

export default function PortfolioAssistant(){
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState('')
  const [messages,setMessages]=useState([
    {from:'bot',text:'Hi! Welcome to Saymon’s portfolio. I can answer questions about his research, teaching, publications, education, certificates, international work and future research directions. I can also explain common AI terms such as VLM, RAG, YOLO and Grad-CAM.'}
  ])
  const endRef=useRef(null)

  const kb=useMemo(()=>{
    const items=[
      {q:'summary profile who is saymon polash about',a:professionalSummary},
      {q:'education masters msc east west university completion april 2027',a:`Saymon is pursuing an M.Sc. in Data Science and Statistics at East West University, with expected completion in April 2027, InshaAllah.`},
      {q:'phd future opportunity doctoral',a:'He is actively preparing for future Ph.D. opportunities in computer vision, multimodal AI, vision-language models and intelligent systems.'},
      {q:'github coding profile',a:`GitHub: ${profile.github}`},
      {q:'linkedin professional',a:`LinkedIn: ${profile.linkedin}`},
      {q:'codeforces competitive programming',a:`Codeforces handle: ${profile.codeforcesHandle} — ${profile.codeforces}`},
      {q:'leetcode coding problems',a:`LeetCode handle: ${profile.leetcodeHandle} — ${profile.leetcode}`},
      ...roles.map(r=>({q:`work job role ${r.title} ${r.organization} ${r.institution} teaching research assistant gta uta korea woosong`,a:`${r.title} — ${r.organization}${r.institution?`, ${r.institution}`:''} (${r.period}). ${r.text}`})),
      ...researchAreas.map(r=>({q:`research ${r.title} ${r.tags.join(' ')}`,a:`${r.title}: ${r.text}`})),
      ...futureResearch.map(([t,d])=>({q:`future next research ${t}`,a:`${t}: ${d}`})),
      ...people.map(p=>({q:`mentor supervisor person ${p.name} ${p.role}`,a:`${p.name} — ${p.role}. ${p.detail}`})),
      ...publications.map(p=>({q:`paper publication ${p.title} ${p.venue} ${p.year} ${p.type}`,a:`${p.title}. ${p.type}, ${p.venue}, ${p.year}.`})),
      ...certificates.map(c=>({q:`certificate credential ${c.title} ${c.issuer}`,a:`${c.title} — ${c.issuer}, issued ${c.issued}. Verification: ${c.url}`})),
      ...glossary
    ]
    return items
  },[])

  function answer(query){
    const q=query.trim()
    if(!q) return
    const lower=q.toLowerCase()
    if(/^(hi|hello|hey|assalamu|salam|how are you)/.test(lower)){
      return 'Hello! I’m doing well — thanks for visiting. Ask me anything about Saymon’s research, teaching, publications, academic journey, coding profiles or future research plans.'
    }
    const qt=tokenize(q)
    const ranked=kb.map(item=>{
      const bag=new Set(tokenize(item.q+' '+item.a))
      let score=0
      qt.forEach(t=>{ if(bag.has(t)) score+=3; else if([...bag].some(x=>x.includes(t)||t.includes(x))) score+=1 })
      return {...item,score}
    }).sort((a,b)=>b.score-a.score)
    const best=ranked.filter(x=>x.score>0).slice(0,4)
    if(!best.length){
      return 'I could not find a strong match in the local portfolio knowledge base. Try asking about research interests, current roles, East West University, Woosong University, publications, certificates, Ph.D. plans, VLM, RAG, YOLO, medical imaging, agriculture, GitHub, Codeforces or LeetCode. This fast portfolio assistant runs locally and does not send your message to an external LLM.'
    }
    return best.slice(0,2).map(x=>x.a).join('\n\n')
  }

  function ask(q){
    const text=(q||'').trim(); if(!text) return
    setMessages(m=>[...m,{from:'user',text},{from:'bot',text:answer(text)}])
    setInput('')
    setTimeout(()=>endRef.current?.scrollIntoView({behavior:'smooth'}),50)
  }

  function submit(e){
    e?.preventDefault()
    ask(input)
  }

  const quick=['What is his current work?','What are his research interests?','Tell me about his teaching experience','What are his Ph.D. goals?']

  return <>
    <button className="assistant-launcher" onClick={()=>setOpen(true)} aria-label="Open portfolio assistant">
      <span className="assistant-live-dot"/><Bot/><div><small>ASK POLASH AI</small><b>Portfolio RAG</b></div>
    </button>
    <AnimatePresence>
      {open && <motion.aside className="assistant-panel" initial={{opacity:0,x:45,scale:.98}} animate={{opacity:1,x:0,scale:1}} exit={{opacity:0,x:45,scale:.98}}>
        <div className="assistant-head">
          <div className="assistant-avatar"><Bot/></div>
          <div><b>Polash AI</b><span>Local portfolio assistant</span></div>
          <button onClick={()=>setOpen(false)}><X/></button>
        </div>
        <div className="assistant-params">
          <span><Cpu/> Mode <b>RAG-lite</b></span>
          <span><Database/> Retriever <b>top-k 4</b></span>
          <span><Sparkles/> Response <b>deterministic</b></span>
        </div>
        <div className="assistant-messages">
          {messages.map((m,i)=><div key={i} className={`msg ${m.from}`}><span>{m.text}</span></div>)}
          <div ref={endRef}/>
        </div>
        <div className="assistant-quick">
          {quick.map(q=><button key={q} onClick={()=>ask(q)}>{q}</button>)}
        </div>
        <form className="assistant-form" onSubmit={submit}>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about Saymon, or try: What is VLM?"/>
          <button type="submit"><Send/></button>
        </form>
        <div className="assistant-note"><ChevronDown/> Fast local knowledge retrieval. No external API key required.</div>
      </motion.aside>}
    </AnimatePresence>
  </>
}
