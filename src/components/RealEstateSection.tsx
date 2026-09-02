import React from 'react';
import { motion } from 'motion/react';

export default function RealEstateSection() {
  const features = [
    {
      title: "SHARIA COMPLIANT",
      description: "All investments screened and approved by our sharia Advisory Board.",
      icon: "fa-shield-halved"
    },
    {
      title: "ASSET BACKED",
      description: "All investments screened and approved by our sharia Advisory Board.",
      icon: "fa-building-columns"
    },
    {
      title: "COMMUNITY FOCUSED",
      description: "All investments screened and approved by our sharia Advisory Board.",
      icon: "fa-users"
    },
    {
      title: "TRANSPARENT REPORTING",
      description: "All investments screened and approved by our sharia Advisory Board.",
      icon: "fa-file-invoice"
    }
  ];

  return (
    <section className="relative w-full z-20 flex flex-col">
      
      {/* Dark Green Top Section - Cards straddle its top edge */}
      <div className="bg-[var(--color-mizan-dark)] w-full pb-20 md:pb-32">
        {/* Floating Cards */}
        <div className="max-w-[84rem] mx-auto px-6 sm:px-8 w-full -mt-32 md:-mt-36">
          <div className="bg-white rounded-[28px] shadow-2xl p-8 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1  }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="mb-4 text-[var(--color-mizan-dark)]">
                    <i className={`fa-solid ${feature.icon} text-[32px]`}></i>
                  </div>
                  <h3 className="text-[var(--color-mizan-dark)] font-bold text-xs tracking-wider uppercase mb-3 font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White Bottom Section - Real Assets. Real Returns */}
      <div className="w-full bg-white pt-24 pb-24 md:pt-32 md:pb-32 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-[var(--color-mizan-dark)] font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-sans">
            ASSET-BACKED SAFETY
          </span>
          
          <h2 className="text-[var(--color-mizan-dark)] text-4xl sm:text-5xl font-serif font-bold leading-tight mb-8">
            Real Assets. Real Returns
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12 max-w-2xl font-medium">
            Every dollar is anchored in real physical collateral. We source distressed or high-growth properties, renovate them, and sell for a profit that is split between your Deen & Dunyah.
          </p>

          <div className="flex flex-col items-start gap-5 text-left w-full max-w-[460px] mx-auto">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-check text-[var(--color-mizan-gold)] text-sm"></i>
              <span className="text-[var(--color-mizan-dark)] font-semibold text-sm">Targeted 45% net annualized returns</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-check text-[var(--color-mizan-gold)] text-sm"></i>
              <span className="text-[var(--color-mizan-dark)] font-semibold text-sm">All profit is compounded and donated into the community</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-check text-[var(--color-mizan-gold)] text-sm"></i>
              <span className="text-[var(--color-mizan-dark)] font-semibold text-sm">Historically $1.45 of collateral for every dollar invested</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
