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
  title: "Save the Children South Africa | Homepage",
  description:
    "Save the Children believes every child deserves a future. In South Africa and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm.",
  openGraph: {
    siteName: "Save the Children South Africa",
    type: "website",
    url: "https://www.savethechildren.org.za/",
    title: "Save the Children South Africa | Homepage",
    description:
      "Save the Children believes every child deserves a future. In South Africa and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SaveChildrenSA",
    title: "Save the Children South Africa | Homepage",
    description:
      "Save the Children believes every child deserves a future. In South Africa and around the world, we give children a healthy start in life, the opportunity to learn and protection from harm.",
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
