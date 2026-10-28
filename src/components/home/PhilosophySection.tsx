export default function PhilosophySection() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-charcoal-950)",
      }}
    >
      {/* Background image strip */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=75&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundAttachment: "fixed",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "7rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p className="section-label" style={{ marginBottom: "1.25rem" }}>
          Our Coaching Philosophy
        </p>
        <h2
          id="philosophy-heading"
          style={{
            fontFamily: "var(--font-barlow), var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--color-offwhite-50)",
            lineHeight: 1,
            marginBottom: "2rem",
          }}
        >
          Progress Is
          <br />
          <span style={{ color: "var(--color-lime-400)" }}>Earned Here</span>
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.1875rem)",
            color: "var(--color-offwhite-200)",
            lineHeight: 1.75,
            marginBottom: "1.5rem",
            maxWidth: "680px",
            margin: "0 auto 1.5rem",
          }}
        >
          We believe the gym floor is where character is built as much as muscle. Iron District exists for people who want honest coaching, proven methods, and an environment where showing up consistently matters more than how you look on day one.
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-grey-400)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Whether you&rsquo;re stepping into a gym for the first time or refining a competition programme, our coaches meet you where you are — and get you where you&rsquo;re going.
        </p>

        {/* Three philosophy pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {[
            { stat: "Proven", label: "Methods" },
            { stat: "Honest", label: "Coaching" },
            { stat: "Consistent", label: "Progress" },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontFamily: "var(--font-barlow), var(--font-display)",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--color-lime-400)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-grey-400)",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

