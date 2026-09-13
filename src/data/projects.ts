import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "lumen",
    title: "LUMEN — AI Civic Infrastructure Platform",
    subtitle: "AI-powered civic infrastructure system",
    tagline: "Detects civic infrastructure issues from user-uploaded images, helping identify and report issues efficiently.",
    description: "An AI-powered civic infrastructure platform that uses a trained YOLO model to detect infrastructure issues from user-uploaded images, streamlining the reporting process.",
    problem: "Manual reporting of civic infrastructure issues is inefficient and often lacks accurate documentation.",
    approach: "Built an end-to-end image-based detection workflow using a machine learning model integrated with a mobile frontend and a scalable backend.",
    architecture: [
      "Frontend: React Native client for user image uploads",
      "Backend: FastAPI server to handle requests and route them to the ML pipeline",
      "AI/ML Model: Trained YOLO model to identify civic infrastructure issues from images"
    ],
    technologies: ["AI/ML", "YOLO", "FastAPI", "React Native", "Python"],
    implementationDetails: [
      "Developed LUMEN as an AI/ML-based civic infrastructure platform using a trained YOLO model to identify issues from uploaded images.",
      "Integrated the machine learning detection pipeline with a FastAPI backend and React Native client to create an end-to-end image-based detection workflow.",
      "Applied iterative problem solving and development practices to build a practical technology solution for identifying and reporting civic infrastructure issues."
    ],
    githubUrl: "https://github.com/Samartha120/LUMEN",
    liveDemoUrl: "https://github.com/Samartha120/LUMEN",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: "finoryx",
    title: "Finoryx",
    subtitle: "Clean and intuitive mobile application",
    tagline: "A mobile application focused on delivering a clean and intuitive user experience.",
    description: "A React Native mobile application focused on user experience and clean component architecture.",
    problem: "Translating complex application requirements into functional, reusable frontend components for a seamless mobile experience.",
    approach: "Utilized JavaScript and React Native to build structured, reusable components and maintained collaborative workflows with GitHub.",
    technologies: ["React Native", "JavaScript", "GitHub"],
    implementationDetails: [
      "Developed a mobile application focused on delivering a clean and intuitive user experience.",
      "Translated application requirements into reusable frontend components and functional workflows using JavaScript and React Native.",
      "Used GitHub for source control and collaborative development, maintaining structured project workflows."
    ],
    githubUrl: "https://github.com/Samartha120/Finoryx",
    liveDemoUrl: "https://github.com/Samartha120/Finoryx",
    featured: false,
    category: "Web Applications"
  },
  {
    id: "cypher-flux",
    title: "Cypher-Flux — Real-Time SOC Dashboard & Threat Detection",
    subtitle: "Real-time SOC Dashboard & Threat Detection System",
    tagline: "A premium, real-time Security Operations Center (SOC) dashboard providing live network traffic analysis, anomaly detection, and active threat mitigation.",
    description: "A decoupled Client-Server Security Operations Center (SOC) system featuring a React command center UI and a Python Flask security intelligence engine for real-time traffic monitoring and active defense.",
    problem: "Monitoring network security anomalies in real-time requires high-frequency data ingestion, instantaneous posture scoring, and fast active response without UI lag or database bottlenecks during alert storms.",
    approach: "Built a decoupled client-server architecture using Flask RESTful with Socket.io for low-latency security telemetry streaming and a high-fidelity glassmorphism React interface.",
    architecture: [
      "Frontend: React.js command center with Vite, Tailwind CSS, Framer Motion, and Socket.io-client for real-time alert streaming",
      "Backend: Python Flask RESTful intelligence engine with JWT access/refresh token rotation",
      "Persistence & Scheduling: PostgreSQL/SQLite with SQLAlchemy ORM and APScheduler background task management"
    ],
    technologies: ["Python", "Flask", "React", "Socket.io", "PostgreSQL", "Tailwind CSS", "JWT"],
    implementationDetails: [
      "Real-time Threat Monitoring: Ingests live traffic patterns to detect network anomalies (DDoS, SQLi, Brute Force) using custom security rules.",
      "Dynamic Flux Score: Instantly calculates and streams overall system security posture and health metrics via WebSockets.",
      "Active Defense & Response: Features one-click IP blocking to immediately blacklist and mitigate malicious network threats.",
      "Batch-Processed Alert Management: Prevents database bottlenecks during high-volume security alerts using in-memory queues and APScheduler."
    ],
    githubUrl: "https://github.com/Samartha120/Cypher-Flux",
    liveDemoUrl: "https://github.com/Samartha120/Cypher-Flux",
    featured: false,
    category: "Full-Stack"
  },
  {
    id: "advanced-lms",
    title: "Advanced LMS – NGO Project",
    subtitle: "Learning Management System for government school students",
    tagline: "Learning Management System focusing on practical user requirements for students.",
    description: "A functional LMS developed in collaboration with the Seer Bharat Foundation, aimed at supporting government school students.",
    problem: "Government school students lack access to tailored, easy-to-use digital learning platforms that address their specific real-world needs.",
    approach: "Collaborated directly with the Seer Bharat Foundation to understand requirements and translate them into a functional web application.",
    technologies: ["Web Technologies", "JavaScript", "HTML", "CSS"],
    implementationDetails: [
      "Developed a Learning Management System designed for government school students, focusing on practical user requirements.",
      "Collaborated with Seer Bharat Foundation to understand real-world requirements and translate them into application functionality."
    ],
    githubUrl: "https://github.com/Samartha120",
    featured: false,
    category: "Web Applications"
  }
];
