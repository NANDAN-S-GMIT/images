export const projectsData = [
  {
    id: 1,
    title: "Unified Threat Intelligence Dashboard",
    description: "Unified Threat Intelligence Dashboard (UTID) is a SOC-oriented web application designed to simplify Indicator of Compromise (IOC) investigations by providing a single universal input for threat intelligence lookup workflows. Instead of manually copying and pasting IOCs across multiple OSINT platforms, analysts can enter an IOC once and instantly access multiple threat intelligence sources through a unified investigation interface. The project demonstrates practical SOC triage optimization concepts, analyst workflow efficiency, and centralized threat investigation design using a structured intelligence dashboard.",

    category: "main",

    tags: [
      "Cybersecurity",
      "Threat Intelligence",
      "SOC Analyst Workflow",
      "OSINT",
      "IOC Investigation",
      "Security Dashboard",
      "Incident Response Concepts"
    ],

    github: "https://github.com/NANDAN-S-GMIT/unified-threat-intelligence-dashboard",
    live: "https://unified-threat-intelligence.netlify.app/",
    videoId: "",

    mainImage: "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/01_UTID_Dashboard.png",

    images: [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/01_UTID_Dashboard.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/02_UTID_Projectdetails.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/03_UTID_why_We_Need_This_Tool.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/04_UTID_About_Creater.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/04_UTID_How_This_Improves_SOC_Triage_Speed.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/05_UTID_IOC_Search_Entry.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/06_UTID_IOC_Tool_Selection.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/07_UTID_Unified_Intelligence_Results_Cards.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/08_UTID_Application_Footer_Section.png"
    ],

    imageDescriptions: [
      "Dashboard Interface - Main landing dashboard providing a unified threat intelligence investigation entry point.",
      "Project Details Page - Explains project goals, architecture concept, and SOC workflow inspiration.",
      "Why SOC Analysts Need This Tool - Highlights operational challenges such as context switching and repetitive IOC searches.",
      "About Creator Section - Provides background information about the project and developer.",
      "SOC Triage Optimization View - Demonstrates how centralized workflows improve investigation speed.",
      "Universal IOC Input - Analysts enter supported IOCs including IP address, domain, URL, or file hash.",
      "Threat Intelligence Tool Selection - Automatically suggested OSINT and threat intelligence sources selectable via checkboxes.",
      "Unified Result Cards - Selected intelligence platforms appear as investigation cards ready for analysis.",
      "Application Footer - Complete UI structure showing navigation, credits, and project completion polish."
    ],

    features: [
      "Universal IOC input supporting IP addresses, domains, URLs, and file hashes",
      "Automatic IOC type identification after analysis submission",
      "Auto-suggestion of relevant OSINT and threat intelligence platforms",
      "Multi-source investigation preparation using checkbox selection",
      "One-click redirection to multiple intelligence platforms in new tabs",
      "Reduction of repetitive copy-paste investigation workflows",
      "SOC-inspired dashboard layout focused on analyst productivity",
      "Educational demonstration of real-world threat intelligence workflows"
    ],

    workflow: [
      "IOC Submission - User enters an Indicator of Compromise such as an IP address, domain, URL, or file hash into the universal input field.",
      "IOC Identification - The system analyzes the provided input and determines the IOC category automatically.",
      "Tool Recommendation - Relevant OSINT and threat intelligence platforms are suggested based on IOC type.",
      "Source Selection - Analysts select one or multiple intelligence tools using checkbox controls.",
      "Investigation Preparation - The dashboard generates investigation cards corresponding to selected platforms.",
      "Unified Investigation Launch - Using a single action, selected cards open official threat intelligence websites in new browser tabs.",
      "External Analysis Execution - Each platform automatically loads the provided IOC for immediate analysis without manual copy-paste.",
      "Workflow Optimization - Analysts save investigation time by avoiding repeated searches across multiple platforms."
    ]
  }

  ,



  {
    id: 2,
    title: "Web Application Vulnerability Scanner",
    description: "A modern web-based security assessment tool designed to identify common web application vulnerabilities such as Cross-Site Scripting (XSS), SQL Injection (SQLi), and Cross-Site Request Forgery (CSRF). The application features a SOC-style dashboard with real-time scan progress visualization, OWASP Top 10 (2021) mapping, severity-based reporting, and detailed remediation guidance, demonstrating practical vulnerability assessment workflows.",
    category: "main",
    tags: [
      "Cybersecurity",
      "Web Security",
      "OWASP Top 10",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vulnerability Assessment",
      "SOC Tools"
    ],
    github: "https://github.com/NANDAN-S-GMIT/web-vulnerability-scanner",
    live: "https://github.com/404",
    videoId: "aiVq5ij2DQk",
    mainImage: "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_01_Landing_Page.jpg",
    images: [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_01_Landing_Page.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_02_OWASP_Coverage.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_03_Scan_Input_Page.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_04_Scan_Initialization.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_05_SQLi_Testing_Phase.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_06_Vulnerability_Summary.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_07_Detailed_Findings.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/WEB_VUL_08_Scanner_Limitations.jpg"
    ],
    imageDescriptions: [
      "Landing Page - Introduces the vulnerability scanner with branding, purpose, and a clear call-to-action to start security testing.",
      "OWASP Top 10 Coverage - Displays supported OWASP Top 10 (2021) vulnerability categories along with ethical and legal disclaimers.",
      "Scan Input Page - Allows users to enter a target URL or select intentionally vulnerable test sites for controlled scanning.",
      "Scan Initialization & Crawling - Shows real-time scan progress during initialization and crawling phases.",
      "Active Testing Phase - Demonstrates SQL Injection testing with live progress indicators.",
      "Vulnerability Summary Dashboard - Presents a severity-based overview of detected issues (Critical, High, Medium, Low).",
      "Detailed Vulnerability Findings - Provides in-depth reports for XSS and CSRF vulnerabilities, including affected resources and remediation steps.",
      "Scanner Limitations - Transparently explains tool limitations, detection constraints, and ethical usage guidelines."
    ],
    features: [
      "Detection of common web vulnerabilities including XSS, SQL Injection, and CSRF",
      "OWASP Top 10 (2021) vulnerability mapping",
      "Real-time scan progress visualization with multiple scan phases",
      "Severity-based vulnerability classification and summary dashboard",
      "Detailed vulnerability reports with affected endpoints and remediation guidance",
      "Clear ethical disclaimer and transparent scanner limitations"
    ],
    workflow: [
      "Target Input - User enters a target URL or selects an intentionally vulnerable test application.",
      "Initialization - The scanner validates the target and prepares the assessment workflow.",
      "Crawling - The application performs shallow crawling to discover links and forms.",
      "Vulnerability Testing - Basic payload injection and response analysis are performed to detect XSS, SQLi, and CSRF.",
      "Results Aggregation - Detected issues are categorized by severity and mapped to OWASP Top 10.",
      // "Reporting - A detailed vulnerability report is generated with technical descriptions and recommended fixes.",
      "Limitations Disclosure - Scanner constraints are clearly displayed to ensure accurate interpretation of results."
    ]
  }


  ,
  {

    id: 3,
    title: "Image-Based Identification of Thyroid Disorders",
    description: "A deep learning-powered medical diagnostic system leveraging Convolutional Neural Networks (CNN) and image processing techniques to detect thyroid disorders from ultrasound images. The system provides an intuitive web interface for uploading images, performing real-time analysis, and generating comprehensive medical reports, assisting healthcare professionals in early and accurate diagnosis.",
    category: "main",
    tags: ["Python", "TensorFlow", "Machine Learning", "Deep Learning", "Image Processing", "OpenCV", "Django"],
    github: "https://github.com/NANDAN-S-GMIT/",
    live: "https://github.com/404",
    report: "https://github.com/NANDAN-S-GMIT/images/blob/main/A5%20-%20FINAL%20REPORT.pdf",
    mainImage: "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/Main%20page.png",
    images: [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/Main%20page.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/INPUT.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/result.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/Generation.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/generatedreport.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/Proffesional.png"
    ],
    imageDescriptions: [
      "Main Dashboard - Overview of the thyroid disorder detection system with access to patient and professional panels.",
      "Input Image Processing - Upload thyroid ultrasound images for analysis and preprocessing.",
      "Analysis Results - ML-generated detection results and visual highlights.",
      "Report Generation - Automated generation of detailed diagnostic reports with annotated visuals.",
      "Generated Report - Comprehensive medical report summarizing findings, detected disorders, and recommendations.",
      "Professional Dashboard - Access for doctors to review reports, validate AI outputs, and provide medical advice."
    ],
    videoId: "TZc8QgQ3KqM",
    features: [
      "Deep learning-based thyroid disorder detection using CNN",
      "User-friendly patient and professional web interfaces",
      "Real-time image upload, preprocessing, and prediction",
      "Confidence score display for each diagnosis",
      "Automatic report generation with heatmaps and findings",
      "Secure, encrypted data handling and storage"
    ],
    workflow: [
      "Image Upload - The user uploads thyroid ultrasound or scan images via a web-based interface.",
      "Image Preprocessing - Uploaded images undergo resizing, normalization, and enhancement using Pillow and OpenCV.",
      "Model Prediction - The CNN model, trained with a diverse dataset, analyzes the images and detects thyroid disorders.",
      "Results Display - The platform displays AI-generated results along with confidence levels and visual cues.",
      "Report Generation - A detailed diagnostic report is generated, summarizing findings, confidence scores, and recommended next steps.",
      "Professional Review - Healthcare professionals can log in, review AI results, append medical advice, and finalize patient reports."
    ]


  }
  ,
  {
    id: 4,
    title: "The Brain Quiz Challenge 🎯",
    description: "A simple and interactive quiz application developed using HTML, CSS, and JavaScript. Users can answer multiple-choice questions and get their final score at the end of the quiz.",
    category: "mini",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NANDAN-S-GMIT/Brain-Quiz-Challenge", // replace with actual if needed
    live: "https://nandan-s-gmit.github.io/Quiz.io/", // replace with actual if needed
    mainImage: "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/QUIZ1.jpg",
    images: [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/QUIZ1.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/QUIZ2.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/QUIZ3.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/QUIZ4.jpg"
    ],
    imageDescriptions: [
      "Quiz Homepage",
      "Question Display with Options",
      "Final Score Display"
    ],

    videoId: "", // replace with your actual YouTube demo video ID if you have one
    features: [
      "Multiple-choice questions",
      "Score calculation",
      "Responsive design",
      "Clean and simple UI"
    ],
    workflow: [
      "User visits the quiz homepage and clicks on the 'Start Quiz' button.",
      "Predefined set of 20 multiple-choice questions are loaded into the interface.",
      "A timer starts running when the quiz begins to track the duration.",
      "For each question, users select their answer from the given options.",
      "If the selected answer is correct, it is highlighted as correct; otherwise, marked as incorrect.",
      "User proceeds through all 20 questions one by one.",
      "After answering all questions or when time is up, the quiz displays the final result.",
      "User can see their total score out of 20 and decide to retake the quiz or exit."
    ]

  }
  ,
  {
    id: 5,
    title: "NextGen LearnHub",
    description: "A full-stack e-learning platform where users can register, log in, and access a variety of inbuilt courses for free. After enrolling, users can watch video sessions and take quizzes based on the course content. The application is built using React for the frontend, Spring Boot for the backend, and MySQL for the database.",
    category: "main",
    tags: ["React", "Spring Boot", "MySQL", "Java", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/NANDAN-S-GMIT/NextGen-LearnHub", // replace with your actual repo link
    live: "https://nextgen-learnhub.vercel.app/", // replace with your actual live link if any
    mainImage: "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/LEARNHUB1.jpg",
    images: [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/LEARNHUB1.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/LEARNHUB2.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/LEARNHUB3.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/LEARNHUB4.jpg",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/LEARNHUB5.jpg"
    ],
    imageDescriptions: [
      "Homepage - User-friendly dashboard",
      "Course List - Browse available courses",
      "Enroll Course - Enroll in a course",
      "Video Section - Watch course video lectures",
      "Certificate generation - Download your certificate"
    ],

    videoId: "", // replace with your actual demo video ID if you have one
    features: [
      "User registration and login",
      "Course enrollment and video sessions",
      "Interactive quizzes after each course",
      "Progress tracking for users",
      "Full-stack architecture with React, Spring Boot, and MySQL"
    ],
    workflow: [
      "User accesses the platform and completes the registration process by providing their details.",
      "User logs in using their registered credentials to access the dashboard.",
      "Dashboard displays a wide range of inbuilt free and/or paid courses available for enrollment.",
      "User browses through the course list and enrolls in any desired course.",
      "Once enrolled, the user gains access to a series of video sessions under the selected course.",
      "After watching the video sessions, a 'Generate Quiz' button appears for that particular course.",
      "User clicks the 'Generate Quiz' button to start an interactive quiz based on the completed video sessions.",
      "User answers quiz questions; if they achieve the passing percentage (e.g., 75%), they pass the quiz.",
      "Upon successful completion, the user can download their personalized course completion certificate.",
      "User’s course enrollments, quiz scores, and certificates are managed and stored in their personal profile section."
    ]
  },
  {
    "id": 6,
    "title": "One-Click Image Editor",
    "description": "A simple yet powerful image editing web application built entirely with React. This tool allows users to upload an image, apply a range of real-time filters like Black & White, Brightness, HDR, and Sketch effects, and instantly download the edited image in formats such as PNG, JPG, or PDF. Designed for ease of use and speed, it requires no login or complex setup.",
    "category": "mini",
    "tags": ["React", "HTML", "CSS", "JavaScript", "Image Filters", "Web App"],
    "github": "https://github.com/NANDAN-S-GMIT/One-Click-Image-Editor",
    "live": "https://onlyoneclickimageditor.netlify.app/",
    "mainImage": "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/img1.png",
    "images": [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/img1.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BLACKANDWHITEIMG.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BRIGHTIMG.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/HDRIMG.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/SKETCHIMG.png"
    ],
    "imageDescriptions": [
      "Homepage - Upload and preview images",
      "Black & White Filter applied",
      "Brightness enhancement filter",
      "HDR Effect applied to image",
      "Sketch-style filter applied"
    ],
    "videoId": "",
    "features": [
      "Instant image upload and preview",
      "Multiple filter options: Black & White, Brightness, HDR, and Sketch",
      "Live real-time filter application",
      "Download edited images as PNG, JPG, or PDF",
      "Clean, responsive React-based user interface"
    ],
    "workflow": [
      "User accesses the platform via the hosted link.",
      "On the homepage, the user clicks the upload button to select an image from their local device.",
      "Once uploaded, the image preview appears instantly within the application window.",
      "Below the preview, users can select from available filters: Black & White, Brightness, HDR, and Sketch.",
      "Each filter is applied in real-time, allowing users to instantly see changes without page reload.",
      "After finalizing their edited image, users choose their desired download format: PNG, JPG, or PDF.",
      "The image is then processed and downloaded directly to their device with a single click."
    ]
  },
  {
    id: 7,
    title: "Blood Bank and Donation Management System",
    description: "A comprehensive full-stack Blood Bank and Donation Management System built with PHP, HTML, CSS, JavaScript, and MySQL. This platform facilitates both blood donors and seekers by providing a clean, interactive interface for users to register their blood donation details and for others to search and request available blood types. The admin can fully manage donor records, blood requests, and website content via an intuitive dashboard.",
    category: "main",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Blood Bank", "Web Application", "Full Stack"],
    github: "https://github.com/NANDAN-S-GMIT/Blood bank management system",
    live: "https://onlyoneclickimageditor.netlify.app/",
    mainImage: "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSHOME1.png",
    images: [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSHOME1.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSABOUT2.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSWHYBLOOD3.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSDONATEBLOOD4.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSNEEDBLOOD5.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/BDMSADMINDASHBOARD6.png"
    ],
    imageDescriptions: [
      "Homepage - Clean UI with donation and request options",
      "About Us section - Blood Bank platform overview",
      "Why Donate Blood Section - Benefits and importance of donating",
      "Donate Blood Form - User inputs personal and blood details",
      "Blood Need Search - Find blood by type and availability",
      "Admin Dashboard - Manage donors, requests, and content"
    ],
    videoId: "daKZ6mbN7sY",
    features: [
      "Blood donation form for users to submit details and blood information",
      "Blood seekers can search available blood types in the system",
      "Admin dashboard for managing donor data, requests, and website content",
      "User-friendly, multi-page frontend built with HTML, CSS, and JavaScript",
      "Secure data storage and management using MySQL",
      "Responsive and clean interface for both users and admin"
    ],
    workflow: [
      "User lands on the homepage of the platform via the hosted link.",
      "On the homepage, users can explore different sections like About Us, Why Donate Blood, and available services.",
      "If a user wants to donate blood, they fill in a form with personal details and blood information.",
      "The donor’s data is stored securely in the database.",
      "If someone needs blood, they can use the 'Need Blood' search feature to find available blood types in real time from the database.",
      "The admin can log in to the dashboard to manage donor details, blood requests, and edit content on all pages.",
      "The admin can add, update, or delete records and monitor system activities through a dedicated panel."
    ]
  },
  {
    "id": 8,
    "title": "Emotion Detector Web App",
    "description": "A powerful, web-based Emotion Detection application built using Flask (Python) for the backend and HTML/CSS/JavaScript for the frontend. This application analyzes text input and predicts the underlying emotion using natural language processing (NLP) techniques or API-based models, providing users with instant emotional insights.",
    "category": "main",
    "tags": ["Flask", "Python", "HTML", "CSS", "JavaScript", "NLP", "Emotion Detection", "Web Application", "Full Stack"],
    "github": "https://github.com/NANDAN-S-GMIT/Emotion-Detector",
    "live": "https://emotion-detector-mo89.onrender.com/",
    "mainImage": "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/EmotionDetector1.png",
    "images": [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/EmotionDetector1.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/EmotionDetector2.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/EmotionDetector3.png"
    ],
    "imageDescriptions": [
      "Homepage - User-friendly text input interface",
      "Analyzing - Backend processes text input for emotion detection",
      "Output - Detected emotion displayed with emoji representation"
    ],
    "features": [
      "Instant emotion detection from user-provided text",
      "Clean and responsive frontend UI with emoji-based results",
      "Flask backend with Python and NLP logic",
      "JavaScript-powered asynchronous API interaction",
      "Unit tested for accuracy and robustness",
      "Static code analysis with 10/10 Pylint score",
      "Error handling and proper status code management",
      "Deployment-ready for platforms like Render or Heroku"
    ],
    "workflow": [
      "User opens the web app and lands on the homepage.",
      "User enters text input into the provided field.",
      "Frontend sends the text asynchronously to the Flask backend.",
      "The backend processes the input using NLP techniques or external APIs.",
      "Detected emotion is returned to the frontend with corresponding emoji.",
      "The result is displayed instantly on the screen in a user-friendly format."
    ],
    "videoId": ""
  },
  {
    "id": 9,
    "title": "ChatEquity AI - Intelligent Chat Assistant",
    "description": "ChatEquityAI is a modern, AI-powered chat application built with React (Vite), Tailwind CSS, and JavaScript, integrated with the Gemini API for intelligent responses. The platform delivers a sleek, real-time chat interface that allows users to ask questions and instantly receive AI-generated responses in a conversational format.",
    "category": "main",
    "tags": ["React", "Vite", "Tailwind CSS", "JavaScript", "AI", "Gemini API", "Chatbot", "Web Application", "Full Stack", "Real-time", "Responsive Design",],
    "github": "https://github.com/NANDAN-S-GMIT/ChatEquityAI",
    "live": "https://chat-equity-ai.netlify.app/",
    "mainImage": "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/ChatEquityAI1.png",
    "images": [
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/ChatEquityAI1.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/ChatEquityAI2.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/ChatEquityAI3.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/ChatEquityAI4.png",
      "https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/ChatEquityAI5.png"
    ],
    "imageDescriptions": [
      "Homepage - Modern chat UI with dark theme and glowing brand header",
      "User Input - User types a query in the chat interface",
      "AI Response - AI provides informative, highlighted answer in chat",
      "Instruction Flow - Step-by-step code guidance exchange between user and AI",
      "Conversation End - User thanks AI, interface ready for next message"
    ],
    "features": [
      "AI-powered chat assistant utilizing the advanced Gemini API",
      "Instant, real-time query processing and response delivery",
      "Clean, intuitive UI designed with React (Vite) and Tailwind CSS",
      "Fully responsive and mobile-optimized for all device sizes",
      "Asynchronous API calls ensuring smooth and fast interactions",
      "Natural conversational experience with context retention",
      "Seamless deployment and hosting managed through Netlify"
    ],
    "workflow": [
      "User opens the ChatEquityAI application in the browser.",
      "Homepage displays a clean and responsive chat interface.",
      "User types a prompt or question into the chatbox.",
      "Frontend sends the request asynchronously to the Gemini API.",
      "Gemini API processes the input and generates a response.",
      "The AI-generated response is displayed instantly in the chat window.",
      "Conversation continues seamlessly with back-and-forth exchanges."
    ],
    "videoId": ""
  }




  // {
  //   id: 4,
  //   title: "Sudoku",
  //   description: "An interactive Sudoku game with an easy-to-use interface.",
  //   category: "mini",
  //   tags: ["Html", "CSS"],
  //   github: "https://github.com/",
  //   live: "https://your-live-demo.com",
  //   mainImage: "https://images.pexels.com/photos/6686167/pexels-photo-6686167.jpeg",
  //   images: [
  //     "https://images.pexels.com/photos/6686169/pexels-photo-6686169.jpeg",
  //     "https://images.pexels.com/photos/6686171/pexels-photo-6686171.jpeg",
  //     "https://images.pexels.com/photos/6686173/pexels-photo-6686173.jpeg"
  //   ],
  //   videoId: "your-youtube-video-id-4",
  //   features: [
  //     "Multiple difficulty levels",
  //     "Hint system",
  //     "Progress saving",
  //     "Error checking"
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "Ludo",
  //   description: "A digital Ludo game with dice roll mechanics and multiplayer support.",
  //   category: "clone",
  //   tags: ["Html", "CSS"],
  //   github: "https://github.com/",
  //   live: "https://your-live-demo.com",
  //   mainImage: "https://images.pexels.com/photos/7061416/pexels-photo-7061416.jpeg",
  //   images: [
  //     "https://images.pexels.com/photos/7061418/pexels-photo-7061418.jpeg",
  //     "https://images.pexels.com/photos/7061420/pexels-photo-7061420.jpeg"
  //   ],
  //   videoId: "your-youtube-video-id-5",
  //   features: [
  //     "Multiplayer support",
  //     "Dice rolling animation",
  //     "Player statistics",
  //     "Game saving"
  //   ]
  // },
  // {
  //   id: 6,
  //   title: "Superwars",
  //   description: "A superhero vs. villain battle game with turn-based combat.",
  //   category: "clone",
  //   tags: ["Html", "CSS"],
  //   github: "https://github.com/",
  //   live: "https://your-live-demo.com",
  //   mainImage: "https://images.pexels.com/photos/7530903/pexels-photo-7530903.jpeg",
  //   images: [
  //     "https://images.pexels.com/photos/7530904/pexels-photo-7530904.jpeg",
  //     "https://images.pexels.com/photos/7530905/pexels-photo-7530905.jpeg",
  //     "https://images.pexels.com/photos/7530906/pexels-photo-7530906.jpeg"
  //   ],
  //   videoId: "your-youtube-video-id-6",
  //   features: [
  //     "Character selection",
  //     "Turn-based combat",
  //     "Special abilities",
  //     "Battle statistics"
  //   ]
  // }
]; 