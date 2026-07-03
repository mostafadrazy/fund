import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Logo from './ui/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/80 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Elegant Logo Container with sleek spring transition and subtle bright shine */}
        <motion.a 
          href="#vision"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 cursor-pointer shrink-0 transition-all duration-300 hover:brightness-110"
        >
          <Logo height={34} light={false} />
        </motion.a>
        
        {/* Navigation Menu with elegant underlines */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {['Vision', 'Real Estate', 'Calculator', 'Community Fund', 'Road Map'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
              className="relative text-[15px] text-gray-700 hover:text-mizan-green font-medium tracking-wide transition-colors duration-300 group py-1.5"
            >
              {link}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-mizan-green transition-all duration-300 origin-center -translate-x-1/2 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* High-end premium button */}
        <button className="bg-mizan-green text-white text-sm sm:text-base font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-mizan-green-hover transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md shadow-mizan-green/10 shrink-0">
          Join the Fund
        </button>
      </div>
    </motion.nav>
  );
}



