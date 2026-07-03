import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RealEstateSection from './components/RealEstateSection';
import CalculatorSection from './components/CalculatorSection';
import CommunityFundSection from './components/CommunityFundSection';
import RoadmapSection from './components/RoadmapSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] font-sans selection:bg-mizan-green selection:text-white">
      <div className="min-h-screen flex flex-col relative bg-white">
        <Navbar />
        <HeroSection />
      </div>
      <main className="flex-1">
        <RealEstateSection />
        <CalculatorSection />
        <CommunityFundSection />
        <RoadmapSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
