import React from 'react';
import { Layout, Palette, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Preferred: React.FC = () => {
  const { preferred } = PORTFOLIO_DATA;

  return (
    <section id="preferred" className="py-20 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Preferred
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Primary focus domains and career specializations.
          </p>
        </div>

        {/* Preferred Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {preferred.map((item, idx) => (
            <div
              key={idx}
              id={`preferred-card-${idx}`}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 ambient-shadow-hover transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                  {item.title.toLowerCase().includes('front') ? (
                    <Layout className="w-7 h-7" />
                  ) : (
                    <Palette className="w-7 h-7" />
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                <span>Domain Focus</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
