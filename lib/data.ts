export type DigitalProduct = {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  fileType: string;
  price: string;
  previewNote: string;
};

export const digitalProducts: DigitalProduct[] = [
  {
    slug: "complete-office-skills-handbook",
    title: "Complete Office Skills Handbook",
    description:
      "Computer Basics, Keyboard Shortcuts, MS Word, MS Excel and MS PowerPoint — plus two bonus sections not available anywhere else: 10 essential Excel functions, and a guide to presentations people actually watch.",
    icon: "BookOpenCheck",
    fileType: "PDF, 6 pages",
    price: "Rs. 990",
    previewNote: "One-time purchase",
  },
  {
    slug: "professional-cv-template",
    title: "Professional CV Template",
    description:
      "A clean, editable Word CV template with a Profile, Work Experience, Education, Skills and Certificates section already laid out — just fill in your details.",
    icon: "FileEdit",
    fileType: "Word (.docx)",
    price: "Rs. 450",
    previewNote: "One-time purchase",
  },
];

export type RecordedCourse = {
  slug: string;
  title: string;
  description: string;
  curriculum: string[];
  duration: string;
  price: string;
  deliveryNote: string;
};

// NOTE: price is a placeholder suggestion — confirm with the business owner
// and update before this goes live.
export const recordedCourses: RecordedCourse[] = [
  {
    slug: "professional-computer-basics-recorded",
    title: "Professional Computer Basics Course — Recorded",
    description:
      "The same Professional Computer Basics curriculum as our live course, as self-paced recorded video lessons — learn on your own schedule.",
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
    duration: "Self-paced — lifetime access",
    price: "Rs. 3,500",
    deliveryNote: "Access delivered via the SF Digital Solutions LMS after payment is confirmed.",
  },
];

export type DigitalBundle = {
  slug: string;
  title: string;
  description: string;
  includes: string[];
  originalPrice: string;
  bundlePrice: string;
  savings: string;
};

export const digitalBundles: DigitalBundle[] = [
  {
    slug: "career-starter-bundle",
    title: "Career Starter Bundle",
    description:
      "Everything you need to look job-ready: the complete office skills handbook plus a professional CV template, bundled together.",
    includes: ["Complete Office Skills Handbook", "Professional CV Template"],
    originalPrice: "Rs. 1,440",
    bundlePrice: "Rs. 1,190",
    savings: "Rs. 250",
  },
];

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
  // Optional link to a downloadable syllabus PDF.
  syllabusUrl?: string;
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
  fileUrl: string; // path to the actual downloadable file
};

export const freeResources: Resource[] = [
  {
    slug: "excel-formula-cheat-sheet",
    title: "Excel Formula Cheat Sheet",
    description: "The most-used Excel formulas for everyday office work, in one quick-reference sheet.",
    icon: "FileSpreadsheet",
    fileType: "PDF Guide",
    fileUrl: "/resources/excel-formula-cheat-sheet.pdf",
  },
  {
    slug: "ms-word-shortcuts",
    title: "MS Word Shortcuts",
    description: "Keyboard shortcuts that speed up formatting, editing and document navigation in Word.",
    icon: "FileText",
    fileType: "PDF Guide",
    fileUrl: "/resources/ms-word-shortcuts.pdf",
  },
  {
    slug: "keyboard-shortcuts-guide",
    title: "Keyboard Shortcuts Guide",
    description: "Essential Windows and general typing shortcuts every beginner should know.",
    icon: "Keyboard",
    fileType: "PDF Guide",
    fileUrl: "/resources/keyboard-shortcuts-guide.pdf",
  },
  {
    slug: "computer-basics-guide",
    title: "Computer Basics Guide",
    description: "A simple starting-point guide to files, folders and everyday computer tasks.",
    icon: "Monitor",
    fileType: "PDF Guide",
    fileUrl: "/resources/computer-basics-guide.pdf",
  },
];

export type PortfolioItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  /** Live link. Leave out for concept demos that have no live site. */
  url?: string;
  /** Kind of website, e.g. "Education platform". */
  websiteType: string;
  /** Short list of what the project includes. */
  features: string[];
  /** Optional screenshot path, e.g. "/images/portfolio/skilllift.jpg" (put the file in public/images/portfolio). */
  image?: string;
  /** Set true for sample/demo projects so they are clearly labelled as demonstrations. */
  isDemo?: boolean;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "skilllift-education",
    title: "SkillLift Education",
    tagline: "Course platform for a crypto-trading education brand",
    description:
      "A full course-sales website built for SkillLift Education, serving learners in New Zealand, Australia and Sri Lanka. Includes a flagship course sales page, instructor profiles, an LMS login portal, and a full course enrollment flow.",
    tags: ["Web Development", "Education Platform", "LMS Integration"],
    url: "https://skill-lift-nz.vercel.app/",
    websiteType: "Education / course-sales platform",
    features: ["Course sales page", "Instructor profiles", "LMS login portal", "Course enrolment flow"],
  },
  {
    slug: "openday-queue-system",
    title: "Open Day Queue System",
    tagline: "Digital token & queue management app for an Open Day event",
    description:
      "A web app built to manage visitor flow at an Open Day event — visitors receive a digital queue token and can track their place in line in real time, cutting down physical queues and wait-time confusion at the venue.",
    tags: ["Web App", "Event Management", "Real-Time Queue"],
    url: "https://openday-tokens.netlify.app/",
    websiteType: "Event web app",
    features: ["Digital queue tokens", "Real-time queue position tracking"],
  },
  {
    slug: "demo-restaurant-menu",
    title: "Restaurant Menu & Ordering Site",
    tagline: "Concept demo for a fictional restaurant",
    description:
      "A concept design for a restaurant website with a digital menu, opening hours and a one-tap WhatsApp order button, designed mobile-first. It shows the kind of site we can build; it is not a client project.",
    tags: ["Concept demo", "Responsive", "WhatsApp ordering"],
    websiteType: "Restaurant website",
    features: ["Digital menu with categories", "Opening hours and location", "One-tap WhatsApp ordering", "Mobile-first layout"],
    image: "/images/portfolio/demo-restaurant.png",
    isDemo: true,
  },
  {
    slug: "demo-salon-booking",
    title: "Salon Appointment Page",
    tagline: "Concept demo for a fictional salon",
    description:
      "A concept design for a salon or beauty business: services, a gallery and an easy way to request an appointment on WhatsApp. It shows the kind of site we can build; it is not a client project.",
    tags: ["Concept demo", "Responsive", "WhatsApp booking"],
    websiteType: "Service business website",
    features: ["Services list", "Photo gallery", "Appointment requests on WhatsApp", "Contact details and map"],
    image: "/images/portfolio/demo-salon.png",
    isDemo: true,
  },
  {
    slug: "demo-online-shop",
    title: "Small Online Shop",
    tagline: "Concept demo for a fictional gift shop",
    description:
      "A concept design for a small online shop with a product catalogue, product pages and simple ordering by WhatsApp or bank transfer. It shows the kind of site we can build; it is not a client project.",
    tags: ["Concept demo", "Responsive", "E-commerce"],
    websiteType: "E-commerce website",
    features: ["Product catalogue by category", "Product pages with photos", "Ordering by WhatsApp or bank transfer", "Mobile-friendly shopping"],
    image: "/images/portfolio/demo-shop.png",
    isDemo: true,
  },
];

export type Testimonial = {
  name: string;
  context: string; // course or how they know SF
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Lavan",
    context: "Basic Computer Course student",
    quote:
      "Studying the Basic Computer Course at SF Digital Solutions was a really great experience. Sir Fahim explained everything clearly and patiently, and cleared every doubt I had. Every lesson was easy to understand, and now I feel much more confident using a computer. I recommend SF Digital Solutions to anyone who wants to learn computer basics.",
  },
  {
    name: "H. M. Anfas",
    context: "Computer Basics student",
    quote:
      "Thank you for teaching me Microsoft Word, Excel, PowerPoint and Canva in such a simple and clear way. Every lesson was explained with practical examples, which made it easy to understand, and I never hesitated to ask questions. I now have the skills to apply what I learned at work and create professional presentations and designs.",
  },
  {
    name: "Babani",
    context: "Computer Basics student",
    quote:
      "Choosing SF Digital Solutions is the real reason I now have computer knowledge. I didn't even know how to use a keyboard before, but now I can type quickly and confidently. I can go for any job without fear now, all because everything was taught in such an easy way. Thank you so much, sir!",
  },
  {
    name: "Mohamed Ajmal",
    context: "Former student",
    quote:
      "I'm a former student of SF Digital Solutions. The instructor has amazing patience and taught me a lot of things I didn't know before, in a simple and easy way that was genuinely useful. I recommend this course to anyone who wants to learn at their own convenient pace — the classes are simple, clear and easy to understand.",
  },
  {
    name: "Nishanthy",
    context: "Student",
    quote:
      "Your service is immeasurable, and your dedication deserves praise. Your guidance will always be a light for us, and your care shows in every effort you make for your students' future. Our heartfelt thanks and appreciation for your invaluable service.",
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
      "Business websites",
      "Personal and portfolio websites",
      "Landing pages",
      "E-commerce websites",
      "Website redesigns",
      "Website maintenance and updates",
    ],
    process: [
      "Initial enquiry and requirements gathering",
      "Quotation, project scope and written agreement",
      "Advance payment and project confirmation",
      "Design approval, development, testing and regular progress updates",
      "Final payment, website handover and agreed support",
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
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop",
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
    syllabusUrl: "/resources/professional-computer-basics-syllabus.pdf",
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
      "A recognized SF Digital Solutions LK IT Diploma certificate to support job applications",
    ],
    comingSoon: true,
  },
];

export const teachers: Teacher[] = [
  {
    slug: "fahim",
    name: "Fahim",
    role: "Founder & IT / Digital Skills Trainer",
    bio: "Founder of SF Digital Solutions LK, focused on practical IT education and digital solutions. Helping students, job seekers and professionals build essential computer and digital skills through beginner-friendly, practical training.",
    image: "/images/team/fahim.jpg",
  },
];

export const posts: Post[] = [
  {
    slug: "how-to-choose-a-website-for-your-small-business-sri-lanka",
    title: "How to Choose the Right Website for Your Small Business in Sri Lanka",
    excerpt:
      "Landing page, business website or online shop? Here is how to decide, and what to ask before you pay anyone.",
    date: "October 24, 2026",
    author: "SF Digital Solutions LK",
    category: "Websites",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
    content: [
      "Many small business owners know they need a website but are not sure what kind. Before you talk to any developer, it helps to answer one question: what should the website do for your business? Get you enquiries? Show your work? Take orders? The answer decides almost everything else.",
      "If you want people to contact you about one service or one campaign, a single landing page is often enough. If you want to present your whole business, with services, an About section and contact details, a multi-page business website fits better. If you want to sell products online, you need an online shop. A personal or portfolio website suits freelancers who want to show their work.",
      "Think about your customers' phones. Many people in Sri Lanka browse on mobile, so a site that is hard to read on a small screen loses visitors. Ask to see how your site will look on a phone, not only on a computer.",
      "Get your content ready early. A logo, a few clear photos of your work and the text that explains what you do take more time than most people expect, and delays in content are one of the most common reasons websites take longer than planned.",
      "Ask who pays for what. The domain name (for example yourbusiness.lk) and web hosting are usually yearly costs paid to the provider, separate from the design work. Ask who will register them, whose name they will be in, and who will pay the renewals.",
      "Always ask for a written quotation before you pay anything. It should say exactly what is included, the total price, the delivery timeline, how many rounds of changes are included, and what happens if you want extra pages or features later. If something is not written down, do not assume it is included.",
      "Be careful with payments. Pay only to the account details given in the written quotation, keep your receipt, and never share your online banking password, PIN or one-time password with anyone, including a developer.",
      "Finally, ask what happens after the website goes live. Fixing a defect in the delivered work is different from ongoing maintenance, content updates or new features, and the last three are normally paid work. Knowing this in advance avoids surprises.",
      "At SF Digital Solutions LK we work this way: we talk through your needs, send a written quotation, agree the scope, build and test the site, and hand it over with the agreed support. You can read how it works on our Website Design service page and send a quote request from there.",
    ],
  },
  {
    slug: "five-excel-skills-every-beginner-should-learn-first",
    title: "5 Excel Skills Every Beginner Should Learn First",
    excerpt:
      "You do not need to learn every Excel function. These five skills cover most everyday office work.",
    date: "October 24, 2026",
    author: "SF Digital Solutions LK",
    category: "Office Skills",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    content: [
      "Excel has hundreds of functions, which makes it look harder than it is. For most office, admin and small-business tasks, a handful of skills do most of the work. If you are starting from zero, learn these five first.",
      "1. Entering and formatting data cleanly. Put one kind of information in each column, give every column a clear heading, and keep the rows consistent. Clean data makes every later step easier. Learn to adjust column widths, apply number and date formats, and turn a plain range into a table.",
      "2. Sorting and filtering. Once your data is in a table, sorting (for example from highest to lowest) and filtering (for example showing only one month or one customer) let you find answers in seconds instead of scrolling through hundreds of rows.",
      "3. Basic formulas. Start with SUM, AVERAGE, MIN, MAX and COUNT. Then learn the IF function, which lets a cell show different results depending on a condition, such as marking a payment as Paid or Pending. Remember that every formula starts with an equals sign.",
      "4. Looking up information. Lookup functions find a value in one table and bring it into another, for example finding a product price from a product code. XLOOKUP is available in newer versions of Excel (Microsoft 365 and Excel 2021 onwards). Older versions use VLOOKUP for the same job.",
      "5. Simple charts. A clear column or line chart often explains your numbers better than a table. Learn to choose the right chart type, give it a title and label the axes so that anyone can read it without asking you what it means.",
      "A good way to practise is to build something you actually need, such as a monthly budget, a simple stock list or a class attendance sheet. Real tasks teach faster than exercises, and you finish with a file you can use.",
      "If you would like guided practice, Excel is part of our Professional Computer Basics Course, where we start from the very beginning and build up step by step.",
    ],
  },
  {
    slug: "how-to-plan-your-weekly-study-time-when-learning-a-new-skill",
    title: "How to Plan Your Weekly Study Time When Learning a New Skill",
    excerpt:
      "A simple routine beats motivation. Here is how to fit learning into a busy week and actually stick to it.",
    date: "October 24, 2026",
    author: "SF Digital Solutions LK",
    category: "Learning Tips",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop",
    content: [
      "Most people who give up on a new skill do not fail because it is too difficult. They stop because they never built a routine. Motivation comes and goes, but a simple weekly plan keeps you moving on the days you do not feel like studying.",
      "Start by being honest about your time. If you work or study during the day, three to five hours a week may be realistic. It is better to plan a smaller number of hours that you will really keep than a big number that falls apart in the second week.",
      "Choose fixed slots and write them down, for example Tuesday and Thursday evenings and one hour on Saturday morning. Treat them like appointments. Several short sessions usually work better than one very long session, because you remember more when you come back to a topic more often.",
      "Spend most of your time practising, not only watching or reading. Watch a lesson, then close it and try to do the task yourself. If you are learning Word, build a CV. If you are learning web design, build a small page. Practice is where the skill actually forms.",
      "End every session by making or finishing something small, even if it is only one worksheet or one section of a page. Finishing gives you a feeling of progress and a clear place to start next time.",
      "Review once a week. Spend ten minutes looking at what you did, what felt difficult and what you will do next. If a topic is taking much longer than planned, that is normal. Adjust the plan instead of giving up.",
      "If you are not sure what order to learn things in, we built a free Learning Roadmap Planner on this website. You choose your goal, your level and how many hours you can study each week, and it gives you a step-by-step plan with practice projects and matching courses. It is a general planning guide, not a promise of any result, and you do not need an account to use it.",
      "If you prefer guided classes, take a look at the courses on our website, and message us if you want help choosing the right one.",
    ],
  },
  {
    slug: "best-digital-skills-for-beginners-in-sri-lanka",
    title: "Best Digital Skills for Beginners in Sri Lanka",
    excerpt:
      "Not sure where to start with digital skills? Here's a practical order to learn them in.",
    date: "September 20, 2026",
    author: "SF Digital Solutions LK",
    category: "Office Skills",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    content: [
      "'Digital skills' can sound like a huge, vague category. In practice, for most beginners in Sri Lanka looking for office or freelance work, it breaks down into a fairly short, practical list — and the order you learn them in matters.",
      "Start with computer fundamentals and typing. It sounds basic, but comfortable, accurate typing and knowing your way around files and folders is the foundation everything else sits on.",
      "Next, MS Office — Word for documents and CVs, Excel for data and simple reports, PowerPoint for presentations. These three alone qualify you for a huge range of office, admin and data-entry roles.",
      "From there, branch out based on interest: Canva and basic design skills if you enjoy visual work, or a light introduction to digital marketing and social media if you're drawn to business and communication. Both build naturally on the office foundation you already have.",
      "This is the exact progression we follow in our Professional Computer Basics Course — starting from zero assumptions and building toward genuinely useful, job-ready skills.",
    ],
  },
  {
    slug: "computer-courses-after-al-what-should-you-learn",
    title: "Computer Courses After A/L: What Should You Learn?",
    excerpt:
      "Finished your A/Ls and not sure what to study next? Here's how to think about practical computer courses.",
    date: "September 16, 2026",
    author: "SF Digital Solutions LK",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop",
    content: [
      "Finishing A/Ls in Sri Lanka often comes with the same question: what next? Waiting for university results can mean months of uncertainty — and that time is exactly when a practical skills course pays off the most.",
      "The mistake many school leavers make is jumping straight into a narrow, advanced course before they've mastered the basics. If you can't yet type confidently, format a document properly, or build a simple spreadsheet, that's the place to start — not a specialised course that assumes you already can.",
      "A solid computer basics foundation (MS Word, Excel, PowerPoint, plus a design tool like Canva) makes every course after it easier, whether that's web development, graphic design or digital marketing. It also makes you immediately useful for part-time or entry-level office work while you wait on university admissions.",
      "Our Professional Computer Basics Course was built with exactly this stage of life in mind — a focused, 6-week foundation that's useful on its own and a strong base for whatever you study next.",
    ],
  },
  {
    slug: "10-excel-functions-every-office-worker-should-know",
    title: "10 Excel Functions Every Office Worker Should Know",
    excerpt:
      "Beyond SUM and AVERAGE — the functions that separate a confident Excel user from a beginner.",
    date: "September 10, 2026",
    author: "SF Digital Solutions LK",
    category: "Office Skills",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    content: [
      "Most people learn SUM and AVERAGE early and stop there. But a handful of other functions do most of the heavy lifting in real office spreadsheets — and they're not hard to pick up once you've seen them in action.",
      "IF lets a cell react to a condition — marking an order 'Late' or 'On Time' automatically instead of typing it by hand. COUNTIF and SUMIF go a step further, counting or adding values that match a condition, like totaling sales for one branch out of a long list.",
      "VLOOKUP (or its modern cousin, INDEX/MATCH) is the one that impresses managers — it looks up a value in one table and pulls back matching information from another, which is exactly how price lists, staff records and inventory sheets are usually connected.",
      "Rounding out the list: TEXT for formatting numbers and dates consistently, TRIM for cleaning messy pasted data, TODAY for dates that update automatically, IFERROR for hiding ugly error messages, and CONCATENATE for joining text from separate cells.",
      "None of these need to be memorised in one sitting. In our Professional Computer Basics Course, they're taught the way they're actually used — through small, realistic exercises, not abstract formulas on a whiteboard.",
    ],
  },
  {
    slug: "how-digital-skills-can-improve-your-career",
    title: "How Digital Skills Can Improve Your Career",
    excerpt:
      "From office basics to design and marketing, practical digital skills open doors across almost every industry.",
    date: "September 2, 2026",
    author: "SF Digital Solutions LK",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
    content: [
      "Digital skills used to be something only 'tech people' needed. That's no longer true — practical computer and digital skills now support almost every career path, from office administration to retail to healthcare.",
      "Someone who can prepare a professional CV, organize files properly, build a simple spreadsheet report, and put together a clean presentation stands out immediately, even in non-technical roles.",
      "Beyond office basics, skills like Canva design or a foundational understanding of social media and digital marketing let people support their workplace — or their own small business — in ways that used to require hiring outside help.",
      "The goal isn't to turn everyone into a developer or designer overnight. It's to build practical, confidence-boosting skills that make day-to-day work easier and job applications stronger — which is exactly what we focus on at SF Digital Solutions LK.",
    ],
  },
  {
    slug: "ms-excel-skills-every-beginner-should-learn",
    title: "MS Excel Skills Every Beginner Should Learn",
    excerpt:
      "Excel is one of the most requested workplace skills — here are the fundamentals worth learning first.",
    date: "August 18, 2026",
    author: "SF Digital Solutions LK",
    category: "Office Skills",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    content: [
      "Excel can look intimidating at first — rows, columns, endless little cells — but almost every office task built on it comes down to a handful of core skills.",
      "Start with data entry and formatting: entering information cleanly, using consistent formats for dates and numbers, and organizing data into a simple table. This alone saves hours of confusion later.",
      "Next come formulas and functions. Learning SUM, AVERAGE, COUNT, and simple IF statements covers a surprising amount of everyday office work, from budgets to attendance sheets to sales tracking.",
      "From there, basic reports — sorting, filtering, and simple charts — let you turn raw data into something a manager can actually read at a glance. These are the exact skills covered hands-on in our Professional Computer Basics Course, alongside Word, PowerPoint and Canva.",
    ],
  },  {
    slug: "why-computer-skills-are-important-for-office-jobs",
    title: "Why Computer Skills Are Important for Office Jobs",
    excerpt:
      "Almost every office role today expects basic computer confidence. Here's why that skill matters more than most job seekers realize.",
    date: "August 4, 2026",
    author: "SF Digital Solutions LK",
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
];
