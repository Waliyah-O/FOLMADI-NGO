"use client";

import { useState, useEffect, useCallback } from "react";
import { Pencil, Trash2, Plus, X, Eye, EyeOff } from "lucide-react";

interface BlogItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorRole: string;
  imageUrl: string | null;
  tags: string;
  readTime: string;
  published: number;
  createdAt: string;
}

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

export default function AdminBlogsPage() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<BlogItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    authorName: "",
    authorRole: "",
    imageUrl: "",
    tags: "",
    readTime: "5 min read",
    published: false,
  });

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const resetForm = () => {
    setForm({
      title: "",
      excerpt: "",
      content: "",
      authorName: "",
      authorRole: "",
      imageUrl: "",
      tags: "",
      readTime: "5 min read",
      published: false,
    });
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (item: BlogItem) => {
    setForm({
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      authorName: item.authorName,
      authorRole: item.authorRole,
      imageUrl: item.imageUrl || "",
      tags: item.tags,
      readTime: item.readTime,
      published: item.published === 1,
    });
    setEditing(item);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/blogs";
      const method = editing ? "PUT" : "POST";
      const body = editing ? { ...form, id: editing.id } : form;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        resetForm();
        fetchBlogs();
      }
    } catch (err) {
      console.error("Failed to save:", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
      fetchBlogs();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  const togglePublish = async (item: BlogItem) => {
    try {
      await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          published: item.published ? 0 : 1,
        }),
      });
      fetchBlogs();
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
          Blog Posts
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
            backgroundColor: "#0779bf",
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
          Write Blog
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
              {editing ? "Edit Blog" : "Write Blog"}
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
                <label style={labelStyle}>Author Name</label>
                <input
                  type="text"
                  value={form.authorName}
                  onChange={(e) =>
                    setForm({ ...form, authorName: e.target.value })
                  }
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Author Role</label>
                <input
                  type="text"
                  value={form.authorRole}
                  onChange={(e) =>
                    setForm({ ...form, authorRole: e.target.value })
                  }
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Read Time</label>
                <input
                  type="text"
                  value={form.readTime}
                  onChange={(e) =>
                    setForm({ ...form, readTime: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
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
                <label style={labelStyle}>Tags (comma-separated)</label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  style={inputStyle}
                  placeholder="Nutrition, Community, Kano"
                />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Content</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                style={{
                  ...inputStyle,
                  minHeight: "150px",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
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
                  backgroundColor: "#0779bf",
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
                {editing ? "UPDATE" : "PUBLISH"}
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
            No blog posts yet. Click &quot;Write Blog&quot; to create one.
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
              borderLeft: `4px solid ${item.published ? "#0779bf" : "#ddd"}`,
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
                {item.authorName && (
                  <span
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.75rem",
                      color: "#999",
                    }}
                  >
                    By {item.authorName}
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
