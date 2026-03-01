import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Get Involved | FOLMADI Nigeria",
  description:
    "Find out how you can get involved with FOLMADI Nigeria — whether as an individual or a company.",
};

export default function GetInvolvedPage() {
  return (
    <PageLayout>
      <PageHero
        title="Get Involved"
        subtitle="There are many ways to support our mission. Whether you're an individual or a company, your involvement makes a real difference in the lives of children."
      />

      <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            {/* Individual */}
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "48px",
                borderTop: "6px solid #e2001a",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "24px" }}>👤</div>
              <h2
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "16px",
                }}
              >
                If You Are a Person
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                As an individual, you can make a powerful difference. Donate,
                volunteer, become an activist, or use your everyday shopping to
                support children in need.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "32px",
                }}
              >
                {[
                  "Make a one-time or monthly donation",
                  "Volunteer your time and skills",
                  "Become a child rights activist",
                  "Use your MySchool card to donate",
                  "Fundraise for FOLMADI",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <span style={{ color: "#e2001a", fontWeight: 700 }}>✓</span>
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.9rem",
                        color: "#555",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-involved/if-you-are-a-person"
                style={{
                  backgroundColor: "#e2001a",
                  color: "#fff",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                GET INVOLVED AS AN INDIVIDUAL
              </Link>
            </div>

            {/* Company */}
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "48px",
                borderTop: "6px solid #0779bf",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "24px" }}>🏢</div>
              <h2
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#333",
                  marginBottom: "16px",
                }}
              >
                If You Are a Company
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                Businesses have a unique opportunity and responsibility to
                support children&apos;s rights. Partner with FOLMADI to create
                meaningful impact through your CSR programmes.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "32px",
                }}
              >
                {[
                  "Corporate donations and sponsorships",
                  "Employee volunteering programmes",
                  "Cause-related marketing campaigns",
                  "Adopt Children's Rights and Business Principles",
                  "Payroll giving schemes",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <span style={{ color: "#0779bf", fontWeight: 700 }}>✓</span>
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.9rem",
                        color: "#555",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-involved/if-you-are-a-company"
                style={{
                  backgroundColor: "#0779bf",
                  color: "#fff",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                GET INVOLVED AS A COMPANY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
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
            READY TO MAKE A DIFFERENCE?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1rem",
              color: "#fff",
              opacity: 0.9,
              maxWidth: "500px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            The simplest way to help is to donate. Your gift goes directly to
            our programmes for children.
          </p>
          <Link
            href="/donate"
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
            DONATE NOW
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
