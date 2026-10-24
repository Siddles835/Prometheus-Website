import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { hackathonsIntro, pastHackathons } from "../data/site";

export default function HackathonPage() {
  return (
    <>
      <Seo
        title="Past Hackathons | Prometheus"
        description="Explore past Prometheus hackathons — AI, machine learning, and computer science challenges built through collaboration and shared progress."
        path="/hackathons"
      />
      <PageBanner
        label="Hackathons"
        title="Past Prometheus hackathons"
        lead={hackathonsIntro.lead}
      />
      <section className="hackathons-page">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Timeline</p>
            <h2 className="section-title">Events that shape collaboration</h2>
            <p className="section-lead">
              From hybrid ML builds to online AI challenges, these past hackathons created space for
              experimentation, partnership, and shipping real projects.
            </p>
          </div>

          <ol className="hackathon-timeline">
            {pastHackathons.map((event, index) => (
              <li className="hackathon-timeline-item reveal" key={event.id}>
                <div className="hackathon-timeline-marker" aria-hidden="true">
                  <span className="hackathon-timeline-dot" />
                  {index < pastHackathons.length - 1 ? (
                    <span className="hackathon-timeline-line" />
                  ) : null}
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

          <div className="seo-cta-row reveal">
            <Link className="btn btn-primary" to="/curriculum">
              Curriculum partnerships
            </Link>
            <Link className="btn btn-dark" to="/about">
              About Prometheus
            </Link>
            <Link className="btn btn-dark" to="/outreach">
              Curriculum development & outreach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
