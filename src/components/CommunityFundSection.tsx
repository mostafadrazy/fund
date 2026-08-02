import React from 'react';
import { motion } from 'motion/react';

export default function MissionSection() {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row bg-[var(--color-mizan-dark)] relative z-10 border-t border-gray-100">
      {/* Left Content - Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto min-h-[500px] relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop" 
          alt="Luxury Real Estate Estate" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Content - Text */}
      <div className="w-full md:w-1/2 flex items-center p-10 md:p-16 lg:p-24 bg-[var(--color-mizan-dark)]">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl w-full"
        >
          <span className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-6 block">
            OUR MISSION
          </span>
          
          <h2 className="text-white text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            Preserving wealth.<br />
            Creating opportunity.<br />
            Building legacy.
          </h2>
          
          <div className="w-12 h-[2px] bg-[var(--color-mizan-gold)] mb-8"></div>
          
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 font-medium">
            Real estate is the cornerstone of Mizan Capital's investment strategy. By acquiring distressed properties at below-market prices, we have been historically able to provide ~$1.45 of resale value for every $1 invested. Allowing us to provide high ~70% returns split amongst the investors Dunyah & Akriah.
          </p>
          
          <a 
            href="#about"
            className="inline-block bg-[var(--color-mizan-gold)] text-[var(--color-mizan-dark)] text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm shadow-md uppercase active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            About Mizan Capital
          </a>
        </motion.div>
      </div>
    </section>
  );
}

