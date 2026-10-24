import { sponsors } from "../data/site";

export default function Sponsors() {
  return (
    <section className="sponsors" aria-label="Partner organizations">
      <div className="container">
        <div className="sponsors-inner reveal">
          <p className="sponsors-label">Partner organizations</p>
          <div className="sponsor-logos">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                className={`sponsor ${sponsor.className}`}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
              >
                <img src={sponsor.logo} alt={sponsor.showName ? "" : `${sponsor.name} logo`} />
                {sponsor.showName ? <span className="sponsor-name">{sponsor.name}</span> : null}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
