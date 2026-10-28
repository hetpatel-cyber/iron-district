"use client";
import { useState, useCallback } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=75&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=65&auto=format&fit=crop",
    alt: "Main gym floor with equipment and dramatic overhead lighting",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=75&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=65&auto=format&fit=crop",
    alt: "Free weights dumbbell rack neatly arranged",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=800&q=75&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=400&q=65&auto=format&fit=crop",
    alt: "Power rack station with Olympic barbell and weight plates",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=65&auto=format&fit=crop",
    alt: "Athlete training with kettlebells in functional zone",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=75&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=65&auto=format&fit=crop",
    alt: "Athlete performing a barbell back squat under coaching",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=75&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=65&auto=format&fit=crop",
    alt: "Cardio area with commercial treadmills and rowers",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    },
    [closeLightbox]
  );

  return (
    <>
      <section
        aria-labelledby="gallery-heading"
        style={{
          backgroundColor: "var(--color-charcoal-800)",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              The Space
            </p>
            <h2
              id="gallery-heading"
              style={{
                fontFamily: "var(--font-barlow), var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--color-offwhite-50)",
                lineHeight: 1,
              }}
            >
              See the Gym
              <br />
              <span style={{ color: "var(--color-lime-400)" }}>Up Close</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
            }}
          >
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(img.src, img.alt)}
                aria-label={`View larger: ${img.alt}`}
                style={{
                  gridColumn: img.span === "col-span-2" ? "span 2" : "span 1",
                  padding: 0,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "block",
                  position: "relative",
                  aspectRatio: img.span === "col-span-2" ? "16/7" : "4/3",
                }}
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.3s, filter 0.3s",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${lightboxAlt}`}
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          style={{ outline: "none" }}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close image viewer"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
              lineHeight: 1,
              padding: "0.5rem",
            }}
          >
            ×
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          section[aria-labelledby="gallery-heading"] div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}

