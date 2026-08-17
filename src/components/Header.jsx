import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { REGISTER_URL, navLinks } from "../data/site";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (!isHome) {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

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
      className={`site-header${scrolled || !isHome ? " is-scrolled" : ""}${open ? " nav-open" : ""}`}
      id="site-header"
    >
      <div className="nav-shell">
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="Prometheus home" onClick={closeMenu}>
            <img
              className="brand-mark"
              src="/assets/brand/prometheus-hero-badge.png"
              alt="Prometheus"
              width="40"
              height="40"
            />
            <span>PROMETHEUS</span>
          </Link>
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
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {link.label}
                </NavLink>
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
                Apply to intern
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
