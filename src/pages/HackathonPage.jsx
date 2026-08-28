import { Link } from "react-router-dom";
import BannerAside from "../components/BannerAside";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { HACKATHON_URL, hackathon } from "../data/site";
import { IconBuild, IconImpact, IconMl } from "../components/icons/Icons";

const highlightIcons = [IconBuild, IconMl, IconImpact];

export default function HackathonPage() {
  return (
    <>
      <Seo
        title="AI & Machine Learning Hackathon | Prometheus"
        description="Join the Prometheus CS AI & Machine Learning Hybrid Hackathon. Build innovative projects, learn as you go, and register on Devpost."
        path="/hackathon"
      />
      <PageBanner
        label="Hackathon"
        title={hackathon.title}
        lead={hackathon.summary}
        aside={<BannerAside variant="stats" />}
      />
      <section className="seo-page">
        <div className="container seo-page-grid">
          <div className="seo-prose reveal">
            <article>
              <h2>{hackathon.name}</h2>
              <p>{hackathon.body}</p>
            </article>
            {hackathon.highlights.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
            <article>
              <h2>How to join</h2>
              <p>
                Register and submit your project through Devpost. Explore the rest of Prometheus
                Coding Education for classes, curriculum, and more ways to grow your skills.
              </p>
            </article>
            <div className="seo-cta-row">
              <a
                className="btn btn-primary"
                href={HACKATHON_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hackathon.registerLabel}
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
            <p className="banner-aside-label">Event focus</p>
            <ul className="hackathon-side-list">
              {hackathon.highlights.map((item, index) => {
                const Icon = highlightIcons[index] || IconMl;
                return (
                  <li key={item.title}>
                    <span className="graphic-icon small" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <p className="seo-side-note">
              Register and submit on{" "}
              <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer">
                Devpost
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
