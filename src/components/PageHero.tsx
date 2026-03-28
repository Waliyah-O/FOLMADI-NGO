interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
}

export default function PageHero({
  title,
  subtitle,
  bgColor = "#c0613a",
  textColor = "#fff",
}: PageHeroProps) {
  return (
    <section
      style={{
        backgroundColor: bgColor,
        padding: "60px 0 50px",
      }}
    >
      <div className="container">
        <h1
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: textColor,
            textTransform: "uppercase",
            lineHeight: 1.1,
            marginBottom: subtitle ? "16px" : "0",
            paddingTop: "30px",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "1.1rem",
              color: textColor,
              opacity: 0.9,
              maxWidth: "700px",
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
