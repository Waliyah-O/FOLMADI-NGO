import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const successes = [
  {
    stat: "2M+",
    label: "Children Reached",
    description:
      "Over 2 million children across Nigeria have benefited from our programmes in education, health, and child protection.",
    color: "#e2001a",
  },
  {
    stat: "36",
    label: "States Covered",
    description:
      "Our work now spans all 36 states of Nigeria, ensuring no child is left behind regardless of geography.",
    color: "#ffd100",
  },
  {
    stat: "500K+",
    label: "Caregivers Trained",
    description:
      "We have trained over 500,000 caregivers and parents in early childhood development and child protection practices.",
    color: "#00a651",
  },
  {
    stat: "1,200+",
    label: "Schools Supported",
    description:
      "More than 1,200 schools have received support through our education programmes, improving learning outcomes for thousands.",
    color: "#0779bf",
  },
];

const stories = [
  {
    title: "Transforming Early Childhood Education in Kano",
    excerpt:
      "Through our ECCD programme, over 300 practitioners in Kano State were trained, leading to measurable improvements in school readiness for children aged 3–6.",
    year: "2024",
  },
  {
    title: "Emergency Response in Borno State",
    excerpt:
      "Following the displacement crisis in the North-East, our team provided emergency education and psychosocial support to over 45,000 children in temporary learning spaces.",
    year: "2023",
  },
  {
    title: "Child Protection Networks in Lagos",
    excerpt:
      "We established 50 community-based child protection committees in Lagos, resulting in a 30% reduction in reported cases of child abuse in target communities.",
    year: "2023",
  },
  {
    title: "Nutrition Programme Saves Lives in Zamfara",
    excerpt:
      "Our community-based management of acute malnutrition (CMAM) programme treated over 12,000 severely malnourished children under five in Zamfara State.",
    year: "2022",
  },
];

export const metadata = {
  title: "Our Successes | FOLMADI Nigeria",
  description:
    "Discover the impact FOLMADI Nigeria has made — the lives changed, communities strengthened, and milestones achieved.",
};

export default function OurSuccessesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Successes"
        subtitle="Every number represents a child whose life has been changed. Here are some of the milestones we are proud to have achieved."
      />

      {/* Stats */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0",
            }}
          >
            {successes.map((item, index) => (
              <div
                key={item.label}
                style={{
                  padding: "40px 32px",
                  borderRight:
                    index < successes.length - 1
                      ? "1px solid #e0e0e0"
                      : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: item.color,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "12px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            SUCCESS STORIES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {stories.map((story) => (
              <div
                key={story.title}
                style={{
                  backgroundColor: "#fff",
                  padding: "32px",
                  borderTop: "4px solid #e2001a",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#e2001a",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {story.year}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {story.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.7,
                  }}
                >
                  {story.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
