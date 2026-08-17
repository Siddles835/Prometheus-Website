import { CONTACT_EMAIL, REGISTER_URL } from "../data/site";
import { FlameMark, OrbitGraphic } from "./icons/Icons";

const facts = ["Free for students", "Live mentors", "Project-first path"];

export default function FinalCta() {
  return (
    <section className="final-cta" aria-label="Apply to intern">
      <div className="container">
        <div className="cta-panel reveal">
          <div className="cta-art" aria-hidden="true">
            <OrbitGraphic className="cta-orbit" />
            <FlameMark className="cta-flame" />
            <img src="/assets/graphics/constellation.svg" alt="" className="cta-constellation" />
          </div>
          <img
            className="cta-logo"
            src="/assets/brand/prometheus-hero-badge.png"
            alt=""
            width="88"
            height="88"
          />
          <div className="cta-copy">
            <h2>Ready to learn with Prometheus?</h2>
            <p>
              Join Prometheus coding classes to learn Python, programming, and computer science with
              live guidance and a project-first curriculum.
            </p>
            <ul className="cta-facts" aria-label="Program highlights">
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to intern
            </a>
            <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
