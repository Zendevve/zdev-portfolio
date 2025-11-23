import React from 'react';
import { Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="p-6 md:p-12 border-b border-zinc-800 bg-zinc-950 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-zinc-500 font-mono text-xs">
        © {new Date().getFullYear()} ZENDEVVE. ALL RIGHTS RESERVED.
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="text-zinc-500 hover:text-emerald-500 transition-colors">
            <Github size={20} />
        </a>
        <a href="mailto:hello@example.com" className="text-zinc-500 hover:text-emerald-500 transition-colors">
            <Mail size={20} />
        </a>
      </div>
    </footer>
  );
};