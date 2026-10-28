import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 4rem)",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        backgroundColor: "var(--color-charcoal-950)",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label="A powerful gym interior with heavy equipment and dramatic lighting"
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem 5rem",
          width: "100%",
        }}
      >
        <p className="section-label" style={{ marginBottom: "1.25rem" }}>
          {siteConfig.tagline}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-barlow), var(--font-display)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            textTransform: "uppercase",
            color: "var(--color-offwhite-50)",
            letterSpacing: "0.01em",
            maxWidth: "820px",
            marginBottom: "1.5rem",
          }}
        >
          Train Hard.
          <br />
          <span style={{ color: "var(--color-lime-400)" }}>Get</span> Results.
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.1875rem)",
            color: "var(--color-offwhite-200)",
            maxWidth: "520px",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          Iron District Fitness is Bengaluru&rsquo;s premium strength training gym — built for those who take their progress seriously.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
          <Link href="/membership" className="btn-primary">
            Explore Memberships
          </Link>
          <Link href="/contact" className="btn-outline">
            Book a Free Tour
          </Link>
        </div>
      </div>
    </section>
  );
}

