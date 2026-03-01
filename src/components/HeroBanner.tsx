import Link from "next/link";

export default function HeroBanner() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://www.savethechildren.org.za/sites/za/files/styles/banner_desktop_1440x810/public/2026-02/homepage_0.jpg.webp?itok=3OzQ8uqk')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "80px",
          paddingBottom: "80px",
          maxWidth: "700px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: 1.1,
            marginBottom: "24px",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          Until every child can be a child
        </h1>

        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "1.1rem",
            color: "#fff",
            marginBottom: "32px",
            maxWidth: "500px",
            lineHeight: 1.7,
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          FOLMADI believes every child deserves a future. In Nigeria and around
          the world, we give children a healthy start in life, the opportunity
          to learn and protection from harm.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/donate"
            style={{
              backgroundColor: "#e8650a",
              color: "#fff",
              fontFamily: "var(--font-oswald)",
              fontWeight: 600,
              textTransform: "uppercase",
              padding: "14px 32px",
              fontSize: "1rem",
              letterSpacing: "0.05em",
              display: "inline-block",
              transition: "background-color 0.2s",
            }}
          >
            DONATE NOW
          </Link>
          <Link
            href="/what-we-do"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "var(--font-oswald)",
              fontWeight: 600,
              textTransform: "uppercase",
              padding: "12px 30px",
              fontSize: "1rem",
              letterSpacing: "0.05em",
              display: "inline-block",
              border: "2px solid #fff",
              transition: "all 0.2s",
            }}
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            min-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
