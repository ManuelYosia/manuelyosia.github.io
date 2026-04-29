import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <div className="relative group order-2 md:order-1">
          <div className="absolute -inset-4 bg-primary/8 rounded-2xl blur-2xl group-hover:bg-primary/15 transition-all duration-700 pointer-events-none"></div>
          <div className="relative lume-glow-card rounded-2xl overflow-hidden ghost-border">
            {/* Placeholder portrait */}
            <div className="aspect-square bg-surface-container-lowest flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-container/20">
                <span className="material-symbols-outlined text-7xl text-primary-container/60">person</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest">Your Photo Here</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-8 order-1 md:order-2">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">The Architect</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Beyond the Code.</h2>
          </div>

          <p className="text-lg text-on-surface-variant leading-[1.75] font-light">
            {siteConfig.about.description1}
          </p>
          <p className="text-lg text-on-surface-variant leading-[1.75] font-light">
            {siteConfig.about.description2}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-surface-container-lowest stat-glow ghost-border">
                <div className="gradient-text font-black text-4xl">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-outline mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
