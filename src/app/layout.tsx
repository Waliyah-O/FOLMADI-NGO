import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOLMADI — Friends of Like Mind Development Initiative",
  description:
    "A community-rooted Nigerian NGO dedicated to early child development, youth empowerment, women's health, civic education, clean water, and more — based in Lagos, Nigeria.",
  keywords: [
    "NGO",
    "Nigeria",
    "Lagos",
    "children",
    "education",
    "health",
    "community",
    "FOLMADI",
  ],
  openGraph: {
    siteName: "FOLMADI Nigeria",
    type: "website",
    url: "https://folmadi-ngo.vercel.app/",
    title: "FOLMADI — Friends of Like Mind Development Initiative",
    description:
      "Transforming lives across Lagos through community-driven programs.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SaveChildrenSA",
    title: "FOLMADI — Friends of Like Mind Development Initiative",
    description:
      "A community-rooted Nigerian NGO dedicated to early child development, youth empowerment, women's health, civic education, clean water, and more — based in Lagos, Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
