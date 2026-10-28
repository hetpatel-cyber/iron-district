import type { Metadata } from "next";
import { siteConfig, whatsappLink } from "@/lib/config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Join Now",
  description:
    "Contact Iron District Fitness to book a free gym tour, enquire about memberships, or ask about personal training. Based in Bengaluru.",
};

export default function ContactPage() {
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
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Contact & Join</p>
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
            Let&rsquo;s Get
            <br />
            <span style={{ color: "var(--color-lime-400)" }}>You Started</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-grey-400)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Book a free tour, ask about membership, or get in touch with any question. We&rsquo;ll respond promptly.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section
        aria-labelledby="contact-heading"
        style={{
          backgroundColor: "var(--color-charcoal-950)",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left — Contact details */}
          <div>
            <h2
              id="contact-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
                marginBottom: "2.5rem",
              }}
            >
              Contact Details
            </h2>

            <address style={{ fontStyle: "normal" }}>
              {/* Address */}
              <div style={{ marginBottom: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-lime-400)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Location
                </p>
                <p style={{ fontSize: "1rem", color: "var(--color-offwhite-100)", lineHeight: 1.6 }}>
                  {siteConfig.contact.address}<br />
                  {siteConfig.contact.city}
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", marginTop: "0.25rem", fontStyle: "italic" }}>
                  Demo placeholder — replace with real gym address.
                </p>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-lime-400)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--color-offwhite-50)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "0.25rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {siteConfig.contact.phone}
                </a>
                <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", fontStyle: "italic" }}>
                  Demo placeholder — replace before going live.
                </p>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-lime-400)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-offwhite-100)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {siteConfig.contact.email}
                </a>
                <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", fontStyle: "italic" }}>
                  Demo placeholder — replace before going live.
                </p>
              </div>
            </address>

            {/* Hours */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-lime-400)",
                  marginBottom: "0.75rem",
                }}
              >
                Opening Hours
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", marginBottom: "0.75rem", fontStyle: "italic" }}>
                Sample hours — confirm with the gym.
              </p>
              {siteConfig.hours.map((h) => (
                <div
                  key={h.days}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--color-charcoal-700)",
                    fontSize: "0.875rem",
                  }}
                >
                  <span style={{ color: "var(--color-grey-400)" }}>{h.days}</span>
                  <span style={{ color: "var(--color-offwhite-100)", fontWeight: 600 }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink("Hi! I'd like to know more about Iron District Fitness and book a visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "block", textAlign: "center", marginBottom: "0.75rem" }}
            >
              WhatsApp Us Now
            </a>
            <p style={{ fontSize: "0.75rem", color: "var(--color-grey-500)", textAlign: "center", fontStyle: "italic" }}>
              Opens WhatsApp with a pre-filled message. Demo number — replace in config.
            </p>
          </div>

          {/* Right — Enquiry form */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
                marginBottom: "2rem",
              }}
            >
              Send an Enquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        aria-labelledby="map-heading"
        style={{
          backgroundColor: "var(--color-charcoal-900)",
          padding: "4rem 1.5rem",
          borderTop: "1px solid var(--color-charcoal-700)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            id="map-heading"
            style={{
              fontFamily: "var(--font-barlow), var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--color-offwhite-50)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            Find Us
          </h2>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-grey-500)", marginBottom: "1.5rem", fontStyle: "italic" }}>
            Map embed placeholder — replace the src below with a real Google Maps embed URL for the gym&rsquo;s actual address.
          </p>

          {/* Map embed placeholder */}
          <div
            style={{
              width: "100%",
              height: "360px",
              backgroundColor: "var(--color-charcoal-800)",
              border: "1px solid var(--color-charcoal-600)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
            role="img"
            aria-label="Map location placeholder"
          >
            <div
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-charcoal-600)",
                textAlign: "center",
              }}
            >
              Map Embed Placeholder
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-charcoal-500)", textAlign: "center", maxWidth: "380px", lineHeight: 1.6 }}>
              Replace this with a Google Maps iframe embed for the gym&rsquo;s real location.
              <br />
              Example: <code style={{ fontSize: "0.75rem", color: "var(--color-lime-400)" }}>https://maps.google.com/maps?q=Koramangala+Bengaluru</code>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[aria-labelledby="contact-heading"] > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

