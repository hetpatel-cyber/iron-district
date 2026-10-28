import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Iron District Fitness",
  description:
    "Learn about Iron District Fitness — our philosophy, training approach, equipment, and community. A premium strength gym in Bengaluru.",
};

const values = [
  {
    heading: "Strength as a Foundation",
    body: "Every programme at Iron District starts from the principle that strength is the quality that underpins all others. Greater strength makes you more resilient, more capable, and more confident — regardless of your broader fitness goals.",
  },
  {
    heading: "Technique Before Everything",
    body: "We do not reward lifting more weight with poor form. Our coaches prioritise movement quality in every training session, because correct technique protects you from injury and produces better long-term results.",
  },
  {
    heading: "Progressive and Patient",
    body: "We do not believe in shortcuts. Real results come from consistent effort applied intelligently over time. Our programming reflects this — week on week, month on month.",
  },
  {
    heading: "A Serious Environment",
    body: "Iron District is designed as a training environment, not an entertainment venue. The facility exists to facilitate focused, effective work — the kind that produces lasting change.",
  },
];

const equipment = [
  "Multiple commercial power racks with spotter arms",
  "Olympic barbells and competition-spec bumper plates",
  "Dumbbell range from 2 kg to 60 kg",
  "Cable machines and functional trainers",
  "Dedicated kettlebell and functional training zone",
  "Commercial treadmills, rowers, assault bikes, and ski ergs",
  "Battle ropes and sled track",
  "Group training studio (separate from main floor)",
  "Warm-up and mobility area",
  "Secure locker and changing facilities",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-charcoal-950)",
          minHeight: "420px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=75&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "5rem 1.5rem 4rem",
            width: "100%",
          }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>About</p>
          <h1
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              lineHeight: 0.97,
              marginBottom: "1.25rem",
            }}
          >
            Iron District
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>Fitness</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-offwhite-200)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            A premium strength training gym in Bengaluru, built around the principles of disciplined effort, honest coaching, and continuous progress.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        aria-labelledby="mission-heading"
        style={{
          backgroundColor: "var(--color-offwhite-50)",
          color: "var(--color-charcoal-900)",
          padding: "6rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Our Mission</p>
            <h2
              id="mission-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-charcoal-900)",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              A Gym Built
              <br />
              <span style={{ color: "var(--color-lime-600)" }}>for Results</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-charcoal-700)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              Iron District Fitness was conceived out of a straightforward belief: most people who join a gym want to actually get stronger, fitter, and healthier — and most gyms do not give them the environment or the coaching to do it.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-charcoal-700)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              Our facility is designed to remove the obstacles between you and your training. Commercial-grade equipment, a coaching team that takes programming seriously, and a culture where effort is expected and progress is celebrated.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-charcoal-700)",
                lineHeight: 1.75,
              }}
            >
              We are unapologetically focused on training that works — not aesthetics, entertainment, or social media fitness trends.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=75&auto=format&fit=crop"
              alt="Iron District Fitness main training floor with atmospheric lighting"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                top: 0,
                width: "4px",
                backgroundColor: "var(--color-lime-400)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Philosophy values */}
      <section
        aria-labelledby="values-heading"
        style={{
          backgroundColor: "var(--color-charcoal-900)",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Our Approach</p>
            <h2
              id="values-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
              }}
            >
              How We Train
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "3rem",
            }}
          >
            {values.map((v, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "var(--font-barlow), var(--font-display)",
                    fontSize: "4rem",
                    fontWeight: 800,
                    color: "var(--color-charcoal-700)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), var(--font-display)",
                    fontSize: "1.375rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--color-lime-400)",
                    marginBottom: "0.875rem",
                    lineHeight: 1.1,
                  }}
                >
                  {v.heading}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-grey-400)",
                    lineHeight: 1.75,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner-friendly */}
      <section
        aria-labelledby="beginner-heading"
        style={{
          backgroundColor: "var(--color-charcoal-800)",
          padding: "6rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "3/4",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75&auto=format&fit=crop"
              alt="New member being coached through functional training movements"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                top: 0,
                width: "4px",
                backgroundColor: "var(--color-lime-400)",
              }}
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>New to Lifting?</p>
            <h2
              id="beginner-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              Beginners Are
              <br />
              <span style={{ color: "var(--color-lime-400)" }}>Welcome Here</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-grey-400)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              Strength training can feel intimidating if you have never done it before. We understand that completely — which is why every new member at Iron District receives an orientation session before they step onto the main floor unsupervised.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-grey-400)",
                lineHeight: 1.75,
                marginBottom: "1.75rem",
              }}
            >
              Our coaches take beginner development seriously. You will not be handed a generic programme and left alone — you will be taught, corrected, and encouraged at every stage.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Intro Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section
        aria-labelledby="equipment-heading"
        style={{
          backgroundColor: "var(--color-offwhite-50)",
          color: "var(--color-charcoal-900)",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Equipment</p>
            <h2
              id="equipment-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-charcoal-900)",
                lineHeight: 1,
              }}
            >
              Commercial Grade
              <br />
              <span style={{ color: "var(--color-lime-600)" }}>Throughout</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {equipment.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--color-offwhite-200)",
                  fontSize: "0.9375rem",
                  color: "var(--color-charcoal-700)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "var(--color-lime-600)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "var(--color-charcoal-900)",
          padding: "4rem 1.5rem",
          borderTop: "3px solid var(--color-lime-400)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              Come See for Yourself
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-grey-400)", lineHeight: 1.6 }}>
              Book a free tour and meet the coaching team.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/membership" className="btn-outline">View Memberships</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

