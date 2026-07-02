import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

const faqs = [
  {
    question: "What is xFund and how does it work?",
    answer: "xFund is a community-driven investment platform focused on generating Halal returns through real estate and reinvesting in local Muslim-owned businesses. We pool community resources to build self-sustaining economic infrastructure."
  },
  {
    question: "How is this different from a traditional investment fund?",
    answer: "Unlike traditional funds, xFund is 100% Halal and free from Riba (interest). Furthermore, a portion of all profits generated is directed towards Sadaqah Jariyah—continuous charity that benefits the community by funding local businesses and infrastructure."
  },
  {
    question: "What is the minimum investment required?",
    answer: "We aim to make investing accessible to our community. You can start investing with as little as $1,000, allowing everyone to participate in our collective growth and benefit from the returns."
  },
  {
    question: "Are the investments guaranteed?",
    answer: "As with all legitimate investments, there is inherent risk, and returns are not guaranteed. However, our board relies on deep market research and a proven track record in real estate to maximize returns while adhering strictly to Islamic financial principles."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F5F5F5] px-6 py-24 border-y border-gray-200 overflow-hidden">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-1 lg:sticky lg:top-28">
          <p className="text-black/60 text-sm mb-3 uppercase tracking-widest font-semibold">Support & Info</p>
          <div className="mb-6">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 22,
              }}
              containerClassName="text-black text-4xl md:text-5xl font-medium leading-tight tracking-tight"
            >
              {"Frequently Asked Questions"}
            </VerticalCutReveal>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-black/70 text-lg leading-relaxed mb-8"
          >
            Find answers to common questions about our investment structure, compliance, and community vision.
          </motion.p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-xl font-medium text-black pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-black text-white' : 'bg-[#F5F5F5] text-black'}`}>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 text-sm ${isOpen ? 'rotate-180' : ''}`}></i>
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
                      <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
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
