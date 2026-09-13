import { ArrowUpRight, BookOpen, BriefcaseBusiness, GraduationCap, Microscope, UsersRound } from 'lucide-react'
import { Page } from '../components/UI'
import { profile, professionalSummary, roles, researchAreas, skills } from '../data/site'

export default function Profile(){
  return <Page eyebrow="PROFESSIONAL PROFILE" title="Research summary, appointments and teaching experience." lead="A concise overview of my current academic work, international research collaboration, teaching responsibilities and the research areas I am developing further.">
    <section className="profile-summary-card">
      <div><span>SUMMARY</span><h2>Applied research with a growing core-vision focus.</h2><p>{professionalSummary}</p></div>
      <img src="./assets/polash-cutout-tight.png" alt="Md. Saymon Hosen Polash"/>
    </section>

    <section className="profile-edu-grid">
      <article><GraduationCap/><small>CURRENT STUDY</small><h3>{profile.currentStudy}</h3><p>{profile.university}</p><b>Expected completion · {profile.mastersExpected}, InshaAllah</b></article>
      <article><BookOpen/><small>UNDERGRADUATE</small><h3>B.Sc. in Computer Science & Engineering</h3><p>East West University</p><b>Completed · 2026</b></article>
      <article><Microscope/><small>FUTURE DIRECTION</small><h3>Ph.D. in Computer Vision / Multimodal AI</h3><p>Actively preparing for future research opportunities and stronger research environments.</p></article>
    </section>

    <section className="profile-section">
      <div className="profile-section-head"><span>01</span><div><small>CURRENT & PAST APPOINTMENTS</small><h2>Research internationally and support students locally.</h2></div></div>
      <div className="profile-role-list">{roles.map((r,i)=><article key={r.title}><img src={r.image} alt="Supervisor or research collaborator"/><div><div className="role-mini"><span>{r.flag}</span><b>{r.period}</b></div><h3>{r.title}</h3><strong>{r.organization}</strong><em>{r.institution}</em><p>{r.text}</p></div></article>)}</div>
    </section>

    <section className="international-profile-band">
      <div className="flag-pair xlarge"><span>🇧🇩</span><i>↔</i><span>🇰🇷</span></div>
      <div><small>INTERNATIONAL RESEARCH EXPERIENCE</small><h2>Bangladesh-based academic work with remote research collaboration in South Korea.</h2><p>My current research experience connects East West University in Bangladesh with the Multimedia Signal & Image Processing (MSIP) Research Group at Woosong University, South Korea. This has strengthened my experience in remote collaboration, research communication and working across institutional contexts.</p></div>
      <img src="./assets/msip-role.png" alt="Research Assistant roles at MSIP Research Group and Woosong University"/>
    </section>

    <section className="profile-section">
      <div className="profile-section-head"><span>02</span><div><small>RESEARCH SUMMARY</small><h2>Four connected research directions.</h2></div></div>
      <div className="profile-research-grid">{researchAreas.map((r,i)=><article key={r.title}><span>0{i+1}</span><h3>{r.title}</h3><p>{r.text}</p></article>)}</div>
    </section>

    <section className="profile-section">
      <div className="profile-section-head"><span>03</span><div><small>TECHNICAL TOOLKIT</small><h2>Tools I use across research and development.</h2></div></div>
      <div className="skill-cloud">{skills.map(s=><span key={s}>{s}</span>)}</div>
    </section>

    <section className="profile-links-band">
      <div><UsersRound/><h3>Open to meaningful collaboration</h3><p>Research collaborations, future Ph.D. discussions, computer-vision projects and academic opportunities are welcome.</p></div>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight/></a>
    </section>
  </Page>
}
