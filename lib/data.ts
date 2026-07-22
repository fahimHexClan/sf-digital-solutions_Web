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
  // Optional pricing — only shown on the course page if present.
  originalPrice?: string;
  offerPrice?: string;
  installments?: { label: string; amount: string }[];
  // Optional extra images (e.g. real course material graphics)
  // shown in a gallery on the course detail page.
  gallery?: string[];
};

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

export const stats = [
  { label: "Students Trained", value: "1,200+" },
  { label: "Courses Offered", value: "12" },
  { label: "Expert Instructors", value: "8" },
  { label: "Years of Teaching", value: "6+" },
];

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Custom software built around how your business actually works — from internal tools to full systems.",
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
    title: "Website Design & Development",
    description:
      "Fast, mobile-friendly websites for businesses, institutes and personal brands — designed and built end to end.",
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
      "Logos, branding kits and marketing visuals that make a business look as good as its work.",
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
      "Content planning, page management and ad campaigns that bring real customers, not just likes.",
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
    originalPrice: "Rs. 8,800",
    offerPrice: "Rs. 4,800",
    installments: [
      { label: "1st Payment (Enroll Now)", amount: "Rs. 3,500" },
      { label: "2nd Payment (Before 8th Session)", amount: "Rs. 3,000" },
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
  },
];

export const teachers: Teacher[] = [
  {
    slug: "fahim-s",
    name: "Fahim S.",
    role: "Lead Instructor — Web Development",
    bio: "Leads the Web Development and Software Engineering track, teaching modern full-stack tools including Laravel and React.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "priya-r",
    name: "Priya R.",
    role: "Graphic Design Trainer",
    bio: "Ten years in branding and print design, now guiding students through Photoshop, Illustrator and design fundamentals.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "arun-k",
    name: "Arun K.",
    role: "Networking & Hardware Specialist",
    bio: "Certified network technician who trains students on PC hardware, troubleshooting and small-office network setup.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "nilani-t",
    name: "Nilani T.",
    role: "Digital Marketing Trainer",
    bio: "Runs the Digital Marketing course, covering SEO, social media strategy and campaign analytics with hands-on projects.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

export const posts: Post[] = [
  {
    slug: "5-in-demand-digital-skills-2026",
    title: "5 In-Demand Digital Skills Every Student Should Learn in 2026",
    excerpt:
      "From web development to digital marketing, here are the skills local employers are actively hiring for this year.",
    date: "July 2, 2026",
    author: "SF Digital Solutions",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop",
    content: [
      "The job market keeps shifting, and the students who move fastest are the ones who pick up practical, demonstrable skills rather than just theory.",
      "Web development remains at the top of the list. Businesses of every size need someone who can build and maintain a website, and tools like Laravel and React make it possible to go from beginner to job-ready in a few months.",
      "Digital marketing is close behind. Every business with an online presence needs someone who understands SEO, social media, and how to run an ad campaign that actually converts.",
      "Graphic design, basic networking knowledge, and comfort with MS Office round out the list — skills that apply across nearly every industry, not just tech.",
      "Our advice: pick one skill, get genuinely good at it through hands-on practice, and let that be the foundation you build the rest of your career on.",
    ],
  },
  {
    slug: "why-web-development-is-a-great-career",
    title: "Why Web Development Is Still One of the Best Career Paths",
    excerpt:
      "Websites aren't going away. Here's why learning to build them remains one of the most reliable ways to start a tech career.",
    date: "June 18, 2026",
    author: "SF Digital Solutions",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop",
    content: [
      "Every business, school and organisation needs a website or a web application, and that demand hasn't slowed down.",
      "What has changed is how approachable the field has become. With frameworks like Laravel on the backend and React on the frontend, a motivated student can build a genuinely useful project within their first few months of learning.",
      "Freelance opportunities are also abundant. Many of our graduates start by building small business websites on the side before moving into full-time roles or running their own small studio.",
      "If you enjoy solving problems and seeing your work come to life on a screen, web development is one of the most direct paths from classroom to income.",
    ],
  },
  {
    slug: "getting-started-with-crypto-trading",
    title: "Getting Started with Crypto Trading: A Beginner's Guide",
    excerpt:
      "Thinking about our Crypto Trading Hybrid course? Here's what beginners should understand before they start.",
    date: "May 30, 2026",
    author: "SF Digital Solutions",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=900&auto=format&fit=crop",
    content: [
      "Crypto trading has moved from a niche hobby to something many people want a basic understanding of, whether or not they plan to trade actively.",
      "Before opening any account, it's worth understanding the fundamentals: what a blockchain actually is, how exchanges work, and why volatility is part of the territory.",
      "Our Crypto Trading Hybrid program mixes short online lessons with in-person classroom sessions, so students can learn the theory at their own pace and then work through real scenarios with an instructor.",
      "As with any financial topic, we teach this as education, not investment advice — the goal is for students to understand the space clearly enough to make their own informed decisions.",
    ],
  },
];