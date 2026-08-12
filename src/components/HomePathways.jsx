import { Link } from "react-router-dom";
import { IconAdvanced, IconCode, IconImpact, IconLive, IconMl, IconMentor } from "./icons/Icons";

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

const mini = [
  { label: "Basic Python", Icon: IconCode },
  { label: "Advanced Python", Icon: IconAdvanced },
  { label: "Machine Learning", Icon: IconMl },
  { label: "Community impact", Icon: IconImpact },
];

export default function HomePathways() {
  return (
    <section className="pathways" aria-label="Explore Prometheus">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">Explore</p>
          <h2 className="section-title">Built for ambitious learners</h2>
          <p className="section-lead">
            Dive into the experience, curriculum, and ways to contribute — each path designed to
            help students grow with confidence.
          </p>
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

        <div className="mini-graphics reveal" aria-hidden="true">
          {mini.map(({ label, Icon }) => (
            <div className="mini-graphic" key={label}>
              <span className="graphic-icon small">
                <Icon />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
