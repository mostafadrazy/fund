import React from 'react';
import { motion } from 'motion/react';

const LogoIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-7 h-7">
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-20 px-6 py-5"
    >
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-black hover:opacity-80 transition-opacity cursor-pointer">
          <LogoIcon />
          <span className="text-2xl font-medium tracking-tight">xFund</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Vision', 'Real Estate', 'Calculator', 'Community Fund', 'Road Map'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="relative text-base text-gray-700 hover:text-black font-medium transition-colors duration-200 group">
              {link}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md">
          Join the Fund
        </button>
      </div>
    </motion.nav>
  );
}

