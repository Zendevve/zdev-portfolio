import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'PROJECTS', href: '#projects' },
        { label: 'ANALYTICS', href: '#analytics' },
        { label: 'CONTACT', href: '#contact' }
    ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        <a href="#" className="font-bold text-xl tracking-tighter text-zinc-100 hover:text-emerald-500 transition-colors">
            ZDEV<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
                <a 
                    key={link.label}
                    href={link.href} 
                    className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors tracking-widest"
                >
                    {link.label}
                </a>
            ))}
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-zinc-100 hover:text-emerald-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950 p-6 flex flex-col gap-4">
             {navLinks.map(link => (
                <a 
                    key={link.label}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-mono text-zinc-400 hover:text-emerald-400 transition-colors tracking-widest"
                >
                    {link.label}
                </a>
            ))}
          </div>
      )}
    </nav>
  );
};