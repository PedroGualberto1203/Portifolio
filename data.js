// Portfolio Data
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Plataforma completa de e-commerce com sistema de pagamento integrado",
            fullDescription: "Uma plataforma de e-commerce completa desenvolvida com React e Node.js, featuring carrinho de compras, sistema de pagamento integrado, painel administrativo para gerenciamento de produtos, sistema de usuários com autenticação JWT, e dashboard com analytics em tempo real.",
            category: "web",
            tags: ["React", "Node.js", "MongoDB"],
            technologies: ["React 18", "Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Socket.io", "Material-UI"],
            icon: "globe",
            demoLink: "#",
            githubLink: "#",
            images: [
                "https://via.placeholder.com/800x600?text=E-commerce+Dashboard",
                "https://via.placeholder.com/800x600?text=Product+Catalog",
                "https://via.placeholder.com/800x600?text=Shopping+Cart"
            ],
            videos: [
                "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            ]
        },
        {
            id: 2,
            title: "Task Manager App",
            description: "Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem",
            fullDescription: "Aplicativo móvel de gerenciamento de tarefas desenvolvido em React Native com Firebase. Features incluem criação e organização de tarefas, sistema de categorias e tags, notificações push, sincronização em tempo real entre dispositivos.",
            category: "mobile",
            tags: ["React Native", "Firebase", "Redux"],
            technologies: ["React Native", "Firebase", "Redux Toolkit", "Expo", "AsyncStorage", "Push Notifications"],
            icon: "smartphone",
            demoLink: "#",
            githubLink: "#",
            images: [
                "https://via.placeholder.com/800x600?text=Task+List",
                "https://via.placeholder.com/800x600?text=Add+Task",
                "https://via.placeholder.com/800x600?text=Task+Statistics"
            ],
            videos: []
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "Dashboard interativo para análise de dados com gráficos em tempo real",
            fullDescription: "Dashboard de analytics desenvolvido com Vue.js para visualização de dados em tempo real. Features incluem múltiplos tipos de gráficos interativos, filtros avançados, exportação de relatórios, sistema de alertas automáticos.",
            category: "web",
            tags: ["Vue.js", "Python", "PostgreSQL"],
            technologies: ["Vue 3", "D3.js", "Python", "PostgreSQL", "Chart.js", "Vuetify", "WebSockets"],
            icon: "bar-chart",
            demoLink: "#",
            githubLink: "#",
            images: [
                "https://via.placeholder.com/800x600?text=Analytics+Dashboard",
                "https://via.placeholder.com/800x600?text=Charts+View",
                "https://via.placeholder.com/800x600?text=Reports"
            ],
            videos: []
        },
        {
            id: 4,
            title: "Desktop Notes App",
            description: "Aplicativo desktop para anotações com suporte a markdown",
            fullDescription: "Aplicativo desktop desenvolvido com Electron para anotações com suporte completo a markdown. Features incluem editor WYSIWYG, organização por pastas, busca avançada, sincronização na nuvem.",
            category: "desktop",
            tags: ["Electron", "React", "SQLite"],
            technologies: ["Electron", "React", "SQLite", "CodeMirror", "Markdown-it", "Node.js"],
            icon: "monitor",
            demoLink: "#",
            githubLink: "#",
            images: [
                "https://via.placeholder.com/800x600?text=Notes+Editor",
                "https://via.placeholder.com/800x600?text=Folder+Organization"
            ],
            videos: []
        },
        {
            id: 5,
            title: "Weather Mobile App",
            description: "Aplicativo de clima com previsões e mapas interativos",
            fullDescription: "Aplicativo móvel de previsão do tempo desenvolvido em Flutter com integração de APIs meteorológicas. Features incluem previsão detalhada de 7 dias, geolocalização automática, busca por cidades, mapas meteorológicos interativos.",
            category: "mobile",
            tags: ["Flutter", "Dart", "API"],
            technologies: ["Flutter", "Dart", "OpenWeather API", "Google Maps", "SQLite", "Provider"],
            icon: "cloud",
            demoLink: "#",
            githubLink: "#",
            images: [
                "https://via.placeholder.com/800x600?text=Weather+Main",
                "https://via.placeholder.com/800x600?text=7-Day+Forecast",
                "https://via.placeholder.com/800x600?text=Weather+Map"
            ],
            videos: []
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Site portfólio responsivo com animações e design moderno",
            fullDescription: "Website portfolio pessoal desenvolvido com React e TypeScript, featuring animações suaves, design responsivo, sistema de temas, formulário de contato funcional, seções para projetos, experiência e certificações.",
            category: "web",
            tags: ["React", "TypeScript", "Tailwind"],
            technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod"],
            icon: "user",
            demoLink: "#",
            githubLink: "#",
            images: [
                "https://via.placeholder.com/800x600?text=Portfolio+Home",
                "https://via.placeholder.com/800x600?text=Projects+Section",
                "https://via.placeholder.com/800x600?text=Contact+Form"
            ],
            videos: [
                "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            ]
        }
    ],

    certifications: [
        {
            id: 1,
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "Dezembro 2024",
            icon: "cloud"
        },
        {
            id: 2,
            title: "React Developer Certification",
            issuer: "Meta",
            date: "Novembro 2024",
            icon: "code"
        },
        {
            id: 3,
            title: "Node.js Application Development",
            issuer: "Linux Foundation",
            date: "Outubro 2024",
            icon: "server"
        },
        {
            id: 4,
            title: "JavaScript Advanced Concepts",
            issuer: "FreeCodeCamp",
            date: "Setembro 2024",
            icon: "file-code"
        },
        {
            id: 5,
            title: "Docker & Kubernetes",
            issuer: "Docker Inc",
            date: "Agosto 2024",
            icon: "package"
        },
        {
            id: 6,
            title: "Git & GitHub Mastery",
            issuer: "GitHub",
            date: "Julho 2024",
            icon: "git-branch"
        },
        {
            id: 7,
            title: "Database Design",
            issuer: "Oracle",
            date: "Junho 2024",
            icon: "database"
        },
        {
            id: 8,
            title: "UI/UX Design Principles",
            issuer: "Adobe",
            date: "Maio 2024",
            icon: "palette"
        }
    ],

    experience: [
        {
            id: 1,
            title: "Desenvolvedor Full Stack Senior",
            company: "TechCorp Solutions",
            period: "Janeiro 2023 - Presente",
            description: "Desenvolvimento de aplicações web modernas usando React, Node.js e PostgreSQL. Liderança de equipe de 5 desenvolvedores e mentoria de desenvolvedores júnior.",
            icon: "code"
        },
        {
            id: 2,
            title: "Desenvolvedor Frontend",
            company: "StartupXYZ",
            period: "Março 2021 - Dezembro 2022",
            description: "Criação de interfaces responsivas e interativas usando React e TypeScript. Implementação de testes automatizados e otimização de performance.",
            icon: "laptop"
        },
        {
            id: 3,
            title: "Desenvolvedor Junior",
            company: "WebDev Agency",
            period: "Janeiro 2020 - Fevereiro 2021",
            description: "Desenvolvimento de sites e aplicações web usando HTML, CSS, JavaScript e PHP. Colaboração em projetos de e-commerce e sistemas de gestão.",
            icon: "graduation-cap"
        }
    ],

    contact: [
        {
            id: 1,
            type: "email",
            label: "Email",
            value: "pedro@exemplo.com",
            link: "mailto:pedro@exemplo.com",
            icon: "mail"
        },
        {
            id: 2,
            type: "phone",
            label: "Telefone",
            value: "+55 (62) 99663-5404",
            link: "tel:+5562996635404",
            icon: "phone"
        },
        {
            id: 3,
            type: "linkedin",
            label: "LinkedIn",
            value: "/in/pedro-dev",
            link: "https://linkedin.com/in/pedro-dev",
            icon: "linkedin"
        },
        {
            id: 4,
            type: "github",
            label: "GitHub",
            value: "/pedro-dev",
            link: "https://github.com/pedro-dev",
            icon: "github"
        },
        {
            id: 5,
            type: "location",
            label: "Localização",
            value: "São Paulo, SP - Brasil",
            link: null,
            icon: "map-pin"
        },
        {
            id: 6,
            type: "whatsapp",
            label: "WhatsApp",
            value: "+55 (62) 99663-5404",
            link: "https://wa.me/5562996635404",
            icon: "message-circle"
        }
    ]
};

// SVG Icons
const icons = {
    globe: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>',
    smartphone: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
    'bar-chart': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>',
    monitor: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',
    user: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline></svg>',
    server: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    'file-code': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="10" y1="13" x2="8" y2="15"></line><line x1="8" y1="17" x2="10" y2="19"></line><line x1="14" y1="13" x2="16" y2="15"></line><line x1="16" y1="17" x2="14" y2="19"></line></svg>',
    package: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    'git-branch': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="m18 9a9 9 0 0 1-9 9"></path></svg>',
    database: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="m3 5v14c0 3 4 6 9 6s9-3 9-6V5"></path><path d="m3 12c0 3 4 6 9 6s9-3 9-6"></path></svg>',
    palette: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
    laptop: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>',
    'graduation-cap': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
    mail: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg>',
    phone: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    linkedin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    github: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
    'map-pin': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    'message-circle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>',
    'external-link': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
    play: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6,3 20,12 6,21"></polygon></svg>',
    pause: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
};