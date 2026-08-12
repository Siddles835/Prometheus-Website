import { INTERNSHIP_URL, internshipHighlights } from "../data/site";
import { IconBuild, IconImpact, IconMentor } from "./icons/Icons";

const internshipIcons = [IconMentor, IconBuild, IconImpact];

export default function Internships() {
  return (
    <section className="internships">
      <div className="internships-bg" aria-hidden="true">
        <img src="/assets/graphics/constellation.svg" alt="" className="internships-constellation" />
      </div>
      <div className="container internships-grid">
        <div className="reveal">
          <p className="section-lead internship-intro">
            Apply to intern with Prometheus and help expand free tech education for youth.
          </p>
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
        <div className="internship-points reveal">
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
      </div>
    </section>
  );
}
