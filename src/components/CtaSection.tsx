import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

export default function CtaSection() {
  return (
    <section className="bg-black text-white px-6 py-24 overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-white/5 blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>
      <div className="max-w-[88rem] mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="mb-8 max-w-3xl">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.06}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 22,
            }}
            containerClassName="text-4xl md:text-6xl font-medium leading-tight justify-center tracking-tight"
          >
            {"Ready to build our future together?"}
          </VerticalCutReveal>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/70 text-lg md:text-xl max-w-xl mb-10"
        >
          Join xFund today and become part of a community-driven movement redefining Islamic impact investing.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group inline-flex items-center gap-3 bg-white text-black text-lg font-medium px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
        >
          Start Your Journey
          <span className="bg-black rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center w-8 h-8">
            <i className="fa-solid fa-arrow-right text-white text-sm"></i>
          </span>
        </motion.button>
      </div>
    </section>
  );
}
