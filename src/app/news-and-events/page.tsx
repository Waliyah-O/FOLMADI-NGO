import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const sections = [
  {
    title: "News",
    description:
      "Stay up to date with the latest news from FOLMADI Nigeria — programme updates, advocacy wins, and stories from the field.",
    href: "/news-and-events/news",
    icon: "📰",
    color: "#c0613a",
  },
  {
    title: "Blogs",
    description:
      "Read in-depth perspectives from our staff, partners, and the people and communities we work with.",
    href: "/news-and-events/blogs",
    icon: "✍️",
    color: "#0779bf",
  },
  {
    title: "Upcoming Events",
    description:
      "Find out about our upcoming fundraising events, awareness campaigns, and community activities.",
    href: "/news-and-events/upcoming-events",
    icon: "📅",
    color: "#00a651",
  },
  {
    title: "Publications",
    description:
      "Access our research reports, policy briefs, programme evaluations, and other publications.",
    href: "/news-and-events/publications",
    icon: "📚",
    color: "#ffd100",
  },
];

const featuredNews = [
  {
    title: "FOLMADI Launches New Child Protection Programme in Borno State",
    date: "February 20, 2026",
    category: "News",
    excerpt:
      "FOLMADI Nigeria has launched a new community-based child protection programme in Borno State, targeting 10,000 children affected by the ongoing conflict in the North-East.",
    href: "/news-and-events/news",
  },
  {
    title:
      "World Children's Day: FOLMADI Calls for Greater Investment in Education",
    date: "November 20, 2025",
    category: "News",
    excerpt:
      "On World Children's Day, FOLMADI Nigeria called on the Federal Government to increase investment in early childhood education and ensure every individual has access to quality schooling.",
    href: "/news-and-events/news",
  },
  {
    title: "How One Community in Kano is Transforming Child Nutrition",
    date: "October 15, 2025",
    category: "Blog",
    excerpt:
      "In a small community in Kano State, a group of mothers trained by FOLMADI are changing the way their community thinks about child nutrition — one meal at a time.",
    href: "/news-and-events/blogs",
  },
];

export const metadata = {
  title: "News & Events | FOLMADI Nigeria",
  description:
    "Stay up to date with the latest news, blogs, events, and publications from FOLMADI Nigeria.",
};

export default function NewsAndEventsPage() {
  return (
    <PageLayout>
      <PageHero
        title="News & Events"
        subtitle="Stories of impact, advocacy updates, and opportunities to get involved. Stay connected with FOLMADI Nigeria."
      />

      {/* Featured news */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: "32px" }}>
            LATEST STORIES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "24px",
            }}
          >
            {/* Main featured */}
            <div
              style={{
                backgroundColor: "#f9f9f9",
                borderTop: "4px solid #c0613a",
                padding: "40px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.75rem",
                  color: "#c0613a",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {featuredNews[0].category} · {featuredNews[0].date}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "16px",
                  lineHeight: 1.3,
                }}
              >
                {featuredNews[0].title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {featuredNews[0].excerpt}
              </p>
              <Link
                href={featuredNews[0].href}
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#c0613a",
                  letterSpacing: "0.05em",
                }}
              >
                READ MORE →
              </Link>
            </div>

            {/* Side stories */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {featuredNews.slice(1).map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "24px",
                    borderLeft: "4px solid #c0613a",
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.7rem",
                      color: "#c0613a",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {item.category} · {item.date}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h4>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#c0613a",
                      letterSpacing: "0.05em",
                    }}
                  >
                    READ MORE →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            EXPLORE
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                style={{
                  backgroundColor: "#fff",
                  padding: "40px 32px",
                  display: "block",
                  borderBottom: `4px solid ${section.color}`,
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
                  {section.icon}
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
                  {section.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
