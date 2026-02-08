import RemainderApp from '../assets/images/remainderApp.png';
import PortfolioGen from '../assets/images/portfoliogen.png';
import Assistant from '../assets/images/Assistant.png';
import JobApplicationApp from '../assets/images/ApplicationTracker.png';
const projectsData = [
  {
    id: 1,
    title: "Reminder App",
    shortDesc: "Email-based reminder application",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "A full-stack reminder app where users can create reminders and receive email notifications. Built to understand real-world backend integration and deployment issues.",
    learnings: [
      "React state management",
      "Backend API integration",
      "Environment variables & deployment issues",
    ],
    demoLink: "https://youtu.be/xLsVCGBVQzg",
    image: RemainderApp,
    linkedin: 'https://www.linkedin.com/posts/sumeet-salunke-052070325_reactjs-fullstackdevelopment-webdevelopment-activity-7416822059336458240-XB0I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30'
  },
  {
    id: 2,
    title: "Portfolio & Resume Generator",
    shortDesc: "Generate a portfolio and resume using predefined templates",
    tech: ["HTML", "CSS", "Node.js", "MongoDB"],
    description:
      "A full-stack website where users fill in personal details and select from predefined templates to generate a portfolio and resume.",
    learnings: [
      "Handling form data on the backend",
      "Server-side rendering of templates",
      "Database integration using MongoDB",
      "Deployment and environment configuration",
    ],
    demoLink: "https://youtu.be/Hy_lRogDDRs",
    image: PortfolioGen,
    linkedin: 'https://www.linkedin.com/posts/sumeet-salunke-052070325_webdevelopment-miniproject-frontend-activity-7404814559099785218-OEQK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30'
  }
  , {
    id: 3,
    title: "Voice-Based Assistant",
    shortDesc: "Performs tasks based on user voice commands using Python",
    tech: ["Python", "SpeechRecognition", "pyttsx3"],
    description:
      "A Python-based voice assistant that listens to user voice commands, processes them using speech recognition, and responds through text-to-speech. The assistant can perform basic predefined tasks and interactions.",
    learnings: [
      "Speech recognition and audio processing in Python",
      "Text-to-speech integration using pyttsx3",
      "Command parsing and control flow",
      "Building interactive voice-driven applications",
    ],
    demoLink: "https://youtu.be/NrZYeybMIkE",
    image: Assistant,
    linkedin: 'https://www.linkedin.com/posts/sumeet-salunke-052070325_python-automation-learningbydoing-activity-7408743975978799104-L3nd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30'
  },
  {
    id: 4,
    title: "Job Application Management App",
    shortDesc: "Secure CRUD app for managing job applications",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A full-stack application that allows users to manage their job applications with proper authentication and authorization. Built to understand real-world backend patterns like secure CRUD operations, ownership enforcement, and protected APIs.",
    learnings: [
      "JWT-based authentication and authorization",
      "Ownership enforcement and IDOR prevention",
      "Proper use of HTTP status codes",
      "Secure CRUD operations on user-owned data",
      "Connecting frontend with protected backend APIs",
    ],
    demoLink: "",
    image: JobApplicationApp,
    linkedin:
      "https://www.linkedin.com/posts/sumeet-salunke-052070325_learningwhilebuilding-fullstackdevelopment-ugcPost-7424842005446512640-9V1z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  }


];

export default projectsData;
