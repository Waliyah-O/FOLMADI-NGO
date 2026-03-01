import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const partnershipTypes = [
  {
    title: "Corporate Donations",
    description:
      "Make a direct financial contribution to our programmes. We can work with you to direct your donation to the areas that align with your company's values and CSR priorities.",
    icon: "💰",
    color: "#e2001a",
  },
  {
    title: "Employee Volunteering",
    description:
      "Engage your employees in meaningful volunteering experiences. From skills-based volunteering to community days, we can design a programme that works for your team.",
    icon: "👥",
    color: "#0779bf",
  },
  {
    title: "Cause-Related Marketing",
    description:
      "Partner with FOLMADI on a cause-related marketing campaign. Link your brand to our mission and demonstrate your commitment to children's rights to your customers.",
    icon: "📣",
    color: "#00a651",
  },
  {
    title: "Payroll Giving",
    description:
      "Set up a payroll giving scheme that allows your employees to donate directly from their salary, tax-efficiently, to FOLMADI.",
    icon: "💳",
    color: "#ffd100",
  },
  {
    title: "Children's Rights & Business",
    description:
      "Adopt the Children's Rights and Business Principles and demonstrate your commitment to respecting and supporting children's rights across your operations and supply chain.",
    icon: "⚖️",
    color: "#e2001a",
  },
  {
    title: "Event Sponsorship",
    description:
      "Sponsor one of our fundraising events or awareness campaigns. Gain brand visibility while supporting a cause that matters.",
    icon: "🎪",
    color: "#0779bf",
  },
];

const partners = [
  { name: "Dangote Foundation", type: "Strategic Partner" },
  { name: "Access Bank", type: "Corporate Partner" },
  { name: "MTN Nigeria", type: "Technology Partner" },
  { name: "Zenith Bank", type: "Financial Partner" },
  { name: "Nestlé Nigeria", type: "Nutrition Partner" },
  { name: "Total Energies", type: "Community Partner" },
];

export const metadata = {
  title: "If You Are a Company | Get Involved | FOLMADI Nigeria",
  description:
    "Partner with FOLMADI Nigeria to fulfil your CSR commitments and make a meaningful impact on children's lives.",
};

export default function IfYouAreACompanyPage() {
  return (
    <PageLayout>
      <PageHero
        title="If You Are a Company"
        subtitle="Businesses have a unique opportunity and responsibility to support children's rights. Partner with FOLMADI to create lasting impact."
        bgColor="#0779bf"
      />

      {/* Why partner */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                className="section-heading"
                style={{ marginBottom: "24px" }}
              >
                WHY PARTNER WITH US?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A partnership with FOLMADI Nigeria is more than a CSR
                commitment — it&apos;s an investment in the future of Nigeria. When
                children thrive, communities prosper, and businesses benefit
                from a more stable, educated, and healthy workforce.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                We offer flexible partnership models tailored to your company&apos;s
                goals, values, and budget. Our team will work with you to
                design a partnership that delivers real impact and meaningful
                returns for your business.
              </p>
              <Link
                href="/about-us/contact-us"
                style={{
                  backgroundColor: "#0779bf",
                  color: "#fff",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  display: "inline-block",
                }}
              >
                CONTACT OUR PARTNERSHIPS TEAM
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "40px",
                borderLeft: "4px solid #0779bf",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#0779bf",
                  marginBottom: "24px",
                }}
              >
                BENEFITS OF PARTNERSHIP
              </h3>
              {[
                {
                  benefit: "Brand Association",
                  desc: "Align your brand with a trusted, respected organisation working for children.",
                },
                {
                  benefit: "Employee Engagement",
                  desc: "Boost staff morale and retention through meaningful volunteering opportunities.",
                },
                {
                  benefit: "Impact Reporting",
                  desc: "Receive detailed reports on the impact of your contribution.",
                },
                {
                  benefit: "Media Coverage",
                  desc: "Gain positive media coverage through joint campaigns and events.",
                },
                {
                  benefit: "Tax Benefits",
                  desc: "Donations to FOLMADI may qualify for tax deductions under Nigerian law.",
                },
              ].map((item) => (
                <div key={item.benefit} style={{ marginBottom: "16px" }}>
                  <strong
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.9rem",
                      color: "#333",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.benefit}
                  </strong>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.85rem",
                      color: "#666",
                      marginTop: "4px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            PARTNERSHIP OPTIONS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                style={{
                  backgroundColor: "#fff",
                  padding: "32px",
                  borderTop: `4px solid ${type.color}`,
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                  {type.icon}
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
                  {type.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            OUR PARTNERS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto 40px",
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "24px 16px",
                  textAlign: "center",
                  borderBottom: "3px solid #0779bf",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#333",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {partner.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.75rem",
                    color: "#0779bf",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {partner.type}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link
              href="/about-us/contact-us"
              style={{
                backgroundColor: "#0779bf",
                color: "#fff",
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                textTransform: "uppercase",
                padding: "14px 36px",
                fontSize: "1rem",
                letterSpacing: "0.05em",
                display: "inline-block",
              }}
            >
              BECOME A PARTNER
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
