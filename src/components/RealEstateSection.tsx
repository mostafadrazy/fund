import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

export default function RealEstateSection() {
  return (
    <section id="real-estate" className="bg-[#F5F5F5] px-6 py-24 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <div className="mb-8">
              <VerticalCutReveal
                splitBy="lines"
                staggerDuration={0.1}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                }}
                containerClassName="text-black text-4xl md:text-6xl font-medium leading-none tracking-tight"
              >
                {"Where We Are:\nReal Estate."}
              </VerticalCutReveal>
            </div>
            <button className="group inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95">
              View Portfolio
              <span className="bg-white rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center w-7 h-7">
                <i className="fa-solid fa-arrow-right text-black text-xs"></i>
              </span>
            </button>
          </div>
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-black/70 text-2xl md:text-3xl leading-relaxed"
            >
              With real estate we were able to grow our initial investment of <strong className="text-black font-semibold">$50,000</strong> into a <strong className="text-black font-semibold">$1,300,000</strong> dollar portfolio in under 3 years. Compounding investments like this allow us to create community funds while providing a lifetime of <strong className="text-black font-semibold">Sadaqah Jariyah</strong> for that investor.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group col-span-1 lg:col-span-2 rounded-2xl overflow-hidden relative min-h-80 bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="text-white text-3xl font-semibold leading-snug mb-2" style={{ letterSpacing: '-0.02em' }}>Exponential Growth</h3>
              <p className="text-white/90 text-lg font-medium max-w-sm">From $50k to $1.3M in under 3 years through strategic, principled acquisitions.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-black rounded-2xl p-8 min-h-80 flex flex-col justify-between hover:-translate-y-1.5 hover:bg-zinc-900 transition-all duration-300 hover:shadow-xl cursor-default border border-white/5"
          >
            <div className="flex justify-between items-start">
              <span className="text-white/20 text-sm font-semibold tracking-widest uppercase">Pillar 01</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
                <i className="fa-solid fa-hand-holding-heart text-base"></i>
              </div>
            </div>
            <div>
              <h3 className="text-white text-3xl font-medium leading-tight mb-3">Sadaqah<br/>Jariyah</h3>
              <p className="text-white/60 text-base group-hover:text-white/80 transition-colors leading-relaxed">Continuous charity that benefits you in this life and the next through community reinvestment.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-black rounded-2xl p-8 min-h-80 flex flex-col justify-between hover:-translate-y-1.5 hover:bg-zinc-900 transition-all duration-300 hover:shadow-xl cursor-default border border-white/5"
          >
            <div className="flex justify-between items-start">
              <span className="text-white/20 text-sm font-semibold tracking-widest uppercase">Pillar 02</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
                <i className="fa-solid fa-star-and-crescent text-base"></i>
              </div>
            </div>
            <div>
              <h3 className="text-white text-3xl font-medium leading-tight mb-3">100%<br/>Halal</h3>
              <p className="text-white/60 text-base group-hover:text-white/80 transition-colors leading-relaxed">Free from Riba, fully compliant with Islamic principles and ethical investment guidelines.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
