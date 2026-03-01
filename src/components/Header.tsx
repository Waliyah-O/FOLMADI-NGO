"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS, NAV_LINKS } from "@/lib/data";
import clsx from "clsx";

// const navItems = [
//   {
//     label: "ABOUT US",
//     href: "/about-us",
//     children: [
//       { label: "OUR HISTORY", href: "/about-us/our-history" },
//       { label: "OUR SUCCESSES", href: "/about-us/our-successes" },
//       { label: "OUR PEOPLE", href: "/about-us/our-people" },
//       { label: "ACCOUNTABILITY", href: "/about-us/accountability" },
//       { label: "CONTACT US", href: "/about-us/contact-us" },
//     ],
//   },
//   {
//     label: "WHAT WE DO",
//     href: "/what-we-do",
//     children: [
//       { label: "OUR WORK IN NIGERIA", href: "/what-we-do/our-work" },
//       { label: "IN TIMES OF CRISIS", href: "/what-we-do/in-times-of-crisis" },
//       {
//         label: "HELP US CHANGE THE LIVES OF CHILDREN",
//         href: "/what-we-do/help-us-change-the-lives-of-children",
//       },
//     ],
//   },
//   {
//     label: "GET INVOLVED",
//     href: "/get-involved",
//     children: [
//       {
//         label: "IF YOU ARE A PERSON",
//         href: "/get-involved/if-you-are-a-person",
//       },
//       {
//         label: "IF YOU ARE A COMPANY",
//         href: "/get-involved/if-you-are-a-company",
//       },
//     ],
//   },
//   {
//     label: "NEWS & EVENTS",
//     href: "/news-and-events",
//     children: [
//       { label: "NEWS", href: "/news-and-events/news" },
//       { label: "BLOGS", href: "/news-and-events/blogs" },
//       { label: "UPCOMING EVENTS", href: "/news-and-events/upcoming-events" },
//       { label: "PUBLICATIONS", href: "/news-and-events/publications" },
//     ],
//   },
// ];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#fdf6ee]/95 backdrop-blur-md shadow-sm border-b border-bark-light/30"
          : "bg-transparent",
      )}
    >
      {/* Main header */}
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
          }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#c0613a] to-[#d4a832] flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
              🤝
            </div>
            <div className="leading-none">
              <div className="font-lora font-bold text-lg text-[#c0613a] tracking-wide">
                FOLMADI
                <p className="text-[10px] hidden sm:block">
                  Friends of Like Mind Dev. Initiative
                </p>
              </div>
            </div>
          </Link>
          {/* <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#e07a52 " />
                <text
                  x="24"
                  y="30"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                  fontFamily="Arial"
                >
                  F
                </text>
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#e07a52 ",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                  }}
                >
                  FOLMADI
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.75rem",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Nigeria
                </div>
              </div>
            </div>
          </Link> */}

          {/* Desktop Navigation */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "0" }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="hover:text-[#c0613a] transition-colors"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    color: `${scrolled ? "#333" : "#fff"}`,
                    padding: "20px 14px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.03em",
                    transition: "color 0.2s",
                    borderBottom:
                      openDropdown === item.label
                        ? "3px solid #e07a52 "
                        : "3px solid transparent",
                  }}
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      minWidth: "220px",
                      zIndex: 100,
                      borderTop: "3px solid #e07a52 ",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          fontFamily: "var(--font-oswald)",
                          fontSize: "0.85rem",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          color: "#333",
                          borderBottom: "1px solid #f0f0f0",
                          transition: "background-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.backgroundColor =
                            "#e07a52 ";
                          (e.target as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.backgroundColor =
                            "transparent";
                          (e.target as HTMLElement).style.color = "#333";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Donate button + mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/donate" className="btn-donate">
              DONATE
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "none",
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#333",
                  marginBottom: "5px",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#333",
                  marginBottom: "5px",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#333",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
            padding: "16px 0",
          }}
        >
          <div className="container">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} style={{ marginBottom: "8px" }}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    color: "#333",
                    display: "block",
                    padding: "8px 0",
                    borderBottom: "1px solid #eee",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
