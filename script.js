// Global Variables
let currentMediaIndex = 0;
let currentProject = null;
let isVideoPlaying = false;

// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeCounters();
    renderProjects();
    renderCertifications();
    renderExperience();
    renderContactInfo();
    initializeContactForm();
    initializeProjectModal();
    initializeProjectFilters();
});

// Scroll Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Remove for bidirectional animation
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Navigation
function initializeNavigation() {
    // Active link highlighting
    window.addEventListener('scroll', updateActiveLink);
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        }
    });
}

function updateActiveLink() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    // Close mobile menu
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Animated Counters
function initializeCounters() {
    const projectsCount = document.getElementById('projects-count');
    const certificationsCount = document.getElementById('certifications-count');
    const experienceYears = document.getElementById('experience-years');

    // Animate counters when home section is visible
    const homeSection = document.getElementById('home');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(projectsCount, portfolioData.projects.length, 2000);
                animateCounter(certificationsCount, portfolioData.certifications.length, 2500);
                animateCounter(experienceYears, 2, 3000);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterObserver.observe(homeSection);
}

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card hover-lift hover-glow';
    card.style.animationDelay = `${index * 0.1}s`;
    card.dataset.category = project.category;
    
    card.innerHTML = `
        <div class="project-icon hover-scale">
            ${icons[project.icon] || icons.globe}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
            ${project.demoLink && project.demoLink !== '#' ? 
                `<a href="${project.demoLink}" class="project-link" target="_blank">Ver Demo</a>` : ''}
            ${project.githubLink && project.githubLink !== '#' ? 
                `<a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>` : ''}
        </div>
    `;

    card.addEventListener('click', () => openProjectModal(project));
    
    return card;
}

// Project Filters
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.dataset.filter;
            filterProjects(filter);
        });
    });
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const category = card.dataset.category;
        
        if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.animationDelay = `${index * 0.1}s`;
            setTimeout(() => {
                card.classList.add('slide-in-up', 'visible');
            }, index * 100);
        } else {
            card.style.display = 'none';
            card.classList.remove('visible');
        }
    });
}

// Render Certifications
function renderCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    
    portfolioData.certifications.forEach((cert, index) => {
        const certCard = createCertificationCard(cert, index);
        certificationsGrid.appendChild(certCard);
    });
}

function createCertificationCard(cert, index) {
    const card = document.createElement('div');
    card.className = 'certification-card hover-lift hover-glow';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="certification-icon hover-scale">
            ${icons[cert.icon] || icons.code}
        </div>
        <h3 class="certification-title">${cert.title}</h3>
        <p class="certification-issuer">${cert.issuer}</p>
        <p class="certification-date">${cert.date}</p>
    `;
    
    return card;
}

// Render Experience
function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = createTimelineItem(exp, index);
        timeline.appendChild(timelineItem);
    });
}

function createTimelineItem(exp, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item hover-lift';
    item.style.animationDelay = `${index * 0.2}s`;
    
    item.innerHTML = `
        <div class="timeline-icon hover-scale">
            ${icons[exp.icon] || icons.code}
        </div>
        <div class="timeline-content">
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-company">${exp.company}</p>
            <p class="experience-period">${exp.period}</p>
            <p class="experience-description">${exp.description}</p>
        </div>
    `;
    
    return item;
}

// Render Contact Info
function renderContactInfo() {
    const contactLinks = document.getElementById('contact-links');
    
    portfolioData.contact.forEach(contact => {
        if (contact.link) {
            const contactLink = createContactLink(contact);
            contactLinks.appendChild(contactLink);
        }
    });
}

function createContactLink(contact) {
    const link = document.createElement('a');
    link.className = 'contact-link hover-scale';
    link.href = contact.link;
    if (contact.type !== 'email' && contact.type !== 'phone') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }
    
    link.innerHTML = `
        <div class="contact-icon">
            ${icons[contact.icon] || icons.mail}
        </div>
        <div>
            <strong>${contact.label}</strong>
            <p>${contact.value}</p>
        </div>
    `;
    
    return link;
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleContactForm();
    });
}

function handleContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${name}.

📧 Email: ${email}
📋 Assunto: ${subject}

💬 Mensagem:
${message}

Enviado através do formulário de contato do portfólio.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5562996635404?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    document.getElementById('contact-form').reset();
    
    // Show success message
    showNotification('Mensagem enviada! Você será redirecionado para o WhatsApp.', 'success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--surface-color);
        color: var(--text-primary);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        border: 1px solid var(--success-color);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Project Modal
function initializeProjectModal() {
    closeModal.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    currentProject = project;
    currentMediaIndex = 0;
    isVideoPlaying = false;
    
    // Set modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('project-category').textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
    document.getElementById('project-description').innerHTML = `
        <h3>Descrição</h3>
        <p>${project.fullDescription}</p>
    `;
    
    // Technologies
    const technologiesContainer = document.getElementById('project-technologies');
    technologiesContainer.innerHTML = `
        <h3>Tecnologias</h3>
        <div class="tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
    `;
    
    // Tags
    const tagsContainer = document.getElementById('project-tags');
    tagsContainer.innerHTML = `
        <h3>Tags</h3>
        <div class="modal-tags">
            ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // Links
    const linksContainer = document.getElementById('project-links');
    linksContainer.innerHTML = `
        <div class="modal-links">
            ${project.demoLink && project.demoLink !== '#' ? 
                `<a href="${project.demoLink}" class="btn btn-primary" target="_blank">
                    ${icons['external-link']} Ver Demo
                </a>` : ''}
            ${project.githubLink && project.githubLink !== '#' ? 
                `<a href="${project.githubLink}" class="btn btn-outline" target="_blank">
                    ${icons.github} Código
                </a>` : ''}
        </div>
    `;
    
    // Setup media
    setupProjectMedia(project);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function setupProjectMedia(project) {
    const allMedia = [...project.images, ...project.videos.map(video => ({ type: 'video', src: video }))];
    
    if (allMedia.length === 0) {
        document.getElementById('media-container').innerHTML = '<p>Nenhuma mídia disponível</p>';
        return;
    }
    
    renderCurrentMedia(allMedia);
    renderMediaControls(allMedia);
    renderMediaThumbnails(allMedia);
}

function renderCurrentMedia(allMedia) {
    const mediaContainer = document.getElementById('media-container');
    const currentMedia = allMedia[currentMediaIndex];
    
    if (typeof currentMedia === 'object' && currentMedia.type === 'video') {
        mediaContainer.innerHTML = `
            <video id="project-video" src="${currentMedia.src}" style="width: 100%; height: 300px; object-fit: cover;">
                Seu navegador não suporta vídeos.
            </video>
            <div class="video-overlay" onclick="toggleVideo()">
                <div class="play-button">
                    ${isVideoPlaying ? icons.pause : icons.play}
                </div>
            </div>
        `;
    } else {
        mediaContainer.innerHTML = `
            <img src="${currentMedia}" alt="${currentProject.title} screenshot ${currentMediaIndex + 1}" 
                 style="width: 100%; height: 300px; object-fit: cover;">
        `;
    }
}

function renderMediaControls(allMedia) {
    const controlsContainer = document.getElementById('media-controls');
    
    if (allMedia.length > 1) {
        controlsContainer.innerHTML = `
            <button class="media-btn" onclick="previousMedia()">← Anterior</button>
            <span style="color: var(--text-primary);">${currentMediaIndex + 1} / ${allMedia.length}</span>
            <button class="media-btn" onclick="nextMedia()">Próxima →</button>
        `;
    } else {
        controlsContainer.innerHTML = '';
    }
}

function renderMediaThumbnails(allMedia) {
    const thumbnailsContainer = document.getElementById('media-thumbnails');
    
    if (allMedia.length > 1) {
        thumbnailsContainer.innerHTML = allMedia.map((media, index) => {
            const isVideo = typeof media === 'object' && media.type === 'video';
            const isActive = index === currentMediaIndex ? 'active' : '';
            
            return `
                <div class="thumbnail ${isActive}" onclick="setMediaIndex(${index})">
                    ${isVideo ? 
                        `<div class="video-thumb">${icons.play}</div>` :
                        `<img src="${media}" alt="Thumbnail ${index + 1}">`
                    }
                </div>
            `;
        }).join('');
    } else {
        thumbnailsContainer.innerHTML = '';
    }
}

function toggleVideo() {
    const video = document.getElementById('project-video');
    const overlay = document.querySelector('.video-overlay');
    const playButton = document.querySelector('.play-button');
    
    if (video) {
        if (isVideoPlaying) {
            video.pause();
            isVideoPlaying = false;
            playButton.innerHTML = icons.play;
            overlay.style.display = 'flex';
        } else {
            video.play();
            isVideoPlaying = true;
            playButton.innerHTML = icons.pause;
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
        }
    }
}

function previousMedia() {
    if (!currentProject) return;
    
    const allMedia = [...currentProject.images, ...currentProject.videos.map(video => ({ type: 'video', src: video }))];
    currentMediaIndex = (currentMediaIndex - 1 + allMedia.length) % allMedia.length;
    isVideoPlaying = false;
    setupProjectMedia(currentProject);
}

function nextMedia() {
    if (!currentProject) return;
    
    const allMedia = [...currentProject.images, ...currentProject.videos.map(video => ({ type: 'video', src: video }))];
    currentMediaIndex = (currentMediaIndex + 1) % allMedia.length;
    isVideoPlaying = false;
    setupProjectMedia(currentProject);
}

function setMediaIndex(index) {
    currentMediaIndex = index;
    isVideoPlaying = false;
    setupProjectMedia(currentProject);
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProject = null;
    currentMediaIndex = 0;
    isVideoPlaying = false;
}

// CSS Animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);