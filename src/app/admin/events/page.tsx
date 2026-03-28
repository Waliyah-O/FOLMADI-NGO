"use client";

import { useState, useEffect, useCallback } from "react";
import { Pencil, Trash2, Plus, X, Eye, EyeOff, Star } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  eventDate: string;
  eventTime: string;
  location: string;
  eventType: string;
  imageUrl: string | null;
  ctaText: string;
  ctaColor: string;
  featured: number;
  published: number;
  createdAt: string;
}

const eventTypes = [
  "General",
  "Fundraising",
  "Awareness",
  "Workshop",
  "Conference",
  "Online Event",
  "Milestone",
];

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  fontFamily: "var(--font-lato)",
  fontSize: "0.9rem",
  border: "1px solid #ddd",
  outline: "none",
  backgroundColor: "#fff",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  fontFamily: "var(--font-oswald)",
  fontSize: "0.75rem",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  color: "#555",
  letterSpacing: "0.05em",
  display: "block" as const,
  marginBottom: "6px",
};

export default function AdminEventsPage() {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    eventDate: "",
    eventTime: "",
    location: "",
    eventType: "General",
    imageUrl: "",
    ctaText: "REGISTER",
    ctaColor: "#c0613a",
    featured: false,
    published: false,
  });

  const fetchEvents = useCallback(async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      eventDate: "",
      eventTime: "",
      location: "",
      eventType: "General",
      imageUrl: "",
      ctaText: "REGISTER",
      ctaColor: "#c0613a",
      featured: false,
      published: false,
    });
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (item: EventItem) => {
    setForm({
      title: item.title,
      description: item.description,
      eventDate: item.eventDate,
      eventTime: item.eventTime,
      location: item.location,
      eventType: item.eventType,
      imageUrl: item.imageUrl || "",
      ctaText: item.ctaText,
      ctaColor: item.ctaColor,
      featured: item.featured === 1,
      published: item.published === 1,
    });
    setEditing(item);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/events";
      const method = editing ? "PUT" : "POST";
      const body = editing ? { ...form, id: editing.id } : form;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        resetForm();
        fetchEvents();
      }
    } catch (err) {
      console.error("Failed to save:", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      await fetch(`/api/events?id=${id}`, { method: "DELETE" });
      fetchEvents();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  const togglePublish = async (item: EventItem) => {
    try {
      await fetch("/api/events", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          published: item.published ? 0 : 1,
        }),
      });
      fetchEvents();
    } catch (err) {
      console.error("Failed to toggle:", err);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          fontFamily: "var(--font-lato)",
          color: "#666",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "1.6rem",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#2e2a26",
          }}
        >
          Events
        </h1>
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#00a651",
            color: "#fff",
            fontFamily: "var(--font-oswald)",
            fontWeight: 600,
            textTransform: "uppercase",
            padding: "10px 20px",
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Plus size={16} />
          Create Event
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "32px",
            marginBottom: "28px",
            border: "1px solid #eee",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#333",
              }}
            >
              {editing ? "Edit Event" : "Create Event"}
            </h2>
            <button
              onClick={resetForm}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#999",
              }}
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                style={inputStyle}
                required
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div>
                <label style={labelStyle}>Event Date</label>
                <input
                  type="text"
                  value={form.eventDate}
                  onChange={(e) =>
                    setForm({ ...form, eventDate: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="March 28, 2026"
                />
              </div>
              <div>
                <label style={labelStyle}>Event Time</label>
                <input
                  type="text"
                  value={form.eventTime}
                  onChange={(e) =>
                    setForm({ ...form, eventTime: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="6:30 PM - 11:00 PM"
                />
              </div>
              <div>
                <label style={labelStyle}>Event Type</label>
                <select
                  value={form.eventType}
                  onChange={(e) =>
                    setForm({ ...form, eventType: e.target.value })
                  }
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
                style={inputStyle}
                placeholder="Eko Hotel & Suites, Lagos"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div>
                <label style={labelStyle}>Image URL</label>
                <input
                  type="text"
                  value={form.imageUrl}
                  onChange={(e) =>
                    setForm({ ...form, imageUrl: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="/uploads/image.jpg"
                />
              </div>
              <div>
                <label style={labelStyle}>CTA Text</label>
                <input
                  type="text"
                  value={form.ctaText}
                  onChange={(e) =>
                    setForm({ ...form, ctaText: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="REGISTER"
                />
              </div>
              <div>
                <label style={labelStyle}>CTA Color</label>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <input
                    type="color"
                    value={form.ctaColor}
                    onChange={(e) =>
                      setForm({ ...form, ctaColor: e.target.value })
                    }
                    style={{
                      width: "40px",
                      height: "38px",
                      border: "1px solid #ddd",
                      cursor: "pointer",
                      padding: "2px",
                    }}
                  />
                  <input
                    type="text"
                    value={form.ctaColor}
                    onChange={(e) =>
                      setForm({ ...form, ctaColor: e.target.value })
                    }
                    style={{ ...inputStyle, flex: 1 }}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Description</label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                style={{
                  ...inputStyle,
                  minHeight: "120px",
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.9rem",
                  color: "#555",
                }}
              >
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) =>
                    setForm({ ...form, featured: e.target.checked })
                  }
                  style={{ width: "16px", height: "16px" }}
                />
                Featured Event
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.9rem",
                  color: "#555",
                }}
              >
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) =>
                    setForm({ ...form, published: e.target.checked })
                  }
                  style={{ width: "16px", height: "16px" }}
                />
                Published
              </label>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#00a651",
                  color: "#fff",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  padding: "10px 24px",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {editing ? "UPDATE" : "CREATE"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                style={{
                  backgroundColor: "transparent",
                  color: "#666",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  padding: "10px 24px",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                }}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Items list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.length === 0 && (
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              textAlign: "center",
              fontFamily: "var(--font-lato)",
              color: "#999",
            }}
          >
            No events yet. Click &quot;Create Event&quot; to add one.
          </div>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#fff",
              padding: "20px 24px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "16px",
              alignItems: "center",
              borderLeft: `4px solid ${item.published ? item.ctaColor : "#ddd"}`,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "0.65rem",
                    color: item.ctaColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    backgroundColor: "#f5f5f5",
                    padding: "2px 8px",
                  }}
                >
                  {item.eventType}
                </span>
                {item.featured === 1 && (
                  <Star size={12} color="#d4a832" fill="#d4a832" />
                )}
                {!item.published && (
                  <span
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.65rem",
                      color: "#999",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      backgroundColor: "#f5f5f5",
                      padding: "2px 8px",
                    }}
                  >
                    DRAFT
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#333",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.8rem",
                  color: "#999",
                  marginTop: "4px",
                }}
              >
                {item.eventDate}
                {item.location && ` - ${item.location}`}
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => togglePublish(item)}
                title={item.published ? "Unpublish" : "Publish"}
                style={{
                  background: "none",
                  border: "1px solid #eee",
                  cursor: "pointer",
                  padding: "8px",
                  color: item.published ? "#00a651" : "#999",
                }}
              >
                {item.published ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
              <button
                onClick={() => handleEdit(item)}
                style={{
                  background: "none",
                  border: "1px solid #eee",
                  cursor: "pointer",
                  padding: "8px",
                  color: "#0779bf",
                }}
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: "none",
                  border: "1px solid #eee",
                  cursor: "pointer",
                  padding: "8px",
                  color: "#e74c3c",
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
