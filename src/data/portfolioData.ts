import { Project, EducationItem, SkillItem, PreferredItem, InternshipItem, AchievementItem } from '../types';
import profilePhoto from '../assets/images/profile.jpg';

export const PORTFOLIO_DATA = {
  personal: {
    name: "AKILANDESWARI R",
    shortName: "AKILANDESWARI R",
    headline: "Hi, I'm AKILANDESWARI R",
    role: "MCA Graduate & Aspiring Software Developer",
    bio: "Passionate about building practical software solutions, learning new technologies, and creating simple and user-friendly digital experiences.",
    aboutBio: "I am a recent Master of Computer Applications (MCA) graduate with a strong foundation in software development principles and a passion for crafting elegant, efficient code. My academic journey has equipped me with a diverse technical skillset and a problem-solving mindset, preparing me to tackle complex challenges in the digital landscape. I am eager to contribute my skills to innovative projects and continue expanding my knowledge in a dynamic professional environment.",
    avatarUrl: profilePhoto,
    email: "akilandeswarirajasekaran@gmail.com",
    linkedin: "https://www.linkedin.com/in/akilandeswari-rajasekaran-r",
    github: "https://github.com/akilandeswarirajasekaran-png",
    portfolioUrl: "https://ais-pre-x6e4cqg5zxpvk6w62rvoh4-824269579722.asia-east1.run.app",
  },
  highlights: [
    {
      title: "MCA Graduate",
      description: "Solid academic foundation in computer science and modern software principles.",
      icon: "GraduationCap"
    },
    {
      title: "Software Development",
      description: "Building robust, maintainable, and scalable practical applications.",
      icon: "Code"
    },
    {
      title: "UI/UX Enthusiast",
      description: "Crafting clean, accessible, and intuitive user-centered digital interfaces.",
      icon: "Palette"
    },
    {
      title: "Continuous Learner",
      description: "Quick to adapt to emerging frameworks, tools, and technical challenges.",
      icon: "Sparkles"
    }
  ],
  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Holy Cross College, Tiruchirappalli",
      score: "CGPA: 8.26",
      period: "Postgraduate Degree",
      highlights: ["Specialized in advanced software development, database systems, and application architecture."]
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (B.Sc.) in Mathematics",
      institution: "Holy Cross College, Tiruchirappalli",
      score: "CGPA: 7.33",
      period: "Undergraduate Degree",
      highlights: ["Rigorous quantitative analysis, discrete mathematics, and problem-solving fundamentals."]
    }
  ] as EducationItem[],
  internships: [
    {
      id: "internship-hcc",
      organization: "HCC Incubation and Innovation Center – Holy Cross College",
      roleOrArea: "IoT and Sensor Technology",
      description: "Gained practical exposure to IoT concepts and sensor technology."
    },
    {
      id: "internship-t4teq",
      organization: "T4teq",
      roleOrArea: "Python, Power BI, and Advanced Excel",
      description: "Gained practical exposure to Python programming, data analysis, data visualization using Power BI, and Advanced Excel."
    }
  ] as InternshipItem[],
  skills: [
    { name: "HTML", category: "core" },
    { name: "C", category: "language" },
    { name: "C++", category: "language" },
    { name: "Java", category: "language" },
    { name: "Python", category: "language" },
    { name: "UI/UX Design", category: "design" },
    { name: "Full Stack Development", category: "core" },
    { name: "SQL", category: "database" },
    { name: "Aptitude – Basic Knowledge", category: "core" },
  ] as SkillItem[],
  preferred: [
    {
      title: "Front-End Development",
      description: "Designing responsive, intuitive, and high-performance client interfaces using contemporary web standards.",
      iconName: "Layout"
    },
    {
      title: "UI/UX Design",
      description: "Creating clean, accessible, and intuitive user experiences with thoughtful interface layouts, wireframing, and user-centered design.",
      iconName: "Palette"
    }
  ] as PreferredItem[],
  achievements: [
    {
      id: "achievement-paper-presentation",
      title: "Paper Presentation – AI in Healthcare",
      subtitle: "Holy Cross College",
      description: "Presented a paper on “AI in Healthcare” at Holy Cross College. Highlighted as an academic achievement reflecting an active interest in Artificial Intelligence and healthcare applications."
    }
  ] as AchievementItem[],
  projects: [
    {
      id: "project-1",
      title: "Operation Research",
      subtitle: "UG Project",
      description: "An academic project based on Operations Research, focusing on applying mathematical and analytical techniques to solve problems, optimize resources, and support effective decision-making.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuke_RzfKWjF-E0iF4TSEfTk-nDoKFWPwjQ_uHnZ99vlGYmrKBBmycX2MbSqWitzFwXJGAdfo1QaNer5Y0I8DSJ3S9yA5-gZNC1j5JAKpdngrVCG74R21b4gUVTbdBIaDkHi4xsEOq_EFZ5AqjHrKavw9K9VcVs1cIjrfozpOevIhXYKY_kZyMfUBSu5qpQlRaUX0eKt7JPFz_ebAySTxNqDdX-HyENNr5BAlvIcpqc4m6fEMa63tc8Q",
      tags: ["UG Project", "Operations Research", "Mathematical Modeling", "Optimization"],
      githubUrl: "https://github.com/akilandeswarirajasekaran-png",
      liveUrl: "#"
    },
    {
      id: "project-2",
      title: "AI Training Placement App",
      subtitle: "Web Application",
      description: "An AI-based placement training application designed to help students prepare for placement opportunities through training and practice. The application focuses on improving students' technical and placement-related skills.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3LJ_Z2WtbdMIEHpSrYsVQ3pcoDtqNFFCcLjcHetihdLmAHXVNHW6KLo9pu7bkRzGjmnh1NvaIEe2_mEAGACSPw5qkmMSYiYTNe_ody9vNJrn5ZHCz8AciT3geqfgHOFmRGZ3cmBPv5_GC0xAKGc8H-LGrC6RsPFXkJ_hLtSVod0snaSHrnMDzKbhhcwpWhshRj2qlY6vqUfyr2Aq4TKGgwYKpwRq2AHy1IRDu8c4_BUBBpKOob7ArjQ",
      tags: ["AI Placement", "Training & Practice", "Technical Skills", "Full Stack"],
      githubUrl: "https://github.com/akilandeswarirajasekaran-png",
      liveUrl: "#"
    },
    {
      id: "project-3",
      title: "Personal Portfolio",
      subtitle: "Web Portfolio",
      description: "A personal portfolio website created to showcase my education, technical skills, projects, interests, and professional profile in a clean and user-friendly interface.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnqhkU00fE12ryPo0zUGt4wo8K5KlUlbmrz9Ks0Co_8aIwDM0DcxLI9EqaoYswv8iQwRbUiqdFXvI_KvaMu1mLTfKekwJG4zih_DDnKt9QP7hMT0HYCLusZ7pVSVOx44uwMGOde-94KClQ84GAW5wxuHekIqOKSZB-iktWnCdkyJtaF_59tmSxrL9h8iTcGXEllOG1RHmRazjs4OnwYqAi5JPflUK9AElftIy-3VEzKsE3t7VYW1d0cg",
      tags: ["Portfolio", "React", "Tailwind CSS", "UI/UX"],
      githubUrl: "https://github.com/akilandeswarirajasekaran-png",
      liveUrl: "https://ais-pre-x6e4cqg5zxpvk6w62rvoh4-824269579722.asia-east1.run.app"
    }
  ] as Project[]
};
