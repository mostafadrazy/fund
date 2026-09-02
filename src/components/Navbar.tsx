import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './ui/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Process', href: '#road-map' },
    { label: 'Yield Calculator', href: '#calculator' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--color-mizan-bg)]/95 backdrop-blur-md py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-6'} px-4 sm:px-6 md:px-8`}>
      <nav className="max-w-[84rem] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#vision" className="flex items-center gap-3 cursor-pointer shrink-0 transition-opacity duration-300 hover:opacity-85">
          <Logo height={28} light={false} />
        </a>
        
        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="relative text-sm font-bold transition-colors uppercase tracking-wider text-[var(--color-mizan-dark)]/90 hover:text-[var(--color-mizan-gold)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-mizan-gold)] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex font-bold text-sm px-4 py-2 hover:text-[var(--color-mizan-gold)] transition-colors uppercase tracking-wider text-[var(--color-mizan-dark)]">
            Sign In
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex text-sm font-bold px-6 py-3 rounded transition-all duration-300 shadow-md cursor-pointer uppercase tracking-wider bg-[var(--color-mizan-dark)] text-white hover:bg-[var(--color-mizan-light-green)] hover:text-[var(--color-mizan-dark)]"
          >
            Invest Now
          </motion.button>

          {/* Mobile Hamburger menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden flex items-center justify-center rounded transition-colors focus:outline-none cursor-pointer text-[var(--color-mizan-dark)] hover:bg-black/5"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-lg' : 'fa-bars text-lg'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden mt-4 bg-[var(--color-mizan-card-bg)] border-t border-black/5 shadow-xl rounded-b-xl absolute left-0 right-0"
          >
            <div className="flex flex-col gap-2 p-4">
              {menuItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-mizan-dark)] hover:text-[var(--color-mizan-gold)] font-bold text-sm py-3 px-4 hover:bg-black/5 transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-black/5 my-2"></div>
              <button className="text-[var(--color-mizan-dark)] font-bold text-sm py-3 px-4 text-left hover:bg-black/5 uppercase tracking-wider">
                Sign In
              </button>
              <button className="bg-[var(--color-mizan-dark)] text-white text-sm font-bold py-3 px-4 rounded hover:bg-[var(--color-mizan-light-green)] hover:text-[var(--color-mizan-dark)] transition-colors mt-2 text-center uppercase tracking-wider">
                Invest Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



