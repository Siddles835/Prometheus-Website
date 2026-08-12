import { Link } from "react-router-dom";
import { CONTACT_EMAIL, INTERNSHIP_URL, REGISTER_URL, navLinks } from "../data/site";

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
            Free Python and AI education for youth innovators — project-first classes, live
            guidance, and a community built to grow.
          </p>
          <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
            Contact us today
          </a>
        </div>

        <div className="footer-col">
          <h3>Quick links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </li>
            <li>
              <a href={INTERNSHIP_URL} target="_blank" rel="noopener noreferrer">
                Apply to intern
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
            <li>Free classes for students</li>
            <li>Hackathons, mentoring, and community</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Prometheus. Empowering students through code.</p>
      </div>
    </footer>
  );
}
