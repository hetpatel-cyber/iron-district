import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, whatsappMembershipLink, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Explore Iron District Fitness membership plans — Essential, Performance, and Elite Coaching. Illustrative pricing for a premium Bengaluru gym.",
};

const plans = [
  {
    key: "essential",
    name: "Essential",
    tagline: "Full gym access for the self-directed member.",
    price: siteConfig.membership.essential.monthly,
    quarterly: siteConfig.membership.essential.quarterly,
    annual: siteConfig.membership.essential.annual,
    features: [
      { text: "Full gym floor access, 7 days a week", included: true },
      { text: "Free weights & dumbbell area", included: true },
      { text: "Power racks & Olympic platforms", included: true },
      { text: "Cardio equipment", included: true },
      { text: "Changing rooms & locker use", included: true },
      { text: "Group classes — 2 per week", included: true },
      { text: "Personal training sessions", included: false },
      { text: "Structured programme design", included: false },
      { text: "Progress check-ins & tracking", included: false },
      { text: "Nutrition guidance", included: false },
    ],
    suitable: "Best for: self-directed members who already know what they want to do in the gym and train independently.",
    accent: false,
    highlight: false,
  },
  {
    key: "performance",
    name: "Performance",
    tagline: "Structured coaching and unlimited group training.",
    price: siteConfig.membership.performance.monthly,
    quarterly: siteConfig.membership.performance.quarterly,
    annual: siteConfig.membership.performance.annual,
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "2 personal training sessions per month", included: true },
      { text: "Monthly programme design & update", included: true },
      { text: "Monthly progress check-in", included: true },
      { text: "Basic nutrition guidance", included: true },
      { text: "Priority class booking", included: false },
      { text: "Weekly check-ins & detailed tracking", included: false },
      { text: "Body composition assessment", included: false },
      { text: "Priority floor booking", included: false },
    ],
    suitable: "Best for: members who want accountability, structured programming, and a mix of coached and independent training.",
    accent: true,
    highlight: true,
  },
  {
    key: "elite",
    name: "Elite Coaching",
    tagline: "Fully individualised coaching for maximum results.",
    price: siteConfig.membership.elite.monthly,
    quarterly: siteConfig.membership.elite.quarterly,
    annual: siteConfig.membership.elite.annual,
    features: [
      { text: "Everything in Performance", included: true },
      { text: "8 personal training sessions per month", included: true },
      { text: "Fully bespoke training programme", included: true },
      { text: "Weekly check-ins & detailed tracking", included: true },
      { text: "Body composition assessment", included: true },
      { text: "Comprehensive nutrition guidance", included: true },
      { text: "Priority class booking", included: true },
      { text: "Priority floor booking", included: true },
      { text: "Direct coach messaging", included: true },
      { text: "Performance & competition prep available", included: true },
    ],
    suitable: "Best for: athletes, high-performance clients, and anyone who wants to maximise results with dedicated coaching.",
    accent: false,
    highlight: false,
  },
];

const comparisonRows = [
  { feature: "Gym floor access", essential: true, performance: true, elite: true },
  { feature: "Group classes", essential: "2/week", performance: "Unlimited", elite: "Unlimited" },
  { feature: "Personal training", essential: false, performance: "2/month", elite: "8/month" },
  { feature: "Programme design", essential: false, performance: true, elite: "Bespoke" },
  { feature: "Progress check-ins", essential: false, performance: "Monthly", elite: "Weekly" },
  { feature: "Nutrition guidance", essential: false, performance: "Basic", elite: "Full" },
  { feature: "Body composition tracking", essential: false, performance: false, elite: true },
  { feature: "Priority booking", essential: false, performance: false, elite: true },
  { feature: "Direct coach access", essential: false, performance: false, elite: true },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <span style={{ color: "var(--color-lime-400)", fontWeight: 700, fontSize: "1rem" }}>✓</span>;
  if (value === false) return <span style={{ color: "var(--color-charcoal-600)", fontSize: "1rem" }}>–</span>;
  return <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-offwhite-100)" }}>{value}</span>;
}

export default function MembershipPage() {
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
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Membership Plans
          </p>
          <h1
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              lineHeight: 0.97,
              marginBottom: "1.5rem",
            }}
          >
            Find the Right
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>Membership</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-grey-400)",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
            }}
          >
            Three plans designed for different goals and training styles. Enquire via WhatsApp or the contact form to confirm current pricing and availability.
          </p>
          <p
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              color: "var(--color-charcoal-500)",
              backgroundColor: "var(--color-charcoal-700)",
              padding: "0.375rem 0.875rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            ⚠ Illustrative Demo Pricing — Not Verified Offers
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section
        aria-labelledby="plans-heading"
        style={{
          backgroundColor: "var(--color-charcoal-950)",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            id="plans-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              marginBottom: "3rem",
              lineHeight: 1,
            }}
          >
            Monthly Plans
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            {plans.map((plan) => (
              <article
                key={plan.key}
                style={{
                  border: plan.highlight
                    ? "2px solid var(--color-lime-400)"
                    : "1px solid var(--color-charcoal-700)",
                  backgroundColor: "var(--color-charcoal-900)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "2rem",
                      backgroundColor: "var(--color-lime-400)",
                      color: "var(--color-charcoal-950)",
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.75rem",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <p
                  className="section-label"
                  style={{ marginBottom: "0.5rem", color: "var(--color-lime-400)" }}
                >
                  {plan.name}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-grey-400)",
                    marginBottom: "1.75rem",
                    lineHeight: 1.5,
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Pricing options */}
                <div style={{ marginBottom: "2rem", borderBottom: "1px solid var(--color-charcoal-700)", paddingBottom: "1.75rem" }}>
                  <div style={{ marginBottom: "0.625rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-barlow), var(--font-display)",
                        fontSize: "3.25rem",
                        fontWeight: 800,
                        color: "var(--color-offwhite-50)",
                        lineHeight: 1,
                      }}
                    >
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "var(--color-grey-400)", marginLeft: "0.375rem" }}>/ month</span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ border: "1px solid var(--color-charcoal-700)", padding: "0.625rem", textAlign: "center" }}>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-offwhite-100)" }}>₹{plan.quarterly.toLocaleString("en-IN")}</div>
                      <div style={{ fontSize: "0.6875rem", color: "var(--color-grey-500)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Quarterly</div>
                    </div>
                    <div style={{ border: "1px solid var(--color-charcoal-700)", padding: "0.625rem", textAlign: "center" }}>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-offwhite-100)" }}>₹{plan.annual.toLocaleString("en-IN")}</div>
                      <div style={{ fontSize: "0.6875rem", color: "var(--color-grey-500)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Annual</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul
                  role="list"
                  style={{
                    listStyle: "none",
                    margin: "0 0 1.75rem",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      style={{
                        fontSize: "0.875rem",
                        color: f.included ? "var(--color-grey-400)" : "var(--color-charcoal-600)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        style={{
                          color: f.included ? "var(--color-lime-400)" : "var(--color-charcoal-600)",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {f.included ? "✓" : "–"}
                      </span>
                      {f.text}
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
                  }}
                >
                  {plan.suitable}
                </p>

                <a
                  href={whatsappMembershipLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.highlight ? "btn-primary" : "btn-outline-lime"}
                  style={{ display: "block", textAlign: "center" }}
                >
                  Enquire — {plan.name} Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section
        aria-labelledby="comparison-heading"
        style={{
          backgroundColor: "var(--color-offwhite-50)",
          color: "var(--color-charcoal-900)",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Plan Comparison</p>
          <h2
            id="comparison-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-charcoal-900)",
              lineHeight: 1,
              marginBottom: "2.5rem",
            }}
          >
            Side by Side
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
              }}
              aria-label="Membership plan feature comparison"
            >
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-charcoal-900)" }}>
                  <th style={{ textAlign: "left", padding: "0.875rem 0.75rem 0.875rem 0", width: "45%", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "0.875rem 0.75rem", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Essential</th>
                  <th style={{ textAlign: "center", padding: "0.875rem 0.75rem", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-lime-600)" }}>Performance</th>
                  <th style={{ textAlign: "center", padding: "0.875rem 0.75rem", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: "1px solid var(--color-offwhite-200)",
                      backgroundColor: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)",
                    }}
                  >
                    <td style={{ padding: "0.875rem 0.75rem 0.875rem 0", color: "var(--color-charcoal-700)", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ textAlign: "center", padding: "0.875rem 0.75rem" }}><FeatureCell value={row.essential} /></td>
                    <td style={{ textAlign: "center", padding: "0.875rem 0.75rem" }}><FeatureCell value={row.performance} /></td>
                    <td style={{ textAlign: "center", padding: "0.875rem 0.75rem" }}><FeatureCell value={row.elite} /></td>
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
                marginBottom: "0.75rem",
              }}
            >
              Still Have Questions?
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-grey-400)", lineHeight: 1.6, maxWidth: "480px" }}>
              Our team is happy to help you choose the right membership and arrange a free tour.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

