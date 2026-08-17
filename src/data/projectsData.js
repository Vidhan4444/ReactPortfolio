import RemainderApp from '../assets/images/remainderApp.png';
import PortfolioGen from '../assets/images/portfoliogen.png';
import Assistant from '../assets/images/Assistant.png';
import JobApplicationApp from '../assets/images/ApplicationTracker.png';
import CampusCart from '../assets/images/CampusCart.png';
import MovieSearchApp from '../assets/images/movieApp.png';
import WeatherApp from '../assets/images/WeatherApp.png';
import MiniJira from "../assets/images/MiniJira.png";
import ExpenseTracker from "../assets/images/ExpenseTracker.png";
import ShopHub from "../assets/images/shopHub.png";
const projectsData = [
  {
    id: 1,
    title: "ShopHub - Full Stack E-commerce System",
    shortDesc: "Full stack e-commerce application with authentication, cart, orders, and real-world backend features",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Axios", "GitHub Pages", "Render"],
    description:
      "ShopHub is a full stack e-commerce web application focused on real-world backend architecture and system design. Users can register, verify email, login, browse products, add items to cart, and place orders. The system includes admin functionality for managing products and handling orders. It implements authentication, cart management, order lifecycle, and integrates frontend with backend APIs deployed separately. The frontend is built with React and deployed on GitHub Pages, while the backend is built using Node.js and Express and deployed on Render with MongoDB Atlas.",
    learnings: [
      "Designing scalable backend architecture using MVC pattern",
      "Implementing JWT authentication with access and refresh tokens",
      "Building secure email verification and password reset flows",
      "Designing cart system with stock validation and edge case handling",
      "Implementing order lifecycle management (pending → confirmed → delivered → cancelled)",
      "Using MongoDB transactions for maintaining data consistency",
      "Understanding snapshotting of product data in orders",
      "Handling CORS and cookies for cross-origin authentication",
      "Connecting frontend and backend using Axios with proper token handling",
      "Debugging real-world deployment issues (CORS, cookies, environment variables)",
      "Deploying backend on Render and frontend on GitHub Pages",
      "Managing production-level issues beyond local development"
    ],
    demoLink: "",
    liveLink: "https://sumeet-salunke.github.io/ShopHub/",
    backendAPI: "https://shophub-backend-nb1e.onrender.com",
    githubFrontend: "https://github.com/sumeet-salunke/ShopHub",
    githubBackend: "https://github.com/sumeet-salunke/ShopHub",
    image: ShopHub,
    linkedin: "https://www.linkedin.com/posts/sumeet-salunke-052070325_fullstack-backenddevelopment-nodejs-activity-7451846079337357312-JCkv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  },
  {
    id: 2,
    title: "Mini Jira – Full Stack Task Management System",
    shortDesc: "Full stack project management application with authentication, projects, tasks, and dashboard analytics",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Axios", "GitHub Pages", "Render"],
    description:
      "Mini Jira is a full stack task management web application where users can register, login, create projects, manage tasks, update task status, and add comments on tasks. The project focuses on full stack architecture, REST APIs, authentication using JWT, database relationships, and deploying frontend and backend separately. The frontend is built using React and deployed on GitHub Pages, while the backend API is built with Node.js and Express and deployed on Render with MongoDB Atlas database.",
    learnings: [
      "Designing backend architecture using MVC pattern",
      "Creating REST APIs with Node.js and Express",
      "Implementing authentication using JWT",
      "Designing database relationships between users, projects, tasks, and comments",
      "Connecting React frontend with backend APIs using Axios",
      "Handling protected routes and token-based authentication",
      "Deploying backend on Render and frontend on GitHub Pages",
      "Managing environment variables and CORS for production deployment",
      "Understanding full stack application flow from frontend to database"
    ],
    demoLink: "",
    liveLink: "https://sumeet-salunke.github.io/Mini_Jira_FullStack",
    backendAPI: "https://mini-jira-backend.onrender.com",
    githubFrontend: "https://github.com/sumeet-salunke/Mini_Jira_FullStack",
    githubBackend: "https://github.com/sumeet-salunke/Mini_Jira_FullStack",
    image: MiniJira,
    linkedin: "https://www.linkedin.com/posts/sumeet-salunke-052070325_fullstack-react-nodejs-ugcPost-7445091428483076096-aghl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  },
  {
    id: 3,
    title: "SumeetsCampusCart",
    shortDesc: "Full-stack campus marketplace application",
    tech: ["React", "Node.js", "Express", "MongoDB", "Session Auth"],
    description:
      "A full-stack marketplace web application inspired by platforms like Amazon/Myntra where users can browse products, add items to cart, and place orders. The project focuses on implementing session-based authentication, role-based access control, and deploying a production-ready MERN application.",
    learnings: [
      "Session-based authentication using cookies",
      "Role-based access control (Admin/User)",
      "Handling CORS and cross-domain cookies",
      "Debugging production issues like 304 caching and headers",
      "Deploying full-stack apps (Frontend → Netlify, Backend → Render)",
      "Fixing React Router routing issues on Netlify using _redirects"
    ],
    demoLink: "",
    liveLink: "https://sumeetscampuscart.netlify.app",
    backendAPI: "https://campuscart-api.onrender.com/api/products",
    githubFrontend: "https://github.com/Vidhan4444/campuscart-frontend",
    githubBackend: "https://github.com/Vidhan4444/campuscart-backend",
    image: CampusCart,
    linkedin: "https://www.linkedin.com/posts/sumeet-salunke-052070325_mernstack-fullstackdevelopment-reactjs-share-7435351918018818048-ly29?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  },
  {
    id: 4,
    title: "Movie Search App",
    shortDesc: "JavaScript movie search application using a public API",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API", "Open API"],
    description:
      "A responsive movie search application built with vanilla JavaScript that allows users to search for movies and view posters, titles, and release years dynamically. The project focuses on working with APIs, async/await, DOM manipulation, and rendering dynamic content in a clean card-based UI.",
    learnings: [
      "Using Fetch API to request external movie data",
      "Working with async/await and handling promises",
      "Rendering dynamic movie cards with DOM manipulation",
      "Handling missing poster images using a placeholder fallback",
      "Improving UI with responsive layouts and modern styling",
      "Deploying a JavaScript project using GitHub Pages"
    ],
    demoLink: "",
    liveLink: "https://sumeet-salunke.github.io/movie-search-app",
    backendAPI: "https://search.imdbot.workers.dev/?q=batman",
    githubFrontend: "https://github.com/sumeet-salunke/movie-search-app",
    githubBackend: "",
    image: MovieSearchApp,
    linkedin: "https://www.linkedin.com/posts/sumeet-salunke-052070325_github-sumeet-salunkemovie-search-app-activity-7440027097357770753-spI3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  }
  ,
  {
    id: 5,
    title: "Weather App",
    shortDesc: "JavaScript weather application using Open-Meteo APIs",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API", "Open-Meteo API"],
    description:
      "A clean and responsive weather application built with vanilla JavaScript that allows users to search weather by city name. The app first fetches latitude and longitude using the Open-Meteo Geocoding API, then uses those coordinates to fetch current weather data such as temperature and wind speed.",
    learnings: [
      "Chaining multiple API calls in sequence",
      "Using Geocoding API to convert city names into coordinates",
      "Fetching and displaying real-time weather data dynamically",
      "Handling invalid city input and missing API results",
      "Practicing async/await with dependent API requests",
      "Deploying frontend projects on GitHub Pages"
    ],
    demoLink: "",
    liveLink: "https://sumeet-salunke.github.io/weatherApp/",
    backendAPI: "https://geocoding-api.open-meteo.com/v1/search?name=Hubli",
    githubFrontend: "https://github.com/sumeet-salunke/weatherApp",
    githubBackend: "",
    image: WeatherApp,
    linkedin: "https://www.linkedin.com/posts/sumeet-salunke-052070325_javascript-webdevelopment-frontenddevelopment-share-7440000244521684992--wlK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  },
  {
    id: 6,
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
    demoLink: "https://youtu.be/xLsVCGBVQzg", LiveLink: "",
    image: RemainderApp,
    linkedin: 'https://www.linkedin.com/posts/sumeet-salunke-052070325_reactjs-fullstackdevelopment-webdevelopment-activity-7416822059336458240-XB0I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30'
  },
  {
    id: 7,
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
    demoLink: "https://youtu.be/Hy_lRogDDRs", LiveLink: "",
    image: PortfolioGen,
    linkedin: 'https://www.linkedin.com/posts/sumeet-salunke-052070325_webdevelopment-miniproject-frontend-activity-7404814559099785218-OEQK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30'
  }
  , {
    id: 8,
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
    demoLink: "https://youtu.be/NrZYeybMIkE", LiveLink: "",
    image: Assistant,
    linkedin: 'https://www.linkedin.com/posts/sumeet-salunke-052070325_python-automation-learningbydoing-activity-7408743975978799104-L3nd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30'
  },
  {
    id: 9,
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
    demoLink: "", LiveLink: "",
    image: JobApplicationApp,
    linkedin:
      "https://www.linkedin.com/posts/sumeet-salunke-052070325_learningwhilebuilding-fullstackdevelopment-ugcPost-7424842005446512640-9V1z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  }
  ,
  {
    id: 10,
    title: "Expense Tracker",
    shortDesc: "Expense tracking web application to manage income and expenses",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    description:
      "An expense tracking web application that allows users to add income and expense transactions, view balance, and track financial history. The project focuses on DOM manipulation, state management on the frontend, and storing data in browser LocalStorage to persist transactions without a backend.",
    learnings: [
      "DOM manipulation and event handling in JavaScript",
      "Managing application state on the frontend",
      "Using LocalStorage for data persistence",
      "Form handling and input validation",
      "Dynamic UI updates based on data",
      "Structuring small frontend projects properly"
    ],
    demoLink: "",
    liveLink: "https://sumeet-salunke.github.io/expense-tracker/",
    backendAPI: "",
    githubFrontend: "",
    githubBackend: "",
    image: ExpenseTracker,
    linkedin: "https://www.linkedin.com/posts/sumeet-salunke-052070325_javascript-webdevelopment-frontenddevelopment-activity-7440433362558672896-DAO6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIOhz4BkQ5ELiUbUUaI0PEXZQ39ek5rl30"
  }

];

export default projectsData;
