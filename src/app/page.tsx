import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import TrustStats from "@/components/sections/trust-stats";
import HowItWorks from "@/components/sections/how-it-works";
import ValueCards from "@/components/sections/value-cards";
import ComparisonSection from "@/components/sections/comparison";
import StepsSection from "@/components/sections/steps";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import StickyBanner from "@/components/sections/sticky-banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <HowItWorks />
        <ValueCards />
        <ComparisonSection />
        <StepsSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBanner />
    </div>
  );
}
