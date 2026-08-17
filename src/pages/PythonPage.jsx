import { Link } from "react-router-dom";
import BannerAside from "../components/BannerAside";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { REGISTER_URL, levels, pythonHighlights } from "../data/site";

export default function PythonPage() {
  return (
    <>
      <Seo
        title="Python Programming | Prometheus"
        description="Learn Python programming with Prometheus. Coding classes covering Python fundamentals, advanced Python, and machine learning projects."
        path="/python"
      />
      <PageBanner
        label="Python"
        title="Python Programming with Prometheus"
        lead="Learn Python through structured coding classes — from beginner fundamentals to advanced programming and machine learning projects."
        aside={<BannerAside variant="path" />}
      />
      <section className="seo-page">
        <div className="container seo-page-grid">
          <div className="seo-prose reveal">
            <article>
              <h2>Why learn Python at Prometheus</h2>
              <p>
                Python is a practical language for beginners and a powerful tool for computer
                science, automation, and AI. Prometheus Coding helps students learn Python with live
                guidance, clear lessons, and projects that make programming feel achievable.
              </p>
            </article>
            {pythonHighlights.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
            <article>
              <h2>Python levels in the curriculum</h2>
              <ul className="seo-level-list">
                {levels.map((level) => (
                  <li key={level.num}>
                    <strong>{level.title}</strong>
                    <span>{level.description}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="seo-cta-row">
              <a
                className="btn btn-primary"
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for Python classes
              </a>
              <Link className="btn btn-dark" to="/curriculum">
                Explore the Prometheus Coding Curriculum
              </Link>
              <Link className="btn btn-dark" to="/about">
                About Prometheus
              </Link>
            </div>
          </div>
          <aside className="seo-side reveal">
            <p className="banner-aside-label">Topics include</p>
            <ul className="seo-topic-cloud">
              {levels.flatMap((level) => level.topics).map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
