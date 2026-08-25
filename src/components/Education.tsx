import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Academic qualifications and university achievements.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              id={`education-card-${item.id}`}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 ambient-shadow-hover transition-all relative overflow-hidden group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.score}</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-2 leading-snug">
                {item.degree}
              </h3>

              <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-medium text-slate-700">{item.institution}</span>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {item.highlights[0]}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
