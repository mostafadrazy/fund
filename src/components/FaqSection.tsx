import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is this different from a traditional investment fund?",
      answer: "Unlike traditional funds, Mizan Capital is 100% Halal and strictly free from Riba (interest). Furthermore, a portion of all profits generated is directed towards Sadaqah Jariyah—continuous charity that benefits the community by funding local businesses and social infrastructure."
    },
    {
      question: "Who oversees Shariah compliance?",
      answer: "Our operations are independently audited and certified by qualified Islamic finance scholars and Shariah boards. Every real estate deal and financial instrument is rigorously evaluated before acquisition to ensure full alignment with Islamic principles."
    },
    {
      question: "What is the minimum investment required?",
      answer: "We aim to make institutional-grade real estate accessible to our community. You can start investing with as little as $1,000, allowing everyday investors to participate in collective wealth creation."
    },
    {
      question: "How are profits calculated and distributed?",
      answer: "Profits generated from rental yields and property appreciations are calculated quarterly and distributed according to agreed-upon profit-sharing ratios (Mudarabah/Musharakah), with 10% automatically channeled to community growth projects."
    },
    {
      question: "Are the investments guaranteed?",
      answer: "In accordance with Islamic jurisprudence, investment returns cannot be guaranteed. However, our team relies on conservative underwriting, deep market research, and prime real estate assets to mitigate risks while maximizing ethical yields."
    }
  ];

  return (
    <section id="faq" className="bg-[var(--color-mizan-bg)] px-6 sm:px-8 md:px-12 py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[84rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-1 lg:sticky lg:top-28">
          <span className="text-[var(--color-mizan-gold)] text-xs font-bold uppercase tracking-widest block mb-4">
            Support & Compliance
          </span>
          <div className="mb-6">
            <h2 className="text-[var(--color-mizan-dark)] text-4xl md:text-5xl font-serif font-bold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2  }}
            className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 font-medium"
          >
            Find clear answers to common questions about our investment structure, Shariah compliance, and community distribution.
          </motion.p>
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[var(--color-mizan-card-bg)] p-6 rounded-2xl border border-black/5 shadow-sm flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-mizan-light-green)]/20 text-[var(--color-mizan-dark)] flex items-center justify-center font-bold text-sm border border-[var(--color-mizan-light-green)]/30">
                <i className="fa-solid fa-shield-halal"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--color-mizan-dark)]">Shariah Governance</h4>
                <p className="text-xs text-gray-500 font-medium">Audited & Approved Board</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              Have a specific question regarding Shariah compliance or deal underwriting?
            </p>
            <a 
              href="#vision" 
              className="text-xs font-bold text-[var(--color-mizan-dark)] flex items-center gap-1.5 hover:text-[var(--color-mizan-gold)] transition-colors pt-1"
            >
              Contact Shariah Advisory <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </motion.div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08  }}
                className={`rounded-[1.8rem] overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-[var(--color-mizan-card-bg)] border-[var(--color-mizan-dark)]/20 shadow-md' 
                    : 'bg-[var(--color-mizan-card-bg)] border-black/5 hover:border-black/10 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none cursor-pointer group"
                >
                  <span className={`text-lg sm:text-xl font-bold transition-colors ${isOpen ? 'text-[var(--color-mizan-dark)]' : 'text-gray-800 group-hover:text-[var(--color-mizan-dark)]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[var(--color-mizan-dark)] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[var(--color-mizan-light-green)]/30 group-hover:text-[var(--color-mizan-dark)]'}`}>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 text-xs ${isOpen ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-gray-600 text-base leading-relaxed pt-1 font-medium border-t border-gray-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
