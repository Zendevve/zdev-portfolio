import React from 'react';
import { PROFILE } from '../constants';
import { Terminal, Cpu, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center border-b border-zinc-800 p-6 md:p-12 lg:p-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 blur-[100px] pointer-events-none" />

      <div className="space-y-6 max-w-4xl z-10">
        <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm tracking-widest">
          <span className="w-2 h-2 bg-emerald-500 animate-pulse" />
          SYSTEM_ONLINE :: {PROFILE.username.toUpperCase()}
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-100 tracking-tighter leading-[0.85] font-sans">
          ZEN<br/>
          DEVVE<span className="text-emerald-500">.</span>
        </h1>

        <div className="h-px w-24 bg-zinc-700 my-8" />

        <p className="text-xl md:text-2xl font-mono text-zinc-400 max-w-2xl leading-relaxed">
          {PROFILE.motto}
        </p>

        <div className="flex flex-wrap gap-8 pt-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Cpu size={16} />
            <span>Systems Engineering</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers size={16} />
            <span>Modern Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={16} />
            <span>Embedded Scripting</span>
          </div>
        </div>
      </div>
    </section>
  );
};
