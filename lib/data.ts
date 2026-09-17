export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  image: string;
  deliverables: string[];
  process: string[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  duration: string;
  level: string;
  image: string;
  whoFor: string;
  curriculum: string[];
  outcomes: string[];
  // Set true for courses that are announced but not open for enrollment yet.
  // The course card and detail page will show a "Coming Soon" state and
  // hide pricing / the enroll button when this is true.
  comingSoon?: boolean;
  // Optional pricing — only shown on the course page if present.
  originalPrice?: string;
  offerPrice?: string;
  installments?: { label: string; amount: string }[];
  // Optional extra images (e.g. real course material graphics)
  // shown in a gallery on the course detail page.
  gallery?: string[];
};

export type Resource = {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  fileType: string; // e.g. "PDF Guide", "Video Lesson"
};

export const freeResources: Resource[] = [
  {
    slug: "excel-formula-cheat-sheet",
    title: "Excel Formula Cheat Sheet",
    description: "The most-used Excel formulas for everyday office work, in one quick-reference sheet.",
    icon: "FileSpreadsheet",
    fileType: "PDF Guide",
  },
  {
    slug: "ms-word-shortcuts",
    title: "MS Word Shortcuts",
    description: "Keyboard shortcuts that speed up formatting, editing and document navigation in Word.",
    icon: "FileText",
    fileType: "PDF Guide",
  },
  {
    slug: "keyboard-shortcuts-guide",
    title: "Keyboard Shortcuts Guide",
    description: "Essential Windows and general typing shortcuts every beginner should know.",
    icon: "Keyboard",
    fileType: "PDF Guide",
  },
  {
    slug: "computer-basics-guide",
    title: "Computer Basics Guide",
    description: "A simple starting-point guide to files, folders and everyday computer tasks.",
    icon: "Monitor",
    fileType: "PDF Guide",
  },
];

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  image: string;
  category: string;
};

// Short, non-numeric highlights shown in a badge strip under the hero
// banner. Kept deliberately free of specific counts (students/courses/
// years) since those aren't verified numbers yet.
export const heroHighlights: string[] = [
  "Online Learning",
  "Beginner Friendly",
  "Practical Training",
  "Flexible Learning",
  "Certificate Available",
];

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Custom software and management solutions designed around your business requirements.",
    icon: "Code2",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Custom web applications",
      "Business automation tools",
      "API integrations",
    ],
    process: [
      "Understand your workflow and pain points",
      "Design a system architecture that fits your team",
      "Build in short, reviewable milestones",
      "Test with real data before launch",
      "Hand over with documentation and support",
    ],
  },
  {
    slug: "website-design-development",
    title: "Website Design",
    description:
      "Modern, responsive and budget-friendly websites for businesses, brands and personal projects.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Business & portfolio websites",
      "E-commerce stores",
      "Landing pages",
    ],
    process: [
      "Discovery call to understand your brand and goals",
      "Wireframe and design mockups for approval",
      "Build a fast, mobile-friendly site",
      "Content and SEO setup",
      "Launch, plus a short training session for your team",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Professional social media creatives, promotional designs and brand visuals.",
    icon: "PenTool",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Logo & brand identity", "Social media creatives", "Print materials"],
    process: [
      "Brand discovery: audience, tone, competitors",
      "Initial concepts and direction options",
      "Refine the chosen direction with your feedback",
      "Deliver final files in every format you need",
      "Optional ongoing design support",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Social media content and marketing solutions to help businesses build their online presence.",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Content calendars & posting",
      "Facebook / Instagram ads",
      "Page growth strategy",
    ],
    process: [
      "Audit your current presence and audience",
      "Build a content calendar and posting plan",
      "Design and launch ad campaigns",
      "Track performance weekly",
      "Adjust strategy based on real results",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "Improve your online visibility and help your business reach the right audience through practical SEO strategies.",
    icon: "Search",
    image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Keyword & competitor research",
      "On-page SEO optimization",
      "Google Business Profile setup",
    ],
    process: [
      "Audit your current site and search visibility",
      "Research keywords your customers actually search for",
      "Optimize pages, content and technical SEO",
      "Track rankings and traffic over time",
      "Adjust strategy based on results",
    ],
  },
];

export const courses: Course[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "HTML, CSS, JavaScript, React and Laravel — build real websites and applications from the ground up.",
    icon: "Code2",
    duration: "4 Months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    whoFor:
      "Students with no prior coding background who want to build real websites and web applications, and eventually work as a developer or freelancer.",
    curriculum: [
      "HTML5 & CSS3 fundamentals, responsive layouts",
      "JavaScript from basics to DOM manipulation",
      "React for building interactive front-ends",
      "Laravel for backend logic, databases and APIs",
      "Deploying a full project to a live server",
      "Capstone project: a complete website built solo",
    ],
    outcomes: [
      "Build a responsive website from scratch",
      "Understand both frontend and backend development",
      "A portfolio project ready to show employers or clients",
    ],
    comingSoon: true,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Photoshop, Illustrator and Canva. Learn branding, layout and visual design for print and digital.",
    icon: "PenTool",
    duration: "3 Months",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    whoFor:
      "Anyone interested in visual design, branding or illustration — no design background needed to start.",
    curriculum: [
      "Design fundamentals: color, layout, typography",
      "Adobe Photoshop for photo editing and compositing",
      "Adobe Illustrator for logos and vector art",
      "Canva for quick social media and marketing designs",
      "Building a personal brand style guide",
      "Final project: a complete brand identity kit",
    ],
    outcomes: [
      "Design a logo and brand identity from scratch",
      "Comfortably use Photoshop, Illustrator and Canva",
      "A design portfolio to show clients or employers",
    ],
    comingSoon: true,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, social media marketing and online ad campaigns that bring real customers to a business.",
    icon: "TrendingUp",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    whoFor:
      "Business owners, marketers, or students who want to run a business's online presence and advertising.",
    curriculum: [
      "SEO basics: keywords, on-page and off-page optimization",
      "Content planning and social media strategy",
      "Running Facebook & Instagram ad campaigns",
      "Reading analytics and improving campaign performance",
      "Email marketing fundamentals",
      "Final project: a real marketing plan for a business",
    ],
    outcomes: [
      "Plan and run a social media ad campaign",
      "Understand SEO well enough to improve a website's ranking",
      "Read campaign analytics and adjust strategy",
    ],
    comingSoon: true,
  },
  {
    slug: "professional-computer-basics-course",
    title: "Professional Computer Basics Course",
    description:
      "Computer Basics, Keyboard Skills, MS Word, MS Excel, MS PowerPoint and Canva — from basic to professional level.",
    icon: "Monitor",
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    image: "/images/courses/professional-computer-basics/cover-robot.jpg",
    whoFor:
      "Designed for beginners, students, job seekers, office staff and business owners who want real, job-ready computer skills — no prior experience needed.",
    curriculum: [
      "Computer Fundamentals",
      "Keyboard Typing & Shortcuts",
      "MS Word – Professional Documents, CVs, Reports, Letters",
      "MS Excel – Data Entry, Formulas, Functions, Reports",
      "MS PowerPoint – Professional Presentations",
      "Canva – Social Media & Creative Designs",
      "File Management, Printing, PDF Creation",
      "Online Productivity & Professional Workflows",
    ],
    outcomes: [
      "Increased computer confidence for everyday and office tasks",
      "Create professional documents, reports and presentations with ease",
      "Design social media and marketing creatives using Canva",
      "Better job opportunities: data entry, office admin, receptionist and more",
      "An industry-relevant, certificate-backed skill set",
    ],
    originalPrice: "Rs. 8,600",
    offerPrice: "Rs. 5,600",
    installments: [
      { label: "1st Payment (Enroll Now)", amount: "Rs. 4,000" },
      { label: "2nd Payment (Before 8th Session)", amount: "Rs. 2,600" },
    ],
    gallery: [
      "/images/courses/professional-computer-basics/overview.jpg",
      "/images/courses/professional-computer-basics/certificate.jpg",
    ],
  },
  {
    slug: "networking-hardware",
    title: "Networking & Hardware",
    description:
      "PC assembly, troubleshooting, and setting up home and office networks the right way.",
    icon: "Network",
    duration: "2 Months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    whoFor:
      "Students who enjoy working with their hands and want to understand what's inside a computer and how networks connect.",
    curriculum: [
      "PC components, assembly and troubleshooting",
      "Operating system installation and configuration",
      "Networking fundamentals: IP addressing, routers, switches",
      "Setting up a home or small office network",
      "Basic cybersecurity hygiene for networks",
      "Final project: build and network a working PC setup",
    ],
    outcomes: [
      "Assemble and troubleshoot a desktop PC",
      "Set up a functioning small office network",
      "Diagnose common hardware and connectivity issues",
    ],
    comingSoon: true,
  },
  {
    slug: "it-diploma",
    title: "IT Diploma",
    description:
      "A comprehensive 6-month diploma covering computing, office tools, networking, web technologies and databases — a broad, practical foundation for any IT career.",
    icon: "GraduationCap",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    whoFor:
      "School leavers, career-changers and anyone who wants a structured, all-round foundation in IT — from computer basics through to networking, web technologies and databases — backed by a recognized diploma rather than a single narrow skill.",
    curriculum: [
      "Phase 1 — Computer Fundamentals & MS Office: file systems, typing skills, Word, Excel, PowerPoint",
      "Phase 2 — Networking & Hardware: PC assembly, troubleshooting, IP addressing, small network setup",
      "Phase 3 — Web Technologies: HTML5 and CSS3 layouts, JavaScript fundamentals, building a simple site",
      "Phase 4 — Databases & Software Basics: how databases and applications are structured, basic SQL",
      "Phase 5 — Workplace IT Skills: troubleshooting common issues, everyday cybersecurity hygiene, IT support etiquette",
      "Phase 6 — Capstone Project: a supervised project pulling together everything learned, plus the final diploma assessment",
    ],
    outcomes: [
      "A broad, practical foundation across computing, networking, web and databases",
      "Comfortable troubleshooting everyday computer and network issues",
      "Basic ability to build and understand simple websites and databases",
      "Confidence with office software for any workplace",
      "A recognized SF Digital Solutions IT Diploma certificate to support job applications",
    ],
    comingSoon: true,
  },
];

export const teachers: Teacher[] = [
  {
    slug: "fahim",
    name: "Fahim",
    role: "Founder & IT / Digital Skills Trainer",
    bio: "Founder of SF Digital Solutions, focused on practical IT education and digital solutions. Helping students, job seekers and professionals build essential computer and digital skills through beginner-friendly, practical training.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
];

export const posts: Post[] = [
  {
    slug: "why-computer-skills-are-important-for-office-jobs",
    title: "Why Computer Skills Are Important for Office Jobs",
    excerpt:
      "Almost every office role today expects basic computer confidence. Here's why that skill matters more than most job seekers realize.",
    date: "August 4, 2026",
    author: "SF Digital Solutions",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop",
    content: [
      "Walk into almost any office today — a school, a clinic, a small business, a government counter — and the work happens on a computer. Typing a letter, filling a form, preparing a report or sending an email are no longer optional extras; they're the baseline.",
      "This is exactly why so many job listings quietly assume computer literacy, even for roles that aren't technical on paper. An applicant who can confidently use Word, Excel and email has a real advantage over someone who has to learn on the job, under pressure, while everyone else is watching.",
      "The good news is that this isn't a hard skill to build. Unlike a full IT degree, basic computer and office skills can be learned in a matter of weeks with the right hands-on training — typing, file management, MS Word, MS Excel, MS PowerPoint and simple design tools like Canva.",
      "Our Professional Computer Basics Course was built around exactly this gap: practical, job-ready skills for students, job seekers, office staff and business owners, without assuming any prior computer experience.",
    ],
  },
  {
    slug: "ms-excel-skills-every-beginner-should-learn",
    title: "MS Excel Skills Every Beginner Should Learn",
    excerpt:
      "Excel is one of the most requested workplace skills — here are the fundamentals worth learning first.",
    date: "August 18, 2026",
    author: "SF Digital Solutions",
    category: "Office Skills",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    content: [
      "Excel can look intimidating at first — rows, columns, endless little cells — but almost every office task built on it comes down to a handful of core skills.",
      "Start with data entry and formatting: entering information cleanly, using consistent formats for dates and numbers, and organizing data into a simple table. This alone saves hours of confusion later.",
      "Next come formulas and functions. Learning SUM, AVERAGE, COUNT, and simple IF statements covers a surprising amount of everyday office work, from budgets to attendance sheets to sales tracking.",
      "From there, basic reports — sorting, filtering, and simple charts — let you turn raw data into something a manager can actually read at a glance. These are the exact skills covered hands-on in our Professional Computer Basics Course, alongside Word, PowerPoint and Canva.",
    ],
  },
  {
    slug: "how-digital-skills-can-improve-your-career",
    title: "How Digital Skills Can Improve Your Career",
    excerpt:
      "From office basics to design and marketing, practical digital skills open doors across almost every industry.",
    date: "September 2, 2026",
    author: "SF Digital Solutions",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
    content: [
      "Digital skills used to be something only 'tech people' needed. That's no longer true — practical computer and digital skills now support almost every career path, from office administration to retail to healthcare.",
      "Someone who can prepare a professional CV, organize files properly, build a simple spreadsheet report, and put together a clean presentation stands out immediately, even in non-technical roles.",
      "Beyond office basics, skills like Canva design or a foundational understanding of social media and digital marketing let people support their workplace — or their own small business — in ways that used to require hiring outside help.",
      "The goal isn't to turn everyone into a developer or designer overnight. It's to build practical, confidence-boosting skills that make day-to-day work easier and job applications stronger — which is exactly what we focus on at SF Digital Solutions.",
    ],
  },
];
