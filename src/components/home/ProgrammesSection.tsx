import Link from "next/link";

const programmes = [
  {
    id: "strength",
    label: "Programme 01",
    title: "Strength Training",
    description:
      "Our foundational programme centres on compound barbell movements — squat, deadlift, bench, and overhead press. Coached progressions ensure safe loading and consistent strength gains.",
    href: "/training#strength",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=75&auto=format&fit=crop",
    alt: "Athlete performing a barbell squat with focused form",
  },
  {
    id: "personal",
    label: "Programme 02",
    title: "Personal Training",
    description:
      "One-to-one coaching tailored to your specific goals, schedule, and training history. Your trainer programmes every session and tracks your progress in detail.",
    href: "/training#personal",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=75&auto=format&fit=crop",
    alt: "Personal trainer coaching a client through a deadlift",
  },
  {
    id: "functional",
    label: "Programme 03",
    title: "Functional Fitness",
    description:
      "Kettlebell circuits, sled work, loaded carries, and conditioning drills that improve real-world movement quality alongside athletic performance.",
    href: "/training#functional",
    image:
      "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&q=75&auto=format&fit=crop",
    alt: "Athlete performing kettlebell swings in functional training zone",
  },
  {
    id: "group",
    label: "Programme 04",
    title: "Group Sessions",
    description:
      "Structured, coach-led group classes running throughout the week — suitable for all levels, with programming that scales to each participant.",
    href: "/training#group",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=75&auto=format&fit=crop",
    alt: "Group fitness class in a training studio",
  },
];

export default function ProgrammesSection() {
  return (
    <section
      aria-labelledby="programmes-heading"
      style={{
        backgroundColor: "var(--color-charcoal-950)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Training Programmes
          </p>
          <h2
            id="programmes-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              lineHeight: 1,
            }}
          >
            Pick Your
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>Path</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", border: "1px solid var(--color-charcoal-700)" }}>
          {programmes.map((prog, i) => (
            <article
              key={prog.id}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                minHeight: "340px",
                borderBottom: i < programmes.length - 1 ? "1px solid var(--color-charcoal-700)" : "none",
              }}
            >
              {/* Image — alternates left/right */}
              <div
                style={{
                  order: i % 2 === 0 ? 0 : 1,
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "220px",
                }}
              >
                <img
                  src={prog.image}
                  alt={prog.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    position: "absolute",
                    inset: 0,
                  }}
                />
              </div>

              {/* Text */}
              <div
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: "clamp(2rem, 5vw, 3.5rem)",
                  backgroundColor: "var(--color-charcoal-900)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>
                  {prog.label}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), var(--font-display)",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--color-offwhite-50)",
                    marginBottom: "1rem",
                    lineHeight: 1.05,
                  }}
                >
                  {prog.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-grey-400)",
                    lineHeight: 1.7,
                    marginBottom: "1.75rem",
                    maxWidth: "440px",
                  }}
                >
                  {prog.description}
                </p>
                <Link
                  href={prog.href}
                  className="btn-outline-lime"
                  style={{ alignSelf: "flex-start", padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href="/training" className="btn-primary">
            View Full Timetable
          </Link>
        </div>
      </div>

      {/* Responsive fix for mobile */}
      <style>{`
        @media (max-width: 640px) {
          article[style] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

