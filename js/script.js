/* Data Definitions */
const skillCategories = [
    {
        title: 'Windows & Linux',
        icon: 'terminal',
        skills: ['Ubuntu', 'RHEL', 'Windows Server']
    },
    {
        title: 'Automation & Infrastructure as Code',
        icon: 'cpu',
        skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible', 'Flux CD', 'Argo CD', 'Helm']
    },
    {
        title: 'Virtualization & Containerization',
        icon: 'cloud',
        skills: ['Kubernetes', 'Red Hat OpenShift', 'Tanzu', 'Docker', 'Proxmox', 'VMware', 'ESXi', 'vSphere', 'vCenter', 'Hyper-V']
    },
    {
        title: 'Version Control & Registry',
        icon: 'git-merge',
        skills: ['Git', 'GitLab', 'GitHub', 'Harbor']
    },
    {
        title: 'Networking & Security',
        icon: 'network',
        skills: ['OPNsense', 'OpenVPN', 'IPsec', 'WireGuard', 'HashiCorp Vault', 'Keycloak', 'SonarQube']
    },
    {
        title: 'Observability & Monitoring',
        icon: 'activity',
        skills: ['Grafana', 'Prometheus', 'OpenTelemetry', 'ELK Stack', 'SigNoz', 'Blackbox', 'VictoriaMetrics', 'VictoriaLogs', 'Grafana Tempo']
    },
    {
        title: 'Programming & Databases',
        icon: 'code',
        skills: ['BASH', 'Shell Script', 'Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Apache Doris']
    },
    {
        title: 'Proxy, Load Balancing & Mail',
        icon: 'mail',
        skills: ['Nginx', 'Traefik', 'Caddy', 'HAProxy', 'PM2', 'Mailcow', 'Zimbra']
    }
];

const jobTypeIcons = { 'Full-time': 'briefcase-business', 'Part-time': 'timer' };
const workModeIcons = { Remote: 'house-wifi', Hybrid: 'repeat-2', Onsite: 'building-2' };
const badgeClass = value => value.toLowerCase().replace(/[^a-z]/g, '');

const experiences = [
    {
        role: 'DevOps Engineer',
        company: 'Safaricom Telecommunications Ethiopia PLC',
        period: '03/2026 - Present',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-time',
        mode: 'Onsite',
        logo: 'assets/logos/safaricom.png',
        description: [
            'Migrated the observability stack from Splunk Enterprise to the Grafana ecosystem.',
            'Managed OpenTelemetry Collectors across multiple Kubernetes clusters, standardizing telemetry pipelines for logs, metrics and distributed tracing.',
            'Implemented GitOps and CI/CD workflows with GitLab CI and Argo CD to automate Kubernetes deployments, Helm chart delivery and declarative infrastructure reconciliation across clusters.',
            'Administered Harbor private registry with vulnerability scanning for secure images.',
            'Administered HashiCorp Vault for secret management and rotation.',
            'Configured RBAC with LDAP and Active Directory integration.',
            'Built dashboards across multiple platforms for real-time service visibility.'
        ]
    },
    {
        role: 'DevOps Engineer',
        company: 'Ledger Technology PLC',
        period: '09/2026 - Present',
        location: 'Addis Ababa, Ethiopia',
        type: 'Part-time',
        mode: 'Remote',
        logo: 'assets/logos/ledger.png',
        description: [
            "Maintain and optimize Ledger's cloud infrastructure for high availability.",
            'Build and manage CI/CD pipelines for automated, reliable deployments.',
            'Set up the observability stack and monitor system performance, uptime and security using Grafana dashboards and alerts.',
            'Apply infrastructure-as-code practices for repeatable, reliable environments.',
            'Respond to infrastructure incidents and resolve them within agreed SLAs.'
        ]
    },
    {
        role: 'Web-Hosting and DevOps Engineer',
        company: 'Ashewa Technology Solution S.C',
        period: '03/2026 - 08/2026',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-time',
        mode: 'Hybrid',
        logo: 'assets/logos/ashewa.png',
        description: [
            'Configured, maintained and secured VPS servers for internal teams and clients.',
            'Installed, patched and monitored server software; implemented backup policies and disaster recovery plans to meet high uptime standards.',
            'Automated routine server tasks and built GitLab CI pipelines for deployments to VMs, Docker and Kubernetes.',
            'Managed domain setup, DNS, registrars and SSL certificate provisioning.',
            'Tuned server performance, caching and resource usage while enforcing security best practices and data protection compliance.',
            'Integrated control panels and billing systems (WHMCS) for automated client provisioning and payment follow-up.'
        ]
    },
    {
        role: 'System Engineer',
        company: 'Kispay Financial Solution S.C',
        period: '10/2025 - 02/2026',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-time',
        mode: 'Onsite',
        logo: 'assets/logos/kispay.png',
        description: [
            'Maintained PostgreSQL/MySQL servers and the Mailcow email system, ensuring 99% uptime for business communications.',
            'Designed, implemented and maintained IPSec VPN tunnels for secure API channels with CBE, Awash Bank, M-Pesa and Telebirr.',
            'Configured Jenkins for scalable, automated CI/CD pipelines.',
            'Implemented HashiCorp Vault for secret management, configuring secure storage, dynamic secrets and application integration.',
            'Deployed SigNoz with OpenTelemetry for metrics, traces and logs, enabling dashboards and real-time alerting.',
            'Built, optimized and orchestrated Docker containers for high availability and consistent dev/prod environments.',
            'Managed GitHub repositories, branching and version control.',
            'Integrated SonarQube into Jenkins pipelines for automated code quality scans.',
            'Set up Redis as a high-performance in-memory cache to reduce database load.',
            'Deployed Apache Doris as a real-time MPP data warehouse for fast analytics.'
        ]
    },
    {
        role: 'Junior Network and System Administrator',
        company: 'Hagbes Pvt. Ltd. Co.',
        period: '12/2023 - 09/2025',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-time',
        mode: 'Onsite',
        logo: 'assets/logos/hagbes.png',
        description: [
            'Designed and managed end-to-end DevOps environments.',
            'Built scalable CI/CD pipelines with GitHub Actions for automated builds, testing and deployments.',
            'Deployed and optimized Docker containers to ensure high availability and fault tolerance in production.',
            'Developed and documented product features following clean code principles and industry standards.',
            'Designed and implemented LAN/WAN/VLAN network infrastructure for enterprise environments.',
            'Configured HAProxy load balancing for PostgreSQL high availability.',
            'Secured network environments with OPNsense firewalls and oversaw data center server infrastructure.',
            'Deployed Odoo on Docker with a secure CI/CD pipeline for automated releases.'
        ]
    }
];

const projects = [
    {
        title: 'Ledger Technology: E-invoicing SaaS',
        description: 'Designed a secure, highly available e-invoicing system in collaboration with developers, backed by a secure, highly available database.',
        features: [
            'Set up monitoring and alerting for fast detection of system failures.',
            "Configured web probes for MOR's EIRS API and internal APIs to track liveness, health, response time and status codes."
        ],
        icon: 'server',
        tags: ['Grafana', 'Prometheus', 'Blackbox', 'High Availability', 'Monitoring'],
        github: '#',
        external: '#'
    },
    {
        title: 'Safaricom: Splunk Sunset',
        description: 'Migrated observability from Splunk Enterprise to a scalable Grafana stack built on OpenTelemetry, VictoriaLogs, VictoriaMetrics and Grafana Tempo for unified logs, metrics and traces, and moved GitOps delivery from Flux CD to Argo CD.',
        features: [
            'Managed OpenTelemetry Collector infrastructure across multiple Kubernetes clusters with centralized routing, filtering and enrichment.',
            'Verified each component against the live Flux artifact by digest before cutover to Argo CD, catching configuration drift early.',
            'Built a GitLab CI pipeline publishing OCI artifacts to Harbor for Argo CD to sync, with secrets kept in Vault.',
            'Scaled delivery to 51 leaf clusters through a single ApplicationSet using least-privilege ServiceAccounts.'
        ],
        icon: 'activity',
        tags: ['VictoriaMetrics', 'VictoriaLogs', 'Grafana Tempo', 'OpenTelemetry', 'Kubernetes', 'Argo CD', 'Flux CD', 'GitLab CI', 'Harbor', 'Vault'],
        github: '#',
        external: '#'
    },
    {
        title: 'Kispay: Secure Banking API Integration',
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
        title: 'Hagbes: Odoo Server Setup and Deployment',
        description: 'Built scalable CI/CD pipelines using GitHub Actions for automated builds, testing and deployments. Configured and optimized Docker containers to ensure high availability and fault tolerance.',
        features: [
            'Collaborated with development teams to improve delivery efficiency and maintain high quality standards.',
            'Developed and documented product features, adhering to clean code principles and industry standards.'
        ],
        icon: 'layers',
        tags: ['Odoo', 'Docker', 'GitHub Actions', 'CI/CD'],
        github: '#',
        external: '#'
    },
    {
        title: 'Hagbes: Network, CCTV, and VoIP Service Installation',
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
    {
        group: 'Containerization',
        icon: 'box',
        items: [
            {
                title: 'Advanced Application Management with Red Hat OpenShift',
                issuer: 'Red Hat via Coursera',
                date: 'Nov 2026',
                verify: 'https://coursera.org/verify/D2KJ40MGTCG1',
                file: 'assets/certs/redhat-advanced-openshift-application-management.pdf'
            },
            {
                title: 'Advanced Kubernetes',
                issuer: 'LinkedIn Learning'
            },
            {
                title: 'OpenShift Container Orchestration and Deployment',
                issuer: 'LinkedIn Learning'
            },
            {
                title: 'Managing Cloud-native Applications with Kubernetes',
                issuer: 'Red Hat via Coursera',
                date: 'Nov 2026',
                verify: 'https://coursera.org/verify/75TMODC5NF6F',
                file: 'assets/certs/redhat-managing-cloud-native-apps-kubernetes.pdf'
            },
            {
                title: 'Kubernetes and Cloud Native Essentials (LFS250)',
                issuer: 'The Linux Foundation',
                date: 'Mar 2026',
                credentialId: 'LF-pvpmsts0mk',
                file: 'assets/certs/lf-kubernetes-cloud-native-essentials-lfs250.pdf'
            },
            {
                title: 'Docker Images & Containers',
                issuer: 'CodeSignal',
                date: 'Mar 2026',
                verify: 'https://codesignal.com/learn/certificates/cmm3rw155004kjs045scdh5f1/courses/629',
                file: 'assets/certs/codesignal-docker-images-containers.pdf'
            }
        ]
    },
    {
        group: 'Infrastructure as Code & Security',
        icon: 'shield',
        items: [
            {
                title: 'Advanced Terraform',
                issuer: 'LinkedIn Learning'
            },
            {
                title: 'Endpoint Security',
                issuer: 'Cisco Networking Academy'
            }
        ]
    },
    {
        group: 'cPanel University',
        icon: 'server',
        items: [
            {
                title: 'cPanel Professional Certification',
                issuer: 'cPanel University',
                date: 'Mar 2026',
                credentialId: '691ac370-7d32-4b97-b24f-fd4be5158eb7',
                file: 'assets/certs/cpanel-professional.pdf'
            },
            {
                title: 'cPanel & WHM System Administrator II',
                issuer: 'cPanel University',
                date: 'Mar 2026',
                credentialId: '4cfb73be-8508-4c25-8448-77b7e06e1c33',
                file: 'assets/certs/cpanel-whm-sysadmin-2.pdf'
            },
            {
                title: 'cPanel & WHM System Administrator I',
                issuer: 'cPanel University',
                date: 'Mar 2026',
                credentialId: '8f3b140c-cac3-4d7c-bfdd-acd1b5fb32b8',
                file: 'assets/certs/cpanel-whm-sysadmin-1.pdf'
            },
            {
                title: 'cPanel Certified Partner Accreditation',
                issuer: 'cPanel University',
                date: 'Mar 2026',
                credentialId: '967c7912-1211-4ecd-bcd5-432e515b179d',
                file: 'assets/certs/cpanel-certified-partner.pdf'
            }
        ]
    },
    {
        group: 'Programming',
        icon: 'code',
        items: [
            {
                title: 'Python Developer Certification',
                issuer: 'freeCodeCamp.org',
                date: 'Mar 2026',
                verify: 'https://freecodecamp.org/certification/fcce6efb154-2f0a-4ac2-b32d-86b58858f2f5/python-v9',
                file: 'assets/certs/freecodecamp-python-developer.pdf'
            },
            {
                title: 'Programming Fundamentals',
                issuer: 'Udacity',
                file: 'assets/certs/udacity-programming-fundamentals.pdf'
            }
        ]
    }
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
                <div class="exp-header">
                    ${exp.logo ? `<img class="exp-logo" src="${exp.logo}" alt="${exp.company} logo" loading="lazy">` : ''}
                    <div class="exp-heading">
                        <h3 class="exp-role">${exp.role}</h3>
                        <div class="exp-company">${exp.company}</div>
                    </div>
                </div>
                <div class="exp-meta">
                    <span><i data-lucide="calendar"></i> ${exp.period}</span>
                    <span><i data-lucide="map-pin"></i> ${exp.location}</span>
                </div>
                ${exp.type ? `
                <div class="exp-badges">
                    <span class="exp-badge badge-${badgeClass(exp.type)}"><span class="badge-icon"><i data-lucide="${jobTypeIcons[exp.type] || 'briefcase'}"></i></span>${exp.type}</span>
                    <span class="exp-badge badge-${badgeClass(exp.mode)}"><span class="badge-icon"><i data-lucide="${workModeIcons[exp.mode] || 'map-pin'}"></i></span>${exp.mode}</span>
                </div>` : ''}
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
            <ul style="color: var(--text-secondary); padding-left: 1.25rem; margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.6;">
                ${proj.features.map(f => `<li style="margin-bottom: 0.25rem;">${f}</li>`).join('')}
            </ul>

            <h4 style="color: var(--text-primary); margin-top: auto; margin-bottom: 0.5rem; font-size: 1rem;">Technologies Used</h4>
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
    container.innerHTML = certifications.map(group => `
        <div class="cert-group">
            <h3 class="cert-group-title">
                <i data-lucide="${group.icon}"></i>
                ${group.group}
            </h3>
            <div class="cert-group-grid">
                ${group.items.map(cert => `
                    <div class="cert-card glass reveal" data-tilt>
                        <div class="cert-card-header">
                            <i data-lucide="award"></i>
                            <h4>${cert.title}</h4>
                        </div>
                        <p class="cert-issuer">${cert.issuer}${cert.date ? ` &middot; ${cert.date}` : ''}</p>
                        ${cert.credentialId ? `<p class="cert-id">ID: ${cert.credentialId}</p>` : ''}
                        <div class="cert-links">
                            ${cert.file ? `<a href="${cert.file}" target="_blank" rel="noopener noreferrer" class="cert-link"><i data-lucide="file-text"></i> View Certificate</a>` : ''}
                            ${cert.verify ? `<a href="${cert.verify}" target="_blank" rel="noopener noreferrer" class="cert-link"><i data-lucide="external-link"></i> Verify</a>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
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

    const phrases = ['DevOps Engineer', 'System Engineer', 'Cloud Infrastructure'];
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
