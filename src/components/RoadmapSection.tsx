import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const steps = [
  {
    title: "Foundation",
    desc: "Create Legal Structure & Proper Community Board Members.",
    icon: "fa-solid fa-building",
    colSpan: "md:col-span-1",
    delay: 0.1
  },
  {
    title: "Digital Infrastructure",
    desc: "Community Owned Business App - Locate Muslim Owned Business Near You.",
    icon: "fa-solid fa-mobile-screen",
    colSpan: "md:col-span-2",
    delay: 0.2
  },
  {
    title: "Network & Consulting",
    desc: "Business Owner Gatherings. Free consulting, in-depth help from other business owners.",
    icon: "fa-solid fa-users",
    colSpan: "md:col-span-2",
    delay: 0.3
  },
  {
    title: "Reinvestment",
    desc: "Donations & Profit From Real Estate Fund Used To Invest In Existing Community Business.",
    icon: "fa-solid fa-arrow-trend-up",
    colSpan: "md:col-span-1",
    delay: 0.4
  },
  {
    title: "First Launch",
    desc: "First 100% community owned business opened. 100% of the profit reinvested back into the community. (Restaurant, Grocery Store, Clothing Store)",
    icon: "fa-solid fa-store",
    colSpan: "md:col-span-3",
    delay: 0.5,
    highlight: true
  }
];

export default function RoadmapSection() {
  return (
    <section id="road-map" className="bg-[#F5F5F5] text-black px-6 py-24 pb-32 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <p className="text-black/60 text-sm mb-3 uppercase tracking-widest font-semibold">2026-2027 Vision</p>
            <div className="mb-6">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.02}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 22,
                }}
                containerClassName="text-4xl md:text-6xl font-medium leading-none tracking-tight"
              >
                {"The Road Map"}
              </VerticalCutReveal>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-black/70 text-lg leading-relaxed"
            >
              A clear, actionable path toward community independence, self-sustaining businesses, and infrastructure built on Islamic principles.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md"
          >
            Read Whitepaper
            <span className="bg-white rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center w-7 h-7">
              <i className="fa-solid fa-arrow-right text-black text-xs"></i>
            </span>
          </motion.button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110">
                    <i className={`${step.icon} text-lg text-black`}></i>
                  </div>

                  {/* Content Container */}
                  <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.03] transition-transform duration-700 group-hover:scale-150 group-hover:-rotate-12 pointer-events-none text-9xl">
                        <i className={step.icon}></i>
                      </div>
                      
                      <span className="text-black/20 text-5xl font-black tracking-tighter mb-4 block group-hover:text-black/30 transition-colors duration-300">
                        0{idx + 1}
                      </span>
                      <h3 className="text-2xl font-medium mb-3 text-black">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
