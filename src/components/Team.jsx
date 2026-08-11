import { teamTiers } from "../data/site";

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">Our team</p>
          <h2 className="section-title">Meet the people behind Prometheus</h2>
          <p className="section-lead">
            Educators, leaders, and community builders working together to make technology education
            more accessible.
          </p>
        </div>

        {teamTiers.map((tier) => (
          <div className="team-tier reveal" key={tier.label}>
            <p className="tier-label">{tier.label}</p>
            <div className={`team-grid${tier.cols === 2 ? " cols-2" : ""}`}>
              {tier.members.map((member, index) => (
                <article className="person" key={`${tier.label}-${member.role}-${index}`}>
                  <img
                    className="person-avatar"
                    src="/assets/brand/prometheus-hero-badge.png"
                    alt=""
                  />
                  <div>
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p className="bio">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
