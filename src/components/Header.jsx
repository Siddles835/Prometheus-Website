import { useEffect, useState } from "react";
import { REGISTER_URL, navLinks } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " nav-open" : ""}`}
      id="site-header"
    >
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Prometheus home" onClick={closeMenu}>
          <img
            className="brand-mark"
            src="/assets/brand/prometheus-hero-badge.png"
            alt="Prometheus"
            width="44"
            height="44"
          />
          <span>PROMETHEUS</span>
        </a>
        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
        <ul className="nav-links" id="nav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-cta"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
