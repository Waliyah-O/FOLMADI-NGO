import Link from "next/link";

const helpOptions = [
  {
    title: "Make a monthly donation",
    description:
      "For as little as R5 a day, you will witness how your support transforms the lives of children in Nigeria.",
    href: "/donate",
    icon: "💝",
    cta: "DONATE NOW",
    featured: true,
  },
  {
    title: "Involve your company",
    description:
      "Partner with us to make a lasting difference in the lives of children. Corporate partnerships help us scale our impact.",
    href: "/get-involved/if-you-are-a-company",
    icon: "🏢",
    cta: "GET INVOLVED",
    featured: false,
  },
  {
    title: "Raise funds for children when you shop",
    description:
      "Get a MySchool card and raise funds for children every time you shop at participating stores.",
    href: "/get-involved/if-you-are-a-person/myschool",
    icon: "🛍️",
    cta: "LEARN MORE",
    featured: false,
  },
];

export default function HowYouCanHelp() {
  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="container">
        <h2
          className="section-heading"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          HOW YOU CAN HELP
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {helpOptions.map((option) => (
            <div
              key={option.title}
              style={{
                backgroundColor: option.featured ? "#e07a52 " : "#fff",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                }}
              >
                {option.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: option.featured ? "#fff" : "#333",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {option.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.9rem",
                  color: option.featured ? "rgba(255,255,255,0.9)" : "#666",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                {option.description}
              </p>

              {/* CTA */}
              <Link
                href={option.href}
                style={{
                  display: "inline-block",
                  backgroundColor: option.featured ? "#fff" : "#e07a52 ",
                  color: option.featured ? "#e07a52 " : "#fff",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  transition: "opacity 0.2s",
                  alignSelf: "flex-start",
                }}
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
