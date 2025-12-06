import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WebCraft - Jasa Pembuatan Website Profesional</title>
        <meta
          name="description"
          content="Jasa pembuatan website profesional untuk bisnis, UMKM, dan personal branding. Desain modern, responsif, dan SEO-friendly dengan harga terjangkau."
        />
        <meta
          name="keywords"
          content="jasa pembuatan website, web developer, website profesional, company profile, e-commerce, landing page"
        />
        <link rel="canonical" href="https://webcraft.id" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;