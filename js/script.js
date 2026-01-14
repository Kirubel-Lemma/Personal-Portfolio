/* Data Definitions */
const skillCategories = [
    {
        title: 'Programming & Apps',
        icon: 'code',
        skills: ['Python', 'Java', 'JavaScript', 'Shell Script', 'YAML', 'WildFly', 'Tomcat', 'IIS', 'Express.js', 'NextJS', 'React', 'Node.js', 'Spring Boot']
    },
    {
        title: 'Cloud & Virtualization',
        icon: 'cloud',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Tele Cloud', 'Proxmox', 'OLVM', 'VirtualBox', 'Hyper-V']
    },
    {
        title: 'CI/CD & Automation',
        icon: 'terminal',
        skills: ['Jenkins', 'GitHub Action', 'GitLab CI', 'Ansible', 'Terraform', 'Git', 'GitHub', 'GitLab']
    },
    {
        title: 'Monitoring & Observability',
        icon: 'activity',
        skills: ['Zabbix', 'ELK Stack', 'Prometheus', 'Grafana', 'Signoz', 'CloudWatch']
    },
    {
        title: 'Networking & Security',
        icon: 'shield-check',
        skills: ['OPNsense', 'pfSense', 'UniFi', 'Linksys', 'Installation', 'VLAN', 'VoIP', 'Firewalls']
    },
    {
        title: 'Databases & Servers',
        icon: 'database',
        skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Redis', 'Apache Doris', 'Nginx', 'Apache', 'HAProxy', 'Traefik', 'Caddy', 'Zimbra', 'Mailcow', 'Microsoft Exchange']
    }
];

const experiences = [
    {
        role: 'System Engineer',
        company: 'Kispay Financial Solution S.C',
        period: 'Oct 2024 - Present',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Designed and managed full DevOps environments; deployed Kubernetes clusters and Docker.',
            'Built automated CI/CD pipelines using GitHub Action and Jenkins.',
            'Implemented monitoring solutions (ELK Stack and Signoz) for deep system observability.',
            'Managed AWS and Tele Cloud infrastructure, including complex VM migrations.',
            'Configured secure network environments using OPNsense firewall router and managed datacenter infrastructures.',
            'Configured Redis data store for caching and Apache Doris data warehouse for data and logs.',
            'Managed web servers (Caddy, Node.js), Nginx reverse proxy and load balancers (HAProxy).'
        ]
    },
    {
        role: 'Network and System Administrator',
        company: 'Hagbes PLC',
        period: 'Dec 2023 - Sep 2024',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Designed and managed full DevOps environments; deployed Kubernetes clusters.',
            'Built automated CI/CD pipelines using GitHub Action.',
            'Configured Traefik as an ingress controller and load balancer.',
            'Implemented monitoring solutions (Zabbix, Prometheus, Grafana) for observability.',
            'Installed and managed database servers (PostgreSQL, MySQL) and corporate email applications (Mailcow, Zimbra, Exchange).',
            'Configured secure network environments using OPNsense firewall router.',
            'Installed and deployed Odoo Server using Docker.',
            'Managed datacenter infrastructures.'
        ]
    },
    {
        role: 'Junior System Engineer',
        company: 'Atlas Computer Technology',
        period: 'Jun 2022 - Dec 2023',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Containerized applications using Docker and Kubernetes for better scalability.',
            'Managed web servers (Nginx, Apache) and load balancers (HAProxy).',
            'Integrated ELK stack for centralized logging, alerting, and visualization.',
            'Administered Linux-based server infrastructure ensuring 99.9% uptime.',
            'Deployed Zabbix and Grafana for server and application monitoring.',
            'Managed firewall configurations using pfSense and conducted security audits.'
        ]
    }
];

const projects = [
    {
        title: 'Tele Cloud to AWS Migration',
        description: 'Designed and executed on-premises virtual machine migration to AWS using lift-and-shift strategy. Provisioned and managed AWS EC2 instances, VPCs, subnets, and implemented monitoring via CloudWatch.',
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
