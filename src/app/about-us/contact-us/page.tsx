"use client";

import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";

const offices = [
  {
    city: "Abuja (Head Office)",
    address: "Plot 1234, Maitama District, Abuja, FCT, Nigeria",
    phone: "+234 (0) 9 123 4567",
    email: "info@folmadi.org.ng",
    hours: "Monday – Friday: 8:00am – 5:00pm",
  },
  {
    city: "Lagos Office",
    address: "15 Broad Street, Lagos Island, Lagos State, Nigeria",
    phone: "+234 (0) 1 234 5678",
    email: "lagos@folmadi.org.ng",
    hours: "Monday – Friday: 8:00am – 5:00pm",
  },
  {
    city: "Kano Office",
    address: "22 Bompai Road, Kano Municipal, Kano State, Nigeria",
    phone: "+234 (0) 64 123 456",
    email: "kano@folmadi.org.ng",
    hours: "Monday – Friday: 8:00am – 5:00pm",
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontFamily: "var(--font-lato)",
    fontSize: "0.95rem",
    border: "1px solid #ddd",
    outline: "none",
    backgroundColor: "#fff",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontFamily: "var(--font-oswald)",
    fontSize: "0.85rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    color: "#333",
    letterSpacing: "0.05em",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, want to partner with us, or simply want to learn more — get in touch."
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
            }}
          >
            {/* Contact form */}
            <div>
              <h2 className="section-heading" style={{ marginBottom: "32px" }}>
                SEND US A MESSAGE
              </h2>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: "#f0faf4",
                    border: "1px solid #00a651",
                    padding: "32px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                    ✅
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#00a651",
                      marginBottom: "12px",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.95rem",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    Thank you for reaching out. A member of our team will get
                    back to you within 2–3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                      placeholder="Your full name"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      style={inputStyle}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Enquiry</option>
                      <option value="donation">Donation / Fundraising</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media / Press</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{ ...inputStyle, resize: "vertical" }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#c0613a",
                      color: "#fff",
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      padding: "14px 36px",
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Office info */}
            <div>
              <h2 className="section-heading" style={{ marginBottom: "32px" }}>
                OUR OFFICES
              </h2>
              {offices.map((office) => (
                <div
                  key={office.city}
                  style={{
                    marginBottom: "32px",
                    paddingBottom: "32px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#c0613a",
                      marginBottom: "12px",
                    }}
                  >
                    {office.city}
                  </h3>
                  {[
                    { icon: "📍", text: office.address },
                    { icon: "📞", text: office.phone },
                    { icon: "✉️", text: office.email },
                    { icon: "🕐", text: office.hours },
                  ].map((item) => (
                    <div
                      key={item.text}
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.9rem",
                          color: "#555",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Emergency */}
              <div
                style={{
                  backgroundColor: "#fff5f5",
                  border: "1px solid #c0613a",
                  padding: "20px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#c0613a",
                    marginBottom: "8px",
                  }}
                >
                  🚨 Child Protection Hotline
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.85rem",
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  To report a child in danger, call our 24/7 hotline:{" "}
                  <strong>0800-FOLMADI (0800-365-6234)</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageLayout>
  );
}
