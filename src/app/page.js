import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TherapySection from "../components/TherapySection";
import ServicesSection from "../components/ServiceSection";
import RatesSection from "../components/RateSection";
import FAQSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden bg-hero-background" style={{ fontFamily: 'var(--font-playfair)' }}>
        <div className="my-10 w-[90%] mx-auto">
          <span className="text-lg md:text-2xl"> <span className="text-2xl md:text-4xl text-[#118ab2]">D</span>r. <span className="text-2xl md:text-4xl text-[#118ab2]">S</span>erena <span className="text-2xl md:text-4xl text-[#118ab2]">B</span>lake, <span> PsyD</span></span>,
          <br />
          <span className="text-lg md:text-2xl text-[#118ab2]">Clinical Psychologist</span>
        </div>
        <HeroSection />
      </div>
      <AboutSection />
      {/* <div className="w-[90%] mx-auto my-10 h-0.5 bg-[#7e7e6b]"/> */}
      <div className="w-full bg-[#f9f6ef]">
        <TherapySection />
        <ServicesSection />
      </div>
      <div className="w-full bg-[#94b0b0]">
        <RatesSection />
      </div>
      <FAQSection />
      <div className="w-full bg-[#94b0b0]">
        <ContactSection />
      </div>

      <footer className="w-full bg-[#0c3d3d] text-white py-6" style={{ fontFamily: 'var(--font-playfair)' }}>
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
          <h1>
            <span className="text-lg md:text-3xl">Dr. Serena Blake, PsyD</span>
          </h1>
          <a className="mt-4 text-sm md:text-lg" href="mailto:serena@blakepsychology.com">serena@blakepsychology.com</a>
          <a className="mt-1 text-sm md:text-lg" href="tel:(323) 555-0192">Phone: (323) 555-0192</a>
          <span className="mt-1 text-sm md:text-lg">1287 Maplewood Drive, Los Angeles, CA 90026</span>
          <div className="mb-4 mt-6 text-sm md:text-lg md:mb-0">
            <span>© {new Date().getFullYear()} Dr. Serena Blake, PsyD, All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
