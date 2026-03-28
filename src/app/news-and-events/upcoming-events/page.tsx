import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { db } from "@/db";
import { events } from "@/db/schema";
import { desc } from "drizzle-orm";

const fallbackUpcoming = [
  {
    title: "Annual Charity Gala Dinner 2026",
    date: "March 28, 2026",
    time: "6:30 PM – 11:00 PM",
    location: "Eko Hotel & Suites, Lagos",
    type: "Fundraising",
    description:
      "Join us for our annual gala dinner — an evening of celebration, inspiration, and fundraising for children across Nigeria.",
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
      "Join thousands of Nigerians in a 5km walk to raise awareness about children's rights.",
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
      "A one-day workshop for civil society organisations, government officials, and community leaders on child rights advocacy.",
    cta: "REGISTER",
    color: "#0779bf",
    featured: false,
  },
];

const fallbackPast = [
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
];

export const metadata = {
  title: "Upcoming Events | FOLMADI Nigeria",
  description:
    "Find out about FOLMADI Nigeria's upcoming fundraising events, awareness campaigns, and community activities.",
};

interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  cta: string;
  color: string;
  featured: boolean;
}

interface PastEventData {
  title: string;
  date: string;
  location: string;
  type: string;
}

async function getEventData(): Promise<{
  upcoming: EventData[];
  past: PastEventData[];
}> {
  try {
    const allEvents = (await db
      .select()
      .from(events)
      .orderBy(desc(events.eventDate))) as Array<{
      title: string;
      description: string;
      eventDate: string;
      eventTime: string | null;
      location: string;
      eventType: string;
      ctaText: string | null;
      ctaColor: string | null;
      featured: number;
      published: number;
    }>;

    const published = allEvents.filter((e) => e.published === 1);
    if (published.length === 0) {
      return {
        upcoming: fallbackUpcoming,
        past: fallbackPast,
      };
    }

    const now = new Date();
    const upcoming: EventData[] = [];
    const past: PastEventData[] = [];

    for (const item of published) {
      const eventDate = new Date(item.eventDate);
      if (item.eventDate && eventDate >= now) {
        upcoming.push({
          title: item.title,
          date: item.eventDate,
          time: item.eventTime || "",
          location: item.location,
          type: item.eventType,
          description: item.description,
          cta: item.ctaText || "REGISTER",
          color: item.ctaColor || "#c0613a",
          featured: item.featured === 1,
        });
      } else {
        past.push({
          title: item.title,
          date: item.eventDate,
          location: item.location,
          type: item.eventType,
        });
      }
    }

    return {
      upcoming: upcoming.length > 0 ? upcoming : fallbackUpcoming,
      past: past.length > 0 ? past : fallbackPast,
    };
  } catch {
    return { upcoming: fallbackUpcoming, past: fallbackPast };
  }
}

export default async function UpcomingEventsPage() {
  const { upcoming: upcomingEvents, past: pastEvents } = await getEventData();

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
                    FEATURED EVENT - {event.type}
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
                      { text: event.date },
                      { text: event.time },
                      { text: event.location },
                    ]
                      .filter((item) => item.text)
                      .map((item) => (
                        <span
                          key={item.text}
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.9rem",
                            color: "#555",
                          }}
                        >
                          {item.text}
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
                      {event.date.split(" ")[1]?.replace(",", "") || ""}
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
                      {event.date.split(" ")[0] || ""}
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
                      {event.time && (
                        <span
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.8rem",
                            color: "#888",
                          }}
                        >
                          {event.time}
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: "var(--font-lato)",
                          fontSize: "0.8rem",
                          color: "#888",
                        }}
                      >
                        {event.location}
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
          {pastEvents.length > 0 && (
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
                      {event.type} - {event.date}
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
                      {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
