import { Link } from "react-router-dom";
import { IconBuild, IconImpact, IconMl } from "./icons/Icons";

const pathways = [
  {
    to: "/about",
    label: "About",
    title: "Mission and approach",
    body: "Learn how Prometheus partners with organizations on curriculum and outreach.",
    Icon: IconImpact,
    linkText: "About Prometheus",
  },
  {
    to: "/curriculum",
    label: "Curriculum",
    title: "Organizations we support",
    body: "See the partners we help enhance computer science education offerings for.",
    Icon: IconMl,
    linkText: "Curriculum partnerships",
  },
  {
    to: "/outreach",
    label: "Outreach",
    title: "Curriculum development & outreach",
    body: "Join work that builds curriculum and expands partnerships with education organizations.",
    Icon: IconBuild,
    linkText: "Explore outreach",
  },
];

export default function HomePathways() {
  return (
    <section className="pathways" aria-label="Explore Prometheus">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">Explore</p>
          <h2 className="section-title">Built for organizational impact</h2>
          <p className="section-lead">
            Curriculum partnerships, outreach collaboration, and community programming — designed
            to help education organizations grow stronger CS offerings.
          </p>
        </div>

        <div className="pathways-grid">
          {pathways.map(({ to, label, title, body, Icon, linkText }) => (
            <Link key={to} to={to} className="pathway-tile reveal">
              <span className="graphic-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="pathway-label">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="pathway-link">{linkText}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
