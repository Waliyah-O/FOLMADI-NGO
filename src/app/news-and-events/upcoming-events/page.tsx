import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const upcomingEvents = [
  {
    title: "Annual Charity Gala Dinner 2026",
    date: "March 28, 2026",
    time: "6:30 PM – 11:00 PM",
    location: "Eko Hotel & Suites, Lagos",
    type: "Fundraising",
    description:
      "Join us for our annual gala dinner — an evening of celebration, inspiration, and fundraising for children across Nigeria. Featuring keynote speakers, live entertainment, and a charity auction.",
    cta: "BUY TICKETS",
    color: "#c0613a",
    featured: true,
  },
  {
    title: "World Children's Day Community Walk",
    date: "November 20, 2026",
    time: "7:00 AM – 12:00 PM",
    location: "Millennium Park, Abuja",
    type: "Awareness",
    description:
      "Join thousands of Nigerians in a 5km walk to raise awareness about children's rights. All proceeds go to FOLMADI's child protection programmes.",
    cta: "REGISTER NOW",
    color: "#00a651",
    featured: false,
  },
  {
    title: "Child Rights Advocacy Workshop",
    date: "April 15, 2026",
    time: "9:00 AM – 5:00 PM",
    location: "FOLMADI Abuja Office",
    type: "Workshop",
    description:
      "A one-day workshop for civil society organisations, government officials, and community leaders on child rights advocacy and policy engagement.",
    cta: "REGISTER",
    color: "#0779bf",
    featured: false,
  },
  {
    title: "Corporate CSR Forum: Children's Rights & Business",
    date: "May 8, 2026",
    time: "10:00 AM – 4:00 PM",
    location: "Transcorp Hilton, Abuja",
    type: "Conference",
    description:
      "A forum for business leaders to explore how companies can integrate children's rights into their operations, supply chains, and CSR programmes.",
    cta: "REGISTER",
    color: "#ffd100",
    featured: false,
  },
  {
    title: "FOLMADI Annual Report Launch 2025",
    date: "March 10, 2026",
    time: "2:00 PM – 4:00 PM",
    location: "Online (Zoom)",
    type: "Online Event",
    description:
      "Join us online for the launch of our 2025 Annual Report. Hear from our leadership team about our impact, challenges, and plans for the year ahead.",
    cta: "REGISTER FREE",
    color: "#c0613a",
    featured: false,
  },
];

const pastEvents = [
  {
    title: "25th Anniversary Celebration",
    date: "August 1, 2025",
    location: "Abuja",
    type: "Milestone",
  },
  {
    title: "Nutrition Summit 2025",
    date: "June 12, 2025",
    location: "Kano",
    type: "Conference",
  },
  {
    title: "Annual Charity Run 2025",
    date: "April 5, 2025",
    location: "Lagos",
    type: "Fundraising",
  },
];

export const metadata = {
  title: "Upcoming Events | FOLMADI Nigeria",
  description:
    "Find out about FOLMADI Nigeria's upcoming fundraising events, awareness campaigns, and community activities.",
};

export default function UpcomingEventsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Upcoming Events"
        subtitle="Join us at our events — from gala dinners to community walks, there are many ways to show your support for children."
        bgColor="#00a651"
      />

      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container">
          {/* Featured event */}
          {upcomingEvents
            .filter((e) => e.featured)
            .map((event) => (
              <div
                key={event.title}
                style={{
                  backgroundColor: "#fff5f5",
                  border: "2px solid #c0613a",
                  padding: "48px",
                  marginBottom: "48px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.75rem",
                      color: "#fff",
                      backgroundColor: "#c0613a",
                      padding: "4px 12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "inline-block",
                      marginBottom: "16px",
                    }}
                  >
                    ⭐ FEATURED EVENT · {event.type}
                  </span>
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
                    {event.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "1rem",
                      color: "#666",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {event.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      flexWrap: "wrap",
                      marginBottom: "24px",
                    }}
                  >
                    {[
                      { icon: "📅", text: event.date },
                      { icon: "🕐", text: event.time },
                      { icon: "📍", text: event.location },
                    ].map((item) => (
                      <span
                        key={item.text}
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.9rem",
                          color: "#555",
                          display: "flex",
                          gap: "6px",
                          alignItems: "center",
                        }}
                      >
                        {item.icon} {item.text}
                      </span>
                    ))}
                  </div>
                  <button
                    style={{
                      backgroundColor: "#c0613a",
                      color: "#fff",
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "14px 32px",
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {event.cta}
                  </button>
                </div>
              </div>
            ))}

          {/* Other events */}
          <h2 className="section-heading" style={{ marginBottom: "32px" }}>
            ALL UPCOMING EVENTS
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {upcomingEvents
              .filter((e) => !e.featured)
              .map((event) => (
                <div
                  key={event.title}
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "28px 32px",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "24px",
                    alignItems: "center",
                    borderLeft: `4px solid ${event.color}`,
                  }}
                >
                  {/* Date block */}
                  <div
                    style={{
                      backgroundColor: event.color,
                      padding: "12px 16px",
                      textAlign: "center",
                      minWidth: "80px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {event.date.split(" ")[1].replace(",", "")}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.75rem",
                        color: "#fff",
                        textTransform: "uppercase",
                        opacity: 0.9,
                      }}
                    >
                      {event.date.split(" ")[0]}
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.7rem",
                        color: event.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {event.type}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#333",
                        marginBottom: "6px",
                      }}
                    >
                      {event.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.8rem",
                          color: "#888",
                        }}
                      >
                        🕐 {event.time}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.8rem",
                          color: "#888",
                        }}
                      >
                        📍 {event.location}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    style={{
                      backgroundColor: event.color,
                      color: "#fff",
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      padding: "10px 20px",
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.cta}
                  </button>
                </div>
              ))}
          </div>

          {/* Past events */}
          <div style={{ marginTop: "60px" }}>
            <h2 className="section-heading" style={{ marginBottom: "24px" }}>
              PAST EVENTS
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {pastEvents.map((event) => (
                <div
                  key={event.title}
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: "20px 24px",
                    opacity: 0.7,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.7rem",
                      color: "#999",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {event.type} · {event.date}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#555",
                      marginBottom: "4px",
                    }}
                  >
                    {event.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.8rem",
                      color: "#999",
                    }}
                  >
                    📍 {event.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
