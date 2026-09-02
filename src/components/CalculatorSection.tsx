import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';

export default function CalculatorSection() {
  const [amount, setAmount] = useState(100000);
  const [horizonYears, setHorizonYears] = useState(5);

  const calculateGrowth = (principal: number, years: number) => {
    const data = [];
    
    for (let i = 0; i <= years; i++) {
      if (i === 0) {
        data.push({ 
          year: i, 
          yearLabel: `Year ${i}`,
          investmentGrowth: principal, 
          sadaqahJariyah: 0,
          totalReturn: principal 
        });
        continue;
      }
      
      // Based on the user's spreadsheet logic:
      // Investment Growth compounding at 12%
      const investmentGrowth = principal * Math.pow(1.12, i);
      // Sadaqah Jariyah represents the difference between a 30% compounding rate and the 12% rate
      const sadaqahJariyah = principal * (Math.pow(1.30, i) - Math.pow(1.12, i));
      
      data.push({
        year: i,
        yearLabel: `Year ${i}`,
        investmentGrowth: investmentGrowth,
        sadaqahJariyah: sadaqahJariyah,
        totalReturn: investmentGrowth + sadaqahJariyah
      });
    }
    return data;
  };

  const chartData = calculateGrowth(amount, horizonYears);
  const yearData = chartData[chartData.length - 1];

  const formatCurrency = (val: number) => {
    // If it's a whole number (or very close to one), don't show decimals
    const isWhole = Math.abs(Math.round(val) - val) < 0.001;
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      minimumFractionDigits: isWhole ? 0 : 2,
      maximumFractionDigits: isWhole ? 0 : 2 
    }).format(val);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const inv = payload.find((p: any) => p.dataKey === 'investmentGrowth')?.value || 0;
      const sad = payload.find((p: any) => p.dataKey === 'sadaqahJariyah')?.value || 0;
      const tot = inv + sad;

      return (
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-xs space-y-2 min-w-[200px]">
        <p className="font-bold text-gray-400 text-[10px] uppercase tracking-wider border-b border-gray-100 pb-2">{label}</p>
        <div className="flex justify-between items-center gap-4">
          <span className="flex items-center gap-1.5 text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--color-mizan-dark)]"></span>
            Investment (12%)
          </span>
          <span className="font-bold text-[var(--color-mizan-dark)]">{formatCurrency(inv)}</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="flex items-center gap-1.5 text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--color-mizan-gold)]"></span>
            Sadaqah (30%)
          </span>
          <span className="font-bold text-[var(--color-mizan-dark)]">{formatCurrency(sad)}</span>
        </div>
        <div className="flex justify-between items-center gap-4 border-t border-gray-100 pt-2 mt-1">
          <span className="font-bold text-gray-800">Total Value</span>
          <span className="font-bold text-[var(--color-mizan-dark)]">{formatCurrency(tot)}</span>
        </div>
      </div>
      );
    }
    return null;
  };

  return (
    <section id="calculator" className="bg-[#FAF9F6] px-6 sm:px-8 md:px-12 py-24 overflow-hidden border-t border-gray-200/50">
      <div className="max-w-[84rem] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-mizan-gold)] text-xs font-bold uppercase tracking-widest block mb-4">
            Wealth & Impact
          </span>
          <h2 className="text-[var(--color-mizan-dark)] text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-4">
            Your Deen & Dunyah Returns
          </h2>
          <p className="text-[var(--color-mizan-dark)]/80 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Interactive yield breakdown comparing 12% annual investment growth against a 30% cumulative Sadaqah Jariyah impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Controls & Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-[var(--color-mizan-dark)] p-8 sm:p-10 rounded-[2rem] border border-[var(--color-mizan-gold)]/20 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-8">
              {/* Amount Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-white/60 text-xs uppercase tracking-wider">
                    Initial Investment
                  </label>
                  <span className="font-bold text-white text-2xl">
                    {formatCurrency(amount)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="500000" 
                  step="10000"
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[var(--color-mizan-gold)] cursor-pointer h-1.5 bg-white/20 rounded-lg appearance-none"
                />
              </div>

              {/* Time Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-white/60 text-xs uppercase tracking-wider">
                    Time Horizon
                  </label>
                  <span className="font-bold text-white text-2xl">
                    {horizonYears} Years
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="1"
                  value={horizonYears} 
                  onChange={(e) => setHorizonYears(Number(e.target.value))}
                  className="w-full accent-[var(--color-mizan-gold)] cursor-pointer h-1.5 bg-white/20 rounded-lg appearance-none"
                />
              </div>
            </div>

            {/* Summary Box */}
            <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <span className="w-3 h-3 rounded-full bg-white/20 border border-white/40"></span> Growth (12%)
                </span>
                <span className="text-lg font-bold text-white">{formatCurrency(yearData?.investmentGrowth || 0)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <span className="w-3 h-3 rounded-full bg-[var(--color-mizan-gold)] shadow-[0_0_10px_rgba(182,143,64,0.5)]"></span> Sadaqah (30%)
                </span>
                <span className="text-lg font-bold text-white">{formatCurrency(yearData?.sadaqahJariyah || 0)}</span>
              </div>
              <div className="pt-6 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm font-bold text-white/60 uppercase tracking-wider">Total Created</span>
                <span className="text-3xl font-bold text-[var(--color-mizan-gold)]">{formatCurrency(yearData?.totalReturn || 0)}</span>
              </div>
            </div>

          </motion.div>

          {/* Right: Chart */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2  }}
            className="lg:col-span-8 bg-white p-6 sm:p-10 lg:p-12 rounded-[2rem] border border-gray-200 shadow-xl flex flex-col justify-center h-full min-h-[450px]"
          >
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-mizan-dark)" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="var(--color-mizan-dark)" stopOpacity={0.01}/>
                  </linearGradient>
                  <linearGradient id="colorSad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-mizan-gold)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-mizan-gold)" stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis 
                  dataKey="yearLabel" 
                  tickLine={false} 
                  axisLine={{ stroke: '#e5e7eb' }}
                  tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis 
                  tickFormatter={(value) => `$${value / 1000}k`}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--color-mizan-gold)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area 
                  type="monotone" 
                  dataKey="sadaqahJariyah" 
                  name="Sadaqah Jariyah" 
                  stackId="1" 
                  stroke="var(--color-mizan-gold)" 
                  fill="url(#colorSad)" 
                  strokeWidth={2}
                  activeDot={{ r: 6, fill: "var(--color-mizan-gold)", stroke: "#fff", strokeWidth: 2 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="investmentGrowth" 
                  name="Investment Growth" 
                  stackId="2" 
                  stroke="var(--color-mizan-dark)" 
                  fill="url(#colorInv)" 
                  strokeWidth={2}
                  activeDot={{ r: 6, fill: "var(--color-mizan-dark)", stroke: "#fff", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
