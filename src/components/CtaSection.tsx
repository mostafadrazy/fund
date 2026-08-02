import React from 'react';
import { motion } from 'motion/react';

export default function CtaSection() {
  return (
    <section className="w-full flex flex-col md:flex-row bg-[#FAF9F6] relative border-t border-gray-200/50">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto min-h-[400px] relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1785698853/ChatGPT_Image_Aug_2_2026_08_27_26_PM_uj3a1t.png" 
          alt="Islamic Architecture Dome" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft gradient fade on the right edge to blend if needed, though split layout usually doesn't need it. Let's keep it clean. */}
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-16 lg:p-24 bg-[#FAF9F6]">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl w-full"
        >
          <span className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-4 block">
            READY TO MAKE AN IMPACT?
          </span>
          
          <h2 className="text-[var(--color-mizan-dark)] text-4xl sm:text-5xl font-serif font-bold leading-tight mb-6">
            Invest today. Create impact forever.
          </h2>
          
          <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed mb-10">
            Join a community of investors who believe wealth is a trust and impact is an obligation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#invest"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-mizan-dark)] text-white text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:bg-[#1a251c] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm shadow-sm"
            >
              <i className="fa-solid fa-arrow-trend-up"></i> Invest With Purpose
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-400 text-[var(--color-mizan-dark)] text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 rounded-sm"
            >
              <i className="fa-regular fa-calendar"></i> Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
