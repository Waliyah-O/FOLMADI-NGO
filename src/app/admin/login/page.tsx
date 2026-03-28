"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [seeding, setSeeding] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      router.push("/admin/dashboard");
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      const res = await fetch("/api/auth/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setEmail(data.credentials.email);
        setPassword(data.credentials.password);
        setError("");
      } else {
        setError(data.message || data.error || "Seed failed");
      }
    } catch {
      setError("Failed to seed admin user");
    } finally {
      setSeeding(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontFamily: "var(--font-lato)",
    fontSize: "0.95rem",
    border: "1px solid #ddd",
    outline: "none",
    backgroundColor: "#fff",
    boxSizing: "border-box" as const,
    borderRadius: "0",
  };

  const labelStyle = {
    fontFamily: "var(--font-oswald)",
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    color: "#333",
    letterSpacing: "0.05em",
    display: "block" as const,
    marginBottom: "8px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f4f0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#c0613a",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            FOLMADI
          </div>
          <div
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.85rem",
              color: "#999",
              marginTop: "4px",
            }}
          >
            Admin Panel
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "1.4rem",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#333",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Sign In
          </h1>

          {error && (
            <div
              style={{
                backgroundColor: "#fff5f5",
                border: "1px solid #e74c3c",
                padding: "12px 16px",
                marginBottom: "24px",
                fontFamily: "var(--font-lato)",
                fontSize: "0.85rem",
                color: "#c0392b",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="admin@folmadi.org"
                required
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: loading ? "#ccc" : "#c0613a",
                color: "#fff",
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                textTransform: "uppercase",
                padding: "14px",
                fontSize: "1rem",
                letterSpacing: "0.05em",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              onClick={handleSeed}
              disabled={seeding}
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "0.8rem",
                color: "#999",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {seeding ? "Creating..." : "Create first admin user"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
