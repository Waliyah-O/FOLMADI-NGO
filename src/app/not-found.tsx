import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Home, Heart, Users, Newspaper } from "lucide-react";

const quickLinks = [
  {
    title: "Back to Home",
    description:
      "Return to our homepage and explore how we're making a difference for children.",
    href: "/",
    icon: Home,
  },
  {
    title: "What We Do",
    description:
      "Learn about our programs and how we work to protect and empower children.",
    href: "/what-we-do",
    icon: Heart,
  },
  {
    title: "Get Involved",
    description:
      "Join our mission — volunteer, donate, or partner with us to change lives.",
    href: "/get-involved",
    icon: Users,
  },
  {
    title: "News & Events",
    description:
      "Stay up to date with the latest news, blogs, and upcoming events.",
    href: "/news-and-events",
    icon: Newspaper,
  },
];

export default function NotFound() {
  return (
    <PageLayout>
      <PageHero
        title="Page Not Found"
        subtitle="We're sorry — the page you're looking for doesn't exist or may have been moved."
      />

      <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(6rem, 12vw, 10rem)",
                fontWeight: 700,
                color: "#c0613a",
                lineHeight: 1,
                display: "block",
                opacity: 0.15,
              }}
            >
              404
            </span>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "1.1rem",
                color: "#6b6560",
                lineHeight: 1.8,
                maxWidth: "500px",
                margin: "-20px auto 0",
              }}
            >
              The page you requested could not be found. It may have been
              removed, renamed, or never existed.
            </p>
          </div>

          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            TRY THESE INSTEAD
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  style={{
                    backgroundColor: "#fff",
                    padding: "32px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    borderBottom: "4px solid #c0613a",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(192, 97, 58, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="#c0613a" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#2e2a26",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.9rem",
                        color: "#6b6560",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1rem",
              color: "#6b6560",
              marginBottom: "24px",
            }}
          >
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/about-us/contact-us"
            className="btn-donate"
            style={{ textDecoration: "none" }}
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
