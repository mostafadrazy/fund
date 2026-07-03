import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';

export default function CalculatorSection() {
  const [amount, setAmount] = useState<number>(10000);
  const [term, setTerm] = useState<number>(5);

  const totalReturn = amount * Math.pow(1.12, term); // Assuming 12% annual return
  const profit = totalReturn - amount;
  const sadaqah = profit * 0.1; // 10% of profit to Sadaqah

  return (
    <section id="calculator" className="bg-[#F5F5F5] px-6 py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center mb-6"
          >
            <i className="fa-solid fa-calculator text-xl text-mizan-green"></i>
          </motion.div>
          
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
              containerClassName="text-black text-4xl md:text-5xl font-semibold leading-tight max-w-xl tracking-tight"
            >
              {"Investment Returns Calculator"}
            </VerticalCutReveal>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-lg leading-relaxed mb-8"
          >
            See how your wealth can grow over time while continuously funding community initiatives. 
            A portion of all generated returns is distributed as Sadaqah Jariyah.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between mb-3">
                <label className="font-semibold text-gray-700 text-sm uppercase tracking-wider">Initial Investment</label>
                <span className="font-bold text-mizan-green text-lg">${amount.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-mizan-green cursor-pointer h-2 bg-gray-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>$1,000</span>
                <span>$50,000</span>
                <span>$100,000</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between mb-3">
                <label className="font-semibold text-gray-700 text-sm uppercase tracking-wider">Term (Years)</label>
                <span className="font-bold text-mizan-green text-lg">{term} Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={term} 
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full accent-mizan-green cursor-pointer h-2 bg-gray-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-mizan-dark rounded-3xl p-10 md:p-12 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 shadow-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-9xl text-white pointer-events-none">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h3 className="text-sm font-semibold text-white/40 mb-8 uppercase tracking-widest">Projected Impact</h3>
          
          <div className="space-y-8 relative z-10">
            <div>
              <p className="text-white/60 mb-1 font-medium">Estimated Total Value</p>
              <motion.p 
                key={totalReturn}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-medium text-white tracking-tight"
              >
                ${Math.round(totalReturn).toLocaleString()}
              </motion.p>
            </div>
            
            <div className="h-px bg-white/10 w-full"></div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-white/60 mb-1 font-medium">Your Profit</p>
                <motion.p 
                  key={profit}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-medium text-white"
                >
                  +${Math.round(profit).toLocaleString()}
                </motion.p>
              </div>
              <div>
                <p className="text-white/60 mb-1 font-medium">Sadaqah Generated</p>
                <motion.p 
                  key={sadaqah}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-medium text-[#41c28c]"
                >
                  ${Math.round(sadaqah).toLocaleString()}
                </motion.p>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-10 bg-mizan-green text-white text-lg font-semibold py-4 rounded-xl hover:bg-mizan-green-hover transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md">
            Start Investing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
