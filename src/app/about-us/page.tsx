import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const aboutLinks = [
  {
    title: "Our History",
    description:
      "Learn about FOLMADI's journey from its founding to becoming one of Nigeria's leading child-focused organisations.",
    href: "/about-us/our-history",
    icon: "📖",
  },
  {
    title: "Our Successes",
    description:
      "Discover the impact we've made — the lives changed, communities strengthened, and milestones achieved.",
    href: "/about-us/our-successes",
    icon: "🏆",
  },
  {
    title: "Our People",
    description:
      "Meet the dedicated team of staff, volunteers, and board members who drive our mission forward.",
    href: "/about-us/our-people",
    icon: "👥",
  },
  {
    title: "Accountability",
    description:
      "We are committed to transparency. View our annual reports, financial statements, and governance documents.",
    href: "/about-us/accountability",
    icon: "📊",
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with our team. We'd love to hear from you — whether you have questions, ideas, or want to partner with us.",
    href: "/about-us/contact-us",
    icon: "✉️",
  },
];

export const metadata = {
  title: "About Us | FOLMADI Nigeria",
  description:
    "Learn about FOLMADI Nigeria — our history, our people, our successes, and our commitment to children's rights.",
};

export default function AboutUsPage() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="FOLMADI believes every child deserves a future. For over two decades, we have been working in Nigeria and around the world to give children a healthy start in life, the opportunity to learn, and protection from harm."
      />

      {/* Mission section */}
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
              <h2 className="section-heading" style={{ marginBottom: "24px" }}>
                OUR MISSION
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
                FOLMADI is an independent organisation that works in Nigeria and
                around the world to save children&apos;s lives, fight for their
                rights, and help them fulfil their potential.
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
                We work with children, families, communities, and governments to
                find lasting solutions to the problems children face. We are
                determined, innovative, and accountable.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                Our vision is a world in which every child attains the right to
                survival, protection, development, and participation.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "40px",
                borderLeft: "4px solid #e2001a",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#e2001a",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                Our Values
              </h3>
              {[
                {
                  value: "Accountability",
                  desc: "We take personal responsibility for using our resources efficiently.",
                },
                {
                  value: "Ambition",
                  desc: "We are demanding of ourselves and our work, and are committed to achieving the greatest impact.",
                },
                {
                  value: "Collaboration",
                  desc: "We respect and value each other, thrive on our diversity, and work with partners to leverage our global strength.",
                },
                {
                  value: "Creativity",
                  desc: "We are open to new ideas, embrace change, and take disciplined risks to develop sustainable solutions.",
                },
                {
                  value: "Integrity",
                  desc: "We aspire to lead by example in all we do.",
                },
              ].map((item) => (
                <div key={item.value} style={{ marginBottom: "16px" }}>
                  <strong
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.95rem",
                      color: "#333",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.value}
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

      {/* Sub-pages grid */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            EXPLORE ABOUT US
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {aboutLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  backgroundColor: "#fff",
                  padding: "32px",
                  display: "block",
                  borderBottom: "4px solid #e2001a",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                  {item.icon}
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
