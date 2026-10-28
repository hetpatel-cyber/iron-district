"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/training", label: "Training & Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backgroundColor: scrolled
            ? "rgba(13,13,13,0.97)"
            : "var(--color-charcoal-950)",
          borderBottom: scrolled
            ? "1px solid var(--color-charcoal-700)"
            : "1px solid var(--color-charcoal-800)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Iron District Fitness — Home"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "var(--color-lime-400)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-barlow), var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "var(--color-charcoal-950)",
                  letterSpacing: "-0.02em",
                }}
              >
                ID
              </span>
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div
                style={{
                  fontFamily: "var(--font-barlow), var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.0625rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-offwhite-50)",
                }}
              >
                Iron District
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.625rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--color-grey-400)",
                }}
              >
                Fitness
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul
            role="list"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: isActive
                        ? "var(--color-lime-400)"
                        : "var(--color-offwhite-50)",
                      textDecoration: "none",
                      padding: "0.5rem 0.75rem",
                      borderBottom: isActive
                        ? "2px solid var(--color-lime-400)"
                        : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            className="hidden-mobile"
          >
            <Link
              href={`tel:${siteConfig.contact.phoneTel}`}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--color-grey-400)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {siteConfig.contact.phone}
            </Link>
            <Link href="/contact" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}>
              Book a Free Tour
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="mobile-only"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "var(--color-offwhite-50)",
                transition: "transform 0.2s",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "var(--color-offwhite-50)",
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "var(--color-offwhite-50)",
                transition: "transform 0.2s",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
            style={{
              backgroundColor: "var(--color-charcoal-900)",
              borderTop: "1px solid var(--color-charcoal-700)",
              padding: "1rem 1.5rem 1.5rem",
            }}
          >
            <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href} style={{ borderBottom: "1px solid var(--color-charcoal-700)" }}>
                    <Link
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "0.875rem 0",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: isActive
                          ? "var(--color-lime-400)"
                          : "var(--color-offwhite-50)",
                        textDecoration: "none",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div style={{ marginTop: "1.25rem" }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ display: "block", textAlign: "center" }}
              >
                Book a Free Tour
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  );
}

