import Link from "next/link";
import { whatsappLink } from "@/lib/config";

export default function ConversionCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-charcoal-950)",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=75&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(13,13,13,0.85)",
        }}
        aria-hidden="true"
      />
      {/* Lime accent stripe */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          backgroundColor: "var(--color-lime-400)",
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2.5rem",
        }}
      >
        <div style={{ maxWidth: "580px" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Ready to Start?
          </p>
          <h2
            id="cta-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              lineHeight: 0.97,
              marginBottom: "1.5rem",
            }}
          >
            Your First
            <br />
            Session Is
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>On Us</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-offwhite-200)",
              lineHeight: 1.7,
              marginBottom: "0.5rem",
            }}
          >
            Book a free gym tour and see the facility for yourself. No commitment required — just show up, ask questions, and decide when you&rsquo;re ready.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-grey-500)", fontStyle: "italic" }}>
            Demo offer — subject to confirmation with the gym.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "220px",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Book a Free Tour
          </Link>
          <a
            href={whatsappLink("Hi, I'd like to book a free gym tour at Iron District Fitness.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            WhatsApp Us
          </a>
          <Link href="/membership" className="btn-outline-lime">
            View Memberships
          </Link>
        </div>
      </div>
    </section>
  );
}

