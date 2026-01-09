import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap, Shield } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'Hagbes ERP Infrastructure',
        description: 'Architected a scalable CI/CD environment for an Enterprise Resource Planning system. Managed Kubernetes clusters and automated deployments for high availability.',
        icon: <Layers size={24} />,
        tags: ['Jenkins', 'Kubernetes', 'Traefik', 'Docker'],
        link: '#',
        github: '#'
    },
    {
        title: 'USSD & Mobile Banking Platform',
        description: 'Redesigned the infrastructure for a critical banking platform, improving transaction flow and system resilience. Integrated ELK for real-time monitoring.',
        icon: <Zap size={24} />,
        tags: ['ELK Stack', 'Prometheus', 'HAProxy', 'Ansible'],
        link: '#',
        github: '#'
    },
    {
        title: 'Secure Network Infrastructure',
        description: 'Implemented OPNsense-based network security across multiple data centers. Enforced SSO and automated security scanning in delivery pipelines.',
        icon: <Shield size={24} />,
        tags: ['OPNsense', 'pfSense', 'SSO', 'Zabbix'],
        link: '#',
        github: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        A selection of high-impact engineering projects focusing on scalability,
                        security, and automation.
                    </motion.p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-icon-wrapper">
                                {project.icon}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} className="project-link" aria-label="Github">
                                    <Github size={18} />
                                </a>
                                <a href={project.link} className="project-link" aria-label="Demo">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
