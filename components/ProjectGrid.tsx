import React from 'react';
import { PROJECTS } from '../constants';
import { SectionHeader } from './SectionHeader';
import { TechBadge } from './TechBadge';
import { ExternalLink, GitFork } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  return (
    <section className="p-6 md:p-12 lg:p-24 border-b border-zinc-800" id="projects">
      <SectionHeader number="01" title="Selected Works" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-800">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative border-r border-b border-zinc-800 p-8 min-h-[320px] hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-xs text-zinc-600 group-hover:text-emerald-500 transition-colors">
                  PRJ_{project.id}
                </span>
                {project.isFork && (
                  <GitFork size={16} className="text-zinc-600 group-hover:text-zinc-300" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">
                {project.name}
              </h3>
              
              <p className="font-mono text-sm text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
               {project.metrics && (
                <div className="pt-4 border-t border-zinc-800 border-dashed">
                    <p className="text-[10px] uppercase text-zinc-500 mb-1">Key Architectual Metric</p>
                    <p className="text-sm font-mono text-emerald-400">{project.metrics}</p>
                </div>
               )}

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>

            {/* Hover Indicator */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-emerald-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
