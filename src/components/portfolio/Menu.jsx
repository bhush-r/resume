// import Work1 from "../../assets/work-1.svg";
import Work1 from "../../assets/Works1Clg.png";
import Work2 from "../../assets/Works2Lexi.png";
import Work3 from "../../assets/Works3Spam.png";
import Work4 from "../../assets/Works4GHRCE.png";
import Work5 from "../../assets/Works5hording.png";
import Work6 from "../../assets/Works6What.png";
import Work7 from "../../assets/Works7Loan.png";

// UPDATED: Added fields for detailed project information to support the new Project Modal
const Menu = [
  {
    id: 1,
    image: Work1,
    title: "College Connect (Web Platform)",
    category: "Web App",
    description: "A centralized student collaboration platform that enables real-time communication, academic resource sharing, notice management, and branch-wise interaction within the college ecosystem.",
    tech: ["Firebase","MUI", "MongoDB","JavaScript", "Authentication", "React.js"],
    repo_link: "https://github.com/bhush-r/college-chat-app.git",
    live_link: "https://colleges-connect.vercel.app/", // Placeholder link
  },
  {
    id: 3,
    image: Work3,
    title: "AI Spam Detector",
    category: "Web App",
    description: "A machine learning based web application that classifies messages as Spam or Ham using NLP preprocessing and predictive modeling with confidence scoring.",
    tech: ["React.Js","Express.js", "Machine Learning", "NLP", "Firebase"],
    repo_link: "https://github.com/bhush-r/spam-detection.git",
    live_link: "https://spam-checker-silk.vercel.app/", // No live link for concept art
  },
  {
    id: 7,
    image: Work7,
    title: "Loan Reminder App",
    category: "Flutter",
    description: "A smart EMI tracking mobile app that reminds users about upcoming payments, maintains history, and manages multiple loans efficiently.",
    tech: ["Flutter", "Firebase", "SQLite/MySQL", "Notifications","Dart"],
    repo_link: "https://github.com/bhush-r/fire_reminder_flutter.git",
    live_link: null,
  },
  {
    id: 4,
    image: Work4,
    title: "GHRCE Connect (Android App)",
    category: "Android",
    description: "A college companion mobile app providing notices, study materials, discussions, faculty info, and previous year questions for students in a single platform.",
    tech: ["Java", "Android","XML","Firebase", "Authentication", "Kotlin"],
    repo_link: "https://github.com/bhush-r/GHRCE_College.git",
    live_link: null,
  },
  {
    id: 5,
    image: Work5,
    title: "Hoarding Management ERP",
    category: "Enterprise",
    description: "An enterprise dashboard system for managing advertisement hoardings, campaigns, inventory, employee records, and document verification with role-based access.",
    tech: ["React","Authentication","Firebase", "javaScript", "Responsive Design", "Ant Design"],
    repo_link: "https://github.com/bhush-r/hoarding-mgmt.git",
    live_link: "https://hoarding-mgmt.vercel.app/",
  },
  {
    id: 6,
    image: Work6,
    title: "WhatsApp Clone",
    category: "Android",
    description: "A real-time messaging application replicating core chat functionalities including messaging, online status, notifications, and media sharing.",
    tech: ["Kotlin", "MVVM","Firebase Realtime Database", "Authentication", "Push Notifications"],
    repo_link: "https://github.com/bhush-r/WhatsApp.git",
    live_link: null,
  },
  {
    id: 2,
    image: Work2,
    title: "LexiMind AI Dictionary",
    category: "Web App",
    description: "An AI powered language learning assistant that explains words contextually, provides pronunciation guidance, quizzes, and multilingual translation.",
    tech: ["ReactJs", "Firebase","AI API","RestAPI", "Context API", "Web Speech API","JavaScript"],
    repo_link: "https://github.com/bhush-r/Dictionary.git",
    live_link: "https://leximindai.vercel.app/",
  },
];
export default Menu;
