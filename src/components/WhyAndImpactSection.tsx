import React from 'react';
import { motion } from 'motion/react';

export default function WhyAndImpactSection() {
  const stats = [
    {
      icon: "fa-building-columns",
      value: "120+",
      title: "Properties Acquired",
      desc: "Income-generating assets across key locations."
    },
    {
      icon: "fa-users",
      value: "35+",
      title: "Businesses Supported",
      desc: "Local halal businesses growing and thriving."
    },
    {
      icon: "fa-heart",
      value: "25+",
      title: "Impact Projects",
      desc: "Education, healthcare, and social initiatives funded."
    },
    {
      icon: "fa-seedling",
      value: "10K+",
      title: "Lives Impacted",
      desc: "Creating opportunities that uplift communities."
    }
  ];

  return (
    <section className="bg-[var(--color-mizan-dark)] py-20 relative overflow-hidden border-t border-[var(--color-mizan-gold)]/20">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row items-stretch border-l border-white/10 xl:border-none">
          
          {/* Title Area (Left) */}
          <div className="w-full xl:w-1/5 pb-10 xl:pb-0 xl:pr-8 xl:border-r border-white/10 flex flex-col justify-center xl:pl-0 pl-6 border-l-4 xl:border-l-0 border-[var(--color-mizan-gold)]">
            <span className="text-[var(--color-mizan-gold)] text-[10px] font-bold tracking-widest uppercase mb-3 block">
              OUR IMPACT
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-serif font-bold leading-tight mb-4">
              Real Numbers.<br />Real Change.
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed">
              Every investment makes a difference. Together, we're building a better future.
            </p>
          </div>

          {/* Stats Area (Right) */}
          <div className="w-full xl:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1  }}
                className={`flex flex-col items-center text-center p-8 sm:p-10 group ${
                  idx !== stats.length - 1 ? 'lg:border-r border-white/10' : ''
                } ${
                  idx % 2 === 0 ? 'sm:border-r border-white/10 lg:border-r' : ''
                } border-b lg:border-b-0 border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-300`}
              >
                <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <i className={`fa-solid ${stat.icon} text-3xl text-[var(--color-mizan-gold)] group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-white text-4xl sm:text-5xl font-serif font-bold mb-3">
                  {stat.value}
                </h3>
                <h4 className="text-white font-bold text-sm tracking-wider mb-3">
                  {stat.title}
                </h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

