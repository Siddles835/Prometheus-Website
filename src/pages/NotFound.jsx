import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found-inner reveal">
        <p className="section-label">404</p>
        <h1 className="page-banner-title">Page not found</h1>
        <p className="page-banner-lead">
          That page doesn’t exist. Head back home to keep exploring Prometheus.
        </p>
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
