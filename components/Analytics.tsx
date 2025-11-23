import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis } from 'recharts';
import { SKILL_DATA } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Analytics: React.FC = () => {
  return (
    <section className="p-6 md:p-12 lg:p-24 border-b border-zinc-800 grid grid-cols-1 lg:grid-cols-2 gap-12" id="analytics">
      
      <div className="flex flex-col justify-center">
        <SectionHeader number="02" title="Architectural Versatility" />
        <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-8 max-w-md">
          Quantitative analysis of the codebase reveals a high degree of adaptability. 
          The portfolio demonstrates a "Volume vs. Visibility Paradox," mitigating low external engagement metrics with high-complexity architectural integrity.
        </p>
        
        <div className="space-y-6">
           <div className="bg-zinc-900/50 border border-zinc-800 p-4">
              <h4 className="text-xs uppercase tracking-widest text-emerald-500 mb-2">Primary Strategy</h4>
              <p className="text-zinc-300 text-sm font-mono">Qualitative Proof Substitution</p>
           </div>
           <div className="bg-zinc-900/50 border border-zinc-800 p-4">
              <h4 className="text-xs uppercase tracking-widest text-emerald-500 mb-2">Development Focus</h4>
              <p className="text-zinc-300 text-sm font-mono">Robust Internal Utilities & Systems Integration</p>
           </div>
        </div>
      </div>

      <div className="h-[400px] w-full bg-zinc-900/20 border border-zinc-800 flex items-center justify-center relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="w-full h-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_DATA}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                    name="Skill"
                    dataKey="A"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="#10b981"
                    fillOpacity={0.2}
                    isAnimationActive={true}
                />
            </RadarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
