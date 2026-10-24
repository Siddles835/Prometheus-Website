import { Link } from "react-router-dom";
import { CONTACT_MAILTO, OUTREACH_URL, contacts } from "../data/site";
import { FlameMark, OrbitGraphic } from "./icons/Icons";

const facts = ["Curriculum partnerships", "Organization outreach", "Shared frameworks"];

export default function FinalCta() {
  return (
    <section className="final-cta" aria-label="Partner with Prometheus">
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
            <h2>Ready to partner with Prometheus?</h2>
            <p>
              Work with us on computer science curriculum design and organization outreach — so
              education programs can strengthen CS offerings with frameworks built for partners.
            </p>
            <p className="cta-contact-line">
              Contact {contacts[0].name} at{" "}
              <a href={`mailto:${contacts[0].email}`}>{contacts[0].email}</a> and{" "}
              {contacts[1].name} at{" "}
              <a href={`mailto:${contacts[1].email}`}>{contacts[1].email}</a>.
            </p>
            <ul className="cta-facts" aria-label="Partnership highlights">
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={OUTREACH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get involved
            </a>
            <Link className="btn btn-ghost" to="/curriculum">
              See partnerships
            </Link>
            <a className="btn btn-ghost" href={`mailto:${CONTACT_MAILTO}`}>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
