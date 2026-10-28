/**
 * Iron District Fitness — Central Configuration
 *
 * DEMO VALUES: Replace every placeholder below with real business details
 * before deploying for an actual client.
 */

export const siteConfig = {
  name: "Iron District Fitness",
  tagline: "Built by Discipline. Defined by Progress.",
  shortTagline: "Built by Discipline.",
  url: "https://irondistrict.in", // TODO: replace with real domain

  // ─── Contact ─────────────────────────────────────────────────────────────
  contact: {
    /** DEMO phone — replace before live launch */
    phone: "+91 98765 43210",
    phoneTel: "+919876543210",
    /** DEMO email — replace before live launch */
    email: "hello@irondistrict.in",
    /** DEMO address — replace before live launch */
    address: "12, Industrial Layout, Koramangala",
    city: "Bengaluru, Karnataka 560095",
  },

  // ─── WhatsApp ─────────────────────────────────────────────────────────────
  /**
   * DEMO WhatsApp number — replace with the real gym's WhatsApp-enabled number.
   * Format: country code + number, no spaces or dashes.
   */
  whatsapp: {
    number: "919876543210",
    defaultMessage:
      "Hi! I found Iron District Fitness online and would like to know more about membership options.",
  },

  // ─── Operating Hours ──────────────────────────────────────────────────────
  /** DEMO hours — confirm and replace with actual gym timings */
  hours: [
    { days: "Monday – Friday", time: "5:30 AM – 10:30 PM" },
    { days: "Saturday", time: "6:00 AM – 9:00 PM" },
    { days: "Sunday", time: "7:00 AM – 7:00 PM" },
  ],

  // ─── Social Links ─────────────────────────────────────────────────────────
  /** DEMO social links — replace with real handles */
  social: {
    instagram: "https://instagram.com/irondistrict",
    facebook: "https://facebook.com/irondistrict",
    youtube: "https://youtube.com/@irondistrict",
  },

  // ─── Membership Prices (Illustrative Demo Pricing) ───────────────────────
  /**
   * PRICES ARE ILLUSTRATIVE DEMO FIGURES.
   * They are not verified offers and must be updated to reflect the
   * actual gym's pricing before the website is used commercially.
   */
  membership: {
    essential: {
      monthly: 1299,
      quarterly: 3299,
      annual: 11999,
    },
    performance: {
      monthly: 2199,
      quarterly: 5799,
      annual: 19999,
    },
    elite: {
      monthly: 4499,
      quarterly: 11999,
      annual: 42999,
    },
  },
};

/** Build a WhatsApp deep-link with a pre-filled message */
export function whatsappLink(message?: string): string {
  const msg = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}

/** Build a WhatsApp link pre-filled with the selected membership plan */
export function whatsappMembershipLink(plan: string): string {
  const msg = `Hi! I'm interested in the ${plan} membership at Iron District Fitness. Could you share more details and help me get started?`;
  return whatsappLink(msg);
}

