export const OUTREACH_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGwChpnERV5JcENuYXM2FbrT7XAHjSM11lCSkpnNKAlZbN3g/viewform?usp=dialog";
/** @deprecated kept as alias for any remaining imports */
export const INTERNSHIP_URL = OUTREACH_URL;

export const contacts = [
  { name: "Sidhaanth Kapoor", email: "sidhaanthkapoor@gmail.com" },
  { name: "Sreejith Sreekumar", email: "srjsreek@gmail.com" },
];
export const CONTACT_EMAIL = contacts[0].email;
export const CONTACT_MAILTO = contacts.map((c) => c.email).join(",");
export const SITE_URL = "https://prometheuscoding.org";

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/outreach", label: "Outreach" },
  { to: "/hackathons", label: "Hackathons" },
];

export const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Prometheus" },
  { to: "/curriculum", label: "Curriculum partnerships" },
  { to: "/outreach", label: "Curriculum development & outreach" },
  { to: "/hackathons", label: "Past Hackathons" },
];

export const hackathonsIntro = {
  eyebrow: "Past hackathons",
  title: "Building through collaboration",
  lead:
    "Prometheus hosts hackathons that bring builders together around AI, machine learning, and computer science challenges — creating space for experimentation and shared progress.",
};

export const pastHackathons = [
  {
    id: "aug-ml-2026",
    date: "August 2026",
    title: "AI & Machine Learning Hybrid Hackathon",
    summary:
      "A hybrid format focused on innovative AI and machine learning projects — experimentation, collaboration, and shipping real ideas.",
    tags: ["AI", "Machine Learning", "Hybrid"],
  },
  {
    id: "july-ai-2026",
    date: "July 2026",
    title: "July AI Challenge",
    summary:
      "An online AI challenge for innovators to design, code, and demo working prototypes.",
    tags: ["AI", "Online", "Prototypes"],
  },
];

export const sponsors = [
  {
    name: "featherless.ai",
    href: "https://featherless.ai/",
    logo: "/assets/sponsors/featherless.png",
    className: "sponsor-featherless",
    showName: true,
  },
  {
    name: "RISE Research",
    href: "https://www.riseresearch.org/",
    logo: "/assets/sponsors/rise-final.png",
    className: "sponsor-rise",
    showName: false,
  },
  {
    name: "Flatlogic",
    href: "https://flatlogic.com/",
    logo: "/assets/sponsors/flatlogic.svg",
    className: "sponsor-flatlogic",
    showName: true,
  },
];

/** Organizations Prometheus helps strengthen CS education for */
export const partnerOrgs = [
  {
    name: "featherless.ai",
    href: "https://featherless.ai/",
    focus: "AI infrastructure & applied learning",
    body: "Partnering to connect advanced AI tooling with curriculum and outreach that organizations can adopt and extend.",
  },
  {
    name: "RISE Research",
    href: "https://www.riseresearch.org/",
    focus: "Research-informed education",
    body: "Collaborating on research-backed approaches that help education organizations deepen computer science programming.",
  },
  {
    name: "Flatlogic",
    href: "https://flatlogic.com/",
    focus: "Software & product pathways",
    body: "Supporting organizations that need practical, product-oriented curriculum pathways for software and CS skill-building.",
  },
];

export const aboutSections = [
  {
    title: "Who Prometheus is",
    body: "Prometheus is a computer science curriculum and outreach organization. We partner with schools, nonprofits, and education programs to design, refine, and scale CS curriculum — so organizations can deliver stronger learning experiences without building everything from scratch.",
  },
  {
    title: "How we work",
    body: "We focus on curriculum architecture: clear progressions, project-based modules, and materials that organizations can adapt to their communities. Our outreach work helps partners launch and sustain CS programming with shared resources and collaboration.",
  },
  {
    title: "Who we partner with",
    body: "Prometheus works with education-focused organizations that want to enhance computer science offerings — from curriculum design and sequencing to outreach strategy and community programming like hackathons.",
  },
];

export const curriculumFocus = [
  {
    title: "Curriculum design for organizations",
    body: "Structured CS pathways and modules that partners can adopt, localize, and maintain — oriented around real projects and measurable progress.",
  },
  {
    title: "Enhancing existing programs",
    body: "We help organizations strengthen what they already run: clearer sequencing, better project scaffolds, and materials that scale with their teams.",
  },
  {
    title: "Shared standards, flexible delivery",
    body: "Partners keep ownership of their programs. Prometheus provides curriculum frameworks and collaboration so delivery stays aligned with each organization’s mission.",
  },
];

export const outreachHighlights = [
  {
    title: "Curriculum development",
    body: "Help design and refine CS curriculum modules, progressions, and project frameworks for partner organizations.",
  },
  {
    title: "Organization outreach",
    body: "Support outreach to schools, nonprofits, and education programs — building partnerships that expand access to strong CS curriculum.",
  },
  {
    title: "Program operations",
    body: "Contribute to coordination, documentation, and community initiatives that keep outreach and curriculum work moving.",
  },
];

export const outreachRoles = [
  "Curriculum development collaborators",
  "Organization outreach leads",
  "Partnership and program support",
];
