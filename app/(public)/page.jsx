import ContentSection from "@/components/landing/ContentSection";
import FAQSection from "@/components/landing/FAQSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";

import PricingSection from "@/components/landing/PricingSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import Navbar from "@/components/layout/Navbar";

function Home() {
  return (
    <header>
      <Navbar />
      <main>
        <HeroSection />
        {/* featur */}
        <FeaturesSection />
        {/* content */}
        <ContentSection />
        {/* workflow */}
        <WorkflowSection />
        {/* price */}
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </header>
  );
}
export default Home;
