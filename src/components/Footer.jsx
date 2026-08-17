import { Link } from "react-router-dom";
import { CONTACT_EMAIL, INTERNSHIP_URL, footerLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <img
              src="/assets/brand/prometheus-hero-badge.png"
              alt="Prometheus"
              width="52"
              height="52"
            />
            <span>PROMETHEUS</span>
          </div>
          <p>
            Prometheus is a coding and computer science education organization — helping students
            learn Python, programming, and computer science through project-first classes and live
            guidance.
          </p>
          <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
            Contact Prometheus
          </a>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href={INTERNSHIP_URL} target="_blank" rel="noopener noreferrer">
                Apply to intern at Prometheus
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>Coding classes for students</li>
            <li>Python, computer science, and community</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Prometheus. Coding &amp; computer science education.</p>
      </div>
    </footer>
  );
}
