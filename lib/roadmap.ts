// Rule-based learning roadmap. No AI and no network calls: the plan is built
// from the templates below. All hour figures are rough planning guides, not promises.

export type Goal = "office" | "web" | "design" | "marketing" | "it" | "unsure";
export type Level = "beginner" | "some" | "experienced";

export type RoadmapInput = { goal: Goal; level: Level; hoursPerWeek: number };

export type Phase = {
  title: string;
  focus: string;
  tasks: string[];
  estWeeks: number;
};

export type Roadmap = {
  title: string;
  phases: Phase[];
  totalWeeks: number;
  projects: string[];
  checklist: string[];
  courseSlugs: string[];
};

export const goalOptions: { value: Goal; label: string; hint: string }[] = [
  { value: "office", label: "Computer & office skills", hint: "Word, Excel, email, internet" },
  { value: "web", label: "Web development", hint: "Build websites" },
  { value: "design", label: "Graphic design", hint: "Logos, posters, social media graphics" },
  { value: "marketing", label: "Digital marketing", hint: "Social media, SEO, content" },
  { value: "it", label: "IT support & networking", hint: "Hardware, networks, troubleshooting" },
  { value: "unsure", label: "Not sure yet", hint: "Explore before choosing" },
];

export const levelOptions: { value: Level; label: string }[] = [
  { value: "beginner", label: "Complete beginner" },
  { value: "some", label: "I know some basics" },
  { value: "experienced", label: "I have practical experience" },
];

export const hoursOptions = [3, 5, 8, 12];

type PhaseTemplate = { title: string; focus: string; tasks: string[]; hours: number };

type Template = {
  title: string;
  phases: PhaseTemplate[];
  projects: string[];
  checklist: string[];
  courseSlugs: string[];
};

const templates: Record<Goal, Template> = {
  office: {
    title: "Computer & Office Skills Roadmap",
    phases: [
      {
        title: "Computer fundamentals",
        focus: "Be comfortable with your computer and the internet.",
        tasks: ["Practise typing daily", "Organise files and folders", "Learn safe internet and email habits"],
        hours: 10,
      },
      {
        title: "Documents with Word",
        focus: "Create clean, professional documents.",
        tasks: ["Format text, headings and lists", "Create a CV and a formal letter", "Learn the most-used shortcuts"],
        hours: 12,
      },
      {
        title: "Spreadsheets with Excel",
        focus: "Organise and calculate data.",
        tasks: ["Enter, format and sort data", "Use basic formulas (SUM, IF, VLOOKUP/XLOOKUP)", "Build a simple chart"],
        hours: 16,
      },
      {
        title: "Presentations and online work",
        focus: "Present your work and collaborate online.",
        tasks: ["Build a short presentation", "Use email, calendars and cloud storage", "Practise a video-call setup"],
        hours: 10,
      },
    ],
    projects: ["A professional CV and cover letter", "A monthly budget spreadsheet with formulas", "A 5-slide presentation on a topic you know"],
    checklist: ["Type comfortably without looking at the keyboard", "Create and format a multi-page document", "Use at least five Excel formulas", "Send a professional email with attachments"],
    courseSlugs: ["professional-computer-basics-course"],
  },
  web: {
    title: "Web Development Roadmap",
    phases: [
      {
        title: "Computer and web basics",
        focus: "Understand how the web works and set up your tools.",
        tasks: ["Learn how browsers, domains and hosting work", "Set up a code editor", "Learn file and folder organisation"],
        hours: 10,
      },
      {
        title: "HTML and CSS",
        focus: "Structure and style web pages.",
        tasks: ["Build pages with headings, links, images and forms", "Learn layout with flexbox and grid", "Make a page responsive on mobile"],
        hours: 30,
      },
      {
        title: "JavaScript basics",
        focus: "Add behaviour to your pages.",
        tasks: ["Learn variables, functions and conditions", "Handle clicks and form input", "Build a small interactive widget"],
        hours: 30,
      },
      {
        title: "Build and publish",
        focus: "Turn your skills into live projects.",
        tasks: ["Learn Git and GitHub basics", "Deploy a site to free hosting", "Get feedback and improve it"],
        hours: 20,
      },
    ],
    projects: ["A personal portfolio website", "A landing page for a small local business (practice project)", "A small interactive app such as a to-do list or calculator"],
    checklist: ["Build a responsive page from scratch", "Explain the difference between HTML, CSS and JavaScript", "Publish a site on the internet", "Keep a project in a GitHub repository"],
    courseSlugs: ["web-development", "professional-computer-basics-course"],
  },
  design: {
    title: "Graphic Design Roadmap",
    phases: [
      {
        title: "Design principles",
        focus: "Learn what makes a design clear and attractive.",
        tasks: ["Study layout, spacing, contrast and hierarchy", "Learn colour and typography basics", "Collect examples you admire"],
        hours: 12,
      },
      {
        title: "Tools",
        focus: "Get comfortable with a design tool.",
        tasks: ["Learn the interface and shortcuts", "Work with shapes, text, images and layers", "Export for print and for screen"],
        hours: 20,
      },
      {
        title: "Branding and social graphics",
        focus: "Design for real business needs.",
        tasks: ["Create a simple logo and colour palette", "Design a set of social media posts", "Design a poster or flyer"],
        hours: 24,
      },
      {
        title: "Portfolio",
        focus: "Show your best work.",
        tasks: ["Choose 5 to 8 strongest pieces", "Write a short description of each", "Publish your portfolio online"],
        hours: 12,
      },
    ],
    projects: ["A logo and mini brand sheet for an imaginary business", "A set of 6 matching social media posts", "An event poster or flyer"],
    checklist: ["Explain why a design works (or doesn't)", "Deliver a logo in the formats a client needs", "Keep a consistent style across a set of designs", "Have an online portfolio link to share"],
    courseSlugs: ["graphic-design"],
  },
  marketing: {
    title: "Digital Marketing Roadmap",
    phases: [
      {
        title: "Marketing basics",
        focus: "Understand audiences and goals.",
        tasks: ["Define a target audience", "Learn the basics of branding and offers", "Study how local businesses market online"],
        hours: 10,
      },
      {
        title: "Social media and content",
        focus: "Plan and create consistent content.",
        tasks: ["Build a weekly content calendar", "Write captions and create simple graphics", "Learn platform basics for Facebook and Instagram"],
        hours: 20,
      },
      {
        title: "SEO and websites",
        focus: "Help people find a business through search.",
        tasks: ["Learn how keywords and search intent work", "Check page titles, descriptions and headings", "Understand local search basics"],
        hours: 16,
      },
      {
        title: "Measure and report",
        focus: "Show what worked.",
        tasks: ["Read basic analytics", "Compare what content performed best", "Write a one-page results summary"],
        hours: 12,
      },
    ],
    projects: ["A 4-week content calendar for a small business (practice project)", "A simple SEO review of a local website", "A mini campaign plan with goals and a budget outline"],
    checklist: ["Describe a target audience clearly", "Plan a month of content", "Explain what a page title and meta description do", "Read a basic analytics report"],
    courseSlugs: ["digital-marketing"],
  },
  it: {
    title: "IT Support & Networking Roadmap",
    phases: [
      {
        title: "Computer and OS basics",
        focus: "Know your way around hardware and operating systems.",
        tasks: ["Identify the parts of a PC", "Install and update an operating system", "Learn file systems and user accounts"],
        hours: 14,
      },
      {
        title: "Networking basics",
        focus: "Understand how devices connect.",
        tasks: ["Learn IP addresses, DNS and routers", "Set up a home or lab network", "Learn Wi-Fi security basics"],
        hours: 20,
      },
      {
        title: "Troubleshooting",
        focus: "Fix problems methodically.",
        tasks: ["Follow a step-by-step troubleshooting method", "Diagnose slow PCs and connection problems", "Keep a log of problems and fixes"],
        hours: 16,
      },
      {
        title: "Security habits",
        focus: "Protect people and devices.",
        tasks: ["Learn password and backup best practice", "Recognise phishing", "Learn basic malware cleanup steps"],
        hours: 10,
      },
    ],
    projects: ["A diagram of your home network", "A PC upgrade or build checklist", "A troubleshooting log with at least 5 solved cases"],
    checklist: ["Name the main PC components and their jobs", "Explain what an IP address and DNS do", "Follow a clear troubleshooting process", "Explain basic safe-computing habits to others"],
    courseSlugs: ["networking-hardware", "it-diploma", "professional-computer-basics-course"],
  },
  unsure: {
    title: "Explore-First Roadmap",
    phases: [
      {
        title: "Computer fundamentals",
        focus: "Build the base every path needs.",
        tasks: ["Learn typing, files and safe internet use", "Learn basic Word and Excel", "Write down what you enjoy and what you don't"],
        hours: 12,
      },
      {
        title: "Try three paths",
        focus: "Spend a few hours on each before choosing.",
        tasks: ["Build a tiny web page", "Design one social media post", "Plan one week of social media content"],
        hours: 12,
      },
      {
        title: "Choose a direction",
        focus: "Pick the path that fits you.",
        tasks: ["Compare how each trial felt", "Talk to someone working in that field", "Switch to the matching roadmap"],
        hours: 4,
      },
    ],
    projects: ["One small piece of work from each path you tried", "A one-page note on which path you chose and why"],
    checklist: ["Complete the fundamentals", "Try at least two different paths", "Choose one direction for the next three months"],
    courseSlugs: ["professional-computer-basics-course", "web-development", "graphic-design", "digital-marketing"],
  },
};

export function buildRoadmap(input: RoadmapInput): Roadmap {
  const t = templates[input.goal];
  let phases = t.phases;
  // People with practical experience can skip the first foundation phase.
  if (input.level === "experienced" && phases.length > 2) phases = phases.slice(1);

  // Beginners get a little more time per phase, people with some basics a little less.
  const factor = input.level === "beginner" ? 1.2 : input.level === "some" ? 1 : 0.8;
  const hoursPerWeek = Math.max(1, input.hoursPerWeek);

  const built: Phase[] = phases.map((p) => ({
    title: p.title,
    focus: p.focus,
    tasks: p.tasks,
    estWeeks: Math.max(1, Math.ceil((p.hours * factor) / hoursPerWeek)),
  }));

  return {
    title: t.title,
    phases: built,
    totalWeeks: built.reduce((sum, p) => sum + p.estWeeks, 0),
    projects: t.projects,
    checklist: t.checklist,
    courseSlugs: t.courseSlugs,
  };
}
