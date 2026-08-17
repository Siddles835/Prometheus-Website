import { Link } from "react-router-dom";
import { IconCode, IconLive, IconMl } from "./icons/Icons";
import PathRail from "./PathRail";

const pathways = [
  {
    to: "/about",
    label: "About Prometheus",
    title: "Coding education with a clear mission",
    body: "Learn who Prometheus is and how we help students build real computer science skills.",
    Icon: IconLive,
    linkText: "About Prometheus",
  },
  {
    to: "/curriculum",
    label: "Curriculum",
    title: "A structured coding curriculum",
    body: "Follow the Prometheus path from Basic Python to Advanced Python and Machine Learning.",
    Icon: IconMl,
    linkText: "Explore the Prometheus Coding Curriculum",
  },
  {
    to: "/python",
    label: "Python",
    title: "Learn Python with Prometheus",
    body: "Coding classes focused on Python programming — from fundamentals to applied projects.",
    Icon: IconCode,
    linkText: "Python Programming with Prometheus",
  },
];

export default function HomePathways() {
  return (
    <section className="pathways" aria-label="Explore Prometheus">
      <div className="container">
        <div className="section-head pathways-head reveal">
          <div>
            <p className="section-label">Explore Prometheus</p>
            <h2 className="section-title">Coding education for ambitious learners</h2>
            <p className="section-lead">
              Prometheus Coding Education connects computer science learning with practical
              programming — so students can learn Python, build projects, and grow with confidence.
            </p>
          </div>
          <div className="pathways-rail-panel">
            <p className="banner-aside-label">Curriculum path</p>
            <PathRail />
          </div>
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
