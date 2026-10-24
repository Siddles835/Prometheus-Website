import { OUTREACH_URL, outreachHighlights, outreachRoles } from "../data/site";
import { IconBuild, IconImpact, IconMentor } from "./icons/Icons";

const outreachIcons = [IconMentor, IconBuild, IconImpact];

export default function Outreach() {
  return (
    <section className="internships">
      <div className="internships-bg" aria-hidden="true">
        <img src="/assets/graphics/constellation.svg" alt="" className="internships-constellation" />
      </div>
      <div className="container internships-grid">
        <div className="internship-intro-block reveal">
          <p className="section-label">Get involved</p>
          <h2 className="section-title">Build curriculum. Grow partnerships.</h2>
          <p className="section-lead internship-intro">
            Join Prometheus on curriculum development and organization outreach — work that helps
            education partners design stronger CS pathways and reach their communities.
          </p>
          <figure className="internship-visual">
            <img
              src="/assets/gallery/gallery-3.jpeg"
              alt="Prometheus collaborators working on curriculum and outreach"
              width="1600"
              height="1001"
              loading="lazy"
            />
          </figure>
          <div className="internship-actions">
            <a
              className="btn btn-primary"
              href={OUTREACH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to get involved
            </a>
          </div>
        </div>
        <div className="internship-right reveal">
          <div className="internship-points">
            {outreachHighlights.map((item, index) => {
              const Icon = outreachIcons[index] || IconMentor;
              return (
                <article className="internship-point" key={item.title}>
                  <span className="graphic-icon graphic-icon--on-dark" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <aside className="internship-roles">
            <p className="banner-aside-label">Currently seeking</p>
            <ul>
              {outreachRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
