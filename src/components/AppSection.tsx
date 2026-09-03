import React from 'react';
import { motion } from 'motion/react';

export default function AppSection() {
  return (
    <section className="relative w-full bg-[#F7F6F2] overflow-hidden py-16 lg:py-24 flex items-end lg:items-center border-t border-black/5">
      {/* Desktop Background Image: fit to section with object-contain, no zoom, uncropped */}
      <div className="hidden lg:flex absolute inset-0 w-full h-full pointer-events-none items-end justify-end overflow-hidden">
        <div className="w-full h-full max-w-[96rem] mx-auto relative flex items-end justify-end pl-6 sm:pl-8 pr-0">
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1788389881/Woman_holding_phone_and_cards_202609022350-_1_k2oj3y.png" 
            alt="Mizan Capital iOS app preview" 
            className="w-full h-full object-contain object-right-bottom translate-x-20 lg:translate-x-40 xl:translate-x-56 2xl:translate-x-64"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[84rem] mx-auto px-6 sm:px-8 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[560px]"
        >
          <span className="inline-block text-[var(--color-mizan-gold)] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            COMMUNITY FOCUSED • COMING SOON
          </span>
          
          <h2 className="text-[var(--color-mizan-dark)] text-4xl sm:text-5xl font-serif font-bold leading-[1.12] mb-4">
            Our First Step Into Redirecting Community Capital
          </h2>
          
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mb-8 pr-4">
            A powerful platform that connects our community, supports local businesses, and creates sustainable funding—without asking for more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-[var(--color-mizan-dark)] text-white text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:bg-[#1a251c] hover:shadow-xl transition-colors duration-300 rounded-xl cursor-pointer"
            >
              <i className="fa-brands fa-apple text-2xl"></i>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] uppercase tracking-wider opacity-80 mb-1">Download on the</span>
                <span className="text-sm">App Store</span>
              </div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-[var(--color-mizan-dark)] hover:border-[var(--color-mizan-dark)] text-xs sm:text-sm font-bold tracking-wider px-8 py-4 hover:shadow-md transition-colors duration-300 rounded-xl cursor-pointer"
            >
              <i className="fa-brands fa-google-play text-xl"></i>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] uppercase tracking-wider opacity-80 mb-1">GET IT ON</span>
                <span className="text-sm">Google Play</span>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile / Tablet Image: fit cleanly below the text, completely uncropped and no zoom */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:hidden mt-8 w-full flex justify-center"
        >
          <img 
            src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1788389881/Woman_holding_phone_and_cards_202609022350-_1_k2oj3y.png" 
            alt="Mizan Capital iOS app preview" 
            className="w-full max-w-lg h-auto object-contain block translate-x-8 sm:translate-x-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
