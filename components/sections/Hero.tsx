import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 max-w-7xl mx-auto lume-glow-hero overflow-hidden">
      {/* Decorative bg circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="space-y-8 max-w-4xl relative z-10">
        {/* Status badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest/50 ghost-border">
          <span className="w-2 h-2 rounded-full bg-primary-container pulse-dot"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Available for new opportunities</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] text-on-surface">
          {siteConfig.name}.<br />
          <span className="gradient-text">{siteConfig.role}</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up delay-200 text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
          Designing and engineering high-performance digital experiences with a focus on clean architecture and technical elegance.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-wrap gap-4 pt-2">
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
            <span className="material-symbols-outlined text-lg">folder_open</span>
            View Projects
          </a>
          <a href="#contact" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
            <span className="material-symbols-outlined text-lg">alternate_email</span>
            Contact Me
          </a>
          <a href="#" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
            <span className="material-symbols-outlined text-lg">download</span>
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up delay-500 flex items-center gap-3 pt-6">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-outline-variant"></div>
          <span className="text-xs uppercase tracking-widest text-outline font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
