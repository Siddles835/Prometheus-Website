import { INTERNSHIP_URL, internshipHighlights } from "../data/site";

export default function Internships() {
  return (
    <section id="internships" className="internships">
      <div className="container internships-grid">
        <div className="reveal">
          <p className="section-label">Internships</p>
          <h2 className="section-title">Intern at Prometheus</h2>
          <p className="section-lead">
            Want to help teach coding, support programs, and grow with a nonprofit building the next
            generation of tech talent? Apply to intern with Prometheus.
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
