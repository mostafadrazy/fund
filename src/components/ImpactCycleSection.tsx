import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ImpactCycleSection() {
  const [activeStep, setActiveStep] = useState(1);

  const impactSteps = [
    { 
      icon: "fa-store", 
      title: "Invest In Community-Owned Businesses", 
      desc: "We identify and fund high-potential local businesses that serve the community.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-certificate", 
      title: "Expand Halal Opportunities", 
      desc: "Creating avenues for ethical wealth generation aligned with Islamic principles.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-landmark", 
      title: "Create Lasting Institutions", 
      desc: "Building enduring assets like community centers, clinics, and educational hubs.",
      image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-users", 
      title: "Impact Generations", 
      desc: "Ensuring that the benefits of today's investments empower tomorrow's leaders.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-hand-holding-heart", 
      title: "Reinvest For Greater Good", 
      desc: "A portion of returns is consistently funneled back into impactful projects.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
    },
    { 
      icon: "fa-chart-line", 
      title: "Strengthen Local Economies", 
      desc: "Fostering economic independence and resilience within our communities.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
  ];

  // Auto-slide every 4 seconds. Adding activeStep to deps resets the timer on manual click.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeStep]);

  // We want to render 7 cards (-3 to +3) relative to the active step for infinite looping
  const visibleIndices = [];
  for (let i = -3; i <= 3; i++) {
    visibleIndices.push(activeStep + i);
  }

  return (
    <section className="bg-[var(--color-mizan-dark)] py-24 relative overflow-hidden">
      <div className="max-w-[84rem] mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--color-mizan-gold)] text-xs font-bold tracking-widest uppercase mb-4 block"
          >
            The Virtuous Loop
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6"
          >
            Our Continuous Impact Cycle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white/70 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto"
          >
            See how our investments generate a self-sustaining cycle of wealth, growth, and community empowerment.
          </motion.p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative w-full py-12 flex justify-center items-center"
          style={{
            '--card-w': 'min(85vw, 400px)',
            '--gap': '1.5rem',
          } as any}
        >
          {/* Placeholder to give the absolute container proper height */}
          <div style={{ width: 'var(--card-w)', aspectRatio: '3/4' }} className="invisible pointer-events-none"></div>

          <AnimatePresence>
            {visibleIndices.map(absoluteIndex => {
              let realIndex = absoluteIndex % impactSteps.length;
              if (realIndex < 0) realIndex += impactSteps.length;
              const item = impactSteps[realIndex];
              const relativePosition = absoluteIndex - activeStep;
              const isActive = relativePosition === 0;

              const currentX = `calc(${relativePosition} * (var(--card-w) + var(--gap)))`;

              return (
                <motion.div 
                  key={absoluteIndex}
                  onClick={() => setActiveStep(absoluteIndex)}
                  initial={{ 
                    opacity: 0, 
                    x: currentX,
                    scale: 0.8 
                  }}
                  animate={{ 
                    x: currentX,
                    scale: isActive ? 1.05 : 0.9,
                    opacity: isActive ? 1 : Math.max(0, 0.5 - Math.abs(relativePosition) * 0.15),
                    zIndex: 10 - Math.abs(relativePosition)
                  }}
                  exit={{ 
                    opacity: 0,
                    scale: 0.8,
                    x: currentX
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute rounded-3xl overflow-hidden cursor-pointer shadow-xl group"
                  style={{ width: 'var(--card-w)', aspectRatio: '3/4' }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      transition={{ duration: 4, ease: "easeOut" }}
                      className="w-full h-full object-cover origin-center"
                    />
                  </div>
                  
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-[var(--color-mizan-dark)]/90 via-[var(--color-mizan-dark)]/50 to-transparent' : 'bg-black/60 group-hover:bg-black/40'}`}></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-[var(--color-mizan-dark)] mb-6 shadow-lg transition-colors duration-500 ${isActive ? 'bg-[var(--color-mizan-gold)]' : 'bg-white/80 backdrop-blur-sm text-gray-800'}`}>
                      <i className={`fa-solid ${item.icon} text-lg`}></i>
                    </div>
                    
                    <motion.h3 
                      layout
                      className="text-white text-2xl sm:text-3xl font-serif font-bold mb-4"
                    >
                      {item.title}
                    </motion.h3>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
