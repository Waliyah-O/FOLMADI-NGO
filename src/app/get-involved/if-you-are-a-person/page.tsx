import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const options = [
  {
    title: "Make a Donation",
    description:
      "Your financial contribution directly funds our programmes. Choose a one-time gift or set up a monthly donation to provide sustained support.",
    href: "/donate",
    cta: "DONATE NOW",
    icon: "💝",
    color: "#c0613a",
    details: [
      "One-time donations from any amount",
      "Monthly giving for sustained impact",
      "Donate in memory or honour of someone",
      "Fundraise on behalf of FOLMADI",
    ],
  },
  {
    title: "Become a Volunteer",
    description:
      "Share your time, skills, and passion to support our work. Volunteers play a vital role in everything from community outreach to administrative support.",
    href: "#volunteer-form",
    cta: "APPLY TO VOLUNTEER",
    icon: "🤝",
    color: "#0779bf",
    details: [
      "Community outreach and awareness",
      "Administrative and office support",
      "Event planning and management",
      "Professional skills volunteering (legal, medical, IT)",
    ],
  },
  {
    title: "Become an Activist",
    description:
      "Use your voice to advocate for children's rights. Join our network of activists who campaign for policy change and raise awareness about issues affecting children.",
    href: "#activist-form",
    cta: "JOIN THE MOVEMENT",
    icon: "✊",
    color: "#00a651",
    details: [
      "Sign and share petitions",
      "Write to your elected representatives",
      "Participate in awareness campaigns",
      "Speak at community events",
    ],
  },
  {
    title: "MySchool Card",
    description:
      "Shop at participating retailers using your MySchool card and a percentage of your purchase goes to FOLMADI — at no extra cost to you.",
    href: "/get-involved/if-you-are-a-person/myschool",
    cta: "GET YOUR CARD",
    icon: "🛒",
    color: "#ffd100",
    details: [
      "Free to apply and use",
      "Accepted at major retailers nationwide",
      "0.5% of every purchase donated",
      "Track your impact online",
    ],
  },
];

export const metadata = {
  title: "If You Are a Person | Get Involved | FOLMADI Nigeria",
  description:
    "Find out how you as an individual can support FOLMADI Nigeria — through donations, volunteering, activism, and more.",
};

export default function IfYouAreAPersonPage() {
  return (
    <PageLayout>
      <PageHero
        title="If You Are a Person"
        subtitle="You don't need to be a superhero to change a life. Here are the many ways you can make a difference."
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "48px" }}
          >
            {options.map((option, index) => (
              <div
                key={option.title}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    index % 2 === 0 ? "auto 1fr" : "1fr auto",
                  gap: "0",
                  border: "1px solid #e0e0e0",
                  overflow: "hidden",
                }}
              >
                {/* Color panel (left for even) */}
                {index % 2 === 0 && (
                  <div
                    style={{
                      backgroundColor: option.color,
                      padding: "48px 40px",
                      minWidth: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "4rem", marginBottom: "16px" }}>
                      {option.icon}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: "48px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "16px",
                    }}
                  >
                    {option.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "1rem",
                      color: "#666",
                      lineHeight: 1.8,
                      marginBottom: "20px",
                    }}
                  >
                    {option.description}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      marginBottom: "24px",
                    }}
                  >
                    {option.details.map((detail) => (
                      <li
                        key={detail}
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginBottom: "8px",
                        }}
                      >
                        <span style={{ color: option.color, fontWeight: 700 }}>
                          ✓
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.9rem",
                            color: "#555",
                          }}
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={option.href}
                    style={{
                      backgroundColor: option.color,
                      color: "#fff",
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "12px 28px",
                      fontSize: "0.9rem",
                      letterSpacing: "0.05em",
                      display: "inline-block",
                    }}
                  >
                    {option.cta}
                  </Link>
                </div>

                {/* Color panel (right for odd) */}
                {index % 2 !== 0 && (
                  <div
                    style={{
                      backgroundColor: option.color,
                      padding: "48px 40px",
                      minWidth: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "4rem", marginBottom: "16px" }}>
                      {option.icon}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
