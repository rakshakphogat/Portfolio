export const portfolioData = {
    personal: {
        name: "Rakhshak Kumar",
        title: "Full Stack Developer",
        subtitle: "Computer Science Engineering Student",
        email: "rakshakphogat@gmail.com",
        phone: "+91-8708728915",
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
        {
            id: 1,
            title: "Chat Application",
            description: "Developed a real-time messaging application using the MERN stack and Socket.io, enabling instant communication and real-time message updates across multiple users.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            features: [
                "Boosted user experience by managing online user status with Socket.io",
                "Utilized global state management with Zustand and React Context",
                "Better data synchronization efficiency",
                "Secured user data by implementing JWT-based authentication",
                "Reducing unauthorized access attempts by 90%",
                "Designed a visually appealing and responsive interface using TailwindCSS and Daisy UI",
                "Implemented robust error handling on both server and client sides"
            ],
            sourceCode: "https://github.com/placeholder/chat-app",
            liveDemo: "#",
            category: "Full Stack",
            image: "/api/placeholder/400/250"
        },
        {
            id: 2,
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
            sourceCode: "#",
            liveDemo: "https://placeholder-noire.vercel.app",
            category: "E-commerce",
            image: "/api/placeholder/400/250"
        },
        {
            id: 3,
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
            sourceCode: "https://github.com/placeholder/blog-app",
            liveDemo: "#",
            category: "CMS",
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