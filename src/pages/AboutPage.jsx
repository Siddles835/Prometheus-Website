import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { OUTREACH_URL, aboutSections } from "../data/site";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Prometheus"
        description="Prometheus is a computer science curriculum and outreach organization that partners with schools, nonprofits, and education programs to design and scale CS curriculum."
        path="/about"
      />
      <PageBanner
        label="About Prometheus"
        title="Curriculum partnerships for education organizations"
        lead="Prometheus designs computer science curriculum and outreach frameworks so partner organizations can strengthen CS programming for their communities."
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
              <h2>Curriculum orientation</h2>
              <p>
                Every engagement is curriculum-first: clear progressions, project-based modules, and
                materials organizations can adapt. We also support outreach and community programming
                — including hackathons — that help partners activate and sustain CS offerings.
              </p>
            </article>
            <div className="seo-cta-row">
              <Link className="btn btn-primary" to="/curriculum">
                Curriculum partnerships
              </Link>
              <Link className="btn btn-dark" to="/outreach">
                Curriculum development & outreach
              </Link>
              <a
                className="btn btn-dark"
                href={OUTREACH_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get involved
              </a>
            </div>
          </div>
          <aside className="seo-side reveal">
            <p className="banner-aside-label">At a glance</p>
            <ul className="seo-side-list">
              <li>
                <strong>Curriculum</strong>
                <span>Frameworks partners can adopt and localize</span>
              </li>
              <li>
                <strong>Outreach</strong>
                <span>Partnerships that expand organizational CS capacity</span>
              </li>
              <li>
                <strong>Collaboration</strong>
                <span>Research and technology partners in the network</span>
              </li>
            </ul>
            <p className="seo-side-note">
              Explore{" "}
              <Link to="/curriculum">organizations we support</Link> or{" "}
              <Link to="/outreach">curriculum development & outreach</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
