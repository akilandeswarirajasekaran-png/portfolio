import React from 'react';
import { Code, Mail, Linkedin, Github, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer id="main-footer" className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-bold text-base tracking-tight text-white">
                {personal.name}
              </p>
              <p className="text-xs text-slate-400">{personal.role}</p>
            </div>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#preferred" className="hover:text-white transition-colors">Preferred</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a
              href={personal.portfolioUrl || "https://ais-pre-x6e4cqg5zxpvk6w62rvoh4-824269579722.asia-east1.run.app"}
              target="_blank"
              rel="noreferrer"
              id="footer-portfolio-link"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              id="footer-email"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              id="footer-linkedin"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              id="footer-github"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AKILANDESWARI R. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with modern React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
