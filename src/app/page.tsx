import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import PackagesSection from "@/components/PackagesSection";
import VisualProofSection from "@/components/VisualProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EnquirySection from "@/components/EnquirySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhoItsForSection />
        <PackagesSection />
        <VisualProofSection />
        <HowItWorksSection />
        <EnquirySection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
