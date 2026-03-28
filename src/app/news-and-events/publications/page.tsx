import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const publications = [
  {
    title: "Annual Report 2025",
    type: "Annual Report",
    year: "2025",
    description:
      "Our comprehensive annual report covering programme outcomes, financial performance, and strategic highlights for 2025.",
    pages: "64 pages",
    size: "4.2 MB",
    color: "#c0613a",
  },
  {
    title: "Child Malnutrition in North-West Nigeria: A Situation Analysis",
    type: "Research Report",
    year: "2025",
    description:
      "An in-depth analysis of child malnutrition rates, causes, and interventions in Zamfara, Katsina, and Kebbi States.",
    pages: "48 pages",
    size: "3.1 MB",
    color: "#00a651",
  },
  {
    title: "Early Childhood Development in Nigeria: Policy Brief",
    type: "Policy Brief",
    year: "2025",
    description:
      "A policy brief calling on the Federal Government to increase investment in early childhood development and implement the National Policy on Early Childhood Care and Education.",
    pages: "12 pages",
    size: "0.8 MB",
    color: "#ffd100",
  },
  {
    title: "Children's Rights and Business: A Guide for Nigerian Companies",
    type: "Guidance Document",
    year: "2024",
    description:
      "A practical guide for Nigerian businesses on how to integrate children's rights into their operations, supply chains, and CSR programmes.",
    pages: "36 pages",
    size: "2.4 MB",
    color: "#0779bf",
  },
  {
    title: "Emergency Response Evaluation: North-East Nigeria 2023–2024",
    type: "Evaluation Report",
    year: "2024",
    description:
      "An independent evaluation of FOLMADI's emergency response in Borno, Yobe, and Adamawa States, assessing effectiveness, efficiency, and impact.",
    pages: "52 pages",
    size: "3.8 MB",
    color: "#c0613a",
  },
  {
    title: "Annual Report 2024",
    type: "Annual Report",
    year: "2024",
    description:
      "Our comprehensive annual report covering programme outcomes, financial performance, and strategic highlights for 2024.",
    pages: "60 pages",
    size: "3.9 MB",
    color: "#c0613a",
  },
  {
    title: "Child Protection in Nigeria: Gaps and Opportunities",
    type: "Research Report",
    year: "2024",
    description:
      "A landscape analysis of child protection systems in Nigeria, identifying key gaps and opportunities for strengthening protection for all children.",
    pages: "44 pages",
    size: "2.9 MB",
    color: "#00a651",
  },
  {
    title: "ECCD Programme Evaluation 2023",
    type: "Evaluation Report",
    year: "2023",
    description:
      "An evaluation of FOLMADI's Early Childhood Care and Development programme across six states, measuring learning outcomes and programme quality.",
    pages: "40 pages",
    size: "2.6 MB",
    color: "#ffd100",
  },
];

const types = [
  "All",
  "Annual Report",
  "Research Report",
  "Policy Brief",
  "Evaluation Report",
  "Guidance Document",
];

export const metadata = {
  title: "Publications | FOLMADI Nigeria",
  description:
    "Access FOLMADI Nigeria's research reports, policy briefs, programme evaluations, and other publications.",
};

export default function PublicationsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Publications"
        subtitle="Our research, evaluations, and policy documents — evidence-based insights to inform better outcomes for children."
        bgColor="#333"
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          {/* Filter */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {types.map((type, index) => (
              <button
                key={type}
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "8px 16px",
                  border: "1px solid",
                  borderColor: index === 0 ? "#c0613a" : "#ddd",
                  backgroundColor: index === 0 ? "#c0613a" : "transparent",
                  color: index === 0 ? "#fff" : "#666",
                  cursor: "pointer",
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Publications list */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {publications.map((pub) => (
              <div
                key={pub.title}
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "24px",
                  alignItems: "center",
                  borderLeft: `4px solid ${pub.color}`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: pub.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  📄
                </div>

                {/* Info */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      marginBottom: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.7rem",
                        color: pub.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        backgroundColor: "#fff",
                        padding: "3px 10px",
                        border: `1px solid ${pub.color}`,
                      }}
                    >
                      {pub.type}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.75rem",
                        color: "#999",
                      }}
                    >
                      {pub.year} · {pub.pages} · {pub.size}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {pub.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.85rem",
                      color: "#666",
                      lineHeight: 1.5,
                    }}
                  >
                    {pub.description}
                  </p>
                </div>

                {/* Download */}
                <button
                  style={{
                    backgroundColor: pub.color,
                    color: "#fff",
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    padding: "10px 20px",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  DOWNLOAD
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
