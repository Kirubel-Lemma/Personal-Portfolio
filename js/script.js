/* Data Definitions */
const skillCategories = [
    {
        title: 'Programming',
        icon: 'code',
        skills: ['Python', 'Java', 'JavaScript', 'Shell Script', 'YAML']
    },
    {
        title: 'Containerization',
        icon: 'database',
        skills: ['Kubernetes', 'Docker']
    },
    {
        title: 'CI/CD & Automation',
        icon: 'terminal',
        skills: ['Jenkins', 'GitLab CI/CD', 'Ansible']
    },
    {
        title: 'Linux & Version Control',
        icon: 'shield-check',
        skills: ['CentOS', 'Ubuntu', 'Git', 'GitHub', 'GitLab']
    },
    {
        title: 'Monitoring & Networking',
        icon: 'cloud',
        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix']
    },
    {
        title: 'Web & Proxy Servers',
        icon: 'layout',
        skills: ['Nginx', 'Apache', 'HAProxy', 'Traefik']
    }
];

const experiences = [
    {
        role: 'Network and System Administrator',
        company: 'Hagbes PLC',
        period: 'Dec 2023 - Present',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Architected and deployed scalable CI/CD pipelines using Jenkins for automated builds, testing, and deployments.',
            'Configured and optimized Kubernetes clusters to ensure high availability and fault tolerance.',
            'Designed and managed full DevOps environments; deployed Kubernetes clusters.',
            'Implemented monitoring solutions (Prometheus, Grafana) for observability.'
        ]
    },
    {
        role: 'Junior System Engineer',
        company: 'Atlas Computer Technology',
        period: 'Jun 2022 - Dec 2023',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Successfully implemented and configured USSD and mobile banking platforms.',
            'Containerized applications using Docker and Kubernetes for better scalability.',
            'Integrated ELK stack for centralized logging, alerting, and visualization.',
            'Administered Linux-based server infrastructure ensuring 99.9% uptime.'
        ]
    }
];

const projects = [
    {
        title: 'Hagbes ERP Infrastructure',
        description: 'Architected a scalable CI/CD environment for an Enterprise Resource Planning system. Managed Kubernetes clusters and automated deployments for high availability.',
        icon: 'layers',
        tags: ['Jenkins', 'Kubernetes', 'Traefik', 'Docker'],
        github: '#',
        external: '#'
    },
    {
        title: 'USSD & Mobile Banking Platform',
        description: 'Redesigned the infrastructure for a critical banking platform, improving transaction flow and system resilience. Integrated ELK for real-time monitoring.',
        icon: 'zap',
        tags: ['ELK Stack', 'Prometheus', 'HAProxy', 'Ansible'],
        github: '#',
        external: '#'
    },
    {
        title: 'Secure Network Infrastructure',
        description: 'Implemented OPNsense-based network security across multiple data centers. Enforced SSO and automated security scanning in delivery pipelines.',
        icon: 'shield',
        tags: ['OPNsense', 'pfSense', 'SSO', 'Zabbix'],
        github: '#',
        external: '#'
    }
];

/* Main Initialization */
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderProjects();
    initTheme();
    initRevealAnimations();
    initNavbarScroll();
    initMobileMenu();
});

/* Rendering Functions */
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = skillCategories.map((cat, idx) => `
        <div class="skill-card glass reveal reveal-delay-${(idx % 3) + 1}">
            <div class="skill-icon"><i data-lucide="${cat.icon}"></i></div>
            <h3 class="skill-card-title">${cat.title}</h3>
            <div class="skill-tags">
                ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    container.innerHTML = experiences.map(exp => `
        <div class="timeline-item reveal">
            <div class="timeline-dot glass"><i data-lucide="briefcase"></i></div>
            <div class="timeline-content glass">
                <h3 class="exp-role">${exp.role}</h3>
                <div class="exp-meta">
                    <span><i data-lucide="building-2"></i> ${exp.company}</span>
                    <span><i data-lucide="calendar"></i> ${exp.period}</span>
                </div>
                <ul class="experience-desc">
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = projects.map((proj, idx) => `
        <div class="project-card glass reveal reveal-delay-${(idx % 3) + 1}">
            <div class="project-icon"><i data-lucide="${proj.icon}"></i></div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-description">${proj.description}</p>
            <div class="skill-tags">
                ${proj.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-footer">
                <div class="project-links">
                    <a href="${proj.github}" aria-label="GitHub"><i data-lucide="github"></i></a>
                    <a href="${proj.external}" aria-label="Preview"><i data-lucide="external-link"></i></a>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

/* Interactivity Functions */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (!themeBtn || !themeIcon) return;
    let currentTheme = localStorage.getItem('theme') || 'dark';

    document.body.className = `${currentTheme}-theme`;
    updateThemeIcon();

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.className = `${currentTheme}-theme`;
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const iconName = currentTheme === 'dark' ? 'sun' : 'moon';
        themeIcon.setAttribute('data-lucide', iconName);
        lucide.createIcons();
    }
}

function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass');
        } else {
            // Keep glass if we want transparent initially, but here we always want glass for premium feel
        }
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Simple toggle, in production you'd use a better mobile menu overlay
    });
}
