import React from 'react';
import { ArrowRight, Mail, Linkedin, Github, Sparkles, GraduationCap, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-[#f7f9fb]"
    >
      {/* Subtle background decorative shapes */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status / Role pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>MCA Graduate & Aspiring Software Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-indigo-600 font-extrabold">AKILANDESWARI</span> R
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 font-display">
                {personal.role}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personal.portfolioUrl || "https://ais-pre-x6e4cqg5zxpvk6w62rvoh4-824269579722.asia-east1.run.app"}
                target="_blank"
                rel="noreferrer"
                id="hero-view-portfolio-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md shadow-indigo-200 transition-all cursor-pointer group"
              >
                <span>View Portfolio</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 active:scale-95 border border-slate-200 shadow-sm transition-all cursor-pointer group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 active:scale-95 border border-slate-200 shadow-sm transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icon Quick Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
              <a
                href={`mailto:${personal.email}`}
                id="hero-social-email"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                title="Email AKILANDESWARI R"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Enhanced Circular Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle royal-blue and cyan ambient glow backdrop */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 blur-xl opacity-30 group-hover:opacity-50 transition duration-500 pointer-events-none" />

              {/* Royal-blue / cyan glassmorphism outer frame */}
              <div className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-tr from-blue-500/15 via-white/80 to-cyan-400/15 backdrop-blur-md border border-blue-300/40 shadow-2xl shadow-blue-900/10">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-slate-900 relative ring-4 ring-white shadow-inner">
                  <img
                    id="hero-profile-avatar"
                    src={personal.avatarUrl}
                    alt="AKILANDESWARI R"
                    className="w-full h-full object-cover object-[center_18%] brightness-[1.01] contrast-[1.03] transform group-hover:scale-105 transition-all duration-500 rounded-full select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle soft vignette overlay for studio depth */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-blue-500/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-bottom-2 sm:-right-2 p-2.5 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg flex items-center gap-3 whitespace-nowrap z-10">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Holy Cross College</p>
                  <p className="text-[11px] text-slate-500 font-medium">MCA • CGPA 8.26</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
