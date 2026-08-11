export const REGISTER_URL = "https://forms.gle/Cc2eyXE55KyKgbbx9";
export const INTERNSHIP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGwChpnERV5JcENuYXM2FbrT7XAHjSM11lCSkpnNKAlZbN3g/viewform?usp=dialog";
export const CONTACT_EMAIL = "prometheuscompsci@gmail.com";

export const navLinks = [
  { href: "#why", label: "Why Prometheus" },
  { href: "#gallery", label: "Gallery" },
  { href: "#levels", label: "Levels" },
  { href: "#internships", label: "Internships" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
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

export const teamTiers = [
  {
    label: "The Spark — Co-Founders",
    cols: 2,
    members: [
      {
        name: "Co-Founder Name",
        role: "Co-Founder & Executive Director",
        bio: "Add a short biography about this co-founder's vision, experience, and the work they lead at Prometheus.",
      },
      {
        name: "Co-Founder Name",
        role: "Co-Founder & Program Director",
        bio: "Add a short biography about this co-founder's impact, background, and commitment to student learning.",
      },
    ],
  },
  {
    label: "The Flame — Managers",
    cols: 2,
    members: [
      {
        name: "Manager Name",
        role: "Program Manager",
        bio: "Add a short biography describing the programs, people, or initiatives this manager supports.",
      },
      {
        name: "Manager Name",
        role: "Operations Manager",
        bio: "Add a short biography describing this manager's experience and role in keeping the team moving.",
      },
    ],
  },
  {
    label: "Guiding the Mission — Board Members",
    cols: 2,
    members: [
      {
        name: "Board Member Name",
        role: "Board Member",
        bio: "Add a short biography about this board member's expertise and the perspective they bring to Prometheus.",
      },
      {
        name: "Board Member Name",
        role: "Board Member",
        bio: "Add a short biography about this board member's leadership, community work, or professional background.",
      },
    ],
  },
  {
    label: "Powering Every Program — Staff Members",
    cols: 3,
    members: [
      {
        name: "Staff Member Name",
        role: "Lead Instructor",
        bio: "Add a short biography about this staff member's teaching experience and the subjects they love to share.",
      },
      {
        name: "Staff Member Name",
        role: "Curriculum Developer",
        bio: "Add a short biography about this staff member's skills, projects, and contribution to the curriculum.",
      },
      {
        name: "Staff Member Name",
        role: "Community Coordinator",
        bio: "Add a short biography about this staff member's work with students, families, and the wider community.",
      },
    ],
  },
];
