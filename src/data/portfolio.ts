import { Project, Experience, Publication } from "./types";

export const projects: Project[] = [
  {
  id: "medieasy-healthcare-platform",
  title: "MedLink",
  description:
    "A full-stack healthcare mobile app built with Flutter and a FastAPI backend. " +
    "Features include doctor discovery and appointment booking, real-time patient-doctor chat via WebSocket, " +
    "Agora-powered audio/video calls, health article browsing with dynamic filtering, " +
    "hospital and pharmacy listings, and JWT-based authentication — " +
    "all structured with Clean Architecture and Cubit state management.",
  techStack: [
    "Flutter",
    "Dart",
    "Cubit / flutter_bloc",
    "Clean Architecture",
    "REST API",
    "WebSocket",
    "Agora RTC",
    "FastAPI",
    "PostgreSQL",
    "JWT Auth",
    "Figma",
  ],
  link: {
    label: "View Project",
    url: "https://github.com/nasir82/medlink-monorepo",
  },
  github: "https://github.com/nasir82/medlink-monorepo",
  image: "/images/medlink_app.png",
  isFeatured: true,
},
{
  id: "medlink-health-api",
  title: "MedLink — Health App API",
  description:
    "A production-ready backend service powering the MediEasy healthcare platform. " +
    "Engineered with a high-performance asynchronous architecture, it manages complex data relations " +
    "for doctors, hospitals, and appointments. Features include RFC-compliant JWT authentication, " +
    "automated Swagger documentation, and a robust PostgreSQL schema utilizing JSONB and native arrays " +
    "for efficient medical data storage and filtering.",
  techStack: [
    "FastAPI",
    "Python",
    "SQLAlchemy (Async)",
    "PostgreSQL",
    "Pydantic v2",
    "JWT Auth",
    "Railway",
    "Uvicorn",
    "Asyncpg",
    "REST API",
  ],
  link: {
    label: "Live API Docs",
    url: "https://medyeasy-production.up.railway.app/docs", // Update with your actual Railway URL
  },
  github: "https://github.com/nasir82/medlink-monorepo",
  image: "/images/medlink_api.png",
  isFeatured: true,
},
  {
    id: "ecommerce-flutter-app",
    title: "Flutter E-commerce App",
    description: "A comprehensive, high-performance cross-platform e-commerce solution built with Flutter and Firebase. Features a modular, feature-first architecture for scalable state management and seamless user experiences.",
    techStack: ["Flutter", "Dart", "Firebase", "GetX", "Cloud Firestore", "Social Auth"],
    link: { label: "View Project", url: "https://github.com/nasir82/E-Commerce_App" },
    github: "https://github.com/nasir82/E-Commerce_App",
    image: "/images/flutter_ecommerce.jpg", // Ensure this path matches your public folder
    isFeatured: true, // You can set this to true if you want it highlighted
  },
  {
    id: "api-avengers-fundraising-backend",
  title: "CareForAll: API Avengers Hackathon",
  description: 
    "A resilient, next-generation fundraising microservices platform built to handle traffic bursts " +
    "of over 1,000 requests per second. It implements distributed systems patterns like " +
    "idempotency, outbox patterns, and state machines to ensure data correctness during high-load medical campaigns.",
  techStack: [
    "Docker Compose", 
    "Prometheus & Grafana", 
    "ELK Stack (Elasticsearch, Logstash, Kibana)", 
    "OpenTelemetry (Jaeger)", 
    "Node.js", 
    "GitHub Actions"
  ],
  link: { 
    label: "Hackathon Summary", 
    url: "https://github.com/nasir82/ApiAvengers-CUET#readme" 
  },
  github: "https://github.com/nasir82/ApiAvengers-CUET",
  image: "/images/api_avenger.png",
  isFeatured: true,
  },
  {
    id: "shopping-app",
    title: "Shopping App with Jetpack Compose",
    description: "An Android shopping application developed using Jetpack Compose and Firebase. Implements MVVM architecture with Dagger-Hilt for dependency injection, providing a seamless and responsive user experience.",
    techStack: ["Firebase", "Jetpack Composse", "Kotlin", "MVVM", "Dragger-Hilt"],
    link: { label: "View Project", url: "https://github.com/nasir82/Shopping-App" },
    github: "https://github.com/nasir82/Shopping-App",
    image: "/images/shopping_app.png",
    isFeatured: true,
  },
  
];


export const publications: Publication[] = [
  {
    id: "pqc-lwe-thesis",
    title: "Optimizing Post-Quantum LWE Encryption for Large Image Data",
    abstract: "A comprehensive hybrid cryptographic preprocessing and acceleration framework integrating image compression techniques (RLE, Huffman coding, YCbCr with chroma subsampling) with Strassen's matrix multiplication for LWE-based encryption. Achieved 41.19% average data volume reduction while maintaining lossless compression (PSNR = ∞) and full post-quantum security guarantees.",
    conference: "B.Sc. Thesis, SUST(In Progress)",
    date: "2025-26",
    pdfUrl: "/papers/pqc-lwe-thesis.pdf",
    slug: "pqc-lwe-encryption",
    tags: ["Post-Quantum Cryptography", "LWE", "Image Compression", "Strassen Algorithm", "Lattice Cryptography"],
  },
  {
    id: "banglanoise-10",
    title: "BanglaNoise-10: A Diverse Audio Dataset for Machine Learning on Urban Environmental Noise in Bangladesh",
    abstract: "First nationwide South Asian environmental noise dataset containing 5,035 labeled audio clips across 10 urban noise categories. Achieved 98% accuracy with Whisper-Base, 97% with Wav2Vec2-Base. Dataset includes bike, bus, car, CNG auto-rickshaw, construction noise, protest, siren, traffic jam, train, and truck sounds collected across Bangladesh.",
    conference: "Data in Brief (Under Review)",
    date: "2025",
    pdfUrl: "https://zenodo.org/record/8239067",
    slug: "banglanoise-10",
    tags: ["Audio Dataset", "Machine Learning", "Urban Sound Classification", "Wav2Vec2", "Whisper", "Deep Learning"],
  },
];

export const skills = [
  "Python",
  "C/C++",
  "Java",
  'Flutter',
  'Jetpack Compose',
  // Backend
  "Node.js",
  "Express.js",
  "FastAPI",
  // Databases
  "MongoDB",
  "MySQL",
  "Firebase",
  "PostgreSQL",
  "Docker",
];

export const personalInfo = {
  name: "Md. Nasir Uddin",
  title: "Flutter & Android (Jetpack) Developer",
  location: "Sylhet, Bangladesh",
  email: "nasirpks36@gmail.com",
  phone: "+880 1731812645",
  github: "https://github.com/nasir82",
  linkedin: "https://linkedin.com/in/nasir82",
  leetcode: "https://leetcode.com/u/Nasir082/",
  titleText: "A Full-Stack Mobile Developer specializing in high-performance applications built with Android Jetpack Compose and Flutter. With a strong background in competitive programming and a Bachelor's in CS from SUST, I focus on engineering scalable, user-centric mobile solutions.",
  bio: "Full-Stack Mobile Developer with a Computer Science degree from SUST, building high-performance apps with Flutter and Jetpack Compose. I design scalable, user-centric architectures — from cross-platform e-commerce platforms powered by Firebase to pharmacy management systems backed by Flask APIs. First Runner-up at CUET API Avengers. I turn complex backend challenges into polished mobile experiences."
};

export const expertise = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development from database design to frontend implementation",
  },
  {
    title: "AI/ML Integration",
    description: "RAG pipeline design, vector database optimization, semantic search, LLM orchestration",
  },
  {
    title: "API Design & Integration",
    description: "RESTful APIs, third-party service integration",
  },
  {
    title: "Performance Optimization",
    description: "Database query optimization, caching strategies",
  },
  {
    title: "System Architecture",
    description: "Scalable database schemas, containerization",
  },
];

export const certifications = [
  {
    id: "cuet-api-avenger-2025",
    title: "First Runner up in CUET API Avenger",
    issuer: "ete-cuet",
    date: "Nov 2025",
    category: "Backend & Distributed Systems",
    skills: [
      "Microservices Architecture", 
      "Idempotency & API Design", 
      "Transactional Outbox Pattern", 
      "Observability (ELK & Prometheus)", 
      "Docker Compose Scaling", 
      "CI/CD Pipelines"
    ],
    link: "https://drive.google.com/file/d/13HGPuRaNguDdmYqjjEkErHXIGUMeInsi/view?usp=sharing",
    github: "https://github.com/nasir82/ApiAvengers-CUET",
    image: "/images/cuet_api_avengers.jpg" 
  },
   {
    id: "flutter-dart-complete-2024",
    title: "Flutter App Development- The Complete Guide",
    issuer: "Interactive cares",
    date: "Jan 2026",
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "State Management"],
    link: "",
    github: null,
    image: "/images/flutter-cert.png"
  },
  {
    id: "aws-cloud-foundations-2026",
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS",
    date: "Apr 2024",
    category: "Cloud",
    skills: ["AWS", "Cloud Security", "S3", "EC2"],
    link: "https://drive.google.com/drive/folders/15VM8_uZqkpYoTxGUmjrDyy2GCEEwuMDj?usp=sharing",
    github: null,
    image: "/images/aws_cert.jpg" 
  },
  {
    id: "android-jetpack-compose-2025",
    title: "Modern Android Development with Jetpack Compose",
    issuer: "NeatRoot",
    date: "Feb 2024",
    category: "Mobile",
    skills: ["Kotlin", "Jetpack Compose", "MVVM", "Room DB"],
    link: "https://drive.google.com/file/d/1bMiOWUna3aDNNFzkB5qz10Ay6vDz_Gy8/view?usp=drivesdk",
    github: null,
    image: "/images/neatrootcertificate.jpg"
  },
 
  {
    id: "edge-python-data-science-2025",
    title: "Python Programming & Basic Data Science",
    issuer: "EDGE Project",
    date: "Jan 2025",
    category: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
    link: "https://drive.google.com/file/d/1i9PqliSt0Bp-eV81YwjMW6d1_8YJFQGs/view?usp=sharing",
    github: null,
    image: "/images/ml_edge.png"
  },
  {
    id: "docker-containerization-2024",
    title: "Docker & Kubernetes: The Practical Guide",
    issuer: "KodeKlouod",
    date: "Feb 2026",
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD", "Containers"],
    link: "https://drive.google.com/file/d/1loW-b1mCWg2X93IyzKdeFBz6Pxm7O7q7/view?usp=sharing",
    github: null,
    image: "/images/docker_cert.png"
  }
];
export const achievemenAndCertification = [
  {
    id: "ete-heckhathon",
    title: "First Runner Up - ETE Televerse CUET",
    date: "2025",
    description: "A robust, scalable fundraising backend platform designed to handle high traffic (1000+ req/s) with proper idempotency, event reliability, state management, and full observability.",
    image: "/images/cert-cuet.png", // Path to your certificate image
    link: "https://drive.google.com/file/d/13HGPuRaNguDdmYqjjEkErHXIGUMeInsi/view?usp=drive_link",
    category: "Hackathon",
    github:'https://github.com/nasir82/ApiAvengers-CUET'
  },
  {
    id: "cuet-cse-fest",
    title: "CUET CSE Fest Finalist",
    date: "2025",
    description: "Honored for leading the Office Digitalisation Project, transforming organizational infrastructure through web and mobile solutions.",
    image: "/images/cert-brikkho.png",
    link: "https://certificate-verification-link.com",
    category: "Hackathon",
    github:'https://github.com/nasir82/E-Commerce_App'
  },
  {
    id: "flutter-interactive-care",
    title: "Python Programming & Basic Data Science - EDGE",
    date: "2025",
    description: "Honored for leading the Office Digitalisation Project, transforming organizational infrastructure through web and mobile solutions.",
    image: "/images/cert-brikkho.png",
    link: "https://certificate-verification-link.com",
    category: "Cirtification",
    github:''
  },
  {
    id: "cuet-cse-fest2",
    title: "Native Android Development Course-Cirtification",
    date: "2023",
    description: "Honored for leading the Office Digitalisation Project, transforming organizational infrastructure through web and mobile solutions.",
    image: "/images/cert-brikkho.png",
    link: "https://certificate-verification-link.com",
    category: "Cirtification",
    github:''
  }
];

export const achievements = [
  {
    platform: "Codeforces",
    rating: "Specialist",
    maxRating: "1471",
  },
  {
    platform: "CodeChef",
    rating: "3-Star",
    maxRating: "1693",
  },
  {
    metric: "Problems Solved",
    value: "2000+",
  },
  {
    metric: "National Contests",
    value: "3",
  },
  {
    metric: "Production AI Systems",
    value: "2+",
  },
];
