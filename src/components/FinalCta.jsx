import { CONTACT_EMAIL, REGISTER_URL } from "../data/site";
import { FlameMark, OrbitGraphic } from "./icons/Icons";

export default function FinalCta() {
  return (
    <section className="final-cta" aria-label="Register">
      <div className="container">
        <div className="cta-panel reveal">
          <div className="cta-art" aria-hidden="true">
            <OrbitGraphic className="cta-orbit" />
            <FlameMark className="cta-flame" />
          </div>
          <img
            className="cta-logo"
            src="/assets/brand/prometheus-hero-badge.png"
            alt=""
            width="88"
            height="88"
          />
          <div className="cta-copy">
            <h2>Ready to start building?</h2>
            <p>
              Join free Python classes, learn with live guidance, and grow alongside a community of
              young innovators.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register now
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
