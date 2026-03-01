const stats = [
  {
    number: "1.2M+",
    label: "Children reached in 2024",
    icon: "👧",
    color: "#e07a52 ",
  },
  {
    number: "13",
    label: "Districts where we work",
    icon: "📍",
    color: "#ffd100",
  },
  {
    number: "100K+",
    label: "Caregivers trained",
    icon: "🤝",
    color: "#00a651",
  },
  {
    number: "80K+",
    label: "Young people reached with health education",
    icon: "💊",
    color: "#0779bf",
  },
];

export default function ImpactStats() {
  return (
    <section
      style={{
        backgroundColor: "#e07a52 ",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <h2
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "2rem",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#fff",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          OUR IMPACT IN 2024
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "4px",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
