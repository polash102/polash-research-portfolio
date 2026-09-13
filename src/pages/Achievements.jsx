import { Award, BadgeCheck, BookOpenCheck, ExternalLink, Medal, Presentation } from 'lucide-react'
import { Page } from '../components/UI'
import { certificates } from '../data/site'

export default function Achievements(){
  const milestones=[
    [Medal,'Academic progress','B.Sc. completed in Computer Science & Engineering; now pursuing an M.Sc. in Data Science and Statistics.'],
    [Presentation,'Conference participation','Presentation and participation experience across IEEE and international research events.'],
    [BookOpenCheck,'Continuous technical learning','Structured learning in machine learning, SQL, data engineering, preprocessing, APIs and cybersecurity-related topics.'],
    [Award,'Research + teaching','Balancing research-assistant and teaching-assistant responsibilities with continued postgraduate study.']
  ]
  return <Page eyebrow="CERTIFICATES & ACHIEVEMENTS" title="Verified learning and academic milestones." lead="Direct credential links are included so visitors can verify the certificates from their original sources.">
    <div className="achievement-grid-v5">{milestones.map(([Icon,t,d])=><article key={t}><Icon/><h3>{t}</h3><p>{d}</p></article>)}</div>
    <div className="certificate-list-v5">{certificates.map((c,i)=><a key={c.title} href={c.url} target="_blank" rel="noreferrer"><span className="cert-num">{String(i+1).padStart(2,'0')}</span><div><small>{c.issuer} · {c.issued}</small><h3>{c.title}</h3>{c.id&&<p>Credential ID · {c.id}</p>}</div><BadgeCheck/><ExternalLink/></a>)}</div>
  </Page>
}
