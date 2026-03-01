import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const leadership = [
  {
    name: "Mr Austin Okorowu",
    role: "Country Director",
    bio: "Dr. Okafor brings over 20 years of experience in international development and child rights advocacy. She holds a PhD in Development Studies from the University of Lagos.",
    initials: "AO",
    color: "#e2001a",
  },
  {
    name: "Mr. Chukwuemeka Adeyemi",
    role: "Director of Programmes",
    bio: "With a background in public health and education, Chukwuemeka oversees all programme delivery across Nigeria's six geopolitical zones.",
    initials: "CA",
    color: "#0779bf",
  },
  {
    name: "Ms. Fatima Al-Hassan",
    role: "Director of Finance & Operations",
    bio: "Fatima is a certified accountant with extensive experience in NGO financial management and compliance, ensuring FOLMADI's resources are used effectively.",
    initials: "FA",
    color: "#00a651",
  },
  {
    name: "Mr. Babatunde Eze",
    role: "Director of Advocacy & Communications",
    bio: "Babatunde leads FOLMADI's public engagement, media relations, and policy advocacy work, amplifying the voices of children across Nigeria.",
    initials: "BE",
    color: "#ffd100",
  },
  {
    name: "Dr. Ngozi Nwosu",
    role: "Head of Child Protection",
    bio: "Dr. Nwosu is a social work specialist with deep expertise in child safeguarding, trauma-informed care, and community-based protection systems.",
    initials: "NN",
    color: "#e2001a",
  },
  {
    name: "Ms. Hauwa Musa",
    role: "Head of Education",
    bio: "Hauwa has dedicated her career to improving early childhood education in Nigeria, with a focus on teacher training and curriculum development.",
    initials: "HM",
    color: "#0779bf",
  },
];

const boardMembers = [
  { name: "Prof. Emmanuel Obi", role: "Board Chair" },
  { name: "Mrs. Chidinma Okonkwo", role: "Vice Chair" },
  { name: "Mr. Yusuf Garba", role: "Treasurer" },
  { name: "Dr. Blessing Adewale", role: "Board Member" },
  { name: "Ms. Zainab Ibrahim", role: "Board Member" },
  { name: "Mr. Tunde Fashola", role: "Board Member" },
];

export const metadata = {
  title: "Our People | FOLMADI Nigeria",
  description:
    "Meet the dedicated team of staff, volunteers, and board members who drive FOLMADI Nigeria's mission forward.",
};

export default function OurPeoplePage() {
  return (
    <PageLayout>
      <PageHero
        title="Our People"
        subtitle="Behind every programme and every child reached is a team of passionate, dedicated individuals committed to making a difference."
      />

      {/* Leadership team */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            LEADERSHIP TEAM
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {leadership.map((person) => (
              <div
                key={person.name}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px",
                  backgroundColor: "#f9f9f9",
                  borderLeft: `4px solid ${person.color}`,
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    minWidth: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: person.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {person.initials}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "4px",
                    }}
                  >
                    {person.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.85rem",
                      color: person.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "10px",
                    }}
                  >
                    {person.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.85rem",
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            BOARD OF DIRECTORS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {boardMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  textAlign: "center",
                  borderBottom: "3px solid #e2001a",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "#e2001a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "4px",
                  }}
                >
                  {member.name}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.8rem",
                    color: "#888",
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#e2001a",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            JOIN OUR TEAM
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1rem",
              color: "#fff",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            We are always looking for passionate individuals who share our
            commitment to children&apos;s rights. Explore current vacancies and
            volunteer opportunities.
          </p>
          <a
            href="/get-involved/if-you-are-a-person"
            style={{
              backgroundColor: "#fff",
              color: "#e2001a",
              fontFamily: "var(--font-oswald)",
              fontWeight: 700,
              textTransform: "uppercase",
              padding: "14px 36px",
              fontSize: "1rem",
              letterSpacing: "0.05em",
              display: "inline-block",
            }}
          >
            GET INVOLVED
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
