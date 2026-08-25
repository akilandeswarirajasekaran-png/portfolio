import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const PORTFOLIO_KNOWLEDGE = `
Portfolio Information for AKILANDESWARI R:

- Name: AKILANDESWARI R
- Title / Role: MCA Graduate & Aspiring Software Developer
- Age: 21 years old. (If asked, respond strictly: "I am 21 years old.")
- About Me:
  "I am a recent Master of Computer Applications (MCA) graduate with a strong foundation in software development principles and a passion for crafting elegant, efficient code. My academic journey has equipped me with a diverse technical skillset and a problem-solving mindset, preparing me to tackle complex challenges in the digital landscape. I am eager to contribute my skills to innovative projects and continue expanding my knowledge in a dynamic professional environment."

- Education:
  1. Master of Computer Applications (MCA)
     - Institution: Holy Cross College, Tiruchirappalli
     - CGPA: 8.26
  2. Bachelor of Science (B.Sc.) in Mathematics
     - Institution: Holy Cross College, Tiruchirappalli
     - CGPA: 7.33

- Internships:
  1. HCC Incubation and Innovation Center – Holy Cross College
     - Area: IoT and Sensor Technology
     - Details: Gained practical exposure to IoT concepts and sensor technology.
  2. T4teq
     - Areas: Python, Power BI, and Advanced Excel
     - Details: Gained practical exposure to Python programming, data analysis, data visualization using Power BI, and Advanced Excel.

- Technical Skills (ONLY these skills exist):
  - HTML
  - C
  - C++
  - Java
  - Python
  - UI/UX Design
  - Full Stack Development
  - SQL
  - Aptitude – Basic Knowledge

- Preferred (Areas of Interest):
  - Front-End Development

- Achievements:
  1. Paper Presentation – AI in Healthcare
     - Details: Presented a paper on “AI in Healthcare” at Holy Cross College. Highlighted as an academic achievement reflecting an active interest in Artificial Intelligence and healthcare applications.

- Projects:
  1. Operation Research
     - Type: UG (Undergraduate) academic project
     - Description: "An academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making."
  2. AI Training Placement App
     - Type: AI-based placement training web application
     - Description: "An AI-based placement training application designed to help students prepare for placement opportunities through training and practice. The application focuses on improving students' technical and placement-related skills."
  3. Personal Portfolio
     - Type: Personal portfolio website
     - Description: "A personal portfolio website created to showcase my education, technical skills, projects, interests, and professional profile in a clean and user-friendly interface."

- Contact Details:
  - Email: akilandeswarirajasekaran@gmail.com
  - LinkedIn: https://www.linkedin.com/in/akilandeswari-rajasekaran-r
  - GitHub: https://github.com/akilandeswarirajasekaran-png

- Resume:
  - Available for download through the "Resume" button located in the top navigation bar of the portfolio.

- Work Experience / Internship:
  - Internships at HCC Incubation and Innovation Center – Holy Cross College (IoT and Sensor Technology) and T4teq (Python, Power BI, Advanced Excel). Active aspiring software developer seeking new opportunities.
`;

const SYSTEM_INSTRUCTION = `You are the official, professional personal portfolio assistant for AKILANDESWARI R.
Answer questions using ONLY the information available in this portfolio.

Strict Rules:
1. If the user asks "What is your name?", answer using her actual name: AKILANDESWARI R.
2. If the user asks "What is your age?", "How old are you?", "Tell me your age", or any similar question about age, answer strictly:
"I am 21 years old."
Do NOT say that her age is unavailable. Do NOT guess or change her age.
3. If the user asks about skills, projects, education, About Me, preferred areas, contact details, LinkedIn, GitHub, or resume, answer using the exact information provided in the portfolio knowledge base.
4. If the user asks about a project, provide its correct project name and description from the Projects section.
5. If the user asks "Tell me about yourself" or "About Me", give a short professional introduction based only on her portfolio information.
6. If the user asks for contact information, provide her email (akilandeswarirajasekaran@gmail.com), LinkedIn (https://www.linkedin.com/in/akilandeswari-rajasekaran-r), and GitHub (https://github.com/akilandeswarirajasekaran).
7. If the user asks an unrelated question that is not about her portfolio (e.g. general knowledge, math questions, weather, politics, recipes), politely say:
"I am the portfolio assistant. I can answer questions about my profile, education, skills, projects, preferred areas, experience and contact details."
8. Never invent, guess, hallucinate, or create personal information or skills not listed.
9. Keep answers short, clear, friendly, and professional.

Knowledge Base:
${PORTFOLIO_KNOWLEDGE}
`;

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route for Gemini Chat Assistant
  app.post('/api/chat', async (req: Request, res: Response) => {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message string is required' });
        return;
      }

      const lower = message.trim().toLowerCase();

      // Deterministic immediate checks for specific rule-based queries
      if (lower.includes('age') || lower.includes('how old') || lower.includes('birth date') || lower.includes('birthday') || lower.includes('year of birth')) {
        res.json({ reply: "I am 21 years old." });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (apiKey) {
        try {
          const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                'User-Agent': 'aistudio-build',
              },
            },
          });

          // Format contents
          const contents = [
            {
              role: 'user',
              parts: [{ text: `System context: ${SYSTEM_INSTRUCTION}\n\nUser message: ${message}` }],
            },
          ];

          const response = await ai.models.generateContent({
            model: 'gemini-3.7-flash',
            contents: contents as any,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.2,
            },
          });

          const reply = response.text || "I am the portfolio assistant. I can answer questions about my profile, education, skills, projects, preferred areas, experience and contact details.";
          res.json({ reply: reply.trim() });
          return;
        } catch (apiError) {
          console.error("Gemini API Error, falling back to local assistant response:", apiError);
        }
      }

      // Fallback deterministic logic adhering 100% strictly to the 10 rules
      let reply = "I am the portfolio assistant. I can answer questions about my profile, education, skills, projects, preferred areas, experience and contact details.";

      if (lower.includes('name') || lower.includes('who are you') || lower.includes('who is this')) {
        reply = "My name is AKILANDESWARI R. I am an MCA Graduate & Aspiring Software Developer.";
      } else if (lower.includes('about') || lower.includes('tell me about yourself') || lower.includes('introduce') || lower.includes('background') || lower.includes('who is akilandeswari')) {
        reply = "I am AKILANDESWARI R, a recent Master of Computer Applications (MCA) graduate from Holy Cross College, Tiruchirappalli. I have a strong foundation in software development principles and a passion for crafting elegant, efficient code. My goal is to contribute my skills to innovative projects and create user-friendly digital experiences.";
      } else if (lower.includes('skill')) {
        reply = "My technical skills include:\n• HTML\n• C\n• C++\n• Java\n• Python\n• UI/UX Design\n• Full Stack Development\n• SQL";
      } else if (lower.includes('prefer') || lower.includes('interest') || lower.includes('domain')) {
        reply = "My preferred area is:\n• Front-End Development";
      } else if (lower.includes('education') || lower.includes('degree') || lower.includes('college') || lower.includes('study') || lower.includes('mca') || lower.includes('bsc') || lower.includes('cgpa')) {
        reply = "My educational background:\n• Master of Computer Applications (MCA) — Holy Cross College, Tiruchirappalli (CGPA: 8.26)\n• Bachelor of Science (B.Sc.) in Mathematics — Holy Cross College, Tiruchirappalli (CGPA: 7.33)";
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio') || lower.includes('operation research') || lower.includes('placement')) {
        if (lower.includes('operation research')) {
          reply = "Operation Research (UG Project):\n\"An academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making.\"";
        } else if (lower.includes('placement') || lower.includes('ai training')) {
          reply = "AI Training Placement App:\n\"An AI-based placement training application designed to help students prepare for placement opportunities through training and practice. The application focuses on improving students' technical and placement-related skills.\"";
        } else if (lower.includes('personal portfolio')) {
          reply = "Personal Portfolio:\n\"A personal portfolio website created to showcase my education, technical skills, projects, interests, and professional profile in a clean and user-friendly interface.\"";
        } else {
          reply = "Here are my featured projects:\n\n1. Operation Research (UG Project):\nAn academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making.\n\n2. AI Training Placement App:\nAn AI-based placement training application designed to help students prepare for placement opportunities through training and practice.\n\n3. Personal Portfolio:\nA personal portfolio website created to showcase my education, technical skills, projects, interests, and professional profile.";
        }
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('linkedin') || lower.includes('github') || lower.includes('message')) {
        reply = "You can connect with me via:\n• Email: akilandeswarirajasekaran@gmail.com\n• LinkedIn: https://www.linkedin.com/in/akilandeswari-rajasekaran-r\n• GitHub: https://github.com/akilandeswarirajasekaran";
      } else if (lower.includes('resume') || lower.includes('cv')) {
        reply = "You can download my resume directly using the 'Resume' button located at the top right of the navigation bar on this portfolio.";
      } else if (lower.includes('intern') || lower.includes('experience') || lower.includes('job')) {
        reply = "My portfolio showcases my academic projects (Operation Research, AI Training Placement App, and Personal Portfolio) and MCA / B.Sc. Mathematics education from Holy Cross College. I am currently seeking new opportunities as an aspiring software developer.";
      }

      res.json({ reply });
    } catch (err: any) {
      console.error("Chat handler error:", err);
      res.status(500).json({
        reply: "I am the portfolio assistant. I can answer questions about my profile, education, skills, projects, preferred areas, experience and contact details."
      });
    }
  });

  // API Route for Contact Form with Direct Email Dispatching
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body;

      // 1. Validation
      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        res.status(400).json({ error: 'Please enter your name.' });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        res.status(400).json({ error: 'Please enter a valid email address.' });
        return;
      }

      if (!message || typeof message !== 'string' || message.trim().length < 3) {
        res.status(400).json({ error: 'Please enter your message.' });
        return;
      }

      const visitorName = name.trim();
      const visitorEmail = email.trim();
      const visitorMessage = message.trim();
      const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'akilandeswarirajasekaran@gmail.com';

      const emailSubject = `Portfolio Inquiry from ${visitorName}`;
      const emailPlainText = `New Contact Form Message from Portfolio Website\n\nVisitor Name: ${visitorName}\nVisitor Email: ${visitorEmail}\n\nMessage:\n${visitorMessage}\n\n---\nSent from AKILANDESWARI R Portfolio Website`;

      const safeName = visitorName.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const safeEmail = visitorEmail.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const safeMessage = visitorMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%); padding: 28px 24px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Portfolio Contact Message</h2>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #e0e7ff;">Direct message received from your personal portfolio</p>
          </div>
          <div style="padding: 24px; color: #334155;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #64748b; font-size: 13px; text-transform: uppercase;">Visitor:</td>
                <td style="padding: 8px 0; font-weight: 700; color: #0f172a; font-size: 15px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase;">Email:</td>
                <td style="padding: 8px 0; color: #4f46e5; font-size: 15px; font-weight: 600;">
                  <a href="mailto:${safeEmail}" style="color: #4f46e5; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
            </table>
            
            <div style="border-top: 1px solid #f1f5f9; padding-top: 18px;">
              <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Message Content:</p>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1e293b;">${safeMessage}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                Tip: Click reply to respond directly to <strong>${safeName}</strong> at <strong>${safeEmail}</strong>.
              </p>
            </div>
          </div>
        </div>
      `;

      let sent = false;

      // Method 1: Resend API Key if present
      if (process.env.RESEND_API_KEY) {
        try {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
              to: [receiverEmail],
              reply_to: visitorEmail,
              subject: emailSubject,
              text: emailPlainText,
              html: emailHtml,
            }),
          });

          if (resendResponse.ok) {
            sent = true;
            console.log(`[Contact] Email sent successfully via Resend to ${receiverEmail}`);
          } else {
            const errData = await resendResponse.text();
            console.error('[Contact] Resend API error:', errData);
          }
        } catch (resendErr) {
          console.error('[Contact] Error sending via Resend:', resendErr);
        }
      }

      // Method 2: SMTP / Gmail App Password if configured
      if (!sent && ((process.env.SMTP_USER && process.env.SMTP_PASS) || (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD))) {
        try {
          const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
          const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
          const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
          const smtpPort = Number(process.env.SMTP_PORT) || 465;
          const smtpSecure = process.env.SMTP_SECURE !== 'false';

          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

          await transporter.sendMail({
            from: `"${visitorName} via Portfolio" <${smtpUser}>`,
            replyTo: `"${visitorName}" <${visitorEmail}>`,
            to: receiverEmail,
            subject: emailSubject,
            text: emailPlainText,
            html: emailHtml,
          });

          sent = true;
          console.log(`[Contact] Email sent successfully via SMTP to ${receiverEmail}`);
        } catch (smtpErr) {
          console.error('[Contact] Error sending via SMTP:', smtpErr);
        }
      }

      // Method 3: Web3Forms fallback if access key exists
      if (!sent && process.env.WEB3FORMS_ACCESS_KEY) {
        try {
          const w3Res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: process.env.WEB3FORMS_ACCESS_KEY,
              name: visitorName,
              email: visitorEmail,
              replyto: visitorEmail,
              subject: emailSubject,
              message: visitorMessage,
            }),
          });
          if (w3Res.ok) {
            sent = true;
            console.log(`[Contact] Email sent successfully via Web3Forms to ${receiverEmail}`);
          }
        } catch (w3Err) {
          console.error('[Contact] Error sending via Web3Forms:', w3Err);
        }
      }

      // Fallback / Log
      console.log(`[Contact Received] Date: ${new Date().toISOString()} | From: ${visitorName} <${visitorEmail}> | Destination: ${receiverEmail}`);
      console.log(`[Contact Message Content]:\n${visitorMessage}`);

      res.status(200).json({
        success: true,
        message: 'Message sent successfully!'
      });
    } catch (err: any) {
      console.error('[Contact API Error]:', err);
      res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
