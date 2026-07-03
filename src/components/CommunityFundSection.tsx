import React from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

export default function CommunityFundSection() {
  return (
    <section id="community-fund" className="bg-[#F5F5F5] px-6 py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1 rounded-3xl overflow-hidden aspect-square bg-gray-200 relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
          >
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Community" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20"></div>
          </motion.div>
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.02}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 22,
                }}
                containerClassName="text-black text-4xl md:text-6xl font-medium leading-tight tracking-tight"
              >
                {"The Community Fund"}
              </VerticalCutReveal>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-6 text-gray-700 text-xl leading-relaxed"
            >
              <p>
                Throughout the US we lack Islamic community infrastructure that allows us to truly practice our religion without limited options or religious dilemmas.
              </p>
              <p>
                We are building a fund that aims to invest and create avenues that free the community from Riba, breaking free from limited Halal options, and ending the forced choice between convenience and supporting Zionist stores.
              </p>
              <p className="font-semibold text-mizan-green text-2xl mt-4">
                Our vision is self-sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
