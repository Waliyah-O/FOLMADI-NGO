import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const workAreas = [
  {
    title: "Child Protection",
    description:
      "Our child protection programmes focus on preventing and responding to violence, abuse, exploitation, and neglect. We work with communities, families, and government to build strong protection systems.",
    goals: [
      "Strengthen capacity of duty bearers through scaling up violence-prevention programmes in 13 districts",
      "Establish 50 community-based child protection committees across target states",
      "Train 2,000 social workers and community volunteers in child safeguarding",
      "Support 10,000 survivors of violence with psychosocial services",
    ],
    color: "#c0613a",
    icon: "🛡️",
    href: "/what-we-do/our-work/child-protection",
  },
  {
    title: "Education",
    description:
      "We believe quality education is the foundation of a child's future. Our education programmes focus on early childhood development, improving school quality, and keeping children in school.",
    goals: [
      "Strengthen ECCD quality through building capacity of 1,000 practitioners",
      "Support 100,000 caregivers and parents in early childhood development",
      "Partner with networks, CSOs and government departments in six provinces",
      "Improve learning outcomes for 500,000 children in primary schools",
    ],
    color: "#ffd100",
    icon: "📚",
    href: "/what-we-do/our-work/education",
  },
  {
    title: "Health & Nutrition",
    description:
      "We work to ensure every individual has access to quality healthcare and adequate nutrition. Our programmes address malnutrition, maternal health, and adolescent sexual and reproductive health.",
    goals: [
      "Support provision of gender-sensitive comprehensive sexuality education to 80,000 children",
      "Treat 15,000 severely malnourished children under five annually",
      "Train 5,000 community health workers in child health and nutrition",
      "Reduce stunting rates in target communities by 20%",
    ],
    color: "#00a651",
    icon: "❤️",
    href: "/what-we-do/our-work/health-and-nutrition",
  },
  {
    title: "Children's Rights & Business",
    description:
      "We engage the private sector to uphold children's rights, recognising that business has a critical role to play. We help companies understand and act on their responsibilities to children.",
    goals: [
      "Engage 200+ companies in adopting Children's Rights and Business Principles",
      "Develop child-friendly supply chain standards for key industries",
      "Train 1,000 business leaders on children's rights due diligence",
      "Advocate for stronger government regulation protecting children from harmful business practices",
    ],
    color: "#0779bf",
    icon: "⚖️",
    href: "/what-we-do/our-work/childrens-rights",
  },
];

export const metadata = {
  title: "Our Work in Nigeria | FOLMADI Nigeria",
  description:
    "Discover FOLMADI Nigeria's work in child protection, education, health, nutrition, and children's rights across Nigeria.",
};

export default function OurWorkPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Work in Nigeria"
        subtitle="We work across all 36 states of Nigeria to address the root causes of child poverty and vulnerability. Here's how we're making a difference."
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "48px" }}
          >
            {workAreas.map((area) => (
              <div
                key={area.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "0",
                  border: "1px solid #e0e0e0",
                  overflow: "hidden",
                }}
              >
                {/* Color sidebar */}
                <div
                  style={{
                    backgroundColor: area.color,
                    padding: "48px 32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "4rem", marginBottom: "20px" }}>
                    {area.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    {area.title}
                  </h3>
                </div>

                {/* Content */}
                <div style={{ padding: "48px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "1rem",
                      color: "#555",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                    }}
                  >
                    {area.description}
                  </p>

                  <h4
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#333",
                      letterSpacing: "0.05em",
                      marginBottom: "16px",
                    }}
                  >
                    OUR GOALS
                  </h4>
                  <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                    {area.goals.map((goal) => (
                      <li
                        key={goal}
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <span style={{ color: area.color, fontWeight: 700 }}>
                          ✓
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.9rem",
                            color: "#666",
                            lineHeight: 1.5,
                          }}
                        >
                          {goal}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={area.href}
                    style={{
                      display: "inline-block",
                      marginTop: "20px",
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: area.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
