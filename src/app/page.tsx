import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Elevator from "@/components/Elevator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Elevator />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
