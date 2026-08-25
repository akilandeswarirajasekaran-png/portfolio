import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Academic initiatives, AI applications, and interactive web projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-[#f7f9fb] rounded-2xl overflow-hidden border border-slate-200/80 ambient-shadow-hover flex flex-col group transition-all"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {project.subtitle && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-indigo-700 shadow-xs border border-white/60">
                    {project.subtitle}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                    <a
                      href={project.githubUrl || PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-link-${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>

                    <a
                      href={project.liveUrl === '#' ? `#contact` : project.liveUrl}
                      id={`project-view-link-${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
