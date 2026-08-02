import React from 'react';
import { motion } from 'motion/react';

export default function RoadmapSection() {
  const steps = [
    {
      num: "01",
      title: "We Identify",
      desc: "We source and evaluate real estate opportunities that are asset-backed and Shariah-compliant.",
      icon: "fa-magnifying-glass"
    },
    {
      num: "02",
      title: "We Invest",
      desc: "We acquire and manage properties that generate stable rental income and long-term value.",
      icon: "fa-building-columns"
    },
    {
      num: "03",
      title: "We Allocate Profits",
      desc: "Profits are reinvested into halal businesses and impact projects for the community.",
      icon: "fa-hand-holding-dollar" // Using an alternative free icon
    },
    {
      num: "04",
      title: "We Create Lasting Impact",
      desc: "Our investors earn returns while creating a continuous cycle of Sadaqah Jariyah.",
      icon: "fa-user-group"
    }
  ];

  return (
    <section id="road-map" className="bg-[#FAF9F6] py-24 relative overflow-hidden">
      <div className="max-w-[84rem] mx-auto px-6">
        
        <div className="text-center mb-24">
          <span className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-[var(--color-mizan-dark)] text-4xl sm:text-5xl font-serif font-bold leading-tight mb-4">
            A Better Way to Invest
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
          {/* Connecting Dashed Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] border-t border-dashed border-[var(--color-mizan-gold)] z-0">
            {/* Arrows along the line */}
            <div className="absolute top-1/2 left-[25%] -translate-y-1/2 text-[var(--color-mizan-gold)] text-[10px] bg-[#FAF9F6] px-1"><i className="fa-solid fa-play"></i></div>
            <div className="absolute top-1/2 left-[58%] -translate-y-1/2 text-[var(--color-mizan-gold)] text-[10px] bg-[#FAF9F6] px-1"><i className="fa-solid fa-play"></i></div>
            <div className="absolute top-1/2 left-[91%] -translate-y-1/2 text-[var(--color-mizan-gold)] text-[10px] bg-[#FAF9F6] px-1"><i className="fa-solid fa-play"></i></div>
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              <div className="w-24 h-24 rounded-full border border-[var(--color-mizan-dark)]/20 bg-[#FAF9F6] flex items-center justify-center mb-8 relative group-hover:border-[var(--color-mizan-gold)] group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <i className={`fa-solid ${step.icon} text-3xl text-[var(--color-mizan-dark)] group-hover:text-[var(--color-mizan-gold)] transition-colors duration-300`}></i>
              </div>
              
              <h3 className="text-[var(--color-mizan-dark)] font-bold text-sm tracking-wide mb-4 flex items-center gap-2">
                <span className="text-[var(--color-mizan-gold)]">{step.num}</span>
                {step.title}
              </h3>
              
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium max-w-[220px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
