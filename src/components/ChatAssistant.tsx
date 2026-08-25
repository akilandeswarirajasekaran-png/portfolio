import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RotateCcw,
  Minus
} from 'lucide-react';
import { ChatMessage } from '../types';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: `Hello! I am the portfolio assistant for AKILANDESWARI R. How can I help you learn about her profile, education, skills, projects, preferred areas, or contact details today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const suggestedQuestions = [
    "What is your name?",
    "Tell me about yourself",
    "What are your skills?",
    "What projects have you built?",
    "What is your education?",
    "What is your age?",
    "How can I contact you?"
  ];

  const getExactLocalResponse = (query: string): string => {
    const q = query.trim().toLowerCase();

    // 1. Age Rule
    if (q.includes('age') || q.includes('how old') || q.includes('birth date') || q.includes('birthday') || q.includes('born')) {
      return "I am 21 years old.";
    }

    // 2. Name Rule
    if (q.includes('name') || q.includes('who are you') || q.includes('who is this')) {
      return "My name is AKILANDESWARI R. I am an MCA Graduate & Aspiring Software Developer.";
    }

    // 3. About Me / Tell me about yourself
    if (q.includes('about') || q.includes('tell me about yourself') || q.includes('introduce') || q.includes('bio') || q.includes('background')) {
      return "I am AKILANDESWARI R, a recent Master of Computer Applications (MCA) graduate from Holy Cross College, Tiruchirappalli. I have a strong foundation in software development principles and a passion for crafting elegant, efficient code. My goal is to contribute to innovative projects and create user-friendly digital experiences.";
    }

    // 4. Skills
    if (q.includes('skill') || q.includes('stack') || q.includes('technolog') || q.includes('languages') || q.includes('tools') || q.includes('aptitude')) {
      return "My skills are:\n• HTML\n• C\n• C++\n• Java\n• Python\n• UI/UX Design\n• Full Stack Development\n• SQL\n• Aptitude – Basic Knowledge";
    }

    // 5. Preferred
    if (q.includes('prefer') || q.includes('interest') || q.includes('domain') || q.includes('area')) {
      return "My preferred area is:\n• Front-End Development";
    }

    // 6. Education
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('study') || q.includes('qualification') || q.includes('mca') || q.includes('bsc') || q.includes('cgpa')) {
      return "My education background:\n• Master of Computer Applications (MCA) — Holy Cross College, Tiruchirappalli (CGPA: 8.26)\n• Bachelor of Science (B.Sc.) in Mathematics — Holy Cross College, Tiruchirappalli (CGPA: 7.33)";
    }

    // 7. Internships
    if (q.includes('intern') || q.includes('t4teq') || q.includes('hcc incubation') || q.includes('practical exposure')) {
      return "My Internships:\n\n1. HCC Incubation and Innovation Center – Holy Cross College\n• Area: IoT and Sensor Technology\n• Gained practical exposure to IoT concepts and sensor technology.\n\n2. T4teq\n• Areas: Python, Power BI, and Advanced Excel\n• Gained practical exposure to Python programming, data analysis, data visualization using Power BI, and Advanced Excel.";
    }

    // 8. Achievements / Paper Presentation
    if (q.includes('achievement') || q.includes('paper') || q.includes('presentation') || q.includes('healthcare') || q.includes('award')) {
      return "My Academic Achievements:\n\n• Paper Presentation – AI in Healthcare:\nPresented a paper on “AI in Healthcare” at Holy Cross College. Highlighted as an academic achievement reflecting an active interest in Artificial Intelligence and healthcare applications.";
    }

    // 9. Projects
    if (q.includes('project') || q.includes('operation research') || q.includes('placement') || q.includes('portfolio') || q.includes('work')) {
      if (q.includes('operation research')) {
        return "Operation Research (UG Project):\n\"An academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making.\"";
      }
      if (q.includes('placement') || q.includes('ai training')) {
        return "AI Training Placement App:\n\"An AI-based placement training application designed to help students prepare for placement opportunities through training and practice. The application focuses on improving students' technical and placement-related skills.\"";
      }
      if (q.includes('portfolio') && !q.includes('projects')) {
        return "Personal Portfolio:\n\"A personal portfolio website created to showcase my education, technical skills, projects, interests, and professional profile in a clean and user-friendly interface.\"";
      }
      return "Here are my projects:\n\n1. Operation Research (UG Project):\n\"An academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making.\"\n\n2. AI Training Placement App:\n\"An AI-based placement training application designed to help students prepare for placement opportunities through training and practice. The application focuses on improving students' technical and placement-related skills.\"\n\n3. Personal Portfolio:\n\"A personal portfolio website created to showcase my education, technical skills, projects, interests, and professional profile in a clean and user-friendly interface.\"";
    }

    // 10. Contact details
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('linkedin') || q.includes('github') || q.includes('phone') || q.includes('hire')) {
      return "You can reach out to me via:\n• Email: akilandeswarirajasekaran@gmail.com\n• LinkedIn: https://www.linkedin.com/in/akilandeswari-rajasekaran-r\n• GitHub: https://github.com/akilandeswarirajasekaran-png";
    }

    // 11. Resume
    if (q.includes('resume') || q.includes('cv')) {
      return "You can download my full resume directly using the 'Resume' button in the navigation bar of this portfolio.";
    }

    // 12. Experience
    if (q.includes('experience') || q.includes('company')) {
      return "My portfolio highlights my internships at HCC Incubation and Innovation Center (IoT & Sensor Technology) and T4teq (Python, Power BI, Advanced Excel), academic projects (Operation Research, AI Training Placement App, and Personal Portfolio), and degrees in MCA (CGPA 8.26) and B.Sc. Mathematics (CGPA 7.33).";
    }

    // 11. Default polite response for unrelated or unknown questions
    return "I am the portfolio assistant. I can answer questions about my profile, education, skills, projects, preferred areas, experience and contact details.";
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call server endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });

      if (response.ok) {
        const data = await response.json();
        const replyText = data.reply || getExactLocalResponse(messageText);

        const botMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      // Fallback locally
      const fallbackReply = getExactLocalResponse(messageText);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: fallbackReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-msg-cleared',
        sender: 'assistant',
        text: `Hello! I am the portfolio assistant for AKILANDESWARI R. How can I help you learn about her profile, education, skills, projects, preferred areas, or contact details today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            id="chat-assistant-toggle-btn"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Chatbox Assistant"
          >
            <div className="relative">
              <Bot className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-indigo-600 rounded-full" />
            </div>
            <span className="font-semibold text-sm pr-1 hidden sm:inline-block">
              Ask Assistant
            </span>
          </button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          id="chatbox-assistant-window"
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[560px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Chat Header */}
          <div className="px-4 py-3.5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">
                  Portfolio Assistant
                </h4>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online • AKILANDESWARI R
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                id="chat-clear-history-btn"
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Clear conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                id="chat-close-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#f7f9fb]">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    isAssistant 
                      ? 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none' 
                      : 'bg-indigo-600 text-white rounded-tr-none font-medium'
                  }`}>
                    <div className="whitespace-pre-line break-words">
                      {msg.text}
                    </div>
                    <div className={`text-[10px] mt-1 text-right ${isAssistant ? 'text-slate-400' : 'text-indigo-200'}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Question Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                id={`chat-suggestion-chip-${idx}`}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-medium border border-slate-200/60 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input Box */}
          <form
            id="chat-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              id="chat-message-input"
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about skills, education, projects..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
            />
            <button
              type="submit"
              id="chat-send-btn"
              disabled={isLoading || !inputMessage.trim()}
              className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
