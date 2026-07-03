import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 15 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 18,
        delay: 0.6
      } 
    }
  };

  return (
    <section id="vision" className="relative w-full min-h-screen flex-1 flex flex-col overflow-hidden group bg-white">
      <img 
        alt="Hero Background"
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
        src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1783027206/ChatGPT_Image_Jul_2_2026_10_19_54_PM_pedcje.png"
      />
      
      {/* Elegant white gradient overlay from left to right, fading quickly to let the image shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-white/5 mix-blend-overlay z-0"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[88rem] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center py-16 pt-32 md:pt-40"
      >
        <div className="flex flex-col items-start max-w-3xl">
          <div className="mb-6 flex flex-col gap-1 md:gap-2">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.012}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              containerClassName="text-mizan-dark text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none tracking-tight"
              wordLevelClassName="pb-1"
            >
              {"Islamic Impact"}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.012}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
                delay: 0.15
              }}
              containerClassName="text-mizan-green text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none tracking-tight"
              wordLevelClassName="pb-1"
            >
              {"Investing Redefined"}
            </VerticalCutReveal>
          </div>
          
          <motion.p 
            variants={itemVariants} 
            className="text-gray-700/90 text-base sm:text-lg md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed font-medium"
          >
            Grow your wealth free from Riba. Invest in institutional real estate and community development funds designed to provide a lifetime of Sadaqah Jariyah.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 w-full">
            <motion.button 
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.03,
                y: -2,
                boxShadow: "0 12px 30px -10px rgba(7, 104, 65, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group/btn inline-flex items-center gap-4 bg-mizan-green text-white text-base md:text-lg font-semibold pl-8 pr-2.5 py-2.5 rounded-full transition-all duration-300 hover:bg-mizan-green-hover shadow-lg cursor-pointer shrink-0"
            >
              See Our Vision
              <span className="bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1">
                <i className="fa-solid fa-arrow-right text-mizan-green text-sm"></i>
              </span>
            </motion.button>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-mizan-green/10 text-mizan-green shrink-0">
                <i className="fa-solid fa-circle-check text-base"></i>
              </div>
              <div className="text-left">
                <div className="text-mizan-dark text-sm font-bold tracking-tight">1,200+ Active Members</div>
                <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1.5">
                  <span>Audited Shariah Compliance</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-mizan-green animate-pulse"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
