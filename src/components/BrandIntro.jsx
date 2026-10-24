import { Link } from "react-router-dom";

export default function BrandIntro() {
  return (
    <section className="brand-intro" aria-label="About Prometheus">
      <div className="container brand-intro-grid">
        <div className="reveal">
          <p className="section-label">Prometheus</p>
          <h2 className="section-title">Curriculum built for organizations</h2>
          <p className="section-lead">
            We work with education organizations to enhance computer science programming — from
            curriculum design and sequencing to outreach that helps partners reach their
            communities. Prometheus is a curriculum and outreach collaborator for organizations.
          </p>
          <div className="brand-intro-links">
            <Link to="/about">About Prometheus</Link>
            <Link to="/curriculum">Curriculum partnerships</Link>
            <Link to="/outreach">Curriculum development & outreach</Link>
          </div>
        </div>
        <aside className="brand-intro-panel reveal">
          <p className="banner-aside-label">What we focus on</p>
          <ul>
            <li>CS curriculum frameworks for partner organizations</li>
            <li>Outreach that grows sustainable education programs</li>
            <li>Collaboration with research and technology partners</li>
            <li>Community events like hackathons</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
