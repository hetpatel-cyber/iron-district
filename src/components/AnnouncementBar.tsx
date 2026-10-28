"use client";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      role="banner"
      style={{
        backgroundColor: "var(--color-lime-400)",
        color: "var(--color-charcoal-950)",
        padding: "0.5rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        position: "relative",
        zIndex: 50,
      }}
    >
      <p
        style={{
          fontSize: "0.8125rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textAlign: "center",
          margin: 0,
        }}
      >
        <span style={{ fontWeight: 400, marginRight: "0.375rem" }}>
          ★ Demo Promotion:
        </span>
        First month free for new members who book a tour this week — subject to confirmation with the gym.
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: "0.75rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--color-charcoal-950)",
          fontSize: "1.125rem",
          lineHeight: 1,
          padding: "0.25rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        ×
      </button>
    </div>
  );
}

