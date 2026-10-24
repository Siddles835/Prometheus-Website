import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { OUTREACH_URL, curriculumFocus, partnerOrgs } from "../data/site";

export default function CurriculumPage() {
  return (
    <>
      <Seo
        title="Curriculum Partnerships | Prometheus"
        description="Prometheus partners with education organizations to enhance computer science curriculum — frameworks, sequencing, and outreach that strengthen CS programming."
        path="/curriculum"
      />
      <PageBanner
        label="Curriculum"
        title="Curriculum built with organizations"
        lead="Prometheus helps education organizations enhance computer science offerings — with curriculum frameworks, sequencing, and partnership support oriented to each organization’s mission."
      />
      <section className="seo-page seo-page--tight">
        <div className="container reveal">
          <div className="seo-prose seo-prose--wide">
            <h2>How curriculum partnerships work</h2>
            <p>
              We collaborate with organizations that already serve learners — schools, nonprofits,
              research groups, and education programs — to strengthen computer science curriculum
              and outreach. Partners keep ownership of their programs; Prometheus contributes
              design, structure, and shared resources.
            </p>
          </div>
        </div>
      </section>

      <section className="pathways" aria-label="Curriculum focus">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Focus</p>
            <h2 className="section-title">What we bring to partners</h2>
            <p className="section-lead">
              Curriculum architecture and outreach support designed for organizational delivery and
              partner-owned programs.
            </p>
          </div>
          <div className="pathways-grid">
            {curriculumFocus.map((item) => (
              <article className="pathway-tile reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-page" aria-label="Organizations we support">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Partners</p>
            <h2 className="section-title">Organizations we help enhance education for</h2>
            <p className="section-lead">
              Prometheus collaborates with technology and research organizations to strengthen CS
              curriculum and outreach capacity across education programs.
            </p>
          </div>
          <div className="pathways-grid">
            {partnerOrgs.map((org) => (
              <a
                key={org.name}
                className="pathway-tile reveal"
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pathway-label">{org.focus}</span>
                <h3>{org.name}</h3>
                <p>{org.body}</p>
                <span className="pathway-link">Visit partner</span>
              </a>
            ))}
          </div>
          <div className="seo-cta-row reveal" style={{ marginTop: "2.5rem" }}>
            <a
              className="btn btn-primary"
              href={OUTREACH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner with Prometheus
            </a>
            <Link className="btn btn-dark" to="/about">
              About Prometheus
            </Link>
            <Link className="btn btn-dark" to="/outreach">
              Curriculum development & outreach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
