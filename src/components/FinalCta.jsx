import { CONTACT_EMAIL, REGISTER_URL } from "../data/site";

export default function FinalCta() {
  return (
    <section className="final-cta" aria-label="Register">
      <div className="container">
        <div className="cta-panel reveal">
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
