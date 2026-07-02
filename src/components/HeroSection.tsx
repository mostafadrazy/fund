import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="vision" className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full rounded-2xl overflow-hidden h-full max-w-[88rem] mx-auto group"
      >
        <img 
          alt="Hero Background"
          className="object-cover absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
          src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1782683410/ChatGPT_Image_Jun_28_2026_10_50_04_PM_uptbx1.png"
        />
        <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-32 md:pt-36"
        >
          <div className="mb-6">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.012}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              containerClassName="text-black text-5xl md:text-7xl font-semibold leading-tight max-w-3xl tracking-tight"
              wordLevelClassName="pb-1"
            >
              {"Islamic Impact\nInvesting Redefined"}
            </VerticalCutReveal>
          </div>
          <motion.p variants={itemVariants} className="text-black/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Grow your wealth free from Riba. Invest in real estate and community funds designed to provide a lifetime of Sadaqah Jariyah.
          </motion.p>
          <motion.button 
            variants={itemVariants}
            className="group/btn inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            See Our Vision
            <span className="bg-white rounded-full p-2 transition-transform duration-300 group-hover/btn:translate-x-1 flex items-center justify-center w-8 h-8">
              <i className="fa-solid fa-arrow-right text-black text-sm"></i>
            </span>
          </motion.button>
          
          <motion.div variants={itemVariants} className="mt-auto w-full max-w-2xl overflow-hidden pt-12">
            <p className="text-sm font-medium text-black/60 mb-4 uppercase tracking-wider">Investing With Principles</p>
            <div className="marquee-track">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="mx-7 shrink-0 text-black/70 font-serif font-bold tracking-tight text-lg">100% Halal</span>
                  <span className="mx-7 shrink-0 text-black/70 font-sans font-black tracking-widest text-sm uppercase">Community Owned</span>
                  <span className="mx-7 shrink-0 text-black/70 font-mono font-bold tracking-widest text-sm uppercase">Zero Riba</span>
                  <span className="mx-7 shrink-0 text-black/70 font-serif italic font-semibold tracking-wide text-lg">Sadaqah Jariyah</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
