import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const responses = [
  {
    title: "North-East Nigeria Conflict",
    location: "Borno, Yobe & Adamawa States",
    year: "Ongoing since 2009",
    description:
      "The conflict in North-East Nigeria has displaced millions of people, with children bearing the heaviest burden. FOLMADI provides emergency education, child protection, nutrition, and health services to children in displacement camps and host communities.",
    impact: "45,000+ children reached with emergency services",
    color: "#c0613a",
  },
  {
    title: "Flooding Response",
    location: "Anambra, Kogi & Delta States",
    year: "2022 – 2023",
    description:
      "Devastating floods in 2022 displaced over 1.4 million people across Nigeria. FOLMADI deployed emergency teams to provide clean water, food, temporary learning spaces, and psychosocial support to affected children and families.",
    impact: "28,000 children supported with emergency relief",
    color: "#0779bf",
  },
  {
    title: "Banditry & Kidnapping Crisis",
    location: "Zamfara, Katsina & Kebbi States",
    year: "2020 – Present",
    description:
      "Widespread banditry and mass kidnappings have disrupted education and traumatised communities in North-West Nigeria. FOLMADI supports school safety, psychosocial recovery, and community resilience programmes.",
    impact: "15,000 children supported with psychosocial services",
    color: "#00a651",
  },
];

const responseTypes = [
  {
    icon: "🏫",
    title: "Emergency Education",
    description:
      "We set up temporary learning spaces and provide trained teachers to ensure children can continue learning even in crisis.",
  },
  {
    icon: "🍽️",
    title: "Food & Nutrition",
    description:
      "We provide emergency food assistance and treat severe acute malnutrition in children under five.",
  },
  {
    icon: "🏥",
    title: "Health Services",
    description:
      "We deploy mobile health teams to provide primary healthcare, vaccinations, and maternal health services.",
  },
  {
    icon: "🧠",
    title: "Psychosocial Support",
    description:
      "We provide trauma-informed care and mental health support to help children recover from the effects of crisis.",
  },
  {
    icon: "🛡️",
    title: "Child Protection",
    description:
      "We establish safe spaces for children and work to prevent and respond to violence, abuse, and exploitation in crisis settings.",
  },
  {
    icon: "💧",
    title: "Water & Sanitation",
    description:
      "We provide clean water, sanitation facilities, and hygiene education to prevent disease outbreaks.",
  },
];

export const metadata = {
  title: "In Times of Crisis | FOLMADI Nigeria",
  description:
    "FOLMADI Nigeria responds to emergencies and crises to protect children and ensure they can continue to learn and thrive.",
};

export default function InTimesOfCrisisPage() {
  return (
    <PageLayout>
      <PageHero
        title="In Times of Crisis"
        subtitle="People are always at their most vulnerable when disaster strikes. FOLMADI is among the first to respond, providing life-saving support to individuals and families in emergencies."
        bgColor="#1a1a1a"
      />

      {/* Response types */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            HOW WE RESPOND
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {responseTypes.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "32px",
                  backgroundColor: "#f9f9f9",
                  borderTop: "4px solid #c0613a",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current responses */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            CURRENT RESPONSES
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {responses.map((response) => (
              <div
                key={response.title}
                style={{
                  backgroundColor: "#fff",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  overflow: "hidden",
                  borderLeft: `6px solid ${response.color}`,
                }}
              >
                <div style={{ padding: "32px 40px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#333",
                        flex: 1,
                      }}
                    >
                      {response.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.8rem",
                        color: response.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      📍 {response.location}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.8rem",
                        color: "#888",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      🕐 {response.year}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.95rem",
                      color: "#555",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    {response.description}
                  </p>
                  <div
                    style={{
                      backgroundColor: response.color,
                      color: "#fff",
                      padding: "10px 20px",
                      display: "inline-block",
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {response.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency donate CTA */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#c0613a",
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
            SUPPORT OUR EMERGENCY RESPONSE
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
            Your donation helps us reach children in crisis faster. Every
            contribution — no matter the size — makes a real difference.
          </p>
          <Link
            href="/donate"
            style={{
              backgroundColor: "#fff",
              color: "#c0613a",
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
