import React from 'react';
import { motion } from 'motion/react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "We Identify",
      desc: "We source distressed or high-growth properties, renovate them, and sell for a profit.",
      icon: "fa-magnifying-glass"
    },
    {
      num: "02",
      title: "Reinvest",
      desc: "We create, partner, and grow local Muslim owned business that are needed within the community.",
      icon: "fa-building-columns"
    },
    {
      num: "03",
      title: "Non-Profit Deployment",
      desc: "Profits from investments sustain Masjid, local non-profits, and community development programs.",
      icon: "fa-hand-holding-dollar"
    },
    {
      num: "04",
      title: "We Create Lasting Impact",
      desc: "Our investors earn returns while creating a continuous cycle of Sadaqah Jariyah.",
      icon: "fa-users"
    }
  ];

  return (
    <section className="relative w-full bg-[var(--color-mizan-dark)] py-24 overflow-hidden border-t border-black/10">
      <div className="max-w-[84rem] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl sm:text-5xl font-serif font-bold leading-tight mb-4"
          >
            How It All Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-sm sm:text-base font-medium"
          >
            A better way to invest
          </motion.p>
        </div>

        <div className="relative">
          {/* Dashed connector line (Desktop only) */}
          <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] border-t-[1.5px] border-dashed border-white/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center relative group cursor-default"
              >
                {/* Arrowhead placed on the dashed line for each step except the last */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[41px] -right-[9px] text-white/30 text-xs bg-[var(--color-mizan-dark)] px-1 z-10 transition-colors duration-300">
                    <i className="fa-solid fa-play text-[10px]"></i>
                  </div>
                )}

                <div className="w-24 h-24 mb-8 rounded-[24px] border border-[var(--color-mizan-gold)]/50 bg-[var(--color-mizan-dark)] flex items-center justify-center shadow-lg relative z-20 group-hover:-translate-y-2 group-hover:border-[var(--color-mizan-gold)] group-hover:shadow-[0_10px_20px_rgba(182,143,64,0.15)] transition-all duration-300">
                  <i className={`fa-solid ${step.icon} text-3xl text-white group-hover:text-[var(--color-mizan-gold)] transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-white font-bold text-base md:text-lg mb-4 flex items-center justify-center gap-2">
                  <span className="text-[var(--color-mizan-gold)] text-sm">{step.num}</span>
                  {step.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed max-w-[240px] mx-auto font-medium">
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
