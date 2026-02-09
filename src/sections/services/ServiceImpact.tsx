"use client";

import { motion } from 'framer-motion';

type ImpactMetric = {
  label: string;
  before: number;
  after: number;
  unit: string;
};

export default function ServiceImpact({ data }: { data: ImpactMetric[] }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full bg-white border border-[#072C55]/10 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
          <h3 className="font-mono text-xs font-black uppercase tracking-widest text-[#072C55]/50">
              Impact_Simulation // Projected_Outcome
          </h3>
      </div>

      <div className="space-y-12">
        {data.map((metric, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-[#072C55] text-sm md:text-base">{metric.label}</span>
              <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-[#072C55]/40">PRE: {metric.before}{metric.unit}</span>
                  <span className="text-[#00FF94] font-bold">POST: {metric.after}{metric.unit}</span>
              </div>
            </div>

            {/* Bar Track */}
            <div className="h-3 w-full bg-[#F8F9FA] rounded-full overflow-hidden relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex justify-between px-1">
                    {[1,2,3,4,5,6,7,8,9].map(n => (
                        <div key={n} className="w-[1px] h-full bg-[#072C55]/5" />
                    ))}
                </div>

                {/* Before Bar (Ghost) */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.before}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-[#072C55]/20"
                />

                {/* After Bar (Active) */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.after}%` }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                    className="absolute top-0 left-0 h-full bg-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.5)]"
                />
            </div>
            
            {/* Callout */}
            <div className="mt-2 text-right">
                <span className="text-[10px] font-mono text-[#5210F8] font-bold tracking-widest">
                    DELTA: +{Math.round(((metric.after - metric.before)/metric.before) * 100)}%
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
