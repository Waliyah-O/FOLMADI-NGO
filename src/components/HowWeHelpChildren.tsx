import Link from "next/link";

const helpItems = [
  {
    title: "Child Protection",
    description:
      "Our Goal: To strengthen the capacity of duty bearers through scaling up violence-prevention programmes in 13 districts.",
    href: "/what-we-do/our-work/child-protection",
    image:
      "https://www.folmadi.com.ng/sites/za/files/styles/card_plus_horizontal_desktop_600x400/public/child-protection.jpg",
    color: "#e8650a",
    icon: "🛡️",
  },
  {
    title: "Education",
    description:
      "Our Goal: To strengthen ECCD quality through building capacity of 1 000 practitioners and 100 000 caregivers and partnering with networks, CSOs and government departments in six provinces.",
    href: "/what-we-do/our-work/education",
    image:
      "https://www.folmadi.com.ng/sites/za/files/styles/card_plus_horizontal_desktop_600x400/public/education.jpg",
    color: "#ffd100",
    icon: "📚",
  },
  {
    title: "Health and Nutrition",
    description:
      "Our Goal: To support the provision of gender-sensitive comprehensive sexuality education (CSE) to 80 000 children, adolescents and young people (CAYP) in 10 districts.",
    href: "/what-we-do/our-work/health-and-nutrition",
    image:
      "https://www.folmadi.com.ng/sites/za/files/styles/card_plus_horizontal_desktop_600x400/public/health-nutrition.jpg",
    color: "#00a651",
    icon: "❤️",
  },
  {
    title: "Children's Rights and Business Principles",
    description:
      "Supporting children's rights is everyone's business and the ultimate definition of sustainability.",
    href: "/what-we-do/our-work/childrens-rights",
    image:
      "https://www.folmadi.com.ng/sites/za/files/styles/card_plus_horizontal_desktop_600x400/public/childrens-rights.jpg",
    color: "#0779bf",
    icon: "⚖️",
  },
];

export default function HowWeHelpChildren() {
  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#fff",
      }}
    >
      <div className="container">
        <h2
          className="section-heading"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          HOW WE HELP CHILDREN
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
          }}
        >
          {helpItems.map((item, index) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight:
                  index < helpItems.length - 1 ? "1px solid #e0e0e0" : "none",
                padding: "0 24px",
              }}
            >
              {/* Color accent bar */}
              <div
                style={{
                  height: "4px",
                  backgroundColor: item.color,
                  marginBottom: "20px",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "16px",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                {item.description}
              </p>

              {/* Read more link */}
              <Link
                href={item.href}
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: item.color,
                  letterSpacing: "0.05em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "24px",
                }}
              >
                READ MORE →
              </Link>

              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #e0e0e0",
                  marginBottom: "24px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .help-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #e0e0e0;
          }
        }
      `}</style>
    </section>
  );
}
