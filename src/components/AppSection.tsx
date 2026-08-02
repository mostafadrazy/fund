import React from 'react';
import { motion } from 'motion/react';

export default function AppSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Immersive Background Image */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1785703387/Image_fades_to_white_202608022142_ywhhab.jpg" 
          alt="Muslim woman using Mizan Capital app in supermarket" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[84rem] mx-auto px-6 w-full py-24 flex flex-col justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl"
        >
          <span className="inline-block text-[var(--color-mizan-gold)] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6">
            COMMUNITY FOCUSED • COMING SOON
          </span>
          
          <h2 className="text-[var(--color-mizan-dark)] text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
            See Your Impact<br />In Everyday Life.
          </h2>
          
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-xl">
            Track your portfolio, discover local Halal businesses we support, and see your real-world impact—all from the palm of your hand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="inline-flex items-center justify-center gap-3 bg-[var(--color-mizan-dark)] text-white text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:bg-[#1a251c] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              <i className="fa-brands fa-apple text-2xl"></i>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] uppercase tracking-wider opacity-80 mb-1">Download on the</span>
                <span className="text-sm">App Store</span>
              </div>
            </button>
            
            <button 
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-[var(--color-mizan-dark)] hover:border-[var(--color-mizan-dark)] text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              <i className="fa-brands fa-google-play text-xl"></i>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] uppercase tracking-wider opacity-80 mb-1">GET IT ON</span>
                <span className="text-sm">Google Play</span>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
