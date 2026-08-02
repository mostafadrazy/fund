import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ImpactCycleSection() {
  const [activeStep, setActiveStep] = useState(0);

  const impactSteps = [
    { 
      icon: "fa-store", 
      title: "Invest In Community-Owned Businesses", 
      desc: "We identify and fund high-potential local businesses that serve the community.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-certificate", 
      title: "Expand Halal Opportunities", 
      desc: "Creating avenues for ethical wealth generation aligned with Islamic principles.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-landmark", 
      title: "Create Lasting Institutions", 
      desc: "Building enduring assets like community centers, clinics, and educational hubs.",
      image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-users", 
      title: "Impact Generations", 
      desc: "Ensuring that the benefits of today's investments empower tomorrow's leaders.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-hand-holding-heart", 
      title: "Reinvest For Greater Good", 
      desc: "A portion of returns is consistently funneled back into impactful projects.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-chart-line", 
      title: "Strengthen Local Economies", 
      desc: "Fostering economic independence and resilience within our communities.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
  ];

  return (
    <section className="bg-[var(--color-mizan-dark)] relative">
      
      {/* Mobile/Tablet View (Standard Stack) */}
      <div className="lg:hidden px-6 py-24 max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-3 block">
            The Virtuous Loop
          </span>
          <h2 className="text-white text-4xl sm:text-5xl font-serif font-bold leading-tight mb-4">
            Our Continuous Impact Cycle
          </h2>
          <p className="text-white/70 text-sm font-medium">
            See how our investments generate a self-sustaining cycle of wealth, growth, and community empowerment.
          </p>
        </div>
        
        <div className="space-y-12">
          {impactSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden relative group"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="w-12 h-12 rounded-full bg-[var(--color-mizan-gold)] flex items-center justify-center text-white mb-4 shadow-lg">
                <i className={`fa-solid ${step.icon} text-lg`}></i>
              </div>
              <h3 className="text-white text-2xl font-serif font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop View (Sticky Scroll) */}
      <div className="hidden lg:flex w-full relative">
        
        {/* Left Side (Sticky Image Panel) */}
        <div className="w-1/2 h-screen sticky top-0 left-0 overflow-hidden bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={impactSteps[activeStep].image} 
                alt={impactSteps[activeStep].title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-mizan-dark)]/90 via-[var(--color-mizan-dark)]/40 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
          
          <div className="relative z-10 p-16 w-full max-w-xl text-left">
            <span className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-4 block drop-shadow-md">
              The Virtuous Loop
            </span>
            <h2 className="text-white text-5xl xl:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
              Our Continuous Impact Cycle
            </h2>
          </div>
        </div>

        {/* Right Side (Scrollable Content) */}
        <div className="w-1/2 relative bg-[var(--color-mizan-dark)] py-[30vh]">
          <div className="max-w-xl mx-auto px-12">
            {impactSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                onViewportEnter={() => setActiveStep(idx)}
                viewport={{ amount: 0.6, margin: "-20% 0px -40% 0px" }}
                className={`py-32 transition-all duration-700 ease-in-out ${activeStep === idx ? 'opacity-100 scale-100' : 'opacity-20 scale-95 blur-[2px]'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl transition-colors duration-500 ${activeStep === idx ? 'bg-[var(--color-mizan-gold)]' : 'bg-white/10'}`}>
                  <i className={`fa-solid ${step.icon} text-2xl`}></i>
                </div>
                
                <h3 className="text-white text-4xl font-serif font-bold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-white/80 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
