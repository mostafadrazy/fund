import React from 'react';
import { motion } from 'motion/react';

const LogoIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-8 h-8">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32-11.32l56-56A8,8,0,0,1,173.66,98.34Z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white px-6 pt-24 pb-12 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 text-black mb-6">
              <LogoIcon />
              <span className="text-3xl font-medium tracking-tight">xFund</span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xs">
              Islamic impact investing redefined. Grow your wealth free from Riba, while building self-sustaining communities.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-black font-medium mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#vision" className="text-gray-500 hover:text-black transition-colors duration-200">Our Vision</a></li>
              <li><a href="#real-estate" className="text-gray-500 hover:text-black transition-colors duration-200">Real Estate</a></li>
              <li><a href="#calculator" className="text-gray-500 hover:text-black transition-colors duration-200">Calculator</a></li>
              <li><a href="#community-fund" className="text-gray-500 hover:text-black transition-colors duration-200">Community Fund</a></li>
              <li><a href="#road-map" className="text-gray-500 hover:text-black transition-colors duration-200">Road Map</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-black font-medium mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors duration-200">Disclaimer</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-black font-medium mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Subscribe to get the latest updates on our community investments.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#F5F5F5] border border-transparent focus:border-black focus:bg-white px-5 py-3 rounded-xl outline-none transition-all duration-300 text-black w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-black text-white font-medium px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} xFund. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <i className="fa-solid fa-heart text-black"></i> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
