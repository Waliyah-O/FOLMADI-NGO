import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const programmes = [
  {
    title: "Child Protection",
    description:
      "We work to protect children from violence, abuse, exploitation, and neglect. Our programmes strengthen community-based protection systems and build the capacity of duty bearers.",
    href: "/what-we-do/our-work",
    color: "#e2001a",
    icon: "🛡️",
    stats: "500K+ children protected",
  },
  {
    title: "Education",
    description:
      "We believe every child has the right to quality education. We support early childhood development, improve school quality, and help keep children in school.",
    href: "/what-we-do/our-work",
    color: "#ffd100",
    icon: "📚",
    stats: "1,200+ schools supported",
  },
  {
    title: "Health & Nutrition",
    description:
      "We work to ensure children have access to quality healthcare and nutrition, from preventing malnutrition to providing comprehensive sexuality education.",
    href: "/what-we-do/our-work",
    color: "#00a651",
    icon: "❤️",
    stats: "12,000+ children treated",
  },
  {
    title: "Children's Rights & Business",
    description:
      "We engage the private sector to uphold children's rights, recognising that business has a critical role to play in creating a world fit for children.",
    href: "/what-we-do/our-work",
    color: "#0779bf",
    icon: "⚖️",
    stats: "200+ companies engaged",
  },
  {
    title: "In Times of Crisis",
    description:
      "When disaster strikes, we are among the first to respond. We provide emergency education, food, healthcare, and protection to children affected by conflict and natural disasters.",
    href: "/what-we-do/in-times-of-crisis",
    color: "#e2001a",
    icon: "🚨",
    stats: "45,000+ children reached in emergencies",
  },
];

export const metadata = {
  title: "What We Do | FOLMADI Nigeria",
  description:
    "Learn about FOLMADI Nigeria's programmes in child protection, education, health, nutrition, and emergency response.",
};

export default function WhatWeDoPage() {
  return (
    <PageLayout>
      <PageHero
        title="What We Do"
        subtitle="We work across Nigeria to give children a healthy start in life, the opportunity to learn, and protection from harm. Our programmes address the root causes of child poverty and vulnerability."
      />

      {/* Programmes */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            OUR PROGRAMMES
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {programmes.map((prog, index) => (
              <div
                key={prog.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1fr 2fr" : "2fr 1fr",
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                  borderBottom: "1px solid #eee",
                }}
              >
                {/* Color panel */}
                {index % 2 === 0 && (
                  <div
                    style={{
                      backgroundColor: prog.color,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "60px 40px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "4rem", marginBottom: "16px" }}>
                      {prog.icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {prog.stats}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div
                  style={{
                    padding: "60px 48px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "16px",
                    }}
                  >
                    {prog.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "1rem",
                      color: "#666",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                    }}
                  >
                    {prog.description}
                  </p>
                  <Link
                    href={prog.href}
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: prog.color,
                      letterSpacing: "0.05em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    LEARN MORE →
                  </Link>
                </div>

                {/* Color panel (right side for odd items) */}
                {index % 2 !== 0 && (
                  <div
                    style={{
                      backgroundColor: prog.color,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "60px 40px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "4rem", marginBottom: "16px" }}>
                      {prog.icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {prog.stats}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#e2001a",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            HELP US CHANGE THE LIVES OF CHILDREN
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1rem",
              color: "#fff",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Your support enables us to reach more children with life-changing
            programmes. Every donation makes a difference.
          </p>
          <Link
            href="/donate"
            style={{
              backgroundColor: "#fff",
              color: "#e2001a",
              fontFamily: "var(--font-oswald)",
              fontWeight: 700,
              textTransform: "uppercase",
              padding: "14px 36px",
              fontSize: "1rem",
              letterSpacing: "0.05em",
              display: "inline-block",
            }}
          >
            DONATE NOW
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
