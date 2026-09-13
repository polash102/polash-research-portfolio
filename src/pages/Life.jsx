import { Page } from '../components/UI'
import { lifeMoments } from '../data/site'

const groups=['Sport & Well-being','Travel & Reset','People & Inspiration','Academic Milestones']

export default function Life(){
  return <Page eyebrow="PERSONAL LIFE" title="The person behind the papers." lead="An ordered gallery of sport, travel, inspiring people and academic milestones. Each photograph appears once, in a clear sequence rather than a random mosaic.">
    <div className="life-opening"><p>Research takes discipline, but balance matters too. Running and football help me stay active; travel gives me space to reset; and academic milestones and inspiring people remind me why I keep building toward a longer research journey.</p></div>
    <div className="life-groups">{groups.map((g,gi)=>{
      const items=lifeMoments.filter(x=>x.group===g)
      return <section className="life-group" key={g}>
        <div className="life-group-head"><span>{String(gi+1).padStart(2,'0')}</span><h2>{g}</h2></div>
        <div className="life-ordered-grid">{items.map((m,i)=><article key={m.title}>
          <div className="life-image"><img src={m.image} alt={m.title}/><span>{String(i+1).padStart(2,'0')}</span></div>
          <div className="life-text"><small>{m.group}</small><h3>{m.title}</h3><p>{m.text}</p></div>
        </article>)}</div>
      </section>
    })}</div>
  </Page>
}
