export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'desktop';
  tags: string[];
  technologies: string[];
  icon: string;
  demoLink?: string;
  githubLink?: string;
  images: string[];
  videos: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

export interface ContactItem {
  id: number;
  type: string;
  label: string;
  value: string;
  link?: string;
  icon: string;
}

export const portfolioData = {
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamento integrado",
      fullDescription: "Uma plataforma de e-commerce completa desenvolvida com React e Node.js, featuring carrinho de compras, sistema de pagamento integrado, painel administrativo para gerenciamento de produtos, sistema de usuários com autenticação JWT, e dashboard com analytics em tempo real.",
      category: "web" as const,
      tags: ["React", "Node.js", "MongoDB"],
      technologies: ["React 18", "Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Socket.io", "Material-UI"],
      icon: "Globe",
      demoLink: "#",
      githubLink: "#",
      images: ["https://via.placeholder.com/800x600?text=E-commerce+Dashboard", "https://via.placeholder.com/800x600?text=Product+Catalog"],
      videos: ["https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"]
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem",
      fullDescription: "Aplicativo móvel de gerenciamento de tarefas desenvolvido em React Native com Firebase. Features incluem criação e organização de tarefas, sistema de categorias e tags, notificações push, sincronização em tempo real entre dispositivos.",
      category: "mobile" as const,
      tags: ["React Native", "Firebase", "Redux"],
      technologies: ["React Native", "Firebase", "Redux Toolkit", "Expo", "AsyncStorage", "Push Notifications"],
      icon: "Smartphone",
      demoLink: "#",
      githubLink: "#",
      images: ["https://via.placeholder.com/800x600?text=Task+List", "https://via.placeholder.com/800x600?text=Add+Task"],
      videos: []
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real",
      fullDescription: "Dashboard de analytics desenvolvido com Vue.js para visualização de dados em tempo real. Features incluem múltiplos tipos de gráficos interativos, filtros avançados, exportação de relatórios, sistema de alertas automáticos.",
      category: "web" as const,
      tags: ["Vue.js", "Python", "PostgreSQL"],
      technologies: ["Vue 3", "D3.js", "Python", "PostgreSQL", "Chart.js", "Vuetify", "WebSockets"],
      icon: "BarChart3",
      demoLink: "#",
      githubLink: "#",
      images: ["https://via.placeholder.com/800x600?text=Analytics+Dashboard", "https://via.placeholder.com/800x600?text=Charts+View"],
      videos: []
    },
    {
      id: 4,
      title: "Desktop Notes App",
      description: "Aplicativo desktop para anotações com suporte a markdown",
      fullDescription: "Aplicativo desktop desenvolvido com Electron para anotações com suporte completo a markdown. Features incluem editor WYSIWYG, organização por pastas, busca avançada, sincronização na nuvem.",
      category: "desktop" as const,
      tags: ["Electron", "React", "SQLite"],
      technologies: ["Electron", "React", "SQLite", "CodeMirror", "Markdown-it", "Node.js"],
      icon: "Monitor",
      demoLink: "#",
      githubLink: "#",
      images: ["https://via.placeholder.com/800x600?text=Notes+Editor", "https://via.placeholder.com/800x600?text=Folder+Organization"],
      videos: []
    },
    {
      id: 5,
      title: "Weather Mobile App",
      description: "Aplicativo de clima com previsões e mapas interativos",
      fullDescription: "Aplicativo móvel de previsão do tempo desenvolvido em Flutter com integração de APIs meteorológicas. Features incluem previsão detalhada de 7 dias, geolocalização automática, busca por cidades, mapas meteorológicos interativos.",
      category: "mobile" as const,
      tags: ["Flutter", "Dart", "API"],
      technologies: ["Flutter", "Dart", "OpenWeather API", "Google Maps", "SQLite", "Provider"],
      icon: "Cloud",
      demoLink: "#",
      githubLink: "#",
      images: ["https://via.placeholder.com/800x600?text=Weather+Main", "https://via.placeholder.com/800x600?text=7-Day+Forecast"],
      videos: []
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Site portfólio responsivo com animações e design moderno",
      fullDescription: "Website portfolio pessoal desenvolvido com React e TypeScript, featuring animações suaves, design responsivo, sistema de temas, formulário de contato funcional, seções para projetos, experiência e certificações.",
      category: "web" as const,
      tags: ["React", "TypeScript", "Tailwind"],
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod"],
      icon: "User",
      demoLink: "#",
      githubLink: "#",
      images: ["https://via.placeholder.com/800x600?text=Portfolio+Home", "https://via.placeholder.com/800x600?text=Projects+Section"],
      videos: ["https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"]
    }
  ] as Project[],
  
  certifications: [
    {
      id: 1,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "Dezembro 2024",
      icon: "Cloud"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "Novembro 2024",
      icon: "Code"
    },
    {
      id: 3,
      title: "Node.js Application Development",
      issuer: "OpenJS Foundation",
      date: "Outubro 2024",
      icon: "Server"
    },
    {
      id: 4,
      title: "TypeScript Advanced",
      issuer: "Microsoft",
      date: "Setembro 2024",
      icon: "FileCode"
    },
    {
      id: 5,
      title: "Docker Fundamentals",
      issuer: "Docker Inc",
      date: "Agosto 2024",
      icon: "Package"
    },
    {
      id: 6,
      title: "Git & GitHub Mastery",
      issuer: "GitHub",
      date: "Julho 2024",
      icon: "GitBranch"
    },
    {
      id: 7,
      title: "Database Design",
      issuer: "Oracle",
      date: "Junho 2024",
      icon: "Database"
    },
    {
      id: 8,
      title: "UI/UX Design Principles",
      issuer: "Adobe",
      date: "Maio 2024",
      icon: "Palette"
    }
  ] as Certification[],
  
  experience: [
    {
      id: 1,
      title: "Desenvolvedor Full Stack Senior",
      company: "TechCorp Solutions",
      period: "Janeiro 2023 - Presente",
      description: "Lidero o desenvolvimento de aplicações web complexas utilizando React, Node.js e cloud computing. Responsável por arquitetura de sistemas e mentoria de desenvolvedores júnior.",
      icon: "Code"
    },
    {
      id: 2,
      title: "Desenvolvedor Full Stack",
      company: "Digital Innovations",
      period: "Junho 2022 - Dezembro 2022",
      description: "Desenvolvimento de soluções web responsivas e APIs RESTful. Implementação de boas práticas de desenvolvimento e integração contínua.",
      icon: "Laptop"
    },
    {
      id: 3,
      title: "Desenvolvedor Junior",
      company: "StartUp Tech",
      period: "Janeiro 2022 - Maio 2022",
      description: "Primeiro emprego como desenvolvedor, focado em frontend com React e aprendizado de tecnologias backend.",
      icon: "GraduationCap"
    }
  ] as Experience[],
  
  contact: [
    {
      id: 1,
      type: "email",
      label: "Email",
      value: "pedro@exemplo.com",
      link: "mailto:pedro@exemplo.com",
      icon: "Mail"
    },
    {
      id: 2,
      type: "phone",
      label: "Telefone",
      value: "+55 (62) 99663-5404",
      link: "tel:+5562996635404",
      icon: "Phone"
    },
    {
      id: 3,
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/pedro",
      link: "https://linkedin.com/in/pedro",
      icon: "Linkedin"
    },
    {
      id: 4,
      type: "github",
      label: "GitHub",
      value: "github.com/PedroGualberto1203",
      link: "https://github.com/PedroGualberto1203",
      icon: "Github"
    },
    {
      id: 5,
      type: "location",
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null,
      icon: "MapPin"
    },
    {
      id: 6,
      type: "whatsapp",
      label: "WhatsApp",
      value: "+55 (62) 99663-5404",
      link: "https://wa.me/5562996635404",
      icon: "MessageCircle"
    }
  ] as ContactItem[]
};
