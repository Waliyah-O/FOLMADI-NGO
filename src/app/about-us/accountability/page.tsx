import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const reports = [
  {
    title: "Annual Report 2024",
    description:
      "Our comprehensive annual report covering programme outcomes, financial performance, and strategic highlights for 2024.",
    type: "Annual Report",
    year: "2024",
    size: "4.2 MB",
  },
  {
    title: "Annual Report 2023",
    description:
      "A detailed account of our work in 2023, including impact data, case studies, and audited financial statements.",
    type: "Annual Report",
    year: "2023",
    size: "3.8 MB",
  },
  {
    title: "Financial Statements 2024",
    description:
      "Independently audited financial statements for the fiscal year ending December 2024.",
    type: "Financial Report",
    year: "2024",
    size: "1.1 MB",
  },
  {
    title: "Financial Statements 2023",
    description:
      "Independently audited financial statements for the fiscal year ending December 2023.",
    type: "Financial Report",
    year: "2023",
    size: "1.0 MB",
  },
  {
    title: "Child Safeguarding Policy",
    description:
      "Our comprehensive policy for protecting children from harm in all our programmes and activities.",
    type: "Policy Document",
    year: "2024",
    size: "0.8 MB",
  },
  {
    title: "Code of Conduct",
    description:
      "The standards of behaviour expected of all FOLMADI staff, volunteers, and partners.",
    type: "Policy Document",
    year: "2024",
    size: "0.5 MB",
  },
];

const principles = [
  {
    icon: "🔍",
    title: "Transparency",
    description:
      "We publish our annual reports, financial statements, and programme data openly so that donors, partners, and the public can see exactly how we use our resources.",
  },
  {
    icon: "✅",
    title: "Independent Auditing",
    description:
      "Our financial statements are independently audited each year by a reputable external auditor, ensuring accuracy and compliance with Nigerian NGO regulations.",
  },
  {
    icon: "🛡️",
    title: "Child Safeguarding",
    description:
      "We have a zero-tolerance policy for any form of abuse or exploitation. All staff and volunteers undergo mandatory safeguarding training.",
  },
  {
    icon: "📋",
    title: "Governance",
    description:
      "Our Board of Directors provides independent oversight of our strategy, finances, and operations, meeting quarterly to review performance.",
  },
];

export const metadata = {
  title: "Accountability | FOLMADI Nigeria",
  description:
    "FOLMADI Nigeria is committed to transparency and accountability. View our annual reports, financial statements, and governance documents.",
};

export default function AccountabilityPage() {
  return (
    <PageLayout>
      <PageHero
        title="Accountability"
        subtitle="We are committed to the highest standards of transparency and accountability. Our donors, partners, and the children we serve deserve nothing less."
      />

      {/* Principles */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            OUR COMMITMENT
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {principles.map((item) => (
              <div key={item.title} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Documents */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            REPORTS & DOCUMENTS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "16px",
            }}
          >
            {reports.map((report) => (
              <div
                key={report.title}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  borderLeft: "4px solid #c0613a",
                }}
              >
                <div
                  style={{
                    minWidth: "48px",
                    height: "48px",
                    backgroundColor: "#c0613a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  📄
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.75rem",
                        color: "#c0613a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {report.type} · {report.year}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.75rem",
                        color: "#999",
                      }}
                    >
                      {report.size}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    {report.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.85rem",
                      color: "#666",
                      lineHeight: 1.5,
                      marginBottom: "12px",
                    }}
                  >
                    {report.description}
                  </p>
                  <button
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#c0613a",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      letterSpacing: "0.05em",
                    }}
                  >
                    DOWNLOAD PDF →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration info */}
      <section style={{ padding: "40px 0", backgroundColor: "#1a1a1a" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "#aaa",
              lineHeight: 1.7,
            }}
          >
            FOLMADI Nigeria is a registered non-profit organisation.
            <br />
            <strong style={{ color: "#fff" }}>
              NPO Registration No: 003-867 NPO
            </strong>{" "}
            |{" "}
            <strong style={{ color: "#fff" }}>
              PBO Registration No: 930003167
            </strong>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
