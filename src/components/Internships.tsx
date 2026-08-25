import React from 'react';
import { Briefcase, Cpu, BarChart3, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Internships: React.FC = () => {
  const { internships } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    'internship-hcc': <Cpu className="w-6 h-6 text-indigo-600" />,
    'internship-t4teq': <BarChart3 className="w-6 h-6 text-indigo-600" />,
  };

  return (
    <section id="internships" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Internships
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Hands-on technical internships and practical learning exposure.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((internship) => (
            <div
              key={internship.id}
              id={`internship-card-${internship.id}`}
              className="bg-[#f7f9fb] rounded-2xl p-8 border border-slate-200/80 ambient-shadow-hover transition-all relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-indigo-50 transition-all shadow-xs">
                    {iconMap[internship.id] || <Briefcase className="w-6 h-6 text-indigo-600" />}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
                    <span>Internship</span>
                  </div>
                </div>

                {/* Organization Name */}
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                  {internship.organization}
                </h3>

                {/* Area Tag */}
                <div className="flex items-center gap-2 text-slate-700 text-sm mb-4">
                  <span className="font-semibold text-slate-900">Area:</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-semibold text-indigo-700">
                    {internship.roleOrArea}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-200/70">
                  {internship.description}
                </p>
              </div>

              {/* Bottom key takeaway */}
              <div className="mt-6 pt-3 flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Practical Industry Exposure</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
