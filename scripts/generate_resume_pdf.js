import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "pt",
  format: "a4"
});

const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
const margin = 40;
const contentWidth = pageWidth - margin * 2;

let y = 45;

// Header Banner
doc.setFillColor(30, 41, 59); // Slate-800
doc.rect(0, 0, pageWidth, 105, "F");

// Name
doc.setFont("helvetica", "bold");
doc.setFontSize(22);
doc.setTextColor(255, 255, 255);
doc.text("AKILANDESWARI R", margin, 42);

// Title
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(129, 140, 248); // Indigo-300
doc.text("MCA Graduate & Aspiring Software Developer", margin, 60);

// Contact Info Line
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(226, 232, 240); // Slate-200
const contactText = "Email: akilandeswarirajasekaran@gmail.com  |  LinkedIn: in/akilandeswari-rajasekaran-r  |  GitHub: akilandeswarirajasekaran-png";
doc.text(contactText, margin, 80);

y = 125;

function drawSectionHeading(title) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text(title.toUpperCase(), margin, y);
  
  // Underline bar
  doc.setDrawColor(79, 70, 229); // Indigo-600
  doc.setLineWidth(1.5);
  doc.line(margin, y + 4, margin + 40, y + 4);
  
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(margin + 45, y + 4, pageWidth - margin, y + 4);
  
  y += 18;
}

// 1. Professional Summary
drawSectionHeading("Professional Summary");
doc.setFont("helvetica", "normal");
doc.setFontSize(9.5);
doc.setTextColor(51, 65, 85);
const summary = "A recent Master of Computer Applications (MCA) graduate with a strong foundation in software development principles and a passion for crafting elegant, efficient code. Equipped with a diverse technical skillset across programming, web technologies, and data analysis, with practical exposure through internships in IoT and Data Visualization.";
const splitSummary = doc.splitTextToSize(summary, contentWidth);
doc.text(splitSummary, margin, y);
y += splitSummary.length * 13 + 10;

// 2. Education
drawSectionHeading("Education");
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Holy Cross College, Tiruchirappalli",
    score: "CGPA: 8.26",
    period: "Postgraduate Degree"
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Mathematics",
    institution: "Holy Cross College, Tiruchirappalli",
    score: "CGPA: 7.33",
    period: "Undergraduate Degree"
  }
];

education.forEach(edu => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(edu.degree, margin, y);
  
  doc.setFont("helvetica", "bold");
  doc.setTextColor(79, 70, 229);
  doc.text(edu.score, pageWidth - margin, y, { align: "right" });
  
  y += 13;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(`${edu.institution}  •  ${edu.period}`, margin, y);
  y += 15;
});
y += 4;

// 3. Internships
drawSectionHeading("Internships");
const internships = [
  {
    org: "HCC Incubation and Innovation Center – Holy Cross College",
    area: "IoT and Sensor Technology",
    desc: "Gained practical exposure to IoT concepts and sensor technology."
  },
  {
    org: "T4teq",
    area: "Python, Power BI, and Advanced Excel",
    desc: "Gained practical exposure to Python programming, data analysis, data visualization using Power BI, and Advanced Excel."
  }
];

internships.forEach(item => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(item.org, margin, y);
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(79, 70, 229);
  doc.text(`Area: ${item.area}`, pageWidth - margin, y, { align: "right" });
  
  y += 12;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const descLines = doc.splitTextToSize(`• ${item.desc}`, contentWidth);
  doc.text(descLines, margin, y);
  y += descLines.length * 12 + 8;
});

// 4. Technical Skills & Aptitude
drawSectionHeading("Skills & Aptitude");
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);

const skillsLine1 = "• Programming & Web: HTML, C, C++, Java, Python, Full Stack Development";
const skillsLine2 = "• Database & Design: SQL, UI/UX Design";
const skillsLine3 = "• Aptitude: Basic Knowledge";
const skillsLine4 = "• Preferred Focus: Front-End Development, UI/UX Design";

doc.text(skillsLine1, margin, y); y += 13;
doc.text(skillsLine2, margin, y); y += 13;
doc.text(skillsLine3, margin, y); y += 13;
doc.text(skillsLine4, margin, y); y += 18;

// 5. Academic Projects
drawSectionHeading("Projects");
const projects = [
  {
    title: "1. Operation Research (UG Project)",
    desc: "An academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making."
  },
  {
    title: "2. AI Training Placement App (Web Application)",
    desc: "An AI-based placement training application designed to help students prepare for placement opportunities through training and practice. Focuses on improving technical and placement-related skills."
  },
  {
    title: "3. Personal Portfolio (Web Portfolio)",
    desc: "A personal portfolio website created to showcase education, technical skills, projects, interests, and professional profile in a clean and user-friendly interface."
  }
];

projects.forEach(p => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(p.title, margin, y);
  y += 12;
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const splitP = doc.splitTextToSize(p.desc, contentWidth);
  doc.text(splitP, margin, y);
  y += splitP.length * 11 + 6;
});
y += 2;

// 6. Academic Achievements
drawSectionHeading("Academic Achievements");
doc.setFont("helvetica", "bold");
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text("Paper Presentation – AI in Healthcare (Holy Cross College)", margin, y);
y += 12;

doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
const achText = "Presented a paper on “AI in Healthcare” at Holy Cross College. Highlighted as an academic achievement reflecting an active interest in Artificial Intelligence and healthcare applications.";
const splitAch = doc.splitTextToSize(achText, contentWidth);
doc.text(splitAch, margin, y);

// Output to public and dist folders
const publicDir = path.resolve(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, "AKILANDESWARI_R_Resume.pdf");
fs.writeFileSync(outputPath, Buffer.from(doc.output("arraybuffer")));
console.log("Resume PDF generated successfully at:", outputPath);
