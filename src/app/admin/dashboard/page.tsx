import { db } from "@/db";
import { news, blogs, events, files, users } from "@/db/schema";
import Link from "next/link";
import {
  Newspaper,
  PenTool,
  Calendar,
  FolderOpen,
  Plus,
} from "lucide-react";

async function getCounts() {
  try {
    const [newsCount, blogsCount, eventsCount, filesCount, usersCount] =
      await Promise.all([
        db.select().from(news),
        db.select().from(blogs),
        db.select().from(events),
        db.select().from(files),
        db.select().from(users),
      ]);

    return {
      news: newsCount.length,
      blogs: blogsCount.length,
      events: eventsCount.length,
      files: filesCount.length,
      users: usersCount.length,
    };
  } catch {
    return { news: 0, blogs: 0, events: 0, files: 0, users: 0 };
  }
}

export default async function AdminDashboardPage() {
  const counts = await getCounts();

  const cards = [
    {
      label: "News Articles",
      count: counts.news,
      href: "/admin/news",
      icon: Newspaper,
      color: "#c0613a",
    },
    {
      label: "Blog Posts",
      count: counts.blogs,
      href: "/admin/blogs",
      icon: PenTool,
      color: "#0779bf",
    },
    {
      label: "Events",
      count: counts.events,
      href: "/admin/events",
      icon: Calendar,
      color: "#00a651",
    },
    {
      label: "Uploaded Files",
      count: counts.files,
      href: "/admin/files",
      icon: FolderOpen,
      color: "#d4a832",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "1.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#2e2a26",
              marginBottom: "4px",
            }}
          >
            Dashboard
          </h1>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.9rem",
              color: "#6b6560",
            }}
          >
            Manage your FOLMADI website content
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              style={{
                backgroundColor: "#fff",
                padding: "28px",
                display: "block",
                textDecoration: "none",
                borderLeft: `4px solid ${card.color}`,
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: `${card.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color={card.color} />
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#2e2a26",
                  lineHeight: 1,
                }}
              >
                {card.count}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#6b6560",
                  letterSpacing: "0.05em",
                  marginTop: "4px",
                }}
              >
                {card.label}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick actions */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "28px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "1.1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Quick Actions
        </h2>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Add News", href: "/admin/news", color: "#c0613a" },
            { label: "Write Blog", href: "/admin/blogs", color: "#0779bf" },
            { label: "Create Event", href: "/admin/events", color: "#00a651" },
            { label: "Upload File", href: "/admin/files", color: "#d4a832" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                fontFamily: "var(--font-oswald)",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: action.color,
                border: `2px solid ${action.color}`,
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
            >
              <Plus size={14} />
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
