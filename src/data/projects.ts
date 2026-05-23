export type Project = {
  slug: string;
  title: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  metrics: string[];
  achievement?: string;
  github: string;
  demo: string;
  extraLink?: {
    label: string;
    href: string;
  };
  image: string;
  demoImage?: string;
  featured: boolean;
  problem: string;
  role: string;
  architecture: string[];
  challenges: string[];
  learnings: string[];
};

export const projects: Project[] = [
  {
    slug: "secureai-desk",
    title: "SentinelAI",
    type: "AI-powered support ticket platform",
    shortDescription:
      "An AI-powered support-ticket platform that classifies, routes, and assists with ticket resolution using backend APIs and intelligent automation.",
    longDescription:
      "SentinelAI is a full-stack AI support-ticket system designed to improve manual ticket handling workflows. It uses AI-assisted classification and response support to help teams organize, prioritize, and respond to support tickets more efficiently.",
    techStack: ["FastAPI", "PostgreSQL", "OpenAI API", "Docker", "JWT Authentication", "REST APIs", "Automation"],
    features: [
      "Ticket classification",
      "AI-assisted response suggestions",
      "Protected backend APIs",
      "Authentication and role-based access",
      "Database-backed ticket management",
      "Dockerized backend setup",
    ],
    metrics: [
      "Integrating AI and security together to automate workflows",
      "90% classification accuracy on sample support tickets",
      "20+ protected backend endpoints",
    ],
    github: "https://github.com/sahil16qureshi",
    demo: "https://github.com/sahil16qureshi",
    image: "/images/projects/secureai/SentinelAI.png",
    demoImage: "/images/projects/secureai/SentinelAI.png",
    featured: true,
    problem:
      "Manual support-ticket triage is slow, inconsistent, and hard to scale when teams need reliable categorization, priority handling, and response support.",
    role:
      "Designed the backend API surface, ticket data model, authentication flow, AI classification workflow, and Dockerized development setup.",
    architecture: [
      "FastAPI service exposes authenticated ticket, user, and AI-assist endpoints.",
      "PostgreSQL stores users, roles, ticket metadata, ticket history, and classification output.",
      "AI service layer handles prompt construction, classification calls, and response suggestions.",
      "Docker provides repeatable local setup for backend and database services.",
    ],
    challenges: [
      "Designing AI output that stays useful and structured for downstream ticket workflows.",
      "Balancing protected API design with fast iteration during prototype development.",
      "Keeping sample metrics clearly marked until real production validation is available.",
    ],
    learnings: [
      "Strong API contracts make AI workflows easier to test and reason about.",
      "Support tools become more useful when automation assists humans instead of replacing context.",
    ],
  },
  {
    slug: "horizon-ui",
    title: "Horizon UI",
    type: "Final Year Project",
    shortDescription:
      "A gesture and voice-controlled desktop interface for touchless computer interaction using computer vision and speech recognition.",
    longDescription:
      "Horizon UI is a multimodal desktop control system that allows users to control computer actions using hand gestures and voice commands. It uses real-time hand tracking and speech recognition to create a touchless interaction layer for desktop environments.",
    techStack: ["Python", "OpenCV", "MediaPipe", "SpeechRecognition", "PyAutoGUI", "Machine Learning"],
    features: [
      "Real-time hand gesture tracking",
      "Voice command control",
      "Touchless desktop interaction",
      "Custom command execution",
      "Gesture-based automation",
    ],
    metrics: ["3rd Place at Industrial Open House 2026", "Multimodal gesture and voice control prototype"],
    achievement: "3rd Place at Industrial Open House 2026",
    github: "https://github.com/sahil16qureshi",
    demo: "https://github.com/sahil16qureshi",
    extraLink: {
      label: "Presentation",
      href: "https://github.com/sahil16qureshi",
    },
    image: "/images/projects/horizon/HorizonUI.png",
    demoImage: "/images/projects/horizon/HorizonUI.png",
    featured: true,
    problem:
      "Desktop interaction is still heavily dependent on physical input devices, which limits hands-free workflows and accessibility-focused interaction patterns.",
    role:
      "Built the interaction pipeline, gesture mapping, voice command layer, desktop automation flow, and demo narrative for the final year project.",
    architecture: [
      "Camera feed is processed through OpenCV and MediaPipe for hand landmarks.",
      "Gesture logic maps tracked landmarks into desktop commands.",
      "Speech recognition layer listens for voice commands and triggers mapped actions.",
      "PyAutoGUI executes desktop automation actions from validated inputs.",
    ],
    challenges: [
      "Maintaining responsive control while processing real-time video input.",
      "Reducing false positives in gesture recognition during live demos.",
      "Creating a command model that is flexible without being unpredictable.",
    ],
    learnings: [
      "Human-computer interaction projects need as much UX thinking as algorithmic accuracy.",
      "Live demos improve when technical triggers are explainable and recoverable.",
    ],
  },
  {
    slug: "gridshield",
    title: "GridShield",
    type: "Energy analytics and demand response platform",
    shortDescription:
      "A full-stack energy analytics platform for monitoring load behavior, reducing peak demand, and visualizing grid performance.",
    longDescription:
      "GridShield is an energy analytics and demand-response project that analyzes electricity consumption patterns and helps visualize peak demand reduction strategies.",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Python"],
    features: [
      "Energy dashboard",
      "Load analytics",
      "Peak demand visualization",
      "Demand response simulation",
      "Backend API integration",
    ],
    metrics: [
      "18 to 25% simulated peak demand reduction",
      "Full-stack dashboard implementation",
      "CI/CD-ready deployment structure",
    ],
    github: "https://github.com/sahil16qureshi",
    demo: "https://github.com/sahil16qureshi",
    image: "/images/projects/gridshield/GridShield.png",
    demoImage: "/images/projects/gridshield/GridShield.png",
    featured: true,
    problem:
      "Energy teams need approachable ways to understand load behavior, identify peak demand periods, and simulate demand-response strategies.",
    role:
      "Implemented the product-style dashboard structure, backend integration approach, analytics flow, and deployment-ready project organization.",
    architecture: [
      "Next.js frontend presents load curves, peak periods, and summary metrics.",
      "FastAPI backend exposes analytics and simulation endpoints.",
      "PostgreSQL stores consumption records and derived metrics.",
      "GitHub Actions and Docker support consistent build and deployment workflows.",
    ],
    challenges: [
      "Turning raw load behavior into understandable decision-support views.",
      "Separating simulated analysis from production-validated energy results.",
      "Designing dashboards that remain useful on smaller screens.",
    ],
    learnings: [
      "Domain dashboards are strongest when they connect metrics to decisions.",
      "Clear data modeling matters before visualization polish can pay off.",
    ],
  },
  {
    slug: "chess-move-data-analysis",
    title: "KnightScope",
    type: "Data analytics and machine learning project",
    shortDescription:
      "A data pipeline that processed 700,000+ chess game logs to analyze player performance, game phases, and outcome patterns.",
    longDescription:
      "This project converts raw chess game logs into structured datasets, segments games into opening, middlegame, and endgame phases, and performs analysis to identify player weaknesses and outcome patterns.",
    techStack: ["Python", "Pandas", "NumPy", "SQL", "Machine Learning", "Data Visualization"],
    features: [
      "Processed 700,000+ chess game logs",
      "Cleaned and structured raw game data",
      "Segmented games into opening, middlegame, and endgame",
      "Built visual analysis of phase-wise performance",
      "Explored predictive modeling for outcome patterns",
    ],
    metrics: ["700,000+ game logs processed", "Phase-wise performance analysis", "Structured data pipeline"],
    github: "https://github.com/sahil16qureshi",
    demo: "https://github.com/sahil16qureshi",
    extraLink: {
      label: "Notebook/report",
      href: "https://github.com/sahil16qureshi",
    },
    image: "/images/projects/chess/KnightScope.png",
    demoImage: "/images/projects/chess/KnightScope.png",
    featured: true,
    problem:
      "Raw chess logs are difficult to inspect manually at scale, making it hard to identify phase-specific patterns and outcome signals.",
    role:
      "Built the preprocessing pipeline, phase segmentation logic, exploratory analysis, and visual reporting structure.",
    architecture: [
      "Raw game logs are parsed and cleaned into structured tabular datasets.",
      "Move counts and game metadata segment each game into opening, middlegame, and endgame phases.",
      "Analysis notebooks generate aggregate player and outcome trends.",
      "Optional modeling experiments explore predictive signals from engineered features.",
    ],
    challenges: [
      "Processing a large volume of irregular game logs reliably.",
      "Choosing phase segmentation rules that are explainable and consistent.",
      "Presenting analysis in a way that is useful beyond charts alone.",
    ],
    learnings: [
      "Data cleaning decisions become part of the model story.",
      "Readable analysis is a product skill, not just a notebook skill.",
    ],
  },
  {
    slug: "medicine-recommendation-system",
    title: "Medicine Recommendation System",
    type: "Machine learning recommendation project",
    shortDescription:
      "A symptom-based medicine recommendation system that suggests possible medicines based on user-entered symptoms.",
    longDescription:
      "This project uses a drug and symptom dataset to recommend possible medicines based on user input. It focuses on data preprocessing, matching symptoms, and generating relevant recommendations.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    features: [
      "User symptom input",
      "Dataset preprocessing",
      "Medicine recommendation logic",
      "Simple interface for testing recommendations",
    ],
    metrics: ["Symptom matching workflow", "Dataset-backed recommendation prototype"],
    github: "https://github.com/sahil16qureshi",
    demo: "https://github.com/sahil16qureshi",
    image: "/images/giki.jpg",
    featured: false,
    problem:
      "Users need a simple way to explore possible medicine matches from symptom data, while keeping the system clearly positioned as an educational prototype.",
    role:
      "Prepared the dataset, implemented symptom matching logic, and created a testable interface for recommendation output.",
    architecture: [
      "Input layer captures symptoms from the user.",
      "Preprocessing normalizes symptoms and maps them against dataset fields.",
      "Recommendation logic ranks possible medicine matches.",
      "Interface layer presents recommendations with clear prototype framing.",
    ],
    challenges: [
      "Cleaning symptom labels so user input maps to dataset values.",
      "Avoiding overclaiming in a healthcare-related prototype.",
      "Keeping the interface simple enough for quick evaluation.",
    ],
    learnings: [
      "Recommendation systems need careful framing when domain risk is high.",
      "Transparent preprocessing improves trust in prototype outputs.",
    ],
  },
];
