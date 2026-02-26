/* Data Definitions */
const skillCategories = [
    {
        title: 'Linux',
        icon: 'terminal',
        skills: ['Ubuntu', 'CentOS', 'AlmaLinux']
    },
    {
        title: 'Automation & Infrastructure as Code',
        icon: 'cpu',
        skills: ['Jenkins', 'GitHub Action', 'GitLab CI', 'Terraform', 'Terragrunt', 'Ansible']
    },
    {
        title: 'Virtualization & Containerization',
        icon: 'cloud',
        skills: ['AWS', 'Hyper-V', 'Proxmox', 'VMware', 'Docker', 'Kubernetes']
    },
    {
        title: 'Version Control',
        icon: 'git-merge',
        skills: ['Git', 'GitHub', 'GitLab']
    },
    {
        title: 'Networking',
        icon: 'network',
        skills: ['OPNsense', 'UniFi', 'pfSense', 'OpenVPN', 'IPsec', 'WireGuard']
    },
    {
        title: 'Programming & Database',
        icon: 'code',
        skills: ['BASH', 'Shell Script', 'Python', 'Java', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
        title: 'Monitoring',
        icon: 'activity',
        skills: ['Zabbix', 'ELK Stack', 'SigNoz']
    },
    {
        title: 'Mail & Proxy Servers',
        icon: 'mail',
        skills: ['Zimbra', 'Mailcow', 'Nginx', 'Traefik']
    }
];

const experiences = [
    {
        role: 'Web-Hosting and DevOps Engineer',
        company: 'Ashewa Technology Solution S.C',
        period: '02/2026 - Present',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Configured, maintained, and secured VPS, firewalls, and DDoS protection; managed and optimized VPN solutions for secure access.',
            'Installed, updated, and monitored server software; implemented backup policies, disaster recovery plans, and high uptime standards.',
            'Automated server tasks, account provisioning, and monitoring workflows; implemented CI/CD pipelines using GitHub and GitLab.',
            'Handled domain setup, DNS configuration, registrar management, and SSL certificate setup/support.',
            'Optimized server performance, caching strategies, and resource management; ensured security best practices and data protection compliance.',
            'Troubleshot hosting and domain issues efficiently; provided professional customer support for hosting-related queries.',
            'Managed and integrated control panels and billing systems (WHMCS readiness) for automated provisioning and payment follow-up.'
        ]
    },
    {
        role: 'System Engineer',
        company: 'Kispay Financial Solution S.C',
        period: '10/2025 - 02/2026',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Maintained PostgreSQL/MySQL servers and Mailcow email systems, ensuring 99.9% uptime for corporate communications.',
            'Designed, implemented, and maintained IPSec VPN for secure API channels with CBE, Awash Bank, M-Pesa, and Telebirr.',
            'Configured Jenkins for scalable CI/CD pipelines; automated builds, tests, deployments, and workflows to cut manual effort and time.',
            'Implemented HashiCorp Vault for secret management; configured secure storage, policies, dynamic secrets, and app integration for least-privilege access.',
            'Set up SigNoz for observability; deployed metrics/traces/logs monitoring, integrated OpenTelemetry, and enabled dashboards/alerting for real-time insights.',
            'Managed Docker containerization; built, optimized, and orchestrated containers for high availability, fault tolerance, and consistent dev/prod environments.',
            'Handled GitHub repo management and version control; administered repos, branches, PRs, access, and CI/CD integrations for collaborative delivery.',
            'Integrated SonarQube into Jenkins CI/CD pipelines; automated scans on builds/PRs to detect bugs, vulnerabilities, code smells, and duplication.',
            'Set up Redis as high-performance in-memory cache; configured key-value storage to speed up responses and reduce database load.',
            'Deployed Apache Doris as real-time MPP data warehouse; managed columnar storage and analytics for fast, sub-second queries on large logs/data.'
        ]
    },
    {
        role: 'Network and System Administrator',
        company: 'Hagbes Pvt. Ltd. Co.',
        period: '12/2023 - 09/2025',
        location: 'Addis Ababa, Ethiopia',
        description: [
            'Designed and managed full DevOps environments; deployed Kubernetes clusters.',
            'Implemented monitoring solutions (Zabbix, ELKStack) for observability.',
            'Architected and deployed scalable CI/CD pipelines using GitHub Actions for automated builds, testing, and deployments.',
            'Setup and optimized Docker containers to ensure high availability and fault tolerance.',
            'Developed and documented product features, adhering to clean code principles and industry standards.',
            'Designed and implemented LAN/WAN/VLAN network infrastructure for enterprise environments.',
            'Setup load balancer (HAProxy) for PostgreSQL.',
            'Setup and managed secure network environments using OPNsense firewall and oversaw data center infrastructure spanning servers.'
        ]
    }
];

const projects = [
    {
        title: 'Secure Banking API Integration via IPSec VPN',
        description: 'Designed and implemented secure IPSec VPN tunnels to enable encrypted API communication with financial institutions. Configured firewall policies, NAT rules, and routing to ensure secure and stable connectivity.',
        features: [
            'Performed connectivity testing, packet analysis, and troubleshooting to maintain high availability.',
            'Documented VPN configurations, network diagrams, and integration procedures for operational continuity.'
        ],
        icon: 'shield',
        tags: ['IPSec', 'OPNsense', 'Security', 'VPN', 'Firewall'],
        github: '#',
        external: '#'
    },
    {
        title: 'Odoo Server Setup and Deployment',
        description: 'Architected and deployed scalable CI/CD pipelines using GitHub Action for automated builds, testing, and deployments. Configured and optimized docker containers to ensure high availability and fault tolerance.',
        features: [
            'Collaborated with development teams to enhance delivery efficiency and maintain robust quality standards.',
            'Developed and documented product features, adhering to clean code principles and industry standards.'
        ],
        icon: 'layers',
        tags: ['Odoo', 'Docker', 'GitHub Actions', 'CI/CD'],
        github: '#',
        external: '#'
    },
    {
        title: 'Network, CCTV, and VoIP Service Installation',
        description: 'Designed and implemented LAN/WAN/VLAN network infrastructure for enterprise environments. Configured routers, switches, and firewalls to ensure secure and reliable connectivity.',
        features: [
            'Installed and managed VoIP systems, including IP phones, SIP trunks, and call routing.',
            'Configured PBX systems for voice services.',
            'Documented network topology, IP addressing schemes, and VoIP configurations.'
        ],
        icon: 'network',
        tags: ['Networking', 'VoIP', 'VLAN', 'PBX', 'CCTV'],
        github: '#',
        external: '#'
    }
];

const certifications = [
    'Programming Fundamentals | UDACITY',
    'Amazon EC2 Observability, Monitoring, and Troubleshooting | AWS Skill Builder',
    'Amazon Elastic Kubernetes Service (EKS) | AWS Skill Builder',
    'Deploying Applications with AWS Elastic Beanstalk | AWS Skill Builder',
    'Advanced Testing Practices Using AWS DevOps Tools | AWS Skill Builder',
    'Cyber Threat Management | Cisco Networking Academy',
    'Endpoint Security | Cisco Networking Academy',
    'Operating Systems Basics | Cisco Networking Academy'
];

/* Main Initialization */
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
    initRevealAnimations();
    initNavbarScroll();
    initMobileMenu();
    initCardTilt();
    // initContactForm(); // Form removed
    initTerminalTyping();
});

/* Rendering Functions */
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = skillCategories.map((cat, idx) => `
        <div class="skill-card glass reveal reveal-delay-${(idx % 3) + 1}" data-tilt>
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
            <div class="timeline-dot"><i data-lucide="briefcase"></i></div>
            <div class="timeline-content">
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
        <div class="project-card reveal reveal-delay-${(idx % 3) + 1}" data-tilt>
            <h3 class="project-title" style="margin-bottom: 0.5rem; font-size: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="${proj.icon}" style="color: var(--primary);"></i>
                ${proj.title}
            </h3>
            <p class="project-description" style="color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6;">${proj.description}</p>
            
            <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">Key Features</h4>
            <ul style="color: var(--text-secondary); padding-left: 1.25rem; margin-bottom: 1.5rem; flex-grow: 1; font-size: 0.95rem; line-height: 1.6;">
                ${proj.features.map(f => `<li style="margin-bottom: 0.25rem;">${f}</li>`).join('')}
            </ul>

            <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;">Technologies Used</h4>
            <div class="skill-tags">
                ${proj.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
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
            // Keep glass for premium feel
        }
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        const isFlex = navLinks.style.display === 'flex';
        navLinks.style.display = isFlex ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--surface)';
        navLinks.style.padding = '1rem';
    });
}

/* Advanced UI Features */
/* Cursor functions removed */

function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        init();
    });
    resize();
    init();
    animate();
}

function initCardTilt() {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

// Contact form initialization removed

/* Role toggle: switch accent colors and filter skills */
/* Copy SSH snippet to clipboard and UI feedback (removed - no SSH copy in UI) */

/* Small typing loop for the terminal snippet to feel alive */
function initTerminalTyping() {
    const el = document.getElementById('ssh-snippet');
    if (!el) return;

    const phrases = ['DevOps Engineer', 'Web-Hosting Engineer', 'Network System Operations'];
    let pIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typeSpeed = 40;
    const deleteSpeed = 20;
    const pauseAfterFull = 1000;

    function tick() {
        const current = phrases[pIndex];
        if (typing) {
            charIndex++;
            el.textContent = current.slice(0, charIndex);
            if (charIndex >= current.length) {
                typing = false;
                setTimeout(tick, pauseAfterFull);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            charIndex--;
            el.textContent = current.slice(0, charIndex);
            if (charIndex <= 0) {
                typing = true;
                pIndex = (pIndex + 1) % phrases.length;
                setTimeout(tick, 200);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }

    tick();
}
