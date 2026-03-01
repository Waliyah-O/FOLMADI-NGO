import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import HowWeHelpChildren from "@/components/HowWeHelpChildren";
import ImpactStats from "@/components/ImpactStats";
import HowYouCanHelp from "@/components/HowYouCanHelp";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroBanner />
        <Marquee />
        <HowWeHelpChildren />
        <ImpactStats />
        <HowYouCanHelp />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
