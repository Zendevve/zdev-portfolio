import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { Analytics } from './components/Analytics';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="max-w-[1440px] mx-auto border-x border-zinc-800 shadow-2xl shadow-black">
        <Navigation />
        <main>
          <Hero />
          <ProjectGrid />
          <Analytics />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
