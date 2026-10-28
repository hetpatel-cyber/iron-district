import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Training & Classes",
  description:
    "Strength training, personal training, functional fitness, and group classes at Iron District Fitness, Bengaluru. View sample timetable.",
};

const programmes = [
  {
    id: "strength",
    label: "Programme 01",
    title: "Strength Training",
    description:
      "The cornerstone of Iron District's training philosophy. Our strength programme is built on the fundamentals: squat, deadlift, bench press, and overhead press. Members work with coaches to learn proper technique before progressively increasing load. Periodisation is built into the programming to ensure continuous gains without overtraining.",
    who: "Suitable for all levels. Beginners start with technique-focused sessions; advanced members work on peaking cycles and competition preparation.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=75&auto=format&fit=crop",
    alt: "Athlete performing a barbell back squat with coaching",
    details: [
      "Barbell squat, deadlift, bench, OHP",
      "Technique coaching for all levels",
      "Periodised programming",
      "Open floor and coached sessions",
      "Competition prep available for advanced members",
    ],
  },
  {
    id: "personal",
    label: "Programme 02",
    title: "Personal Training",
    description:
      "One-to-one coaching tailored entirely to you. Your trainer assesses your current level, understands your goals, and builds a programme from the ground up. Every session is planned, tracked, and adjusted based on your progress. Personal training at Iron District is not a generic fitness class — it is specific, demanding, and designed to get results.",
    who: "Anyone looking for accountability, structured programming, rehabilitation support, or accelerated progress.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=75&auto=format&fit=crop",
    alt: "Personal trainer coaching a client through a deadlift technique",
    details: [
      "Individual assessment and goal setting",
      "Bespoke session-by-session programming",
      "Technique correction and cueing",
      "Progress tracking and periodic reassessment",
      "Flexible scheduling",
    ],
  },
  {
    id: "functional",
    label: "Programme 03",
    title: "Functional Fitness",
    description:
      "A conditioning-focused programme that uses kettlebells, loaded carries, sleds, battle ropes, and bodyweight movements to build real-world strength and athletic capacity. Functional fitness at Iron District is structured and progressive — not random — and is an excellent complement to a barbell-based strength programme.",
    who: "Members who want to improve conditioning, movement quality, and athletic performance alongside their strength work.",
    image:
      "https://images.unsplash.com/photo-1434596922112-19c563067271?w=900&q=75&auto=format&fit=crop",
    alt: "Athlete performing kettlebell swings in functional training area",
    details: [
      "Kettlebell programming",
      "Sled and loaded carry work",
      "Battle ropes and conditioning circuits",
      "Mobility and movement quality focus",
      "Integrates with strength training",
    ],
  },
  {
    id: "cardio",
    label: "Programme 04",
    title: "Cardio & Conditioning",
    description:
      "Purposeful cardio training using commercial treadmills, rowers, assault bikes, and ski ergs. Rather than mindless treadmill sessions, Iron District's cardio approach is programmed around heart rate zones and specific conditioning outcomes, whether fat loss, aerobic base building, or competitive performance.",
    who: "Members across all goals — weight loss, endurance improvement, and general health.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=75&auto=format&fit=crop",
    alt: "Cardio equipment area with treadmills and rowers",
    details: [
      "Commercial treadmills and rowers",
      "Assault bikes and ski ergs",
      "Heart rate zone training",
      "Interval and LISS programming",
      "Integrates with PT and group sessions",
    ],
  },
  {
    id: "group",
    label: "Programme 05",
    title: "Group Sessions",
    description:
      "Coach-led group classes held in our dedicated studio throughout the week. Classes are structured, appropriately scaled for different fitness levels, and social in nature. Whether you prefer a community energy to your training or are looking for a structured class to supplement your personal training, group sessions offer that in a focused environment.",
    who: "All levels welcome. Classes are scaled so beginners and experienced members train together without either being held back.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=75&auto=format&fit=crop",
    alt: "Group fitness class in progress in a dedicated studio",
    details: [
      "Multiple class formats throughout the week",
      "Scaled for all fitness levels",
      "Coach-led with structured programming",
      "Community environment",
      "Included in Performance and Elite memberships",
    ],
  },
];

const timetable = [
  { day: "Monday", time: "6:30 AM", session: "Strength Fundamentals", instructor: "Arjun Sharma", type: "Strength" },
  { day: "Monday", time: "7:00 PM", session: "Group Conditioning", instructor: "Priya Menon", type: "Group" },
  { day: "Tuesday", time: "6:00 AM", session: "Functional Fitness", instructor: "Rohan Patel", type: "Functional" },
  { day: "Tuesday", time: "6:30 PM", session: "Barbell Technique Class", instructor: "Arjun Sharma", type: "Strength" },
  { day: "Wednesday", time: "7:00 AM", session: "Group HIIT", instructor: "Priya Menon", type: "Group" },
  { day: "Wednesday", time: "7:30 PM", session: "Strength Fundamentals", instructor: "Arjun Sharma", type: "Strength" },
  { day: "Thursday", time: "6:00 AM", session: "Functional Fitness", instructor: "Rohan Patel", type: "Functional" },
  { day: "Thursday", time: "7:00 PM", session: "Group Conditioning", instructor: "Priya Menon", type: "Group" },
  { day: "Friday", time: "6:30 AM", session: "Strength Fundamentals", instructor: "Arjun Sharma", type: "Strength" },
  { day: "Friday", time: "6:00 PM", session: "Group HIIT", instructor: "Rohan Patel", type: "Group" },
  { day: "Saturday", time: "8:00 AM", session: "Open Barbell Club", instructor: "Arjun Sharma", type: "Strength" },
  { day: "Saturday", time: "10:00 AM", session: "Group Conditioning", instructor: "Priya Menon", type: "Group" },
  { day: "Sunday", time: "9:00 AM", session: "Mobility & Recovery", instructor: "Priya Menon", type: "Functional" },
];

const typeColors: Record<string, string> = {
  Strength: "var(--color-lime-400)",
  Group: "#60a5fa",
  Functional: "#f59e0b",
};

export default function TrainingPage() {
  return (
    <>
      {/* Page hero */}
      <section
        style={{
          backgroundColor: "var(--color-charcoal-900)",
          borderBottom: "3px solid var(--color-lime-400)",
          padding: "5rem 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Training & Classes</p>
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
            Every Way
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>to Train</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-grey-400)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Five distinct training programmes, a weekly class schedule, and coaching for every goal — all under one roof.
          </p>
        </div>
      </section>

      {/* Programmes */}
      {programmes.map((prog, i) => (
        <section
          key={prog.id}
          id={prog.id}
          aria-labelledby={`prog-heading-${prog.id}`}
          style={{
            backgroundColor: i % 2 === 0 ? "var(--color-charcoal-950)" : "var(--color-charcoal-800)",
            padding: "0",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "400px",
            }}
          >
            {/* Image */}
            <div
              style={{
                order: i % 2 === 0 ? 0 : 1,
                position: "relative",
                overflow: "hidden",
                minHeight: "300px",
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

            {/* Content */}
            <div
              style={{
                order: i % 2 === 0 ? 1 : 0,
                padding: "clamp(2.5rem, 6vw, 4rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>{prog.label}</p>
              <h2
                id={`prog-heading-${prog.id}`}
                style={{
                  fontFamily: "var(--font-barlow), var(--font-display)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--color-offwhite-50)",
                  lineHeight: 1.05,
                  marginBottom: "1rem",
                }}
              >
                {prog.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-grey-400)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  maxWidth: "480px",
                }}
              >
                {prog.description}
              </p>

              <ul
                role="list"
                style={{ listStyle: "none", margin: "0 0 1.25rem", padding: 0 }}
              >
                {prog.details.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-grey-400)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "0.375rem",
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: "var(--color-lime-400)", fontWeight: 700, flexShrink: 0 }}>→</span>
                    {d}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-grey-500)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  marginBottom: "1.5rem",
                  maxWidth: "420px",
                }}
              >
                <strong>Who is it for? </strong>{prog.who}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}>
                  Enquire
                </Link>
                <a
                  href={whatsappLink(`Hi, I'm interested in the ${prog.title} programme at Iron District Fitness.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Timetable */}
      <section
        aria-labelledby="timetable-heading"
        style={{
          backgroundColor: "var(--color-offwhite-50)",
          color: "var(--color-charcoal-900)",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Sample Schedule</p>
            <h2
              id="timetable-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-charcoal-900)",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}
            >
              Weekly Timetable
            </h2>
            <p
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                color: "#92400e",
                backgroundColor: "#fef3c7",
                padding: "0.375rem 0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                marginBottom: "2rem",
                border: "1px solid #fcd34d",
              }}
            >
              ⚠ Sample timetable for illustration only. Confirm current schedule directly with Iron District Fitness before attending.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}
              aria-label="Sample weekly class timetable"
            >
              <thead>
                <tr style={{ backgroundColor: "var(--color-charcoal-900)", color: "var(--color-offwhite-50)" }}>
                  {["Day", "Time", "Session", "Instructor", "Type"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "left",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--color-offwhite-200)",
                      backgroundColor: i % 2 === 0 ? "#fff" : "var(--color-offwhite-50)",
                    }}
                  >
                    <td style={{ padding: "0.875rem 1rem", fontWeight: 700, whiteSpace: "nowrap" }}>{row.day}</td>
                    <td style={{ padding: "0.875rem 1rem", color: "var(--color-charcoal-600)", whiteSpace: "nowrap" }}>{row.time}</td>
                    <td style={{ padding: "0.875rem 1rem", fontWeight: 600 }}>{row.session}</td>
                    <td style={{ padding: "0.875rem 1rem", color: "var(--color-charcoal-600)" }}>{row.instructor}</td>
                    <td style={{ padding: "0.875rem 1rem" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.1875rem 0.625rem",
                          backgroundColor: typeColors[row.type] || "var(--color-grey-400)",
                          color: row.type === "Strength" ? "var(--color-charcoal-950)" : "#fff",
                          fontSize: "0.625rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Start Your Training
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-grey-400)", lineHeight: 1.6 }}>
              Book a free tour or contact us to discuss which programme suits your goals.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <Link href="/contact" className="btn-primary">Book a Free Tour</Link>
            <Link href="/membership" className="btn-outline">View Memberships</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          section[id] > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section[id] > div img {
            position: static !important;
            height: 260px !important;
          }
        }
      `}</style>
    </>
  );
}

