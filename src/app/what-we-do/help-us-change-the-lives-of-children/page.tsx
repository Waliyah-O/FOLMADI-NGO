import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const ways = [
  {
    title: "Make a Donation",
    description:
      "Your financial contribution directly funds our programmes. Whether it's a one-time gift or a monthly donation, every naira makes a difference in a child's life.",
    href: "/donate",
    cta: "DONATE NOW",
    icon: "💝",
    color: "#e2001a",
  },
  {
    title: "Become a Volunteer",
    description:
      "Share your time and skills to support our work. From community outreach to office support, there are many ways to get involved as a volunteer.",
    href: "/get-involved/if-you-are-a-person",
    cta: "VOLUNTEER",
    icon: "🤝",
    color: "#0779bf",
  },
  {
    title: "Corporate Partnership",
    description:
      "Partner with FOLMADI to fulfil your corporate social responsibility commitments and make a meaningful impact on children's lives in Nigeria.",
    href: "/get-involved/if-you-are-a-company",
    cta: "PARTNER WITH US",
    icon: "🏢",
    color: "#00a651",
  },
  {
    title: "Spread the Word",
    description:
      "Help us raise awareness about children's rights and our work. Share our stories on social media, talk to your friends and family, and help us reach more people.",
    href: "/news-and-events/news",
    cta: "SHARE OUR STORIES",
    icon: "📢",
    color: "#ffd100",
  },
];

const impact = [
  { amount: "₦5,000", impact: "provides school supplies for one child for a year" },
  { amount: "₦15,000", impact: "funds a month of nutritional support for a malnourished child" },
  { amount: "₦50,000", impact: "trains a community health worker in child health and nutrition" },
  { amount: "₦100,000", impact: "supports a child protection committee for three months" },
  { amount: "₦500,000", impact: "establishes a temporary learning space for 50 children in crisis" },
];

export const metadata = {
  title: "Help Us Change the Lives of Children | FOLMADI Nigeria",
  description:
    "Find out how you can help FOLMADI Nigeria change the lives of children through donations, volunteering, and partnerships.",
};

export default function HelpUsChangeLivesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Help Us Change the Lives of Children"
        subtitle="Every child deserves a future. Together, we can make that a reality. Here's how you can support our work."
      />

      {/* Ways to help */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            WAYS TO HELP
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {ways.map((way) => (
              <div
                key={way.title}
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: `4px solid ${way.color}`,
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                  {way.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "12px",
                  }}
                >
                  {way.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "24px",
                  }}
                >
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  style={{
                    backgroundColor: way.color,
                    color: "#fff",
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    padding: "12px 24px",
                    fontSize: "0.9rem",
                    letterSpacing: "0.05em",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  {way.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact of giving */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "16px" }}
          >
            YOUR IMPACT
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1rem",
              color: "#666",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            See exactly what your donation can achieve. Every contribution goes
            directly to our programmes.
          </p>
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {impact.map((item, index) => (
              <div
                key={item.amount}
                style={{
                  display: "flex",
                  gap: "0",
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e2001a",
                    padding: "20px 24px",
                    minWidth: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {item.amount}
                  </span>
                </div>
                <div
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.95rem",
                      color: "#555",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/donate"
              style={{
                backgroundColor: "#e2001a",
                color: "#fff",
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                textTransform: "uppercase",
                padding: "16px 48px",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                display: "inline-block",
              }}
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
