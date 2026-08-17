import { Link } from "react-router-dom";

export default function BrandIntro() {
  return (
    <section className="brand-intro" aria-label="About Prometheus Coding">
      <div className="container brand-intro-grid">
        <div className="reveal">
          <p className="section-label">Prometheus Coding</p>
          <h2 className="section-title">Computer science education that starts with building</h2>
          <p className="section-lead">
            Prometheus is a coding education organization helping students learn Python,
            programming, and computer science. Through live coding classes, a clear curriculum, and
            hands-on projects, learners develop skills they can use in school, hackathons, and
            beyond.
          </p>
          <div className="brand-intro-links">
            <Link to="/about">About Prometheus</Link>
            <Link to="/curriculum">Explore the Prometheus Coding Curriculum</Link>
            <Link to="/python">Python Programming with Prometheus</Link>
          </div>
        </div>
        <aside className="brand-intro-panel reveal">
          <p className="banner-aside-label">What students learn</p>
          <ul>
            <li>Python fundamentals and programming practice</li>
            <li>Computer science concepts through projects</li>
            <li>A coding curriculum from beginner to machine learning</li>
            <li>Live mentorship in coding classes</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
