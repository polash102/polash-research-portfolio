import { ArrowUpRight, Compass, Flame, Search, Target } from 'lucide-react'
import { Page } from '../components/UI'
import { profile, futureResearch } from '../data/site'

export default function Outlook(){
  return <Page eyebrow="OUTLOOK & OPPORTUNITIES" title="Consistency, curiosity and a long research horizon." lead="I see research as a long-term practice: learn carefully, test honestly, write clearly, help others, and keep improving the work after the first result.">
    <section className="outlook-hero">
      <div><span>DEDICATION</span><h2>I am willing to do the slow work behind strong research.</h2><p>I value disciplined experimentation, reproducibility, careful evaluation and the patience to revisit an idea when the first version is not good enough. I try to learn from failed experiments instead of hiding them, and I enjoy helping students understand the reasoning behind code rather than only giving them an answer.</p></div>
      <div className="outlook-icon"><Flame/></div>
    </section>
    <div className="outlook-grid">
      <article><Target/><h3>What I am building toward</h3><p>Deeper computer vision, multimodal AI, VLMs, real-time detection, research applications and eventually perception systems that can interact with robotics and intelligent agents.</p></article>
      <article><Search/><h3>What I am looking for</h3><p>Strong research groups, serious collaborations, future Ph.D. opportunities and environments where I can contribute technically while continuing to develop as an independent researcher.</p></article>
      <article><Compass/><h3>How I want to work</h3><p>With clear research questions, reproducible code, thoughtful evaluation, respectful collaboration and an emphasis on problems that matter outside a benchmark table.</p></article>
    </div>
    <section className="opportunity-cta"><div><small>NEXT CHAPTER</small><h2>Open to research conversations and future Ph.D. opportunities.</h2><p>If your group works on computer vision, medical AI, multimodal learning, vision-language models or data-intensive intelligent systems, I would be glad to connect.</p></div><a href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight/></a></section>
  </Page>
}
