import { INTERNSHIP_URL, internshipHighlights } from "../data/site";

export default function Internships() {
  return (
    <section className="internships">
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
          {internshipHighlights.map((item) => (
            <article className="internship-point" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
