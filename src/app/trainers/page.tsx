import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Trainers",
  description:
    "Meet the coaching team at Iron District Fitness. Expert trainers in strength, personal training, and functional fitness. All profiles are illustrative demo content.",
};

const trainers = [
  {
    id: "arjun-sharma",
    name: "Arjun Sharma",
    role: "Head Coach — Strength & Powerlifting",
    bio: "Arjun brings eight years of competitive powerlifting and coaching experience to Iron District. His approach centres on building technical competency before adding load — a philosophy that protects athletes long-term and drives genuine strength gains. He has coached members from complete beginner to competition-ready across multiple weight categories.\n\nSpecialising in barbell movements, periodisation, and long-term strength development, Arjun designs the foundational strength programmes that run throughout the gym's weekly schedule.",
    specialties: ["Powerlifting", "Barbell Technique", "Periodisation", "Strength Programming", "Competition Prep"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Arjun Sharma, Head Strength and Powerlifting Coach",
    available: ["Mon–Fri: 6AM–1PM", "Saturday: 8AM–12PM"],
    sessions: "Strength Fundamentals, Barbell Technique, Open Barbell Club",
  },
  {
    id: "priya-menon",
    name: "Priya Menon",
    role: "Personal Trainer — Functional & Fat Loss",
    bio: "Priya's coaching philosophy is rooted in movement quality and sustainable habit formation. With a background in sports science and a particular focus on functional rehabilitation and body composition, she works with members who want to lose fat, improve mobility, and develop real physical capacity — not just aesthetics.\n\nPriya leads several weekly group classes and takes on a select number of personal training clients at any given time. Her sessions are demanding but grounded in progressive overload and recovery balance.",
    specialties: ["Functional Fitness", "Fat Loss Programming", "Mobility & Flexibility", "Group Coaching", "Rehabilitation"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Priya Menon, Functional and Fat Loss Trainer",
    available: ["Mon–Fri: 7AM–2PM, 5PM–9PM", "Saturday: 9AM–12PM", "Sunday: 9AM–12PM"],
    sessions: "Group Conditioning, Group HIIT, Mobility & Recovery",
  },
  {
    id: "rohan-patel",
    name: "Rohan Patel",
    role: "Trainer — Hypertrophy & Conditioning",
    bio: "Rohan works primarily with intermediate lifters who have a foundation in the gym and want to break through plateaus. His training style blends evidence-based hypertrophy principles with metabolic conditioning — a practical combination that drives muscle development and cardiovascular capacity simultaneously.\n\nHe is particularly effective with members who train four to six days per week and want a structured programme that continues to evolve as they progress.",
    specialties: ["Hypertrophy Training", "HIIT & Conditioning", "Intermediate Programming", "Nutrition Principles", "Body Composition"],
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=500&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Rohan Patel, Hypertrophy and Conditioning Trainer",
    available: ["Tue–Fri: 6AM–11AM, 4PM–8PM", "Saturday: 8AM–1PM"],
    sessions: "Functional Fitness, Group HIIT, Open Barbell support",
  },
  {
    id: "kavya-nair",
    name: "Kavya Nair",
    role: "Group Class Instructor & PT",
    bio: "Kavya joined Iron District's coaching team with a strong background in group fitness instruction and a passion for making training accessible to members at every experience level. Her group classes are high-energy and precisely structured, designed to challenge members without intimidating beginners.\n\nAs a personal trainer, Kavya takes a patient, encouraging approach — ideal for members who are nervous about starting or returning to training after a long break.",
    specialties: ["Group Fitness", "Beginner Programming", "Cardio Conditioning", "Bodyweight Training", "Flexibility"],
    image:
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&q=75&auto=format&fit=crop&crop=face",
    alt: "Portrait of Kavya Nair, Group Class Instructor and Personal Trainer",
    available: ["Mon–Sat: 6AM–12PM"],
    sessions: "Group Conditioning, Beginner Strength Intro",
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-charcoal-900)",
          borderBottom: "3px solid var(--color-lime-400)",
          padding: "5rem 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>The Coaching Team</p>
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
            Built by
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>Expert Coaches</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-grey-400)",
              maxWidth: "520px",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
            }}
          >
            Every trainer at Iron District is chosen for expertise, coaching quality, and genuine passion for getting members results.
          </p>
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              color: "var(--color-grey-500)",
              backgroundColor: "var(--color-charcoal-700)",
              padding: "0.375rem 0.875rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            All trainer profiles are fictional demonstration content created for portfolio purposes.
          </p>
        </div>
      </section>

      {/* Trainers grid */}
      <section
        aria-labelledby="trainers-full-heading"
        style={{
          backgroundColor: "var(--color-charcoal-950)",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            id="trainers-full-heading"
            className="sr-only"
          >
            Trainer Profiles
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {trainers.map((trainer, i) => (
              <article
                key={trainer.id}
                id={trainer.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "360px 1fr" : "1fr 360px",
                  gap: "4rem",
                  alignItems: "start",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    order: i % 2 === 0 ? 0 : 1,
                    position: "relative",
                    aspectRatio: "3/4",
                    overflow: "hidden",
                    backgroundColor: "var(--color-charcoal-700)",
                  }}
                >
                  <img
                    src={trainer.image}
                    alt={trainer.alt}
                    loading={i > 0 ? "lazy" : "eager"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                  {/* Accent strip */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      backgroundColor: "var(--color-lime-400)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-barlow), var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "var(--color-offwhite-50)",
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {trainer.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-lime-400)",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {trainer.role}
                  </p>

                  {trainer.bio.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-grey-400)",
                        lineHeight: 1.75,
                        marginBottom: "1rem",
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Specialties */}
                  <div style={{ marginTop: "1.75rem", marginBottom: "1.5rem" }}>
                    <p
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-grey-500)",
                        marginBottom: "0.625rem",
                      }}
                    >
                      Specialties
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {trainer.specialties.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--color-charcoal-950)",
                            backgroundColor: "var(--color-lime-400)",
                            padding: "0.25rem 0.625rem",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-grey-500)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      Typical Availability
                    </p>
                    {trainer.available.map((a) => (
                      <p key={a} style={{ fontSize: "0.875rem", color: "var(--color-grey-400)" }}>{a}</p>
                    ))}
                    <p style={{ fontSize: "0.75rem", color: "var(--color-grey-600)", fontStyle: "italic", marginTop: "0.25rem" }}>
                      Confirm with gym. Sample schedule for demo purposes.
                    </p>
                  </div>

                  <a
                    href={whatsappLink(`Hi, I'd like to book a session with ${trainer.name} at Iron District Fitness.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-lime"
                    style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}
                  >
                    Enquire About PT Sessions
                  </a>
                </div>
              </article>
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
              Ready to Start Coaching?
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-grey-400)", lineHeight: 1.6, maxWidth: "460px" }}>
              Get in touch and we&rsquo;ll match you with the right trainer for your goals.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <Link href="/contact" className="btn-primary">Book a Free Tour</Link>
            <Link href="/membership" className="btn-outline">View Memberships</Link>
          </div>
        </div>
      </section>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 768px) {
          article[style] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

