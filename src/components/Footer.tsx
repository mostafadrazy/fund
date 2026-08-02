import React, { useState } from 'react';
import Logo from './ui/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[var(--color-mizan-dark)] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[84rem] mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#vision" className="inline-block mb-6">
              <Logo height={28} light={true} />
            </a>
            <p className="text-white/70 text-sm font-medium leading-relaxed max-w-xs mb-6">
              Building community wealth through 100% Shariah-compliant real estate investments and local business empowerment.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/5 px-3.5 py-2 rounded-full border border-[var(--color-mizan-gold)]/30 w-fit">
              <i className="fa-solid fa-certificate text-[var(--color-mizan-gold)]"></i> Shariah Audited & Certified
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3.5">
              <li><a href="#hero" className="text-white/70 hover:text-[var(--color-mizan-gold)] text-sm font-medium transition-colors">Home</a></li>
              <li><a href="#road-map" className="text-white/70 hover:text-[var(--color-mizan-gold)] text-sm font-medium transition-colors">Investment Process</a></li>
              <li><a href="#calculator" className="text-white/70 hover:text-[var(--color-mizan-gold)] text-sm font-medium transition-colors">Yield Calculator</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-[var(--color-mizan-gold)] text-sm font-medium transition-colors">Asset Portfolio</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-[var(--color-mizan-gold)] text-sm font-medium transition-colors">FAQ & Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Principles</h4>
            <ul className="space-y-3.5">
              <li><span className="text-white/60 text-sm font-medium">0% Riba (Interest)</span></li>
              <li><span className="text-white/60 text-sm font-medium">10% Sadaqah Reinvestment</span></li>
              <li><span className="text-white/60 text-sm font-medium">Mudarabah Equity Sharing</span></li>
              <li><span className="text-white/60 text-sm font-medium">Transparent Asset Audits</span></li>
              <li><span className="text-white/60 text-sm font-medium">Community Co-Ownership</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Stay Informed</h4>
            <p className="text-white/60 text-xs font-medium mb-4 leading-relaxed">
              Receive quarterly deal highlights, Shariah compliance reports, and community growth updates.
            </p>
            {subscribed ? (
              <div className="bg-white/5 border border-[var(--color-mizan-gold)]/30 text-white p-4 rounded-2xl text-xs font-bold flex items-center gap-2">
                <i className="fa-solid fa-check bg-[var(--color-mizan-gold)] text-white p-1 rounded-full text-[10px]"></i>
                Thank you! You are subscribed to updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center bg-white/5 rounded-full p-1.5 border border-white/10 focus-within:border-[var(--color-mizan-gold)]/50 transition-colors">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 bg-transparent border-none outline-none px-4 text-sm font-medium text-white placeholder-white/40"
                />
                <button type="submit" className="bg-[var(--color-mizan-gold)] text-[var(--color-mizan-dark)] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shrink-0">
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-white/40 text-xs font-semibold">
            &copy; 2026 Mizan Capital. All rights reserved. Built for Ethical & Halal Wealth.
          </p>
          <div className="flex items-center gap-6">
            <a href="#vision" className="text-white/40 hover:text-[var(--color-mizan-gold)] text-sm transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#vision" className="text-white/40 hover:text-[var(--color-mizan-gold)] text-sm transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#vision" className="text-white/40 hover:text-[var(--color-mizan-gold)] text-sm transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#vision" className="text-white/40 hover:text-[var(--color-mizan-gold)] text-sm transition-colors"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

