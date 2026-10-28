"use client";
import { useState } from "react";

const faqs = [
  {
    question: "I'm a complete beginner. Is Iron District suitable for me?",
    answer:
      "Absolutely. We welcome members at every stage of their fitness journey. Our coaches are experienced in working with beginners and will ensure you learn proper technique from the start. We recommend booking a free tour first so we can understand your goals and show you around.",
  },
  {
    question: "Can I try the gym before committing to a membership?",
    answer:
      "Yes — we offer free introductory tours during which you can see all facilities and meet a coach. Trial session availability is subject to gym capacity and must be confirmed with the team. Please use the contact form or WhatsApp enquiry to request a visit.",
  },
  {
    question: "How does personal training work?",
    answer:
      "Personal training sessions are booked directly with a coach based on your schedule. The Performance and Elite memberships include PT sessions as part of the plan. Additional sessions can also be purchased separately. Your trainer will design a structured programme and track your progress.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Sample hours are listed on the website and in the footer. Operating hours are subject to change on public holidays. Please contact us directly or check our social media channels for confirmed current timings.",
  },
  {
    question: "How do I sign up for a membership?",
    answer:
      "The easiest way to get started is to send us a WhatsApp message or fill in the enquiry form on the Contact page. A member of our team will get back to you to discuss the right plan and arrange your first visit.",
  },
  {
    question: "Are the membership prices on the website fixed?",
    answer:
      "The prices shown are illustrative demo figures for portfolio demonstration purposes. Actual membership fees are set by the gym and may differ. Please contact the gym directly for confirmed, current pricing.",
  },
  {
    question: "Do you offer group fitness classes?",
    answer:
      "Yes. Group sessions run throughout the week in our dedicated studio. The sample class timetable on the Training & Classes page gives an idea of the schedule format. Confirm current class timings with the gym before attending.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: "var(--color-offwhite-50)",
        color: "var(--color-charcoal-900)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            FAQs
          </p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-charcoal-900)",
              lineHeight: 1,
            }}
          >
            Common
            <br />
            <span style={{ color: "var(--color-lime-600)" }}>Questions</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid var(--color-offwhite-200)",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "1.375rem 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    color: "var(--color-charcoal-900)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: isOpen
                        ? "var(--color-charcoal-900)"
                        : "var(--color-charcoal-800)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-barlow), var(--font-display)",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--color-lime-600)",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: "0.1em",
                      transition: "transform 0.2s",
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-charcoal-600)",
                      lineHeight: 1.75,
                      paddingBottom: "1.375rem",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

