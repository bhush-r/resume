import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";

// UPDATED: Added fields for detailed project information to support the new Project Modal
const Menu = [
  {
    id: 1,
    image: Work1,
    title: "Project Management Illustration",
    category: "Design",
    description: "A conceptual design project focusing on clear, intuitive project tracking and task delegation interface for a mobile platform. This project emphasizes modern UI/UX principles and accessibility.",
    tech: ["Figma", "Illustrator", "UI/UX", "Prototyping"],
    repo_link: "https://github.com/bhush-r/project-management-ui",
    live_link: "https://example.com/project1", // Placeholder link
  },
  {
    id: 2,
    image: Work2,
    title: "Guest App Walkthrough Screens",
    category: "Art",
    description: "Designed a friendly, animated onboarding sequence for a hospitality guest management application, prioritizing ease of use for non-technical users. Focus was on creating a welcoming first-time user experience.",
    tech: ["Android", "Kotlin", "Lottie", "Motion Design"],
    repo_link: "https://github.com/bhush-r/guest-app-screens",
    live_link: null, // No live link for concept art
  },
  {
    id: 3,
    image: Work3,
    title: "Delivery App Wireframe",
    category: "Branding",
    description: "Created low-fidelity wireframes and user flow diagrams for a local food delivery service, focusing on fast checkout and reliable tracking features. The goal was to optimize the customer journey from search to delivery.",
    tech: ["Wireframing", "User Flow", "Balsamiq", "UX Research"],
    repo_link: "https://github.com/bhush-r/delivery-wireframe",
    live_link: "https://example.com/project3",
  },
  {
    id: 4,
    image: Work4,
    title: "Onboarding Motivation",
    category: "Design",
    description: "A fun, gamified mobile onboarding experience designed to increase initial user retention and completion rates. This leveraged motivational design patterns to encourage full setup.",
    tech: ["Java", "Android Studio", "Gamification", "Material Design"],
    repo_link: "https://github.com/bhush-r/onboarding-motivation-app",
    live_link: "https://example.com/project4",
  },
  {
    id: 5,
    image: Work5,
    title: "iMac Mockup Design",
    category: "Creative",
    description: "A high-fidelity mockup demonstrating responsive web design principles and modern typography within a clean, desktop environment. Showcases front-end development capabilities using modern CSS techniques.",
    tech: ["React", "CSS3", "Responsive Design", "SCSS"],
    repo_link: "https://github.com/bhush-r/imac-mockup",
    live_link: "https://example.com/project5",
  },
  {
    id: 6,
    image: Work6,
    title: "Game Store App Concept",
    category: "Art",
    description: "A conceptual UI/UX design for a mobile game store, emphasizing discovery and personalization features for gamers. The design prioritizes visual hierarchy and engaging content presentation.",
    tech: ["Figma", "Prototyping", "UX Research", "Visual Design"],
    repo_link: "https://github.com/bhush-r/game-store-concept",
    live_link: null,
  },
];
export default Menu;
