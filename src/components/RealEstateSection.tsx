import React from 'react';
import { motion } from 'motion/react';

export default function RealEstateSection() {
  const features = [
    {
      title: "SHARIA COMPLIANT",
      description: "All investments screened and approved by our Sharia Advisory Board.",
      icon: "fa-clipboard-check"
    },
    {
      title: "ASSET BACKED",
      description: "Every investment is backed by real, productive assets and cash flow.",
      icon: "fa-building-columns"
    },
    {
      title: "COMMUNITY FOCUSED",
      description: "Profits are reinvested into vital opportunities and strengthened communities.",
      icon: "fa-users"
    },
    {
      title: "TRANSPARENT REPORTING",
      description: "Clear, regular updates and full transparency with our investors.",
      icon: "fa-file-invoice"
    }
  ];

  return (
    <section className="relative z-20 -mt-24 md:-mt-32 max-w-[84rem] mx-auto px-6">
      <div className="bg-white rounded-[24px] shadow-2xl p-6 md:p-10 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08  }}
              className="flex flex-col items-center text-center p-6 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center text-[var(--color-mizan-dark)] transition-colors">
                <i className={`fa-solid ${feature.icon} text-4xl group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <h3 className="text-[var(--color-mizan-dark)] font-bold text-sm tracking-widest uppercase mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
