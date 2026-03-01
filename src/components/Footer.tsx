import Link from "next/link";

const footerLinks = [
  {
    heading: "About Us",
    links: [
      { label: "Our History", href: "/about-us/our-history" },
      { label: "Our Successes", href: "/about-us/our-successes" },
      { label: "Our People", href: "/about-us/our-people" },
      { label: "Accountability", href: "/about-us/accountability" },
      { label: "Contact Us", href: "/about-us/contact-us" },
    ],
  },
  {
    heading: "What We Do",
    links: [
      { label: "Our Work in South Africa", href: "/what-we-do/our-work" },
      { label: "Education", href: "/what-we-do/our-work/education" },
      {
        label: "Child Protection",
        href: "/what-we-do/our-work/child-protection",
      },
      {
        label: "Health and Nutrition",
        href: "/what-we-do/our-work/health-and-nutrition",
      },
      { label: "In Times of Crisis", href: "/what-we-do/in-times-of-crisis" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Make a Donation", href: "/donate-2018" },
      {
        label: "Become an Activist",
        href: "/get-involved/if-you-are-a-person/become-an-activist",
      },
      {
        label: "Become a Volunteer",
        href: "/get-involved/if-you-are-a-person/become-a-volunteer",
      },
      {
        label: "Corporate Partnerships",
        href: "/get-involved/if-you-are-a-company",
      },
      {
        label: "MySchool Card",
        href: "/get-involved/if-you-are-a-person/myschool",
      },
    ],
  },
  {
    heading: "News & Events",
    links: [
      { label: "News", href: "/news-and-events/news" },
      { label: "Blogs", href: "/news-and-events/blogs" },
      { label: "Upcoming Events", href: "/news-and-events/upcoming-events" },
      { label: "Publications", href: "/news-and-events/publications" },
    ],
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/savethechildrensouthafrica",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/SavetheChildrenSouthAfrica",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/user/SavetheChildrenSA",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/save-the-children-south-africa",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/SaveChildrenSA",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        paddingTop: "60px",
      }}
    >
      {/* Main footer content */}
      <div className="container">
        {/* Logo + social */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#e2001a" />
                <text
                  x="24"
                  y="30"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                  fontFamily="Arial"
                >
                  SC
                </text>
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                  }}
                >
                  Save the Children
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: "0.75rem",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  South Africa
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "0.85rem",
                color: "#aaa",
                maxWidth: "280px",
                lineHeight: 1.6,
              }}
            >
              Save the Children believes every child deserves a future. We give
              children a healthy start in life, the opportunity to learn and
              protection from harm.
            </p>
          </div>

          {/* Social links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "16px",
                letterSpacing: "0.05em",
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "50%",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#e2001a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#333";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer nav links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
            paddingBottom: "48px",
            borderBottom: "1px solid #333",
          }}
        >
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h4
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: "16px",
                  letterSpacing: "0.05em",
                }}
              >
                {section.heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: "8px" }}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.85rem",
                        color: "#aaa",
                        transition: "color 0.2s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#e2001a";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "#aaa";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "0.8rem",
              color: "#666",
            }}
          >
            © {new Date().getFullYear()} Save the Children South Africa. All
            rights reserved. NPO Registration No: 003-867 NPO | PBO Registration
            No: 930003167
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms-of-use" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-lato)",
                  fontSize: "0.8rem",
                  color: "#666",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
