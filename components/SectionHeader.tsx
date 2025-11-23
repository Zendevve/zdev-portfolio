import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <div className="flex items-baseline gap-4 mb-8 border-b border-zinc-800 pb-2">
      <span className="text-emerald-500 font-mono text-sm tracking-widest">
        //{number}
      </span>
      <h2 className="text-zinc-100 font-mono text-2xl uppercase tracking-tighter">
        {title}
      </h2>
    </div>
  );
};
