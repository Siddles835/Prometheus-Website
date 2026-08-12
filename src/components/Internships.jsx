import { INTERNSHIP_URL, internshipHighlights } from "../data/site";
import { IconBuild, IconImpact, IconMentor } from "./icons/Icons";

const internshipIcons = [IconMentor, IconBuild, IconImpact];

const facts = [
  { value: "Flexible", label: "Remote-friendly roles" },
  { value: "Mentored", label: "Guided by staff leads" },
  { value: "Mission", label: "Free education for youth" },
];

export default function Internships() {
  return (
    <section className="internships">
      <div className="internships-bg" aria-hidden="true">
        <img src="/assets/graphics/constellation.svg" alt="" className="internships-constellation" />
      </div>
      <div className="container internships-grid">
        <div className="internship-intro-block reveal">
          <p className="section-label">Get involved</p>
          <h2 className="section-title">Make an impact while you learn.</h2>
          <p className="section-lead internship-intro">
            Apply to intern with Prometheus and help expand free tech education for youth.
          </p>
          <figure className="internship-visual">
            <img
              src="/assets/gallery/gallery-3.jpeg"
              alt="Prometheus students learning together"
              width="1600"
              height="1001"
              loading="lazy"
            />
          </figure>
          <ul className="internship-facts" aria-label="Internship highlights">
            {facts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
          <div className="internship-actions">
            <a
              className="btn btn-primary"
              href={INTERNSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to intern
            </a>
          </div>
        </div>
        <div className="internship-right reveal">
          <div className="internship-points">
            {internshipHighlights.map((item, index) => {
              const Icon = internshipIcons[index] || IconMentor;
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
              <li>Teaching assistants for live classes</li>
              <li>Curriculum and project helpers</li>
              <li>Community and ops support</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
