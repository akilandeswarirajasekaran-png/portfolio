import React from 'react';
import { Award, FileText, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-20 bg-[#f7f9fb] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Achievements
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Academic achievements, paper presentations, and research interests.
          </p>
        </div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 ambient-shadow-hover transition-all relative overflow-hidden group"
            >
              {/* Top Accent Icon & Badge */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                  <Award className="w-7 h-7" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Academic Achievement</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>

              {/* Subtitle / Institution */}
              {item.subtitle && (
                <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-semibold text-slate-700">{item.subtitle}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-100 mb-6">
                {item.description}
              </p>

              {/* Highlights & Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7f9fb] border border-slate-200/70 text-xs font-medium text-slate-700">
                  <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Presented at Holy Cross College</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7f9fb] border border-slate-200/70 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>AI & Healthcare Applications Focus</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
