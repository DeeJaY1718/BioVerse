import AnnouncementBanner from "../components/AnnouncementBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Courses from "../sections/Courses";
import LearningSystem from "../sections/LearningSystem";
import Vault from "../sections/Vault";
import FreeResources from "../sections/FreeResources";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import AIAssistant from "../sections/AIAssistant";
import ContactCTA from "../sections/ContactCTA";

/**
 * Home — the single-page BioVerse experience.
 * Sections are ordered to guide a visitor from first impression to conversion.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans antialiased">
      <AnnouncementBanner />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <LearningSystem />
        <Vault />
        <FreeResources />
        <Testimonials />
        <AIAssistant />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
