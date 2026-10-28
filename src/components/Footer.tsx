import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/training", label: "Training & Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-charcoal-900)",
        borderTop: "1px solid var(--color-charcoal-700)",
        color: "var(--color-offwhite-100)",
      }}
    >
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontWeight: 800,
                fontSize: "1.375rem",
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
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--color-lime-400)",
              }}
            >
              Fitness
            </div>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-grey-400)",
              lineHeight: 1.7,
              maxWidth: "240px",
              marginBottom: "1.5rem",
            }}
          >
            Premium strength training, personal training, and group fitness in Bengaluru. Built by discipline. Defined by progress.
          </p>
          {/* Social links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { href: siteConfig.social.instagram, label: "Instagram", icon: "IG" },
              { href: siteConfig.social.facebook, label: "Facebook", icon: "FB" },
              { href: siteConfig.social.youtube, label: "YouTube", icon: "YT" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Iron District Fitness on ${s.label}`}
                className="footer-social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.25rem",
                  height: "2.25rem",
                  border: "1px solid var(--color-charcoal-600)",
                  color: "var(--color-grey-400)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-lime-400)",
              marginBottom: "1.25rem",
            }}
          >
            Navigate
          </h3>
          <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href} style={{ marginBottom: "0.625rem" }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-grey-400)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-lime-400)",
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </h3>
          <address
            style={{
              fontStyle: "normal",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", marginBottom: "0.125rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Address</p>
              <p style={{ fontSize: "0.875rem", color: "var(--color-grey-400)", lineHeight: 1.6 }}>
                {siteConfig.contact.address}<br />
                {siteConfig.contact.city}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", marginBottom: "0.125rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Phone</p>
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                style={{ fontSize: "0.875rem", color: "var(--color-grey-400)", textDecoration: "none" }}
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", marginBottom: "0.125rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Email</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{ fontSize: "0.875rem", color: "var(--color-grey-400)", textDecoration: "none" }}
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-lime-400)",
              marginBottom: "1.25rem",
            }}
          >
            Opening Hours
          </h3>
          <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", marginBottom: "1rem", lineHeight: 1.5 }}>
            Sample hours — confirm with the gym before visiting.
          </p>
          <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {siteConfig.hours.map((h) => (
              <li
                key={h.days}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  fontSize: "0.8125rem",
                  color: "var(--color-grey-400)",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid var(--color-charcoal-700)",
                  marginBottom: "0.5rem",
                }}
              >
                <span>{h.days}</span>
                <span style={{ color: "var(--color-offwhite-100)", fontWeight: 600 }}>{h.time}</span>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-lime"
            style={{ marginTop: "1.25rem", padding: "0.625rem 1rem", fontSize: "0.75rem", display: "inline-flex" }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-charcoal-700)",
          padding: "1.25rem 1.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", margin: 0 }}>
          © {year} Iron District Fitness. All rights reserved. | This website is a portfolio demonstration. All prices, profiles, and content are illustrative.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", margin: 0 }}>
          Bengaluru, Karnataka, India
        </p>
      </div>
    </footer>
  );
}

