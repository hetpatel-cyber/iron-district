import Link from "next/link";

export const trainers = [
  {
    id: "arjun-sharma",
    name: "Arjun Sharma",
    role: "Head Coach — Strength & Powerlifting",
    bio: "A competitive powerlifter with eight years of coaching experience, Arjun leads Iron District's strength programming. He specialises in technical lifting mechanics and long-term periodisation.",
    specialties: ["Powerlifting", "Barbell Technique", "Strength Programming"],
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e6349?w=400&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Arjun Sharma, Head Strength Coach",
  },
  {
    id: "priya-menon",
    name: "Priya Menon",
    role: "Personal Trainer — Functional & Fat Loss",
    bio: "Priya brings a movement-first approach to personal training. With a background in sports science and functional rehabilitation, she helps clients build bodies that perform as well as they look.",
    specialties: ["Functional Fitness", "Fat Loss", "Mobility"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Priya Menon, Functional & Fat Loss Trainer",
  },
  {
    id: "rohan-patel",
    name: "Rohan Patel",
    role: "Trainer — Hypertrophy & Conditioning",
    bio: "Rohan focuses on evidence-based hypertrophy training and metabolic conditioning. He works with intermediate lifters aiming to break plateaus and optimise their training structure.",
    specialties: ["Hypertrophy", "HIIT", "Nutrition Principles"],
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Rohan Patel, Hypertrophy and Conditioning Trainer",
  },
];

export default function TrainersPreview() {
  return (
    <section
      aria-labelledby="trainers-heading"
      style={{
        backgroundColor: "var(--color-charcoal-900)",
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
              The Coaching Team
            </p>
            <h2
              id="trainers-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
              }}
            >
              Train With
              <br />
              <span style={{ color: "var(--color-lime-400)" }}>the Best</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-grey-500)",
              maxWidth: "320px",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            All trainer profiles shown are fictional demonstration content created for portfolio purposes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {trainers.map((trainer) => (
            <article key={trainer.id}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  marginBottom: "1.25rem",
                  backgroundColor: "var(--color-charcoal-700)",
                }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "linear-gradient(to top, rgba(13,13,13,0.85), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-barlow), var(--font-display)",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--color-offwhite-50)",
                  marginBottom: "0.25rem",
                  lineHeight: 1.1,
                }}
              >
                {trainer.name}
              </h3>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-lime-400)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  marginBottom: "0.75rem",
                }}
              >
                {trainer.role}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-grey-400)",
                  lineHeight: 1.65,
                  marginBottom: "1rem",
                }}
              >
                {trainer.bio}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {trainer.specialties.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-charcoal-900)",
                      backgroundColor: "var(--color-lime-400)",
                      padding: "0.2rem 0.625rem",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link href="/trainers" className="btn-outline">
            Meet the Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}

