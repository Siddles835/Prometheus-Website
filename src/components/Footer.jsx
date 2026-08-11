import { CONTACT_EMAIL } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/assets/brand/prometheus-hero-badge.png"
            alt="Prometheus"
            width="48"
            height="48"
          />
          <div>
            <span>PROMETHEUS</span>
            <p>Empowering students through code.</p>
          </div>
        </div>
        <div className="footer-meta">
          <p>
            Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p>© 2026 Prometheus.</p>
        </div>
      </div>
    </footer>
  );
}
