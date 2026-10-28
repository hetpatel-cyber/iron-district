import Link from "next/link";
import { siteConfig, whatsappMembershipLink } from "@/lib/config";

const plans = [
  {
    key: "essential",
    name: "Essential",
    tagline: "Access the full gym floor and all standard equipment.",
    price: siteConfig.membership.essential.monthly,
    features: [
      "Full gym floor access",
      "Free weights & machines",
      "Cardio equipment",
      "Group class access (2/week)",
      "Changing & locker facilities",
    ],
    suitable: "Perfect for self-directed gym-goers.",
    accent: false,
  },
  {
    key: "performance",
    name: "Performance",
    tagline: "Structured coaching and unlimited class access.",
    price: siteConfig.membership.performance.monthly,
    features: [
      "Everything in Essential",
      "Unlimited group classes",
      "2 PT sessions per month",
      "Programme design",
      "Progress check-ins",
      "Nutrition guidance",
    ],
    suitable: "Ideal for those who want structure and accountability.",
    accent: true,
  },
  {
    key: "elite",
    name: "Elite Coaching",
    tagline: "Dedicated personal coaching, fully individualised.",
    price: siteConfig.membership.elite.monthly,
    features: [
      "Everything in Performance",
      "8 PT sessions per month",
      "Bespoke programming",
      "Weekly check-ins",
      "Body composition tracking",
      "Priority floor booking",
    ],
    suitable: "For athletes and high-performance clients.",
    accent: false,
  },
];

export default function MembershipPreview() {
  return (
    <section
      aria-labelledby="membership-heading"
      style={{
        backgroundColor: "var(--color-offwhite-50)",
        color: "var(--color-charcoal-900)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Membership
          </p>
          <h2
            id="membership-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-charcoal-900)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            Choose Your
            <br />
            <span style={{ color: "var(--color-lime-600)" }}>Membership</span>
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-charcoal-600)",
              maxWidth: "560px",
              lineHeight: 1.6,
              marginBottom: "3rem",
            }}
          >
            <strong>Illustrative demo pricing</strong> — prices shown are examples only and are not verified offers. Contact the gym for confirmed pricing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {plans.map((plan) => (
            <article
              key={plan.key}
              style={{
                border: plan.accent
                  ? "2px solid var(--color-charcoal-900)"
                  : "1px solid var(--color-offwhite-200)",
                backgroundColor: plan.accent
                  ? "var(--color-charcoal-900)"
                  : "#fff",
                color: plan.accent
                  ? "var(--color-offwhite-50)"
                  : "var(--color-charcoal-900)",
                padding: "2rem",
                position: "relative",
              }}
            >
              {plan.accent && (
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
                  color: plan.accent
                    ? "var(--color-grey-400)"
                    : "var(--color-charcoal-500)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                {plan.tagline}
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-barlow), var(--font-display)",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: plan.accent
                      ? "var(--color-offwhite-50)"
                      : "var(--color-charcoal-900)",
                    lineHeight: 1,
                  }}
                >
                  ₹{plan.price.toLocaleString("en-IN")}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: plan.accent
                      ? "var(--color-grey-400)"
                      : "var(--color-charcoal-500)",
                    marginLeft: "0.375rem",
                  }}
                >
                  / month
                </span>
              </div>

              <ul
                role="list"
                style={{
                  listStyle: "none",
                  margin: "0 0 1.75rem",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: "0.875rem",
                      color: plan.accent
                        ? "var(--color-grey-400)"
                        : "var(--color-charcoal-600)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-lime-400)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: "0.1em",
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: plan.accent
                    ? "var(--color-grey-500)"
                    : "var(--color-charcoal-500)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                {plan.suitable}
              </p>

              <a
                href={whatsappMembershipLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.accent ? "btn-primary" : "btn-outline-lime"}
                style={{ display: "block", textAlign: "center" }}
              >
                Enquire via WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href="/membership" className="btn-outline" style={{ color: "var(--color-charcoal-900)", borderColor: "var(--color-charcoal-900)" }}>
            View Full Pricing Details
          </Link>
        </div>
      </div>
    </section>
  );
}

