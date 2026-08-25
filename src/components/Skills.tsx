import React from 'react';
import { 
  FileCode2, 
  Terminal, 
  Binary, 
  Coffee, 
  Code, 
  Palette, 
  Layers, 
  Database,
  Brain,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const skillIconMap: Record<string, React.ReactNode> = {
    'HTML': <FileCode2 className="w-5 h-5 text-orange-500" />,
    'C': <Terminal className="w-5 h-5 text-blue-600" />,
    'C++': <Binary className="w-5 h-5 text-indigo-600" />,
    'Java': <Coffee className="w-5 h-5 text-red-500" />,
    'Python': <Code className="w-5 h-5 text-yellow-600" />,
    'UI/UX Design': <Palette className="w-5 h-5 text-pink-500" />,
    'Full Stack Development': <Layers className="w-5 h-5 text-purple-600" />,
    'SQL': <Database className="w-5 h-5 text-emerald-600" />,
    'Aptitude – Basic Knowledge': <Brain className="w-5 h-5 text-teal-600" />,
  };

  return (
    <section id="skills" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Core technologies, programming languages, and design competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="p-5 rounded-2xl bg-[#f7f9fb] border border-slate-200/80 hover:border-indigo-300 hover:bg-white ambient-shadow-hover flex items-center gap-4 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                {skillIconMap[skill.name] || <CheckCircle2 className="w-5 h-5 text-indigo-600" />}
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Proficiency
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
