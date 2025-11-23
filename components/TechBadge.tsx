import React from 'react';

interface TechBadgeProps {
  label: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  return (
    <span className="inline-block px-2 py-1 text-[10px] font-mono border border-zinc-700 text-zinc-400 uppercase tracking-wider hover:bg-zinc-800 hover:text-emerald-400 transition-colors cursor-default">
      {label}
    </span>
  );
};
