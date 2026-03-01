"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#fff",
        borderTop: "4px solid #e2001a",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="newsletter-grid"
        >
          {/* Left: Image/visual */}
          <div
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              overflow: "hidden",
              minHeight: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage:
                "url('https://www.savethechildren.org.za/sites/za/files/styles/banner_desktop_1440x810/public/2024-10/newsletter-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(226,0,26,0.85)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📧</div>
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#fff",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                Stay Connected
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  color: "rgba(255,255,255,0.9)",
                  marginTop: "8px",
                  fontSize: "0.95rem",
                }}
              >
                Get the latest news from FOLMADI Nigeria
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "1.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#333",
                marginBottom: "12px",
              }}
            >
              Subscribe to our newsletter
            </h2>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                color: "#666",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              Stay up to date with our latest news, stories and ways you can
              help children in Nigeria and around the world.
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: "#00a651",
                  color: "#fff",
                  padding: "16px 24px",
                  fontFamily: "var(--font-lato)",
                  borderRadius: "4px",
                }}
              >
                ✅ Thank you for subscribing! You&apos;ll hear from us soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="newsletter-email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#333",
                      marginBottom: "6px",
                    }}
                  >
                    Email address *
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ccc",
                      fontFamily: "var(--font-lato)",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#e2001a",
                    color: "#fff",
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    padding: "14px 32px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                    transition: "background-color 0.2s",
                  }}
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
