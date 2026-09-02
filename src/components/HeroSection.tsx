import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} id="hero" className="relative w-full pt-40 pb-48 md:pt-48 md:pb-64 overflow-hidden bg-[var(--color-mizan-bg)]">
      {/* Background Image on Right */}
      <motion.div style={{ y }} className="absolute top-0 right-0 w-full md:w-[65%] h-[120%] -top-[10%] z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1788392384/ChatGPT_Image_Sep_3_2026_12_39_38_AM_pmf0ub.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-mizan-bg)] via-[var(--color-mizan-bg)]/70 to-transparent"></div>
        {/* Subtle white/beige overlay from bottom to blend if needed, but side gradient is main */}
      </motion.div>

      {/* Solid background on the left for text readability */}
      <div className="absolute top-0 left-0 w-full md:w-[45%] h-full bg-[var(--color-mizan-bg)] z-0 hidden md:block"></div>

      <div className="max-w-[84rem] mx-auto px-6 relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--color-mizan-dark)] text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6"
          >
            Islamic Impact<br />
            Investment Redefined
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1  }}
            className="text-gray-700 text-base md:text-lg font-medium leading-relaxed max-w-[540px] mb-10"
          >
            We use asset-backed real estate to secure your investments, channeling profits into local halal businesses and nonprofits. Generate strong returns while building a lifetime of Sadaqah Jariyah.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2  }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#calculator"
              className="w-full sm:w-auto bg-[var(--color-mizan-dark)] text-white text-sm font-bold tracking-wide px-8 py-4 rounded hover:bg-[#1a251c] hover:shadow-xl transition-colors duration-300 text-center"
            >
              Invest With Purpose
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#road-map"
              className="w-full sm:w-auto bg-transparent border border-gray-400 text-gray-700 text-sm font-bold tracking-wide px-6 py-4 rounded hover:bg-white hover:border-transparent hover:shadow-md transition-colors duration-300 text-center flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-circle-play text-gray-500"></i> Watch Our Approach
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3  }}
            className="mt-8 flex items-center gap-3 text-sm font-medium text-gray-700"
          >
            <i className="fa-solid fa-shield text-[var(--color-mizan-gold)] text-base"></i>
            <span>Shariah Compliant. Community Focused. Lasting Impact.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


