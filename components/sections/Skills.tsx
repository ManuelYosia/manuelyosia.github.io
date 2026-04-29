import React from 'react';
import { skillCategories } from '@/data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Technical Toolkit.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-8 rounded-2xl bg-surface-container-low ghost-border hover:border-primary/25 transition-all duration-300 group lume-glow-card">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary-container/15 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container/20 transition-all duration-300">
                <span className="material-symbols-outlined">{category.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{category.title}</h3>
              <p className="text-sm text-outline mb-5 font-light">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs uppercase tracking-wider text-on-surface-variant">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
