import { Link } from "react-router-dom";
import BannerAside from "../components/BannerAside";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { REGISTER_URL, aboutSections, stats } from "../data/site";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Prometheus"
        description="Prometheus is a coding and computer science education organization helping students learn Python, programming, and computer science through structured curriculum and projects."
        path="/about"
      />
      <PageBanner
        label="About Prometheus"
        title="About Prometheus"
        lead="Prometheus is a coding and computer science education organization focused on helping students develop programming skills through structured curriculum, projects, and learning opportunities."
        aside={<BannerAside variant="stats" />}
      />
      <section className="seo-page">
        <div className="container seo-page-grid">
          <div className="seo-prose reveal">
            {aboutSections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
            <article>
              <h2>Programs and opportunities</h2>
              <p>
                Beyond coding classes, Prometheus supports students through hackathons, mentoring,
                and internship pathways that turn computer science education into real experience.
              </p>
            </article>
            <div className="seo-cta-row">
              <Link className="btn btn-primary" to="/curriculum">
                Explore the Prometheus Coding Curriculum
              </Link>
              <Link className="btn btn-dark" to="/python">
                Python Programming with Prometheus
              </Link>
              <a
                className="btn btn-dark"
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for classes
              </a>
            </div>
          </div>
          <aside className="seo-side reveal">
            <p className="banner-aside-label">At a glance</p>
            <ul className="seo-side-list">
              {stats.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <p className="seo-side-note">
              Looking for details on our levels? See the{" "}
              <Link to="/curriculum">Prometheus Coding Curriculum</Link> or start with{" "}
              <Link to="/python">Python programming</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
