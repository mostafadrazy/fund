import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RealEstateSection from './components/RealEstateSection';
import CommunityFundSection from './components/CommunityFundSection';
import RoadmapSection from './components/RoadmapSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyAndImpactSection from './components/WhyAndImpactSection';
import ImpactCycleSection from './components/ImpactCycleSection';
import CalculatorSection from './components/CalculatorSection';
import AppSection from './components/AppSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-mizan-bg)] font-sans selection:bg-[#C8A97E] selection:text-[#FAFAF8] text-[var(--color-mizan-dark)]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RealEstateSection />
        <CommunityFundSection />
        <RoadmapSection />
        <TestimonialsSection />
        <ImpactCycleSection />
        <CalculatorSection />
        <AppSection />
        <WhyAndImpactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
