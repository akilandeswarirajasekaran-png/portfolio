import React from 'react';
import { X, Download, Mail, Linkedin, Github, GraduationCap, Code, Layers, FileText, CheckCircle2, Printer } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/downloadResume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, internships, skills, preferred, projects, achievements } = PORTFOLIO_DATA;

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadResumePdf();
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <h3 className="font-display font-bold text-slate-900 text-lg">
              Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              title="Print Resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              id="resume-download-pdf-btn"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-slate-800 bg-white">
          
          {/* Header Resume Info */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
            <h1 className="font-display text-3xl font-extrabold text-slate-900">
              {personal.name}
            </h1>
            <p className="text-base font-semibold text-indigo-600 mt-1 font-display">
              {personal.role}
            </p>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {personal.email}
              </span>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-indigo-600">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                LinkedIn
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-indigo-600">
                <Github className="w-3.5 h-3.5 text-slate-800" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personal.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Education
            </h4>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-[#f7f9fb] border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display font-bold text-sm text-slate-900">
                      {edu.degree}
                    </h5>
                    <span className="inline-block text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md self-start sm:self-auto">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Internships
            </h4>
            <div className="space-y-3">
              {internships.map((internship) => (
                <div key={internship.id} className="p-3.5 rounded-xl bg-[#f7f9fb] border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display font-bold text-sm text-slate-900">
                      {internship.organization}
                    </h5>
                    <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md self-start sm:self-auto">
                      Area: {internship.roleOrArea}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{internship.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
              Technical Skills & Aptitude
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium rounded-lg"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Preferred Areas */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
              Preferred Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {preferred.map((pref, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-semibold rounded-lg"
                >
                  {pref.title}
                </span>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Academic & Web Projects
            </h4>
            <div className="space-y-3.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[#f7f9fb] border border-slate-200/80">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="font-display font-bold text-sm text-slate-900">
                      {proj.title}
                    </h5>
                    {proj.subtitle && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                        {proj.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-display text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Academic Achievements
            </h4>
            <div className="space-y-3">
              {achievements.map((ach) => (
                <div key={ach.id} className="p-3.5 rounded-xl bg-[#f7f9fb] border border-slate-200/80">
                  <h5 className="font-display font-bold text-sm text-slate-900">
                    {ach.title}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
