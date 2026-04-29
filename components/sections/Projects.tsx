import React from 'react';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-28 md:py-36 px-6 md:px-10 bg-surface-container-low/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Selected Works.</h2>
          </div>
          <a href="#" className="text-primary-container font-semibold flex items-center gap-2 group text-sm">
            Explore all projects
            <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform text-lg">arrow_forward</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group bg-surface-container rounded-2xl overflow-hidden ghost-border">
              <div className="aspect-video bg-surface-container-lowest relative overflow-hidden">
                {/* Placeholder project image */}
                <div className="w-full h-full flex items-center justify-center lume-glow-card">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-container/20 flex items-center justify-center border border-primary-container/20">
                      <span className="material-symbols-outlined text-3xl text-primary-container">{project.icon}</span>
                    </div>
                    <p className="text-xs text-outline uppercase tracking-widest">Project Screenshot</p>
                  </div>
                </div>
                {/* Live badge */}
                {project.isLive && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/15 border border-tertiary/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary pulse-dot"></span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-tertiary">Live</span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] px-2.5 py-1 bg-primary-container/15 text-primary-container rounded-lg border border-primary-container/20 font-semibold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                <p className="text-on-surface-variant font-light mb-6 leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-6">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors">
                      <span className="material-symbols-outlined text-base">code</span> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors">
                      <span className="material-symbols-outlined text-base">open_in_new</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
