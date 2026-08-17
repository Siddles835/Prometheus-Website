import { Link } from "react-router-dom";
import BannerAside from "../components/BannerAside";
import Levels from "../components/Levels";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import { REGISTER_URL } from "../data/site";

export default function CurriculumPage() {
  return (
    <>
      <Seo
        title="Coding Curriculum | Prometheus"
        description="Explore the Prometheus Coding Curriculum — a clear path from Basic Python to Advanced Python and Machine Learning for students learning computer science."
        path="/curriculum"
      />
      <PageBanner
        label="Curriculum"
        title="Prometheus Coding Curriculum"
        lead="A structured coding curriculum that helps students learn Python, programming, and computer science — step by step from fundamentals to machine learning."
        aside={<BannerAside variant="path" />}
      />
      <section className="seo-page seo-page--tight">
        <div className="container reveal">
          <div className="seo-prose seo-prose--wide">
            <h2>How the Prometheus curriculum works</h2>
            <p>
              The Prometheus Coding Curriculum is designed for students who want more than isolated
              coding lessons. Each level builds programming confidence through live classes,
              practice, and projects that connect computer science concepts to real outcomes.
            </p>
            <p>
              Start with Python fundamentals, progress into advanced programming techniques, then
              apply what you learn in machine learning projects. Prefer a deeper look at our Python
              track? Visit{" "}
              <Link to="/python">Python Programming with Prometheus</Link>.
            </p>
            <div className="seo-cta-row">
              <a
                className="btn btn-primary"
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for the curriculum
              </a>
              <Link className="btn btn-dark" to="/about">
                About Prometheus
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Levels />
    </>
  );
}
