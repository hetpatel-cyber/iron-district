"use client";
import { useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/config";

type FormState = {
  name: string;
  phone: string;
  email: string;
  enquiryType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const enquiryTypes = [
  "General Enquiry",
  "Essential Membership",
  "Performance Membership",
  "Elite Coaching",
  "Personal Training",
  "Group Classes",
  "Free Tour Booking",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.phone.trim()) {
      e.phone = "A phone number is required.";
    } else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) {
      e.phone = "Please enter a valid phone number.";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.enquiryType) e.enquiryType = "Please select an enquiry type.";
    if (!form.message.trim()) e.message = "Please add a short message.";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // DEMO: No backend — display confirmation only
    setSubmitted(true);
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "0.875rem 1rem",
    backgroundColor: "var(--color-charcoal-800)",
    border: `1px solid ${hasError ? "#f87171" : "var(--color-charcoal-600)"}`,
    color: "var(--color-offwhite-50)",
    fontSize: "0.9375rem",
    fontFamily: "var(--font-inter), sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    display: "block",
    boxSizing: "border-box",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-grey-400)",
    marginBottom: "0.5rem",
  };

  const errorStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    color: "#f87171",
    marginTop: "0.375rem",
  };

  if (submitted) {
    return (
      <div
        role="alert"
        aria-live="polite"
        style={{
          backgroundColor: "var(--color-charcoal-800)",
          border: "2px solid var(--color-lime-400)",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-barlow), var(--font-display)",
            fontSize: "2.5rem",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--color-lime-400)",
            lineHeight: 1,
            marginBottom: "0.75rem",
          }}
        >
          Message Received
        </div>
        <p style={{ fontSize: "1rem", color: "var(--color-offwhite-100)", lineHeight: 1.65, marginBottom: "1rem" }}>
          Thank you, <strong>{form.name}</strong>. Your enquiry about{" "}
          <strong>{form.enquiryType}</strong> has been noted locally.
        </p>
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-grey-500)",
            lineHeight: 1.6,
            maxWidth: "480px",
            margin: "0 auto 1.5rem",
            fontStyle: "italic",
          }}
        >
          <strong>Demo notice:</strong> This form does not connect to a live backend. No message has been sent to the gym. For actual enquiries, please use the WhatsApp or phone contact details below.
        </p>
        <a
          href={whatsappLink(`Hi, I'm ${form.name}. I enquired about ${form.enquiryType} — could someone get back to me?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Complete Enquiry via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Membership and general enquiry form">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full Name <span aria-label="required" style={{ color: "var(--color-lime-400)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your full name"
            style={inputStyle(!!errors.name)}
          />
          {errors.name && <p id="name-error" style={errorStyle} role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone Number <span aria-label="required" style={{ color: "var(--color-lime-400)" }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+91 98765 43210"
            style={inputStyle(!!errors.phone)}
          />
          {errors.phone && <p id="phone-error" style={errorStyle} role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label htmlFor="email" style={labelStyle}>
          Email Address <span style={{ color: "var(--color-grey-500)", fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="your@email.com"
          style={inputStyle(!!errors.email)}
        />
        {errors.email && <p id="email-error" style={errorStyle} role="alert">{errors.email}</p>}
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label htmlFor="enquiryType" style={labelStyle}>
          Enquiry Type <span aria-label="required" style={{ color: "var(--color-lime-400)" }}>*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby={errors.enquiryType ? "enquiry-error" : undefined}
          style={{
            ...inputStyle(!!errors.enquiryType),
            cursor: "pointer",
            appearance: "none",
          }}
        >
          <option value="">Select enquiry type…</option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.enquiryType && <p id="enquiry-error" style={errorStyle} role="alert">{errors.enquiryType}</p>}
      </div>

      <div style={{ marginBottom: "1.75rem" }}>
        <label htmlFor="message" style={labelStyle}>
          Message <span aria-label="required" style={{ color: "var(--color-lime-400)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={5}
          placeholder="Tell us about your goals, questions, or what you'd like to discuss…"
          style={{
            ...inputStyle(!!errors.message),
            resize: "vertical",
            minHeight: "120px",
          }}
        />
        {errors.message && <p id="message-error" style={errorStyle} role="alert">{errors.message}</p>}
      </div>

      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--color-grey-500)",
          lineHeight: 1.6,
          marginBottom: "1.25rem",
          fontStyle: "italic",
        }}
      >
        <strong>Demo notice:</strong> This form is a frontend demonstration only. Submissions are validated locally and not transmitted to any server or inbox. Use WhatsApp or the phone number to reach the gym directly.
      </p>

      <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
        Send Enquiry
      </button>

      <style>{`
        @media (max-width: 560px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--color-lime-400) !important;
          outline: none;
        }
      `}</style>
    </form>
  );
}

