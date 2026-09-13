import { motion } from 'framer-motion'

export function Page({eyebrow,title,lead,children}){
  return <motion.section className="page-shell" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
    <div className="page-title-block">
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      {lead && <p>{lead}</p>}
    </div>
    {children}
  </motion.section>
}

export function SectionTitle({index,eyebrow,title,lead}){
  return <div className="section-title-v5">
    <div className="section-label-v5"><span>{index}</span><b>{eyebrow}</b></div>
    <h2>{title}</h2>
    {lead && <p>{lead}</p>}
  </div>
}
