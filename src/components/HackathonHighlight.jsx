import { Link } from "react-router-dom";
import { hackathonsIntro, pastHackathons } from "../data/site";

export default function HackathonHighlight() {
  const preview = pastHackathons.slice(0, 3);

  return (
    <section className="hackathon-highlight" aria-label="Past Prometheus hackathons">
      <div className="container">
        <div className="section-head pathways-head reveal">
          <div>
            <p className="section-label">{hackathonsIntro.eyebrow}</p>
            <h2 className="section-title">{hackathonsIntro.title}</h2>
            <p className="section-lead">{hackathonsIntro.lead}</p>
            <div className="hackathon-actions">
              <Link className="btn btn-primary" to="/hackathons">
                View hackathon timeline
              </Link>
            </div>
          </div>
          <aside className="hackathon-prize-panel" aria-label="Hackathon impact">
            <p className="banner-aside-label">Impact so far</p>
            <strong>$1700+</strong>
            <span>In hackathon prizes awarded to student builders</span>
          </aside>
        </div>

        <ol className="hackathon-timeline hackathon-timeline--preview">
          {preview.map((event, index) => (
            <li className="hackathon-timeline-item reveal" key={event.id}>
              <div className="hackathon-timeline-marker" aria-hidden="true">
                <span className="hackathon-timeline-dot" />
                {index < preview.length - 1 ? <span className="hackathon-timeline-line" /> : null}
              </div>
              <article className="hackathon-timeline-card">
                <p className="hackathon-timeline-date">{event.date}</p>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <ul className="hackathon-timeline-tags" aria-label="Topics">
                  {event.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
