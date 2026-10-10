import { Link } from "react-router-dom";
import {
  HACKATHON_URL,
  INTERNSHIP_URL,
  REGISTER_URL,
  contacts,
  footerLinks,
} from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
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
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Register for Prometheus classes
              </a>
            </li>
            <li>
              <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer">
                Register for the AI &amp; ML Hackathon on Devpost
              </a>
            </li>
            <li>
              <a href={INTERNSHIP_URL} target="_blank" rel="noopener noreferrer">
                Apply to intern at Prometheus
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contacts">
            {contacts.map((person) => (
              <li key={person.email}>
                <span className="footer-contact-name">Contact {person.name}</span>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Prometheus. Coding &amp; computer science education.</p>
      </div>
    </footer>
  );
}
