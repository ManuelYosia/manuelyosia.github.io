import React from 'react';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Experience.</h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className={`exp-row ${exp.isCurrent ? 'active bg-surface-container-lowest' : 'bg-surface-container-low'} p-8 rounded-2xl pl-10 flex flex-col md:flex-row justify-between items-start gap-4 cursor-default`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                  {exp.isCurrent && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary border border-tertiary/25 font-semibold uppercase tracking-wider">Current</span>
                  )}
                </div>
                <p className="text-primary-container font-medium mb-3">{exp.company}</p>
                <p className="text-on-surface-variant font-light leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
              <span className="text-sm font-mono text-outline whitespace-nowrap mt-1">{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
