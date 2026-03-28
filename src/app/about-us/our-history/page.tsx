import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const milestones = [
  {
    year: "1999",
    title: "FOLMADI Founded",
    description:
      "FOLMADI Nigeria was established with a small team of dedicated advocates committed to improving the lives of the citizens of Nigeria.",
  },
  {
    year: "2003",
    title: "First Major Programme Launch",
    description:
      "Launched our first large-scale child protection programme in Lagos State, reaching over 5,000 people in vulnerable communities.",
  },
  {
    year: "2007",
    title: "Education Initiative Begins",
    description:
      "Partnered with the Federal Ministry of Education to roll out early childhood care and development (ECCD) programmes in six states.",
  },
  {
    year: "2010",
    title: "Health & Nutrition Expansion",
    description:
      "Expanded our health and nutrition programmes to address malnutrition and improve access to healthcare for children under five.",
  },
  {
    year: "2014",
    title: "Emergency Response Capacity",
    description:
      "Built a dedicated emergency response team to support individuals affected by conflict and natural disasters in the North-East region.",
  },
  {
    year: "2018",
    title: "Children's Rights & Business",
    description:
      "Launched the People's Rights and Business Principles initiative, engaging the private sector in upholding children's rights.",
  },
  {
    year: "2022",
    title: "25 Years of Impact",
    description:
      "Celebrated 25 years of impact, having reached over 2 million individuals across Nigeria with life-changing programmes.",
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description:
      "Embraced digital tools and data-driven approaches to scale our programmes and improve outcomes for the less priviledged across all 36 states.",
  },
];

export const metadata = {
  title: "Our History | FOLMADI Nigeria",
  description:
    "Discover the history of FOLMADI Nigeria — from our founding in 1999 to our work today reaching millions of people.",
};

export default function OurHistoryPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our History"
        subtitle="From humble beginnings to a nationwide movement — discover how FOLMADI has grown over the decades to become a leading voice for the people's rights in Nigeria."
        bgColor="#c0613a"
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fdf6ee" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "48px",
                textAlign: "center",
              }}
            >
              FOLMADI Nigeria was born out of a deep conviction that every
              individual in Nigeria deserves a safe, healthy, and fulfilling
              childhood. Over the past two and a half decades, we have grown
              from a small advocacy group into a nationally recognised
              organisation with programmes spanning child protection, education,
              health, and emergency response.
            </p>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "80px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "#e0e0e0",
                }}
              />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  style={{
                    display: "flex",
                    gap: "32px",
                    marginBottom: "40px",
                    position: "relative",
                  }}
                >
                  {/* Year */}
                  <div
                    style={{
                      minWidth: "80px",
                      textAlign: "right",
                      paddingRight: "24px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#c15226",
                      }}
                    >
                      {milestone.year}
                    </span>
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        right: "-7px",
                        top: "4px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        backgroundColor:
                          index === milestones.length - 1 ? "#c15226" : "#fff",
                        border: "2px solid #c15226",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      flex: 1,
                      paddingLeft: "16px",
                      paddingBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#333",
                        marginBottom: "8px",
                      }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.95rem",
                        color: "#666",
                        lineHeight: 1.7,
                      }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
