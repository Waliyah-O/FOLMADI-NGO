import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const newsItems = [
  {
    title: "FOLMADI Launches New Child Protection Programme in Borno State",
    date: "February 20, 2026",
    category: "Programme Update",
    excerpt:
      "FOLMADI Nigeria has launched a new community-based child protection programme in Borno State, targeting 10,000 children affected by the ongoing conflict in the North-East. The programme will establish 20 community child protection committees and train 500 social workers.",
    readTime: "3 min read",
  },
  {
    title: "FOLMADI Responds to Flooding Crisis in Anambra State",
    date: "January 15, 2026",
    category: "Emergency Response",
    excerpt:
      "Following severe flooding in Anambra State, FOLMADI has deployed an emergency response team to provide food, clean water, and temporary learning spaces for over 5,000 displaced children.",
    readTime: "4 min read",
  },
  {
    title: "World Children's Day: FOLMADI Calls for Greater Investment in Education",
    date: "November 20, 2025",
    category: "Advocacy",
    excerpt:
      "On World Children's Day, FOLMADI Nigeria called on the Federal Government to increase investment in early childhood education and ensure every child has access to quality schooling.",
    readTime: "2 min read",
  },
  {
    title: "FOLMADI Partners with MTN Nigeria to Expand Digital Learning",
    date: "October 30, 2025",
    category: "Partnership",
    excerpt:
      "FOLMADI Nigeria and MTN Nigeria have announced a new partnership to expand digital learning opportunities for children in underserved communities across six states.",
    readTime: "3 min read",
  },
  {
    title: "New Report: Child Malnutrition Rates Declining in Target Communities",
    date: "September 12, 2025",
    category: "Research",
    excerpt:
      "A new evaluation of FOLMADI's nutrition programme shows a 25% reduction in stunting rates in target communities over three years, demonstrating the effectiveness of community-based approaches.",
    readTime: "5 min read",
  },
  {
    title: "FOLMADI Celebrates 25 Years of Impact in Nigeria",
    date: "August 1, 2025",
    category: "Milestone",
    excerpt:
      "FOLMADI Nigeria marked its 25th anniversary with a celebration of the over 2 million children reached through its programmes since 1999. The event brought together staff, partners, donors, and community members.",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Programme Update",
  "Emergency Response",
  "Advocacy",
  "Partnership",
  "Research",
  "Milestone",
];

export const metadata = {
  title: "News | FOLMADI Nigeria",
  description:
    "Stay up to date with the latest news from FOLMADI Nigeria — programme updates, advocacy wins, and stories from the field.",
};

export default function NewsPage() {
  return (
    <PageLayout>
      <PageHero
        title="News"
        subtitle="The latest updates from FOLMADI Nigeria — programme milestones, advocacy wins, partnerships, and stories from the communities we serve."
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          {/* Category filter */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {categories.map((cat, index) => (
              <button
                key={cat}
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "8px 16px",
                  border: "1px solid",
                  borderColor: index === 0 ? "#e2001a" : "#ddd",
                  backgroundColor: index === 0 ? "#e2001a" : "transparent",
                  color: index === 0 ? "#fff" : "#666",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {newsItems.map((item) => (
              <article
                key={item.title}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderTop: "4px solid #e2001a",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.7rem",
                      color: "#e2001a",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      backgroundColor: "#fff5f5",
                      padding: "4px 10px",
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.75rem",
                      color: "#999",
                    }}
                  >
                    {item.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                    flex: 1,
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
                    marginBottom: "20px",
                  }}
                >
                  {item.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.8rem",
                      color: "#999",
                    }}
                  >
                    {item.date}
                  </span>
                  <Link
                    href="#"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#e2001a",
                      letterSpacing: "0.05em",
                    }}
                  >
                    READ MORE →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "14px 36px",
                border: "2px solid #e2001a",
                backgroundColor: "transparent",
                color: "#e2001a",
                cursor: "pointer",
              }}
            >
              LOAD MORE NEWS
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
