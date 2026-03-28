"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

interface MediaPost {
  id: string;
  author: string;
  authorRole: string;
  content: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  likes: number;
  comments: number;
  timestamp: Date;
}

// Sample initial posts
const initialPosts: MediaPost[] = [
  {
    id: "1",
    author: "Amara Johnson",
    authorRole: "Education Volunteer, Lagos",
    content:
      "Today we distributed learning materials to over 50 children at the Lagos community center. Their smiles made every effort worthwhile! 📚✨",
    mediaUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    mediaType: "image",
    likes: 24,
    comments: 5,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    author: "Chukwuemeka Okonkwo",
    authorRole: "Health Programme Volunteer, Kano",
    content:
      "Our nutrition workshop was a huge success! Mothers learned about balanced diets and child health.下一个🌟",
    mediaUrl:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    mediaType: "image",
    likes: 18,
    comments: 3,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "3",
    author: "Fatima Abubakar",
    authorRole: "Child Protection Volunteer, Abuja",
    content:
      "Volunteering with FOLMADI has been life-changing. Here's a glimpse of our community awareness session yesterday.",
    mediaUrl:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800",
    mediaType: "image",
    likes: 31,
    comments: 8,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

export default function VolunteersPage() {
  const [posts, setPosts] = useState<MediaPost[]>(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<"feed" | "grid">("feed");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!newPost.trim() && !selectedFile) || isUploading) return;

    setIsUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      const newMediaPost: MediaPost = {
        id: Date.now().toString(),
        author: "You",
        authorRole: "FOLMADI Volunteer",
        content: newPost || "Shared a moment from the field!",
        mediaUrl:
          previewUrl ||
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
        mediaType: selectedFile?.type.startsWith("video") ? "video" : "image",
        likes: 0,
        comments: 0,
        timestamp: new Date(),
      };

      setPosts([newMediaPost, ...posts]);
      setNewPost("");
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsUploading(false);
    }, 1000);
  };

  const formatTimeAgo = (date: Date, now: number) => {
    const seconds = Math.floor((now - date.getTime()) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  // Use a fixed timestamp for display purposes (refresh page to update)
  const now = 1709287200000;

  return (
    <PageLayout>
      <PageHero
        title="Volunteer Community"
        subtitle="Connect with fellow volunteers, share your experiences, and celebrate the impact we're making together across Nigeria."
        bgColor="#00a651"
      />

      {/* Main content */}
      <section style={{ padding: "40px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "24px",
            }}
          >
            {/* Sidebar */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Create post card */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "0",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "16px",
                  }}
                >
                  Share Your Story
                </h3>
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's happening in your volunteer journey?"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.9rem",
                      border: "1px solid #ddd",
                      outline: "none",
                      resize: "none",
                      height: "80px",
                      boxSizing: "border-box",
                      marginBottom: "12px",
                    }}
                  />

                  {/* File preview */}
                  {previewUrl && (
                    <div style={{ position: "relative", marginBottom: "12px" }}>
                      {selectedFile?.type.startsWith("video") ? (
                        <video
                          src={previewUrl}
                          style={{
                            width: "100%",
                            maxHeight: "200px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <Image
                          src={previewUrl}
                          alt="Preview"
                          width={400}
                          height={200}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "200px",
                            objectFit: "cover",
                          }}
                          unoptimized
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedFile(null);
                          setPreviewUrl(null);
                        }}
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          backgroundColor: "rgba(0,0,0,0.7)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "50%",
                          width: "24px",
                          height: "24px",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        ×
                      </button>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileSelect}
                      style={{ display: "none" }}
                      id="media-upload"
                    />
                    <label
                      htmlFor="media-upload"
                      style={{
                        backgroundColor: "#f0f0f0",
                        padding: "8px 12px",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                      }}
                    >
                      📷
                    </label>
                    <button
                      type="submit"
                      disabled={
                        isUploading || (!newPost.trim() && !selectedFile)
                      }
                      style={{
                        flex: 1,
                        backgroundColor: isUploading ? "#ccc" : "#00a651",
                        color: "#fff",
                        fontFamily: "var(--font-oswald)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        padding: "10px",
                        border: "none",
                        cursor: isUploading ? "not-allowed" : "pointer",
                        fontSize: "0.85rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {isUploading ? "POSTING..." : "POST"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Stats card */}
              <div style={{ backgroundColor: "#fff", padding: "20px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "16px",
                  }}
                >
                  Community Stats
                </h3>
                {[
                  { label: "Active Volunteers", value: "2,500+" },
                  { label: "States Active", value: "36" },
                  { label: "Posts This Month", value: "150+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.85rem",
                        color: "#666",
                      }}
                    >
                      {stat.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#00a651",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div style={{ backgroundColor: "#fff", padding: "20px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                    marginBottom: "16px",
                  }}
                >
                  Quick Links
                </h3>
                {[
                  {
                    label: "🎓 Volunteer Training",
                    href: "/get-involved/if-you-are-a-person",
                  },
                  { label: "📋 Volunteer Handbook", href: "#" },
                  { label: "💬 Community Guidelines", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "10px 0",
                      fontFamily: "var(--font-lato)",
                      fontSize: "0.85rem",
                      color: "#555",
                      borderBottom: "1px solid #eee",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Main feed */}
            <div>
              {/* View toggle */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#333",
                  }}
                >
                  Latest Posts
                </h2>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => setViewMode("feed")}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: viewMode === "feed" ? "#00a651" : "#fff",
                      color: viewMode === "feed" ? "#fff" : "#666",
                      border: "1px solid #ddd",
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Feed
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: viewMode === "grid" ? "#00a651" : "#fff",
                      color: viewMode === "grid" ? "#fff" : "#666",
                      border: "1px solid #ddd",
                      fontFamily: "var(--font-oswald)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Grid
                  </button>
                </div>
              </div>

              {viewMode === "feed" ? (
                // Feed view
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      style={{ backgroundColor: "#fff", borderRadius: "0" }}
                    >
                      {/* Post header */}
                      <div
                        style={{
                          padding: "16px 20px",
                          display: "flex",
                          gap: "12px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            backgroundColor: "#00a651",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontFamily: "var(--font-oswald)",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                          }}
                        >
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-oswald)",
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#333",
                            }}
                          >
                            {post.author}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-lato)",
                              fontSize: "0.75rem",
                              color: "#888",
                            }}
                          >
                            {post.authorRole} ·{" "}
                            {formatTimeAgo(post.timestamp, now)}
                          </div>
                        </div>
                      </div>

                      {/* Post content */}
                      <div style={{ padding: "0 20px 16px" }}>
                        <p
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.95rem",
                            color: "#555",
                            lineHeight: 1.6,
                            marginBottom: "12px",
                          }}
                        >
                          {post.content}
                        </p>
                      </div>

                      {/* Media */}
                      {post.mediaType === "video" ? (
                        <video
                          src={post.mediaUrl}
                          style={{
                            width: "100%",
                            maxHeight: "400px",
                            objectFit: "cover",
                            backgroundColor: "#000",
                          }}
                          controls
                        />
                      ) : (
                        <Image
                          src={post.mediaUrl}
                          alt="Post media"
                          width={800}
                          height={400}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "400px",
                            objectFit: "cover",
                          }}
                          unoptimized
                        />
                      )}

                      {/* Post actions */}
                      <div
                        style={{
                          padding: "12px 20px",
                          display: "flex",
                          gap: "24px",
                          borderTop: "1px solid #f0f0f0",
                        }}
                      >
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.85rem",
                            color: "#666",
                          }}
                        >
                          <span style={{ fontSize: "1.1rem" }}>❤️</span>{" "}
                          {post.likes}
                        </button>
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.85rem",
                            color: "#666",
                          }}
                        >
                          <span style={{ fontSize: "1.1rem" }}>💬</span>{" "}
                          {post.comments}
                        </button>
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "var(--font-lato)",
                            fontSize: "0.85rem",
                            color: "#666",
                          }}
                        >
                          <span style={{ fontSize: "1.1rem" }}>🔗</span> Share
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Grid view
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                  }}
                >
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      style={{
                        position: "relative",
                        aspectRatio: "1",
                        cursor: "pointer",
                      }}
                    >
                      {post.mediaType === "video" ? (
                        <video
                          src={post.mediaUrl}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <Image
                          src={post.mediaUrl}
                          alt={post.author}
                          fill
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          unoptimized
                        />
                      )}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0,0,0,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "16px",
                          opacity: 0,
                          transition: "opacity 0.2s",
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontFamily: "var(--font-oswald)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          ❤️ {post.likes}
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            fontFamily: "var(--font-oswald)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          💬 {post.comments}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageLayout>
  );
}
