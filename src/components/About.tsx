import React from 'react';
import { GraduationCap, Code2, Palette, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, highlights } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-indigo-600" />,
    Code: <Code2 className="w-6 h-6 text-indigo-600" />,
    Palette: <Palette className="w-6 h-6 text-indigo-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-indigo-600" />,
  };

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {personal.aboutBio}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              id={`about-highlight-${idx}`}
              className="p-6 rounded-2xl bg-[#f7f9fb] border border-slate-200/70 hover:border-indigo-200 hover:bg-indigo-50/20 ambient-shadow-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-50 transition-all shadow-xs">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-indigo-600" />}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
