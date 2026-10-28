import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-charcoal-950)",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "540px" }}>
        <div
          style={{
            fontFamily: "var(--font-barlow), var(--font-display)",
            fontSize: "8rem",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--color-charcoal-700)",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
          aria-hidden="true"
        >
          404
        </div>
        <p className="section-label" style={{ marginBottom: "1rem" }}>Page Not Found</p>
        <h1
          style={{
            fontFamily: "var(--font-barlow), var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--color-offwhite-50)",
            lineHeight: 1,
            marginBottom: "1.25rem",
          }}
        >
          Wrong Route.
          <br />
          <span style={{ color: "var(--color-lime-400)" }}>Let&rsquo;s Fix That.</span>
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-grey-400)",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}>
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

