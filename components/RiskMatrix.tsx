
import React from 'react';
import { COLORS } from '../constants';

const RiskMatrix: React.FC = () => {
  const getCellColor = (l: number, i: number) => {
    const score = l * i;
    if (score >= 31) return COLORS.riskLevels.CRITICAL;
    if (score >= 25) return COLORS.riskLevels.VERY_HIGH;
    if (score >= 16) return COLORS.riskLevels.HIGH;
    if (score >= 9) return COLORS.riskLevels.MEDIUM;
    if (score >= 4) return COLORS.riskLevels.LOW;
    return COLORS.riskLevels.VERY_LOW;
  };

  return (
    <div className="bg-[#161618] p-6 rounded-2xl border border-[#2a2a2c] h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">6x6 Risk Heatmap</h3>
        <span className="text-xs text-slate-400">Likelihood vs Impact</span>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {/* Y Axis Label (Impact) */}
        <div className="col-span-1 flex flex-col justify-between py-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest h-[240px]">
          <span>6 (C)</span>
          <span>5 (S)</span>
          <span>4 (M)</span>
          <span>3 (Mi)</span>
          <span>2 (Lo)</span>
          <span>1 (N)</span>
        </div>

        {/* Matrix Grid */}
        <div className="col-span-6 grid grid-cols-6 grid-rows-6 gap-1 h-[240px]">
          {Array.from({ length: 36 }).map((_, idx) => {
            const row = 6 - Math.floor(idx / 6);
            const col = (idx % 6) + 1;
            return (
              <div 
                key={idx}
                className="rounded-sm flex items-center justify-center text-[10px] font-bold text-black/50 hover:scale-110 transition-transform cursor-pointer"
                style={{ backgroundColor: getCellColor(col, row) }}
              >
                {col * row}
              </div>
            );
          })}
        </div>

        {/* X Axis Label (Likelihood) */}
        <div className="col-start-2 col-span-6 flex justify-between px-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-600" />
          <span className="text-xs text-slate-400">High Risk Threshold (>= 16)</span>
        </div>
      </div>
    </div>
  );
};

export default RiskMatrix;
