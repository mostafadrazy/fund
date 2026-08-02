import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const opportunities = [
    {
      title: "Real Estate Investments",
      desc: "Asset-backed properties with strong income potential and long-term value.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      icon: "fa-house"
    },
    {
      title: "Halal Business Growth",
      desc: "Profits are reinvested into halal businesses that create jobs and strengthen the economy.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
      icon: "fa-chart-line"
    },
    {
      title: "Community Impact Projects",
      desc: "Funding initiatives in education, healthcare, and social services for lasting good.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
      icon: "fa-seedling"
    }
  ];

  return (
    <section id="investments" className="bg-[#FAF9F6] py-24 relative overflow-hidden">
      <div className="max-w-[84rem] mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-4 block"
          >
            INVESTMENT OPPORTUNITIES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[var(--color-mizan-dark)] text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6"
          >
            Backed by Assets.<br />Focused on Impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Our investments are designed to deliver financial returns and meaningful change across multiple asset classes.
          </motion.p>
        </div>

        {/* Hover Accordion Container */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] gap-4">
          {opportunities.map((item, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <motion.div 
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                animate={{ 
                  flex: isActive ? 3 : 1 
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group h-full flex-shrink-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                    className="w-full h-full object-cover origin-center"
                  />
                </div>
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 shadow-lg transition-colors duration-500 ${isActive ? 'bg-[var(--color-mizan-gold)]' : 'bg-white/20 backdrop-blur-sm'}`}>
                    <i className={`fa-solid ${item.icon} text-lg`}></i>
                  </div>
                  
                  <motion.h3 
                    layout
                    className="text-white text-2xl sm:text-3xl font-serif font-bold mb-4 whitespace-nowrap"
                  >
                    {item.title}
                  </motion.h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                          {item.desc}
                        </p>
                        <a href="#learn-more" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider hover:text-[var(--color-mizan-gold-light)] transition-colors">
                          Explore Opportunity <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

