const pillars = [
  {
    label: "Philosophy",
    heading: "Strength Over Everything",
    body: "We believe compound lifts and consistent effort build the kind of physique and confidence that endures. Every programme here starts with the fundamentals.",
  },
  {
    label: "Environment",
    heading: "No Fluff. Pure Focus.",
    body: "Designed for serious training — the floor space, equipment quality, and coaching culture reflect a commitment to actual results, not entertainment.",
  },
  {
    label: "Community",
    heading: "Coached, Not Left Alone",
    body: "Whether you&rsquo;re new to lifting or chasing performance milestones, you train with purpose and guidance at every stage.",
  },
  {
    label: "Equipment",
    heading: "Commercial-Grade, Always",
    body: "Power racks, free weights, dedicated functional zones, and premium cardio equipment maintained to professional standards.",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-labelledby="trust-heading"
      style={{
        backgroundColor: "var(--color-charcoal-800)",
        borderTop: "3px solid var(--color-lime-400)",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Why Iron District
          </p>
          <h2
            id="trust-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              lineHeight: 1,
              maxWidth: "600px",
            }}
          >
            Engineered for
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>Serious Athletes</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {pillars.map((p) => (
            <div key={p.label}>
              <p className="section-label" style={{ marginBottom: "0.625rem" }}>
                {p.label}
              </p>
              <span className="rule-lime" />
              <h3
                style={{
                  fontFamily: "var(--font-barlow), var(--font-display)",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--color-offwhite-50)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.1,
                }}
              >
                {p.heading}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-grey-400)",
                  lineHeight: 1.7,
                }}
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

