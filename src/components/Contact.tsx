import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      let isSent = false;

      // Primary attempt: backend server endpoint
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            isSent = true;
          }
        }
      } catch (serverErr) {
        console.warn('Backend /api/contact unreachable or static deployment:', serverErr);
      }

      // Secondary fallback: Direct mail delivery service for static deployments (e.g., GitHub Pages)
      if (!isSent) {
        const fallbackRes = await fetch('https://formsubmit.co/ajax/akilandeswarirajasekaran@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            _replyto: trimmedEmail,
            _subject: `Portfolio Contact from ${trimmedName}`,
            message: trimmedMessage,
          }),
        });

        if (fallbackRes.ok) {
          isSent = true;
        } else {
          throw new Error('Failed to send message.');
        }
      }

      if (isSent) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            I'm currently looking for new opportunities as a software developer. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Methods & Direct URLs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 ambient-shadow">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      id="contact-email-link"
                      className="text-sm sm:text-base font-medium text-slate-900 hover:text-indigo-600 truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                    <button
                      type="button"
                      id="copy-email-btn"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 font-semibold mt-1 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied to clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      id="contact-linkedin-link"
                      className="text-sm sm:text-base font-medium text-slate-900 hover:text-indigo-600 truncate block transition-colors"
                    >
                      linkedin.com/in/akilandeswari-rajasekaran-r
                    </a>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</p>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noreferrer"
                      id="contact-github-link"
                      className="text-sm sm:text-base font-medium text-slate-900 hover:text-indigo-600 truncate block transition-colors"
                    >
                      github.com/akilandeswarirajasekaran-png
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 ambient-shadow">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div id="contact-success-message" className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-base">Message sent successfully!</p>
                  <p className="text-sm text-emerald-700">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-block mt-3 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div id="contact-error-message" className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f9fb] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={status === 'loading'}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f9fb] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      disabled={status === 'loading'}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hello AKILANDESWARI R, I would like to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f9fb] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all resize-none disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 shadow-sm transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send className={`w-4 h-4 ${status === 'loading' ? 'animate-spin' : ''}`} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
