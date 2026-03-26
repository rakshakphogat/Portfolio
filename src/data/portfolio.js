export const portfolioData = {
    personal: {
        name: "Rakhshak Kumar",
        title: "Full Stack Developer",
        subtitle: "Computer Science Engineering Student",
        email: "rakshakphogat@gmail.com",
        phone: "+91-8708928915",
        linkedin: "https://www.linkedin.com/in/rakhshak-kumar-97901a331",
        github: "https://github.com/rakshakphogat",
        location: "Chandigarh, Punjab University"
    }, education: [
        {
            id: 1,
            institution: "University Institute of Engineering and Technology, Chandigarh",
            degree: "Computer Science Engineering",
            duration: "2024-2028",
            location: "Chandigarh, Punjab University",
            type: "Bachelor's Degree",
            current: true
        },
        {
            id: 2,
            institution: "Kendriya Vidyalaya No. 2, Sirsa",
            degree: "Intermediate HSC",
            percentage: "94.6%",
            duration: "2022-2023",
            location: "Sirsa, Haryana",
            type: "Higher Secondary"
        },
        {
            id: 3,
            institution: "Kendriya Vidyalaya No. 2, Sirsa",
            degree: "Matriculation SSC",
            percentage: "95.6%",
            duration: "2020-2021",
            location: "Sirsa, Haryana",
            type: "Secondary"
        }
    ],

    projects: [
        // {
        //     id: 1,
        //     title: "Chat Application",
        //     description: "Developed a real-time messaging application using the MERN stack and Socket.io, enabling instant communication and real-time message updates across multiple users.",
        //     technologies: ["React", "Node.js", "Express", "MongoDB"],
        //     features: [
        //         "Boosted user experience by managing online user status with Socket.io",
        //         "Utilized global state management with Zustand and React Context",
        //         "Better data synchronization efficiency",
        //         "Secured user data by implementing JWT-based authentication",
        //         "Reducing unauthorized access attempts by 90%",
        //         "Designed a visually appealing and responsive interface using TailwindCSS and Daisy UI",
        //         "Implemented robust error handling on both server and client sides"
        //     ],
        //     sourceCode: "https://github.com/rakshakphogat/Chatapp",
        //     liveDemo: "#",
        //     category: "Full Stack",
        //     image: "/api/placeholder/400/250"
        // },
        {
            id: 2,
            title: "QuickChat (Chat App)",
            description: "A full-stack real-time one-to-one chat platform with secure auth, rich media messaging, live presence, and conversation management.",
            technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary", "JWT"],
            features: [
                "Real-time one-to-one messaging with instant updates using Socket.IO",
                "Secure signup/login flow with JWT-based session handling and protected backend routes",
                "Image sharing in messages with Cloudinary upload and storage",
                "Profile photo support for personalized chat experience",
                "Conversation management with chat list, unseen message counts, and seen status",
                "Live online presence indicators for active users",
                "Editable user profile with name, bio, and profile image"
            ],
            sourceCode: "https://github.com/rakshakphogat/QuickChat",
            liveDemo: "https://quick-chat-frontend-pied.vercel.app/",
            category: "Full Stack",
            image: "/api/placeholder/400/250"
        },
        {
            id: 3,
            title: "Noire - E Commerce Website",
            description: "Built a full-scale e-commerce platform with secure JWT-based authentication, including distinct login flows for Admin and Customer.",
            technologies: ["Next.js", "TypeScript", "MongoDB"],
            features: [
                "Integrated Google OAuth for seamless customer login",
                "Stripe payment gateway for debit card transactions",
                "Developed an AI-powered customer support system leveraging Google Generative AI",
                "Contextual, automated responses",
                "Implemented an admin dashboard to manage products, orders, and customers",
                "Role-based protected routes",
                "Designed a responsive, component-driven UI using Next.js, TailwindCSS, and shadcn/ui",
                "Ensuring consistency, scalability, and accessibility across pages"
            ],
            sourceCode: "https://github.com/rakshakphogat/Noire-",
            liveDemo: "https://noire-orpin.vercel.app",
            category: "E-commerce",
            image: "/api/placeholder/400/250"
        },
        {
            id: 4,
            title: "AI Resume Analyser",
            description: "An AI-powered resume analysis platform with ATS scoring, skill-gap detection, resume workflow automation, and career content generation.",
            technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Groq API"],
            features: [
                "AI-driven ATS analysis with score, strengths, weaknesses, and improvement suggestions",
                "Skill-gap detection for target roles with actionable recommendations",
                "Built-in generators for cover letters, interview questions, project ideas, and bullet rewrites",
                "Secure account system with login/signup, Google sign-in, and email password reset",
                "Resume upload support for PDF and DOCX with parsing using pdf-parse and mammoth",
                "Dashboard to view analysis history and download reports",
                "Backend security with JWT auth and bcrypt password hashing"
            ],
            sourceCode: "https://github.com/rakshakphogat/AI_Resume_Analyzer",
            liveDemo: "#",
            category: "AI/ML",
            image: "/api/placeholder/400/250"
        },
        {
            id: 5,
            title: "Blog Application",
            description: "Created a responsive blog platform using Next.js 14 and Tailwind CSS, achieving a 70% faster page load time using server-side rendering.",
            technologies: ["Next.js 14", "JavaScript", "MongoDB"],
            features: [
                "Developed a dynamic Admin Dashboard for post creation, editing, and deletion",
                "Enabling full CRUD operations with role-based access",
                "Optimized blog rendering performance by leveraging Next.js server and client components",
                "Reducing client-side bundle size by 30%",
                "Used MongoDB with Mongoose for storing blog posts and user data"
            ],
            sourceCode: "https://github.com/rakshakphogat/blog-app",
            liveDemo: "#",
            category: "CMS",
            image: "/api/placeholder/400/250"
        },
        {
            id: 6,
            title: "Hirrd (Job Board Platform)",
            description: "A role-based job board platform for candidates and recruiters with full hiring workflows, dashboards, and application tracking.",
            technologies: ["React 19", "Vite 7", "Tailwind CSS 4", "Clerk", "Supabase", "React Hook Form", "Zod"],
            features: [
                "Role-based onboarding and protected access for candidates and recruiters",
                "Smart job discovery with title, company, and location filters",
                "Save and unsave jobs for later with personalized tracking",
                // "End-to-end application workflow with structured details and resume uploads",
                "Recruiter tools to post jobs, manage companies, and set open/closed hiring status",
                "Applicant management with status updates: applied, interviewing, hired, rejected",
                // "Dual personalized dashboards for My Jobs, My Applications, and Saved Jobs"
            ],
            sourceCode: "https://github.com/rakshakphogat/Job-board-platform",
            liveDemo: "https://job-board-platform-chi.vercel.app/",
            category: "Job Platform",
            image: "/api/placeholder/400/250"
        }
    ],

    skills: {
        languages: [
            { name: "C", icon: "Code2" },
            { name: "C++", icon: "Code2" },
            { name: "Python", icon: "Code2" },
            { name: "JavaScript", icon: "Code2" }
        ],
        frameworks: [
            { name: "React", icon: "Atom" },
            { name: "Node.js", icon: "Server" },
            { name: "Express", icon: "Zap" },
            { name: "Next.js", icon: "ArrowRight" },
            { name: "TypeScript", icon: "FileCode" }
        ],
        webDev: [
            { name: "HTML", icon: "Code" },
            { name: "CSS", icon: "Palette" },
            { name: "Next.js", icon: "ArrowRight" },
            { name: "TypeScript", icon: "FileCode" },
            { name: "React", icon: "Atom" },
            { name: "Node.js", icon: "Server" },
            { name: "Express", icon: "Zap" },
            { name: "JWT", icon: "Shield" },
            { name: "Bootstrap", icon: "Layout" },
            { name: "Material UI", icon: "Layers" }
        ],
        databases: [
            { name: "MongoDB", icon: "Database" },
            { name: "MySQL", icon: "Database" }
        ],
        tools: [
            { name: "React Context API", icon: "Atom" },
            { name: "RESTful APIs", icon: "Globe" },
            { name: "Git", icon: "GitBranch" },
            { name: "GitHub", icon: "Github" }
        ],
        uiux: [
            { name: "Canva", icon: "Palette" },
            { name: "Figma", icon: "Figma" }
        ]
    }, experience: {
        softwareDevelopment: "Back-end, Front-end",
        webDevelopment: "HTML, CSS, Next.js, TypeScript, React, Node.js, Express, JWT, Bootstrap, Material UI",
        developmentAndDeployment: "React Context API, RESTful APIs, Git, GitHub"
    }
};

export const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "education", label: "Education", href: "/education" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "contact", label: "Contact", href: "/contact" }
];

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/rakshakphogat",
        icon: "github"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rakhshak-kumar-97901a331",
        icon: "linkedin"
    },
    {
        name: "Email",
        url: "mailto:rakshakphogat@gmail.com",
        icon: "mail"
    }
];