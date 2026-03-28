import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { desc } from "drizzle-orm";

const fallbackBlogs = [
  {
    title: "How One Community in Kano is Transforming Child Nutrition",
    author: "Dr. Ngozi Nwosu",
    authorRole: "Head of Health & Nutrition",
    date: "October 15, 2025",
    readTime: "6 min read",
    excerpt:
      "In a small community in Kano State, a group of mothers trained by FOLMADI are changing the way their community thinks about child nutrition — one meal at a time.",
    tags: ["Nutrition", "Community", "Kano"],
  },
  {
    title: "Why Early Childhood Education is the Best Investment Nigeria Can Make",
    author: "Ms. Hauwa Musa",
    authorRole: "Head of Education",
    date: "September 5, 2025",
    readTime: "8 min read",
    excerpt:
      "Research consistently shows that every naira invested in early childhood education yields returns of up to ₦17 in economic benefits.",
    tags: ["Education", "Policy", "ECCD"],
  },
  {
    title: "The Hidden Crisis: Mental Health of Children in Conflict Zones",
    author: "Mr. Chukwuemeka Adeyemi",
    authorRole: "Director of Programmes",
    date: "August 20, 2025",
    readTime: "7 min read",
    excerpt:
      "While the physical needs of children in conflict zones receive attention, the mental health crisis is often overlooked.",
    tags: ["Mental Health", "Emergency", "North-East"],
  },
];

export const metadata = {
  title: "Blogs | FOLMADI Nigeria",
  description:
    "Read in-depth perspectives from FOLMADI Nigeria staff, partners, and the communities we work with.",
};

function formatDate(date: Date | string | null): string {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getBlogItems() {
  try {
    const items = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.createdAt));

    const published = items.filter((b) => b.published === 1);
    if (published.length === 0) return fallbackBlogs;

    return published.map((item) => ({
      title: item.title,
      author: item.authorName,
      authorRole: item.authorRole || "",
      date: formatDate(item.createdAt),
      readTime: item.readTime || "5 min read",
      excerpt: item.excerpt,
      tags: JSON.parse(item.tags || "[]"),
    }));
  } catch {
    return fallbackBlogs;
  }
}

export default async function BlogsPage() {
  const blogItems = await getBlogItems();

  return (
    <PageLayout>
      <PageHero
        title="Blogs"
        subtitle="In-depth perspectives, personal stories, and expert analysis from our team and the communities we serve."
        bgColor="#0779bf"
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {blogItems.map((blog, index) => (
              <article
                key={blog.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "0",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "32px",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    width: "80px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "#f0f0f0",
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                      marginBottom: "12px",
                    }}
                  >
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-oswald)",
                          fontSize: "0.7rem",
                          color: "#0779bf",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          backgroundColor: "#f0f7ff",
                          padding: "3px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: "#0779bf",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-oswald)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {blog.author
                          .split(" ")
                          .map((n: string) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-oswald)",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "#333",
                            textTransform: "uppercase",
                          }}
                        >
                          {blog.author}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.75rem",
                            color: "#999",
                          }}
                        >
                          {blog.authorRole} · {blog.date} · {blog.readTime}
                        </div>
                      </div>
                    </div>
                    <Link
                      href="#"
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#0779bf",
                        letterSpacing: "0.05em",
                      }}
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
