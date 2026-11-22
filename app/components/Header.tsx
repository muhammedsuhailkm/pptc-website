"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

// Must match the mobile breakpoint in globals.css
const MOBILE_QUERY = "(max-width: 860px)";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes (incl. browser back/forward).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Close if the viewport grows past the mobile breakpoint (e.g. rotation).
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (!e.matches) setOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);
  const className = ["nav", open && "open", scrolled && "scrolled"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className="nav-inner">
        <Link className="logo" href="/" onClick={close}>
          <img className="logo-mark" src="/images/logo.png" alt="PPT Logo" />
          <span>Precision Presstools<br /><small>Coimbatore · Manufacturer</small></span>
        </Link>
        <nav aria-label="Main">
          <ul className="nav-links" id="site-menu">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : undefined}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-menu-cta">
              <Link className="btn btn-accent" href="/contact" onClick={close}>Request a quote</Link>
            </li>
          </ul>
        </nav>
        <Link className="btn btn-dark nav-cta" href="/contact" onClick={close}>Request a quote</Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && <div className="nav-backdrop" aria-hidden="true" onClick={close} />}
    </header>
  );
}
