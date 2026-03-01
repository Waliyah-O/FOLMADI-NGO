"use client";
import React from "react";

export default function ClientSocialLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "50%",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e2001a")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#333")}
    >
      {children}
    </a>
  );
}
