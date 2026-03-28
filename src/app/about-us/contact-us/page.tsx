"use client";

import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";

const offices = [
  // {
  //   city: "Abuja (Head Office)",
  //   address: "Plot 1234, Maitama District, Abuja, FCT, Nigeria",
  //   phone: "+234 (0) 9 123 4567",
  //   email: "info@folmadi.org.ng",
  //   hours: "Monday – Friday: 8:00am – 5:00pm",
  // },
  {
    city: "Our Lagos Office",
    address: "15 Broad Street, Lagos Island, Lagos State, Nigeria",
    phone: "+234 (0) 1 234 5678",
    email: "lagos@folmadi.org.ng",
    hours: "Monday – Friday: 8:00am – 5:00pm",
  },
  // {
  //   city: "Kano Office",
  //   address: "22 Bompai Road, Kano Municipal, Kano State, Nigeria",
  //   phone: "+234 (0) 64 123 456",
  //   email: "kano@folmadi.org.ng",
  //   hours: "Monday – Friday: 8:00am – 5:00pm",
  // },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/folmadinigeria",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/folmadinigeria",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/user/folmadiNG",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/save-the-children-south-africa",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/SaveChildrenSA",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
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
                {/* OUR OFFICES */}
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

              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#000",
                    marginBottom: "16px",
                    letterSpacing: "0.05em",
                  }}
                >
                  On Social Media
                </h4>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "50%",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#e07a52 ";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#333";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              {/* <div
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
              </div> */}
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
