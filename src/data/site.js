export const REGISTER_URL = "https://forms.gle/Cc2eyXE55KyKgbbx9";
export const INTERNSHIP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGwChpnERV5JcENuYXM2FbrT7XAHjSM11lCSkpnNKAlZbN3g/viewform?usp=dialog";
export const CONTACT_EMAIL = "prometheuscompsci@gmail.com";
export const SITE_URL = "https://prometheuscoding.org";

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/python", label: "Python" },
  { to: "/gallery", label: "Gallery" },
  { to: "/internships", label: "Internships" },
  { to: "/testimonials", label: "Testimonials" },
];

export const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Prometheus" },
  { to: "/curriculum", label: "Prometheus Coding Curriculum" },
  { to: "/python", label: "Python Programming with Prometheus" },
  { to: "/why", label: "Why Prometheus" },
  { to: "/gallery", label: "Gallery" },
  { to: "/internships", label: "Internships" },
  { to: "/testimonials", label: "Testimonials" },
];

export const stats = [
  { value: "1800+", label: "Students enrolled" },
  { value: "$1700", label: "In hackathon prizes" },
  { value: "50+", label: "Recruited staff & trainees" },
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

export const whyPoints = [
  {
    title: "Live guidance",
    body: "Weekly sessions and coaching help students learn by building.",
  },
  {
    title: "Professional IT workers teach classes",
    body: "Learn from experienced professionals in the field.",
  },
  {
    title: "Project-first, student-friendly path",
    body: "Each level focuses on hands-on coding with real-world outcomes. Clear steps and simple explanations keep learners moving forward.",
  },
];

export const gallery = [
  {
    src: "/assets/gallery/gallery-1.jpeg",
    alt: "Prometheus live coding class",
    caption: "Live coding",
    className: "tall",
    width: 1600,
    height: 950,
  },
  {
    src: "/assets/gallery/gallery-2.jpeg",
    alt: "Prometheus classroom session",
    caption: "Classroom session",
    width: 1600,
    height: 815,
  },
  {
    src: "/assets/gallery/gallery-3.jpeg",
    alt: "Prometheus students learning together",
    caption: "Learning together",
    width: 1600,
    height: 1001,
  },
  {
    src: "/assets/gallery/gallery-4.jpeg",
    alt: "Prometheus student project work",
    caption: "Project work",
    className: "wide",
    width: 1600,
    height: 1013,
  },
];

export const levels = [
  {
    num: "Level 01",
    title: "Basic Python",
    description: "Start your coding journey with variables, data types, and basic I/O.",
    topics: ["Variables", "Data Types", "Input/Output", "Strings", "Numbers"],
  },
  {
    num: "Level 02",
    title: "Advanced Python",
    description: "Learn to make decisions in code, write reusable functions, and work with complex data.",
    topics: ["If/Else", "Loops", "Functions", "Data Structures", "Error Handling"],
  },
  {
    num: "Level 03",
    title: "Machine Learning",
    description: "Build real AI projects and learn how to train models with Python.",
    topics: ["AI Concepts", "Python for ML", "Training Models", "Projects", "Evaluation"],
  },
];

export const internshipHighlights = [
  {
    title: "Teach and mentor",
    body: "Support live classes, help students debug, and grow as an educator.",
  },
  {
    title: "Build real programs",
    body: "Contribute to curriculum, operations, and community initiatives.",
  },
  {
    title: "Grow with impact",
    body: "Join a mission-driven team expanding free tech education for youth.",
  },
];

export const testimonials = [
  {
    quote:
      "My son liked the activities and learning about AI, ML, and DL. He liked the AI python project very much. Hasith is very confident with using Python to train AI and understands how you train AI models in Python. The instructors were professional, knowledgeable, and very patient. Having teachers with real experience in IT and AI made the lessons practical and engaging. They explained complex concepts in a way that was easy for students to understand.",
    attribution: "Krishnaveni — Parent of Hasith (Python L3)",
  },
  {
    quote: "I learned how to code some python with zero previous experience.",
    attribution: "Ishan Mani (Python L1)",
  },
];

export const aboutSections = [
  {
    title: "Who Prometheus is",
    body: "Prometheus is a coding and computer science education organization focused on helping students develop programming skills through structured curriculum, projects, and learning opportunities.",
  },
  {
    title: "What Prometheus teaches",
    body: "Students learn Python, programming fundamentals, and computer science concepts through live classes taught by professionals. The path continues into advanced Python and machine learning projects.",
  },
  {
    title: "Who it is for",
    body: "Prometheus serves youth and students who want practical coding classes, a clear curriculum, and mentorship that builds confidence beyond theory.",
  },
];

export const pythonHighlights = [
  {
    title: "Learn Python from the ground up",
    body: "Start with variables, data types, strings, numbers, and input/output — the building blocks of programming.",
  },
  {
    title: "Write real programs",
    body: "Move into conditionals, loops, functions, data structures, and error handling with guided practice.",
  },
  {
    title: "Apply Python to AI projects",
    body: "Use Python for machine learning concepts, model training, evaluation, and portfolio-ready projects.",
  },
];
