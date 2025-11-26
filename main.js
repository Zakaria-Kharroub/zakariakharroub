// ========================================
// LANGUAGE SWITCHER
// ========================================
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",
        
        // Hero Section
        heroBadge: "Welcome to my portfolio",
        heroTitle: "Hi, I'm",
        heroSubtitle: "Full Stack Developer",
        heroDescription: "I craft scalable web applications with clean code and modern technologies. Specializing in Java, Spring Boot, PHP, Laravel, Angular, and React.",
        heroViewWork: "View My Work",
        heroDownloadCV: "Download CV",
        heroScrollDown: "Scroll Down",
        
        // About Section
        aboutLabel: "Get to know me",
        aboutTitle: "About Me",
        aboutParagraph1: "I am a Full Stack Developer specializing in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, and modern <strong>JavaScript</strong> frameworks like <strong>Angular</strong> and <strong>React</strong>. I focus on building scalable, high-performance applications using clean code principles and test-driven development.",
        aboutParagraph2: "My experience includes delivering enterprise solutions such as Hunter's League and TaskSphere, where I applied best practices in software development. With a strong grasp of DevOps tools (Docker, Jenkins, SonarQube) and agile methodologies, I ensure efficient project delivery.",
        aboutHighlight1Title: "Clean Code",
        aboutHighlight1Desc: "Writing maintainable & scalable code",
        aboutHighlight2Title: "Best Practices",
        aboutHighlight2Desc: "Following industry standards",
        aboutHighlight3Title: "Fast Learner",
        aboutHighlight3Desc: "Always learning new technologies",
        aboutStat1: "Projects Completed",
        aboutStat2: "Technologies",
        aboutStat3: "Years Experience",
        
        // Skills Section
        skillsLabel: "What I do",
        skillsTitle: "Skills & Technologies",
        skillsFrontend: "Frontend Development",
        skillsBackend: "Backend Development",
        skillsDatabase: "Database",
        skillsDevOps: "DevOps & Tools",
        skillsDesign: "Design",
        
        // Experience Section
        experienceLabel: "My Journey",
        experienceTitle: "Professional Experience",
        experienceKeyAchievements: "Key Achievements",
        experienceTechnologies: "Technologies Used",
        
        // Experience Descriptions
        experience1Description: "Led the design and development of enterprise-grade applications including NEH Luxury Real Estate and IGPEC platforms, implementing scalable architecture and high-performance solutions using modern Java/Spring Boot back-end and Angular front-end technologies.",
        experience1Achievement1: "Designed and implemented scalable architecture for NEH Luxury Real Estate platform using UML & Merise",
        experience1Achievement2: "Built secure Java/Spring Boot back-end with REST API, JWT, and Spring Security",
        experience1Achievement3: "Created high-performance Angular/TypeScript front-end with responsive UI",
        experience1Achievement4: "Managed PostgreSQL schema & optimized queries for better performance",
        experience1Achievement5: "Engineered IGPEC platform for high-availability employee training management",
        
        experience2Description: "Led the full-stack development of IntegralRH ERP system, applying modern development methodologies and best practices. Implemented comprehensive testing strategies and established robust CI/CD pipelines for efficient deployment.",
        experience2Achievement1: "Led full-stack conception of IntegralRH ERP system using Laravel & PHP + React.js",
        experience2Achievement2: "Applied UML + functional analysis to align solutions with client needs",
        experience2Achievement3: "Executed unit testing strategy to ensure code quality and reliability",
        experience2Achievement4: "Integrated MySQL with optimized queries for enhanced performance",
        experience2Achievement5: "Built CI/CD pipeline using Docker + Jenkins for automated deployment",
        
        // Projects Section
        projectsLabel: "My work",
        projectsTitle: "Featured Projects",
        projectsAll: "All Projects",
        projectsJava: "Java / Spring Boot",
        projectsAngular: "Angular",
        projectsPHP: "PHP / Laravel",
        
        // Project Descriptions
        project1Desc: "Backend application for hunting competition management",
        project2Desc: "City management and civic engagement platform",
        project3Desc: "Car rental platform with booking management",
        project4Desc: "Farm management system for citrus production",
        project5Desc: "Task management and team collaboration tool",
        project6Desc: "Online library and book management system",
        project7Desc: "Frontend interface for hunting competition platform",
        project8Desc: "Kitchen construction cost calculation application",
        project9Desc: "Event management and ticket booking platform",
        project10Desc: "Responsive frontend for city management platform",
        project11Desc: "Social networking and connection platform",
        
        // Footer
        footerDescription: "Full Stack Developer crafting exceptional digital experiences.",
        footerQuickLinks: "Quick Links",
        footerContact: "Contact"
    },
    fr: {
        // Navigation
        navHome: "Accueil",
        navAbout: "À propos",
        navSkills: "Compétences",
        navExperience: "Expérience",
        navProjects: "Projets",
        navContact: "Contact",
        
        // Hero Section
        heroBadge: "Bienvenue sur mon portfolio",
        heroTitle: "Salut, je suis",
        heroSubtitle: "Développeur Full Stack",
        heroDescription: "Je conçois des applications web évolutives avec du code propre et des technologies modernes. Spécialisé en Java, Spring Boot, PHP, Laravel, Angular et React.",
        heroViewWork: "Découvrir mes projets",
        heroDownloadCV: "Télécharger mon CV",
        heroScrollDown: "Défiler vers le bas",
        
        // About Section
        aboutLabel: "Faisons connaissance",
        aboutTitle: "À Propos",
        aboutParagraph1: "Je suis développeur Full Stack spécialisé en <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, et les frameworks <strong>JavaScript</strong> modernes comme <strong>Angular</strong> et <strong>React</strong>. Je me concentre sur la création d'applications évolutives et performantes en respectant les principes du code propre et le développement piloté par les tests.",
        aboutParagraph2: "Mon expérience inclut la livraison de solutions d'entreprise telles que Hunter's League et TaskSphere, où j'ai appliqué les meilleures pratiques du développement logiciel. Grâce à ma maîtrise des outils DevOps (Docker, Jenkins, SonarQube) et des méthodologies agiles, je garantis une livraison de projets efficace.",
        aboutHighlight1Title: "Code Propre",
        aboutHighlight1Desc: "Code maintenable et évolutif",
        aboutHighlight2Title: "Bonnes Pratiques",
        aboutHighlight2Desc: "Respect des standards de l'industrie",
        aboutHighlight3Title: "Apprentissage Rapide",
        aboutHighlight3Desc: "En constante évolution technologique",
        aboutStat1: "Projets Réalisés",
        aboutStat2: "Technologies",
        aboutStat3: "Ans d'Expérience",
        
        // Skills Section
        skillsLabel: "Mon expertise",
        skillsTitle: "Compétences & Technologies",
        skillsFrontend: "Développement Frontend",
        skillsBackend: "Développement Backend",
        skillsDatabase: "Bases de Données",
        skillsDevOps: "DevOps & Outils",
        skillsDesign: "Design",
        
        // Experience Section
        experienceLabel: "Mon Parcours",
        experienceTitle: "Expérience Professionnelle",
        experienceKeyAchievements: "Principales Réalisations",
        experienceTechnologies: "Technologies Utilisées",
        
        // Experience Descriptions
        experience1Description: "Direction de la conception et du développement d'applications d'entreprise incluant les plateformes NEH Luxury Real Estate et IGPEC, avec mise en place d'une architecture évolutive et de solutions haute performance basées sur Java/Spring Boot côté back-end et Angular côté front-end.",
        experience1Achievement1: "Conception et mise en place d'une architecture évolutive pour la plateforme NEH Luxury Real Estate avec UML & Merise",
        experience1Achievement2: "Développement d'un back-end Java/Spring Boot sécurisé avec API REST, JWT et Spring Security",
        experience1Achievement3: "Création d'un front-end Angular/TypeScript performant avec interface responsive",
        experience1Achievement4: "Gestion du schéma PostgreSQL et optimisation des requêtes pour améliorer les performances",
        experience1Achievement5: "Développement de la plateforme IGPEC pour la gestion de formations avec haute disponibilité",
        
        experience2Description: "Direction du développement full-stack du système ERP IntegralRH, en appliquant des méthodologies de développement modernes et les meilleures pratiques. Mise en place de stratégies de tests complètes et de pipelines CI/CD robustes pour des déploiements efficaces.",
        experience2Achievement1: "Direction de la conception full-stack du système ERP IntegralRH avec Laravel & PHP + React.js",
        experience2Achievement2: "Application d'UML et d'analyse fonctionnelle pour aligner les solutions aux besoins clients",
        experience2Achievement3: "Mise en œuvre d'une stratégie de tests unitaires pour garantir la qualité du code",
        experience2Achievement4: "Intégration MySQL avec optimisation des requêtes pour améliorer les performances",
        experience2Achievement5: "Construction d'un pipeline CI/CD avec Docker + Jenkins pour le déploiement automatisé",
        
        // Projects Section
        projectsLabel: "Mes réalisations",
        projectsTitle: "Projets Phares",
        projectsAll: "Tous les Projets",
        projectsJava: "Java / Spring Boot",
        projectsAngular: "Angular",
        projectsPHP: "PHP / Laravel",
        
        // Project Descriptions
        project1Desc: "Application backend de gestion de compétitions de chasse",
        project2Desc: "Plateforme de gestion urbaine et d'engagement citoyen",
        project3Desc: "Plateforme de location de véhicules avec gestion des réservations",
        project4Desc: "Système de gestion agricole pour la production d'agrumes",
        project5Desc: "Outil de gestion de tâches et de collaboration en équipe",
        project6Desc: "Bibliothèque en ligne avec système de gestion de livres",
        project7Desc: "Interface frontend pour la plateforme de compétitions de chasse",
        project8Desc: "Application de calcul des coûts de construction de cuisines",
        project9Desc: "Plateforme de gestion d'événements et de billetterie",
        project10Desc: "Frontend responsive pour la plateforme de gestion urbaine",
        project11Desc: "Réseau social et plateforme de mise en relation",
        
        // Footer
        footerDescription: "Développeur Full Stack créant des expériences numériques d'exception.",
        footerQuickLinks: "Liens Rapides",
        footerContact: "Contact"
    }
};

let currentLanguage = 'en';

function updateContent(lang) {
    const t = translations[lang];
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['navHome', 'navAbout', 'navSkills', 'navExperience', 'navProjects', 'navContact'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
    
    // Hero Section
    const heroBadge = document.querySelector('.hero-badge span:last-child');
    if (heroBadge) heroBadge.textContent = t.heroBadge;
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `${t.heroTitle} <span class="gradient-text">Zakaria Kharroub</span>`;
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) heroDescription.textContent = t.heroDescription;
    
    const viewWorkBtn = document.querySelector('.btn-primary span');
    if (viewWorkBtn) viewWorkBtn.textContent = t.heroViewWork;
    
    const downloadBtn = document.querySelector('.btn-secondary span');
    if (downloadBtn) downloadBtn.textContent = t.heroDownloadCV;
    
    const scrollDown = document.querySelector('.scroll-indicator span');
    if (scrollDown) scrollDown.textContent = t.heroScrollDown;
    
    // About Section
    const aboutLabel = document.querySelector('.about .section-label');
    if (aboutLabel) aboutLabel.textContent = t.aboutLabel;
    
    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    
    const aboutParagraphs = document.querySelectorAll('.about-paragraph');
    if (aboutParagraphs[0]) aboutParagraphs[0].innerHTML = t.aboutParagraph1;
    if (aboutParagraphs[1]) aboutParagraphs[1].innerHTML = t.aboutParagraph2;
    
    const highlightTitles = document.querySelectorAll('.highlight-item h4');
    if (highlightTitles[0]) highlightTitles[0].textContent = t.aboutHighlight1Title;
    if (highlightTitles[1]) highlightTitles[1].textContent = t.aboutHighlight2Title;
    if (highlightTitles[2]) highlightTitles[2].textContent = t.aboutHighlight3Title;
    
    const highlightDescs = document.querySelectorAll('.highlight-item p');
    if (highlightDescs[0]) highlightDescs[0].textContent = t.aboutHighlight1Desc;
    if (highlightDescs[1]) highlightDescs[1].textContent = t.aboutHighlight2Desc;
    if (highlightDescs[2]) highlightDescs[2].textContent = t.aboutHighlight3Desc;
    
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.aboutStat1;
    if (statLabels[1]) statLabels[1].textContent = t.aboutStat2;
    if (statLabels[2]) statLabels[2].textContent = t.aboutStat3;
    
    // Skills Section
    const skillsLabel = document.querySelector('.skills .section-label');
    if (skillsLabel) skillsLabel.textContent = t.skillsLabel;
    
    const skillsTitle = document.querySelector('.skills .section-title');
    if (skillsTitle) skillsTitle.textContent = t.skillsTitle;
    
    const categoryTitles = document.querySelectorAll('.category-header h3');
    if (categoryTitles[0]) categoryTitles[0].textContent = t.skillsFrontend;
    if (categoryTitles[1]) categoryTitles[1].textContent = t.skillsBackend;
    if (categoryTitles[2]) categoryTitles[2].textContent = t.skillsDatabase;
    if (categoryTitles[3]) categoryTitles[3].textContent = t.skillsDevOps;
    if (categoryTitles[4]) categoryTitles[4].textContent = t.skillsDesign;
    
    // Experience Section
    const experienceLabel = document.querySelector('.experience .section-label');
    if (experienceLabel) experienceLabel.textContent = t.experienceLabel;
    
    const experienceTitle = document.querySelector('.experience .section-title');
    if (experienceTitle) experienceTitle.textContent = t.experienceTitle;
    
    document.querySelectorAll('.achievements h4').forEach(h4 => {
        h4.textContent = t.experienceKeyAchievements;
    });
    
    document.querySelectorAll('.tech-stack h4').forEach(h4 => {
        h4.textContent = t.experienceTechnologies;
    });
    
    // Experience Descriptions
    const experienceDescriptions = document.querySelectorAll('.experience-description');
    if (experienceDescriptions[0]) experienceDescriptions[0].textContent = t.experience1Description;
    if (experienceDescriptions[1]) experienceDescriptions[1].textContent = t.experience2Description;
    
    // Experience Achievements
    const achievementLists = document.querySelectorAll('.achievement-list');
    if (achievementLists[0]) {
        const achievements1 = achievementLists[0].querySelectorAll('li span');
        if (achievements1[0]) achievements1[0].textContent = t.experience1Achievement1;
        if (achievements1[1]) achievements1[1].textContent = t.experience1Achievement2;
        if (achievements1[2]) achievements1[2].textContent = t.experience1Achievement3;
        if (achievements1[3]) achievements1[3].textContent = t.experience1Achievement4;
        if (achievements1[4]) achievements1[4].textContent = t.experience1Achievement5;
    }
    
    if (achievementLists[1]) {
        const achievements2 = achievementLists[1].querySelectorAll('li span');
        if (achievements2[0]) achievements2[0].textContent = t.experience2Achievement1;
        if (achievements2[1]) achievements2[1].textContent = t.experience2Achievement2;
        if (achievements2[2]) achievements2[2].textContent = t.experience2Achievement3;
        if (achievements2[3]) achievements2[3].textContent = t.experience2Achievement4;
        if (achievements2[4]) achievements2[4].textContent = t.experience2Achievement5;
    }
    
    // Projects Section
    const projectsLabel = document.querySelector('.projects .section-label');
    if (projectsLabel) projectsLabel.textContent = t.projectsLabel;
    
    const projectsTitle = document.querySelector('.projects .section-title');
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons[0]) filterButtons[0].textContent = t.projectsAll;
    if (filterButtons[1]) filterButtons[1].textContent = t.projectsJava;
    if (filterButtons[2]) filterButtons[2].textContent = t.projectsAngular;
    if (filterButtons[3]) filterButtons[3].textContent = t.projectsPHP;
    
    // Project Descriptions
    const projectDescriptions = document.querySelectorAll('.project-info p');
    const projectKeys = [
        'project1Desc', 'project2Desc', 'project3Desc', 'project4Desc', 
        'project5Desc', 'project6Desc', 'project7Desc', 'project8Desc',
        'project9Desc', 'project10Desc', 'project11Desc'
    ];
    
    projectDescriptions.forEach((desc, index) => {
        if (projectKeys[index] && t[projectKeys[index]]) {
            desc.textContent = t[projectKeys[index]];
        }
    });
    
    // Footer
    const footerDesc = document.querySelector('.footer-left p');
    if (footerDesc) footerDesc.textContent = t.footerDescription;
    
    const footerLinksTitle = document.querySelector('.footer-links h4');
    if (footerLinksTitle) footerLinksTitle.textContent = t.footerQuickLinks;
    
    const footerContactTitle = document.querySelector('.footer-contact h4');
    if (footerContactTitle) footerContactTitle.textContent = t.footerContact;
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach((link, index) => {
        const keys = ['navHome', 'navAbout', 'navSkills', 'navExperience', 'navProjects'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
}

// Language Toggle Button
const languageToggle = document.getElementById('languageToggle');
const currentLangSpan = document.getElementById('currentLang');

if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        currentLangSpan.textContent = currentLanguage.toUpperCase();
        updateContent(currentLanguage);
        
        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', currentLanguage);
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage;
    });
}

// Load saved language preference
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLanguage) {
        currentLanguage = savedLang;
        currentLangSpan.textContent = currentLanguage.toUpperCase();
        updateContent(currentLanguage);
        document.documentElement.lang = currentLanguage;
    }
});

// ========================================
// NAVIGATION
// ========================================
const nav = document.querySelector('.nav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Scroll effect on navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// THREE.JS BACKGROUND
// ========================================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg-canvas'),
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 30;

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x6366f1,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Create geometric shapes
const shapes = [];
const geometries = [
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.TetrahedronGeometry(1, 0)
];

for (let i = 0; i < 15; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x6366f1 : 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
    );
    mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    );
    
    const scale = Math.random() * 2 + 1;
    mesh.scale.set(scale, scale, scale);
    
    shapes.push({
        mesh: mesh,
        rotationSpeed: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
        }
    });
    
    scene.add(mesh);
}

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;
    
    // Animate shapes
    shapes.forEach(shape => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
    });
    
    // Camera follows mouse
    camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ========================================
// PROFILE 3D CANVAS
// ========================================
const profileCanvas = document.getElementById('profile-canvas');
if (profileCanvas) {
    const ctx = profileCanvas.getContext('2d');
    profileCanvas.width = 450;
    profileCanvas.height = 450;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * profileCanvas.width;
            this.y = Math.random() * profileCanvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > profileCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > profileCanvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animateProfile() {
        ctx.clearRect(0, 0, profileCanvas.width, profileCanvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Connect particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateProfile);
    }
    
    animateProfile();
}

// ========================================
// STAT CARDS 3D CANVASES
// ========================================
function createStatCanvas(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    
    let angle = 0;
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw rotating hexagon
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.3;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const x = radius * Math.cos((i * Math.PI) / 3);
            const y = radius * Math.sin((i * Math.PI) / 3);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(-radius, -radius, radius, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
        
        angle += 0.005;
        requestAnimationFrame(animate);
    }
    
    animate();
}

createStatCanvas('stat-canvas-1', 'rgba(99, 102, 241, 0.6)');
createStatCanvas('stat-canvas-2', 'rgba(139, 92, 246, 0.6)');
createStatCanvas('stat-canvas-3', 'rgba(236, 72, 153, 0.6)');

// ========================================
// PROJECT FILTERING
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            // Hide all cards first
            card.classList.remove('show');
            
            // Show cards based on filter
            setTimeout(() => {
                if (filter === 'all') {
                    card.classList.add('show');
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.classList.add('show');
                    }
                }
            }, 100);
        });
    });
});

// Show all projects initially
projectCards.forEach(card => {
    card.classList.add('show');
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// First section (hero) should be visible immediately
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
}

// ========================================
// CURSOR EFFECT (Optional - Premium Feel)
// ========================================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.5);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.2s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.display = 'block';
});

// Enlarge cursor on interactive elements
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// ========================================
// TYPING EFFECT FOR HERO SUBTITLE
// ========================================
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ========================================
// COUNTER ANIMATION FOR STATS
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual');
    
    parallaxElements.forEach(el => {
        const speed = 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Reduce Three.js rendering on low-power mode
let isLowPowerMode = false;

window.addEventListener('blur', () => {
    isLowPowerMode = true;
});

window.addEventListener('focus', () => {
    isLowPowerMode = false;
});

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c👋 Hello Developer!', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #8b5cf6; font-size: 16px;');
console.log('%c📧 kharroubzakaria32@gmail.com', 'color: #ec4899; font-size: 14px;');