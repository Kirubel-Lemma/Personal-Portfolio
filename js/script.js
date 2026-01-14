/* Data Definitions */
const skillCategories = [
    {
        title: 'Programming & Web',
        icon: 'code',
        skills: ['Python', 'Java', 'JavaScript', 'Shell Script', 'YAML', 'NextJS', 'React', 'Node.js', 'Spring Boot']
    },
    {
        title: 'Cloud & Containerization',
        icon: 'cloud',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Tele Cloud', 'Proxmox', 'OLVM', 'Hyper-V']
    },
    {
        title: 'CI/CD & Automation',
        icon: 'terminal',
        skills: ['Jenkins', 'GitHub Action', 'GitLab CI', 'Ansible', 'Terraform', 'Git']
    },
    {
        title: 'Monitoring & Observability',
        icon: 'activity',
        skills: ['Zabbix', 'ELK Stack', 'Prometheus', 'Grafana', 'Signoz', 'CloudWatch']
    },
    {
        title: 'Networking & Security',
        icon: 'shield-check',
        skills: ['OPNsense', 'pfSense', 'UniFi', 'Firewalls', 'SSO', 'VLAN', 'VoIP']
    },
    {
        title: 'Databases & Servers',
        icon: 'database',
        skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Redis', 'Apache Doris', 'Nginx', 'HAProxy', 'Traefik', 'Caddy']
    }
];

const experiences = [
    {
        role: 'System Engineer',
        company: 'Kispay Financial Solution S.C',
        period: 'Oct 2024 - Present',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Architected and managed full DevOps environments using Kubernetes and Docker.',
            'Built automated CI/CD pipelines using GitHub Action and Jenkins for finance platforms.',
            'Implemented monitoring solutions (ELK Stack and Signoz) for deep system observability.',
            'Managed AWS and Tele Cloud infrastructure, including complex VM migrations.',
            'Configured secure networking with OPNsense and managed high-performance data stores like Redis and Apache Doris.'
        ]
    },
    {
        role: 'Network and System Administrator',
        company: 'Hagbes PLC',
        period: 'Dec 2023 - Sep 2024',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Deployed and optimized Kubernetes clusters and Traefik ingress controllers.',
            'Automated software delivery pipelines using GitHub Actions.',
            'Managed corporate email infrastructure (Mailcow, Zimbra, Exchange) and database servers.',
            'Enforced network security using OPNsense firewall routers and managed data center infrastructure.'
        ]
    },
    {
        role: 'Junior System Engineer',
        company: 'Atlas Computer Technology',
        period: 'Jun 2022 - Dec 2023',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Containerized legacy applications for improved scalability and resilience.',
            'Integrated ELK stack for centralized logging and proactive alerting.',
            'Administered Linux server infrastructure maintaining 99.9% uptime.',
            'Managed network security via pfSense and performed regular security audits.'
        ]
    }
];

const projects = [
    {
        title: 'AWS Infrastructure Migration',
        description: 'Led the "Tele Cloud to AWS" migration project. Designed lift-and-shift strategies, provisioned VPCs, and optimized costs for large-scale EC2 resource deployment.',
        icon: 'move',
        tags: ['AWS', 'EC2', 'VPC', 'CloudWatch', 'IAM'],
        github: '#',
        external: '#'
    },
    {
        title: 'Odoo Enterprise Deployment',
        description: 'Architected a scalable CI/CD environment for Odoo ERP. Optimized Docker containers for high availability and integrated automated testing stages.',
        icon: 'layers',
        tags: ['Odoo', 'Docker', 'GitHub Action', 'CI/CD'],
        github: '#',
        external: '#'
    },
    {
        title: 'USSD & Mobile Banking Platform',
        description: 'Implemented transaction-critical USSD systems. Optimized flows for high transaction volume and integrated real-time monitoring to ensure zero-downtime banking.',
        icon: 'zap',
        tags: ['FinTech', 'USSD', 'High-Availability', 'Monitoring'],
        github: '#',
        external: '#'
    }
];

const certifications = [
    'Programming Fundamentals | Udacity',
    'Android Developer Fundamentals | Udacity',
    'Next-Gen Network Security | IT Masters',
    'Cyber Threat Management | Cisco Networking Academy',
    'Endpoint Security | Cisco Networking Academy'
];

/* Main Initialization */
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
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

function renderCertifications() {
    const container = document.getElementById('certs-container');
    if (!container) return;
    container.innerHTML = certifications.map(cert => `
        <div class="cert-item glass reveal">
            <i data-lucide="award"></i>
            <span>${cert}</span>
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
    });
}
