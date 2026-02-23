import ContentSection from "./_components/ContentSection";
import FAQSection from "./_components/FAQSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import PricingSection from "./_components/PricingSection";
import WorkflowSection from "./_components/WorkflowSection";

export default function Home() {
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
