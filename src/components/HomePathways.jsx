import { Link } from "react-router-dom";
import { IconLive, IconMentor, IconMl } from "./icons/Icons";
import PathRail from "./PathRail";

const pathways = [
  {
    to: "/why",
    label: "Why Prometheus",
    title: "Structure with real support",
    body: "Live guidance, professional instructors, and a project-first path.",
    Icon: IconLive,
  },
  {
    to: "/levels",
    label: "Learning path",
    title: "From Python to ML",
    body: "Basic Python, Advanced Python, and Machine Learning — step by step.",
    Icon: IconMl,
  },
  {
    to: "/internships",
    label: "Internships",
    title: "Grow by giving back",
    body: "Teach, mentor, and help expand free tech education for youth.",
    Icon: IconMentor,
  },
];

export default function HomePathways() {
  return (
    <section className="pathways" aria-label="Explore Prometheus">
      <div className="container">
        <div className="section-head pathways-head reveal">
          <div>
            <p className="section-label">Explore</p>
            <h2 className="section-title">Built for ambitious learners</h2>
            <p className="section-lead">
              Dive into the experience, curriculum, and ways to contribute — each path designed to
              help students grow with confidence.
            </p>
          </div>
          <div className="pathways-rail-panel">
            <p className="banner-aside-label">Curriculum path</p>
            <PathRail />
          </div>
        </div>

        <div className="pathways-grid">
          {pathways.map(({ to, label, title, body, Icon }) => (
            <Link key={to} to={to} className="pathway-tile reveal">
              <span className="graphic-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="pathway-label">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="pathway-link">Explore</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
