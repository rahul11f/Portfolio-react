// ============================================================
// 📝 PORTFOLIO DATA — Edit this file to customize your portfolio
// ============================================================
// This is the ONLY file you need to edit to update your portfolio content.
// Simply modify the values below and your portfolio will update automatically.

export const portfolioData = {
  // ----------------------------------------------------------
  // 🧑 Personal Information
  // ----------------------------------------------------------
  personal: {
    name: "Rahul Kumar",
    firstName: "Rahul",
    title: "Full Stack Developer",
    subtitle: "Computer Science Student | Tech Enthusiast",
    bio: "I'm a passionate computer science student and full-stack developer with a keen interest in building innovative web applications. I love turning ideas into reality through clean code and creative problem-solving.",
    avatarUrl: "", // Place your photo in public/ folder, e.g. "/avatar.jpg"
    resumeUrl: "https://drive.google.com/file/d/1k9_MH1ld-FDYk3WUL3uI1Apqa8K0fw71/view?usp=drivesdk",
  },

  // ----------------------------------------------------------
  // 🚀 Hero Section
  // ----------------------------------------------------------
  hero: {
    greeting: "Hello, I'm",
    typingTexts: [
      "Full Stack Developer",
      "UI/UX Designer",
      "Problem Solver",
      "Tech Enthusiast",
    ],
    ctaPrimary: { text: "Get In Touch", href: "#contact" },
    ctaSecondary: { text: "View Projects", href: "#projects" },
  },

  // ----------------------------------------------------------
  // 👤 About Section
  // ----------------------------------------------------------
  about: {
    title: "About Me",
    description: [
      "I'm a passionate computer science student with a strong foundation in web development and a love for creating innovative digital solutions. My journey in tech began with curiosity and has evolved into a deep commitment to building impactful applications.",
      "With experience in both frontend and backend technologies, I enjoy tackling complex problems and turning ideas into functional, beautiful applications. I'm constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.",
    ],
    highlights: [
      { icon: "fas fa-code", label: "Clean Code Advocate" },
      { icon: "fas fa-rocket", label: "Fast Learner" },
      { icon: "fas fa-users", label: "Team Player" },
      { icon: "fas fa-lightbulb", label: "Creative Thinker" },
    ],
  },

  // ----------------------------------------------------------
  // 🛠️ Skills Section
  // ----------------------------------------------------------
  skills: [
    {
      icon: "fas fa-code",
      title: "Programming Languages",
      description: "Proficient in Python, JavaScript, Java, C/C++, and SQL with strong problem-solving skills.",
      proficiency: 85,
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      description: "Experience with MySQL, MongoDB, PostgreSQL, and Firebase for data storage and management.",
      proficiency: 80,
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description: "Building robust server-side applications using Node.js, Express, Django, and REST APIs.",
      proficiency: 75,
    },
    {
      icon: "fas fa-tools",
      title: "DevOps & Tools",
      description: "Familiar with Git, Docker, Linux, CI/CD pipelines, and cloud platforms like AWS.",
      proficiency: 70,
    },
    {
      icon: "fas fa-brain",
      title: "Data Structures & Algorithms",
      description: "Strong foundation in DSA with competitive programming experience on various platforms.",
      proficiency: 80,
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cybersecurity Basics",
      description: "Understanding of network security, ethical hacking fundamentals, and secure coding practices.",
      proficiency: 65,
    },
  ],

  // ----------------------------------------------------------
  // 🎨 Frontend Skills Section
  // ----------------------------------------------------------
  frontendSkills: [
    {
      icon: "fab fa-html5",
      title: "HTML5",
      description: "Semantic markup, accessibility, and modern HTML5 APIs for building structured web content.",
    },
    {
      icon: "fab fa-css3-alt",
      title: "CSS3",
      description: "Responsive design, Flexbox, Grid, animations, and modern CSS features for stunning layouts.",
    },
    {
      icon: "fab fa-js-square",
      title: "JavaScript",
      description: "ES6+, DOM manipulation, async programming, and modern JavaScript frameworks and libraries.",
    },
    {
      icon: "fab fa-react",
      title: "React.js",
      description: "Component-based architecture, hooks, state management, and building dynamic SPAs.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Mobile-first approach, media queries, and adaptive layouts for all screen sizes.",
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "User-centered design principles, wireframing, prototyping, and visual design aesthetics.",
    },
  ],

  // ----------------------------------------------------------
  // 📜 Certifications
  // ----------------------------------------------------------
  certifications: [
    {
      icon: "fas fa-robot",
      title: "Executive Briefing: Artificial Intelligence (AI) + ChatGPT",
      issuer: "Kirill Eremenko",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fab fa-aws",
      title: "AWS Certified Solutions Architect Associate",
      issuer: "Stephane Maarek",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fab fa-js-square",
      title: "Master JavaScript from Scratch",
      issuer: "Andre Iacono, Diego Davila",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fab fa-windows",
      title: "AZ-204: Developing Solutions for Microsoft Azure",
      issuer: "Scott Duffy",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fab fa-react",
      title: "React JS for Beginners in Hindi",
      issuer: "Manpreet Singh",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fas fa-database",
      title: "The Complete SQL Bootcamp",
      issuer: "Jose Portilla",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fas fa-server",
      title: "Introduction to DevOps",
      issuer: "Rick Crisci",
      date: "Sept 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
    {
      icon: "fas fa-brain",
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
      link: "https://certificate-website-seven.vercel.app/",
    },
  ],

  // ----------------------------------------------------------
  // 🎓 Education Timeline
  // ----------------------------------------------------------
  education: [
    {
      year: "2010-2018",
      icon: "fas fa-child",
      title: "Class 10th - CBSE",
      institution: "DAV PUBLIC SCHOOL, Kahalgaon",
      description: "Basic Education, Curiosity, Foundation Building",
      grade: "Grade: 83.5%",
      skills: ["Basic Education", "Curiosity", "Foundation Building"],
      isFuture: false,
    },
    {
      year: "2018-2020",
      icon: "fas fa-user-graduate",
      title: "Class 12th - CBSE",
      institution: "Gyansthali, Gaya",
      description: "Science Stream, Problem Solving, Career Direction",
      grade: "Grade: 68.6%",
      skills: ["Science Stream", "Problem Solving", "Career Direction"],
      isFuture: false,
    },
    {
      year: "2022-Present",
      icon: "fas fa-laptop-code",
      title: "Bachelor of Technology - Computer Science",
      institution: "Babu Banarasi Das University, Lucknow",
      description: "Programming, Web Development, Problem Solving, Team Projects",
      grade: "CGPA: 7.47",
      skills: ["Programming", "Web Development", "Problem Solving", "Team Projects"],
      isFuture: false,
    },
    {
      year: "Future",
      icon: "fas fa-rocket",
      title: "Full-Stack Developer",
      institution: "Building innovative solutions",
      description: "Advanced Technologies, Leadership, Innovation",
      grade: "",
      skills: ["Advanced Technologies", "Leadership", "Innovation"],
      isFuture: true,
    },
  ],

  // ----------------------------------------------------------
  // 📚 Training & Workshops
  // ----------------------------------------------------------
  training: [
    {
      title: "Full Stack MERN Internship",
      organization: "GRAStech, Noida",
      date: "June 2025 – August 2025",
      description: "Hands-on experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js",
    },
    {
      title: "Soft Skills Training Program",
      organization: "Learnovate Enterprises, Lucknow",
      date: "November 2024 – March 2025",
      description: "Enhanced communication, leadership, and teamwork abilities",
    },
  ],

  // ----------------------------------------------------------
  // 💼 Projects
  // ----------------------------------------------------------
  projects: [
    {
      title: "Toolate",
      description: "Developed scalable full stack architecture for an AI-powered property listing platform. Integrated Google Gemini AI for advanced property recommendations. Utilized Upstash Redis for high performance caching. Implemented secure authentication with NextAuth.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Prisma", "Redis"],
      links: {
        github: "https://github.com/rahul11f/Toolate.git",
        demo: "https://toolate-rahul11fs-projects.vercel.app",
      },
    },
    {
      title: "Campus Opportunity Hub",
      description: "Designed a centralized platform to aggregate placement opportunities. Integrated Gemini AI to match student profiles with jobs and internships. Built responsive UI/UX with Next.js and Tailwind. Leveraged Supabase PostgreSQL for robust data management.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      tags: ["Next.js", "React", "Tailwind CSS", "Gemini AI", "Supabase", "Redis"],
      links: {
        github: "https://github.com/rahul11f/campus-opportunity-hub.git",
        demo: "https://campus-opportunity-hub-iota.vercel.app/",
      },
    },
    {
      title: "RxAI",
      description: "An AI-powered web application built with modern web technologies, hosted on Vercel.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      tags: ["Next.js", "React", "Tailwind CSS", "AI", "Vercel"],
      links: {
        github: "https://github.com/rahul11f/RxAI",
        demo: "https://rxai2.vercel.app",
      },
    },

    {
      title: "Certificate Website",
      description: "A responsive website to showcase certifications with modern design and smooth user experience.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      links: {
        github: "https://github.com/rahul11f/certificate-website",
        demo: "https://certificate-website-seven.vercel.app/",
      },
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and achievements with a sleek black theme and interactive elements.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "UI/UX"],
      links: {
        github: "https://github.com/rahul11f/Portfolio-Website",
        demo: "https://rahul11f-portfolio.vercel.app/",
      },
    },
  ],

  // ----------------------------------------------------------
  // 🏆 Positions of Responsibility
  // ----------------------------------------------------------
  responsibilities: [
    {
      title: "NSS Management and Photography Team",
      organization: "Babu Banarasi Das University, Lucknow",
      date: "October 2022 – September 2024",
      description: [
        "Managed photography coverage of events, creating visual content for reports and campus publications.",
        "Collaborated with faculty and peers to organize campus-wide NSS activities with 100+ student participation.",
        "Led the planning and execution of NSS community service events, including cleanliness drives, health camps, and educational sessions in local schools."
      ],
    },
  ],

  // ----------------------------------------------------------
  // 📞 Contact Information
  // ----------------------------------------------------------
  contact: {
    email: "raajrahul147@gmail.com",
    phone: "+91-8434856473",
    location: "Lucknow, India",
    formAction: "#", // URL for form submission (e.g., Formspree, Netlify Forms)
    socialLinks: [
      { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/rahul-kumar147/", label: "LinkedIn" },
      { icon: "fab fa-github", url: "https://github.com/rahul11f", label: "GitHub" },
      { icon: "fab fa-instagram", url: "https://www.instagram.com/_raazrahul_", label: "Instagram" },
      { icon: "fab fa-twitter", url: "https://x.com/rahul11f", label: "Twitter" },
    ],
  },

  // ----------------------------------------------------------
  // 🦶 Footer
  // ----------------------------------------------------------
  footer: {
    copyright: `© ${new Date().getFullYear()} Rahul Kumar. All Rights Reserved.`,
    tagline: "Built with React & ❤️",
  },

  // ----------------------------------------------------------
  // ⚙️ Feature Flags
  // ----------------------------------------------------------
  features: {
    enableGamification: true, // XP bar, achievements, game stats, terminal
    enableParticles: true,    // Floating particle effects in hero
    enableCyberGrid: true,    // Animated cyber grid background
  },

  // ----------------------------------------------------------
  // 🏅 Achievements (for gamification)
  // ----------------------------------------------------------
  achievements: [
    { id: "explorer", title: "Explorer", description: "Scrolled through the entire portfolio", icon: "fas fa-compass" },
    { id: "curious", title: "Curious Mind", description: "Visited the About section", icon: "fas fa-search" },
    { id: "skill_hunter", title: "Skill Hunter", description: "Checked out all skills", icon: "fas fa-crosshairs" },
    { id: "project_viewer", title: "Project Viewer", description: "Explored the projects section", icon: "fas fa-folder-open" },
    { id: "hacker", title: "Hacker", description: "Opened the secret terminal", icon: "fas fa-terminal" },
  ],

  // ----------------------------------------------------------
  // 💻 Terminal Commands (for easter egg)
  // ----------------------------------------------------------
  terminalCommands: {
    help: "Available commands: help, about, skills, contact, projects, clear, matrix, hack",
    about: "Rahul Kumar — Full Stack Developer & CS Student passionate about building innovative web applications.",
    skills: "Languages: Python, JavaScript, Java, C/C++ | Frameworks: React, Node.js, Django | Tools: Git, Docker, AWS",
    contact: "Email: raajrahul147@gmail.com | GitHub: github.com/rahul11f | LinkedIn: linkedin.com/in/rahul-kumar147/",
    projects: "1. Toolate  2. Campus Opportunity Hub  3. RxAI  4. Certificate Website  5. Portfolio Website",
    matrix: "Wake up, Neo... The Matrix has you...",
    hack: "ACCESS GRANTED. Welcome to the mainframe, agent.",
  },
};
