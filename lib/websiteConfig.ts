// =====================================================================
// EDITABLE CONTENT for the Website Design service page and policy pages.
//
// Nothing here is a verified price or promise. Every value set to `null`
// is shown to visitors as "Confirmed in your written quotation".
// Fill these in ONLY with terms you can actually deliver.
//
// LEGAL NOTE: the policy pages (/terms, /payment-policy, /delivery-support,
// /privacy) are plain-language summaries. Have a qualified lawyer review
// them before relying on them as a formal contract.
// =====================================================================

export const CONFIRMED_IN_QUOTATION = "Confirmed in your written quotation";

export const websitePolicy = {
  /** e.g. "30 days after handover". null = shown as "specified in your quotation". */
  supportPeriod: null as string | null,
  lastUpdated: "October 2026",
};

export type WebsitePackage = {
  name: string;
  forWhom: string;
  scope: string;
  responsive: boolean;
  features: string[];
  timeline: string | null; // e.g. "2–3 weeks"
  revisions: string | null; // e.g. "2 rounds"
  domainHosting: string | null;
  support: string | null;
  price: string | null; // e.g. "From Rs. 60,000". null = "Request a Quote"
};

export const websitePackages: WebsitePackage[] = [
  {
    name: "Basic Website",
    forWhom: "Individuals, freelancers and very small businesses that need a simple online presence.",
    scope: "A small site with the core pages you need — exact page count agreed in your quotation.",
    responsive: true,
    features: [
      "Clean, mobile-friendly design",
      "Your contact details and WhatsApp link",
      "Basic on-page SEO setup (titles and descriptions)",
    ],
    timeline: null,
    revisions: null,
    domainHosting: null,
    support: null,
    price: null,
  },
  {
    name: "Business Website",
    forWhom: "Small and growing businesses that want to present services, build trust and receive enquiries.",
    scope: "A multi-page business site — pages and sections agreed in your quotation.",
    responsive: true,
    features: [
      "Everything in the Basic Website",
      "Service, About and Contact pages tailored to your business",
      "Enquiry or contact form",
      "Content and SEO setup",
    ],
    timeline: null,
    revisions: null,
    domainHosting: null,
    support: null,
    price: null,
  },
  {
    name: "E-commerce Website",
    forWhom: "Businesses that want to show products online and take orders.",
    scope: "An online store — product count and ordering method agreed in your quotation.",
    responsive: true,
    features: [
      "Product listing and product pages",
      "Ordering method set up as agreed (for example enquiry/WhatsApp orders or a checkout)",
      "Mobile-friendly shopping experience",
    ],
    timeline: null,
    revisions: null,
    domainHosting: null,
    support: null,
    price: null,
  },
];

export const paidExtras = [
  "Domain name registration and yearly renewal",
  "Web hosting fees",
  "Premium themes, plugins or third-party licences",
  "Extra pages beyond the agreed scope",
  "Extra revision rounds beyond those agreed",
  "Logo design, copywriting and photography",
  "New features requested after design approval",
  "Ongoing maintenance and content updates after the support period",
];

export const websiteOfferings = [
  {
    title: "Business websites",
    description: "A professional online presence for your company, with the pages and information your customers look for.",
  },
  {
    title: "Personal & portfolio websites",
    description: "Show your work, skills or story on a clean, personal website.",
  },
  {
    title: "Landing pages",
    description: "A focused single page for a campaign, product or event.",
  },
  {
    title: "E-commerce websites",
    description: "An online store to present your products and receive orders, set up the way we agree in your quotation.",
  },
  {
    title: "Website redesigns",
    description: "Refresh an outdated site with a modern look, a mobile-friendly layout and clearer structure.",
  },
  {
    title: "Maintenance & updates",
    description: "Content updates and technical upkeep for your website, quoted separately from the original project.",
  },
];

export const processSteps = [
  {
    title: "Enquiry and requirements",
    description: "You tell us about your business and what you need. We ask questions until the requirements are clear.",
  },
  {
    title: "Quotation, scope and written agreement",
    description: "We send a written quotation that sets out the scope, price, timeline and terms. Work starts only once these are confirmed in writing.",
  },
  {
    title: "Advance payment and confirmation",
    description: "You pay the agreed advance by bank transfer. We confirm receipt, send a receipt and officially start your project.",
  },
  {
    title: "Design, development and testing",
    description: "We share the design for your approval, build the website, test it, and send you progress updates along the way.",
  },
  {
    title: "Final payment and handover",
    description: "After final approval and final payment, we hand over your website and provide the agreed support.",
  },
];

export const milestones = [
  "Requirements confirmed",
  "Initial design ready",
  "Client feedback received",
  "Development in progress",
  "Testing completed",
  "Final approval",
  "Website delivered",
];

export const paymentSteps = [
  "We discuss your requirements.",
  "We send you a written quotation.",
  "We confirm the project scope and terms in writing.",
  "We share the agreed bank transfer instructions with you privately.",
  "You make the transfer using the payment reference we give you.",
  "We confirm we have received your payment and send you a receipt.",
  "We start work once the agreed advance payment is confirmed.",
  "Further payments follow the milestones set out in your agreement.",
  "Final payment is confirmed before we hand over the deliverables, as set out in your agreement.",
];

export const handoverItems = [
  "Final website files or agreed access",
  "Domain and hosting information",
  "Required administrator logins",
  "Basic instructions for using your website",
  "Relevant documentation",
  "Confirmation of final payment",
];

export const termsItems = [
  { title: "Project scope and deliverables", text: "Exactly what we will build and deliver, written down so both sides know what to expect." },
  { title: "Total price", text: "The full project price, shown in your written quotation." },
  { title: "Advance payment and milestones", text: "How much is paid up front and when each later payment is due." },
  { title: "Delivery timeline", text: "The expected delivery schedule, which also depends on you providing content and feedback on time." },
  { title: "Your responsibilities", text: "The content you need to provide (text, images, logos, access) and the feedback and approvals we need from you." },
  { title: "Revisions", text: "The number of revision rounds included in the price." },
  { title: "Additional work", text: "Work outside the agreed scope is quoted and agreed before we start it." },
  { title: "Cancellation and refunds", text: "What happens to payments and completed work if a project is cancelled by either side." },
  { title: "Ownership and transfer", text: "Which deliverables are transferred to you, and when." },
  { title: "Domain and hosting", text: "Who registers and pays for the domain and hosting, and who holds the accounts." },
  { title: "Support and maintenance", text: "The support period and what it covers, and how ongoing maintenance is handled." },
];
