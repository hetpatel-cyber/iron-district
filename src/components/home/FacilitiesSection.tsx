const facilities = [
  {
    title: "Free Weights Floor",
    description:
      "Extensive dumbbell range from 2 kg to 60 kg, multiple barbells, and ample bench space for unimpeded training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=75&auto=format&fit=crop",
    alt: "Free weights area with dumbbells and barbells",
  },
  {
    title: "Power & Squat Racks",
    description:
      "Multiple commercial-grade power racks with Olympic barbells, safety catches, and accessory cable systems.",
    image:
      "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&q=75&auto=format&fit=crop",
    alt: "Power rack station with Olympic barbell",
  },
  {
    title: "Functional Training Zone",
    description:
      "Dedicated space for kettlebells, battle ropes, resistance bands, sleds, and movement-based conditioning.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=75&auto=format&fit=crop",
    alt: "Functional training zone with kettlebells and ropes",
  },
  {
    title: "Cardio Equipment",
    description:
      "Commercial treadmills, rowers, assault bikes, and ski ergs — tools that build real conditioning.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=75&auto=format&fit=crop",
    alt: "Modern cardio equipment including treadmills and rowers",
  },
  {
    title: "Group Training Studio",
    description:
      "A dedicated open-plan studio for group classes, stretching, yoga, and mobility work — separate from the main floor.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=75&auto=format&fit=crop",
    alt: "Open group training studio with clean flooring",
  },
  {
    title: "Recovery & Changerooms",
    description:
      "Well-maintained changing facilities with secure storage and a cool-down area to round out your session.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=75&auto=format&fit=crop",
    alt: "Clean and well-maintained gym changeroom",
  },
];

export default function FacilitiesSection() {
  return (
    <section
      aria-labelledby="facilities-heading"
      style={{
        backgroundColor: "var(--color-offwhite-50)",
        color: "var(--color-charcoal-900)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              Facilities
            </p>
            <h2
              id="facilities-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-charcoal-900)",
                lineHeight: 1,
              }}
            >
              Everything You Need
              <br />
              <span style={{ color: "var(--color-lime-600)" }}>To Train Right</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-charcoal-600)",
              maxWidth: "360px",
              lineHeight: 1.7,
            }}
          >
            Our facility is laid out to maximise training efficiency. Every area is purpose-built and maintained to a commercial standard.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {facilities.map((f, i) => (
            <article
              key={f.title}
              style={{
                overflow: "hidden",
                border: "1px solid var(--color-offwhite-200)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img
                  src={f.image}
                  alt={f.alt}
                  loading={i > 1 ? "lazy" : "eager"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    transition: "transform 0.4s",
                  }}
                />
              </div>
              <div style={{ padding: "1.375rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), var(--font-display)",
                    fontSize: "1.1875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--color-charcoal-900)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-charcoal-600)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

