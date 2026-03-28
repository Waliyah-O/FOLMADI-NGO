"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Newspaper,
  PenTool,
  Calendar,
  FolderOpen,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "News", href: "/admin/news", icon: Newspaper },
  { label: "Blogs", href: "/admin/blogs", icon: PenTool },
  { label: "Events", href: "/admin/events", icon: Calendar },
  { label: "Files", href: "/admin/files", icon: FolderOpen },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const sidebarWidth = 250;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 40,
            display: "none",
          }}
          className="admin-overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: sidebarWidth,
          backgroundColor: "#2a1f1a",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 50,
          transition: "transform 0.2s ease",
        }}
        className="admin-sidebar"
      >
        <div
          style={{
            padding: "24px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "1.2rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            FOLMADI
          </div>
          <div
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
              marginTop: "2px",
            }}
          >
            Admin Panel
          </div>
        </div>

        <nav style={{ flex: 1, padding: "16px 0" }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 20px",
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                  backgroundColor: isActive
                    ? "rgba(192, 97, 58, 0.3)"
                    : "transparent",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                  borderLeft: isActive
                    ? "3px solid #c0613a"
                    : "3px solid transparent",
                }}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          style={{
            padding: "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Link
            href="/"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-lato)",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              marginBottom: "12px",
            }}
          >
            <ExternalLink size={14} />
            View Website
          </Link>
          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "10px 0",
              fontFamily: "var(--font-oswald)",
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.6)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          marginLeft: sidebarWidth,
          backgroundColor: "#f7f4f0",
          minHeight: "100vh",
        }}
      >
        {/* Top bar */}
        <header
          style={{
            backgroundColor: "#fff",
            padding: "16px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
          }}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            className="admin-menu-btn"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "0.8rem",
              color: "#999",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Content Management System
          </div>
        </header>

        <main style={{ padding: "32px" }}>{children}</main>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .admin-sidebar {
            transform: translateX(-100%);
          }
          .admin-sidebar.open {
            transform: translateX(0);
          }
          .admin-overlay {
            display: block !important;
          }
          .admin-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
