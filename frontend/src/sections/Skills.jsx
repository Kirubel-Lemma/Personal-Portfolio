import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Terminal, ShieldCheck, Database, Layout } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming',
        icon: <Code2 />,
        skills: ['Python', 'Java', 'JavaScript', 'Shell Script', 'YAML']
    },
    {
        title: 'Containerization',
        icon: <Database />,
        skills: ['Kubernetes', 'Docker']
    },
    {
        title: 'CI/CD & Automation',
        icon: <Terminal />,
        skills: ['Jenkins', 'GitLab CI/CD', 'Ansible']
    },
    {
        title: 'Linux & Version Control',
        icon: <ShieldCheck />,
        skills: ['CentOS', 'Ubuntu', 'Git', 'GitHub', 'GitLab']
    },
    {
        title: 'Monitoring & Networking',
        icon: <Cloud />,
        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix']
    },
    {
        title: 'Web & Proxy Servers',
        icon: <Layout />,
        skills: ['Nginx', 'Apache', 'HAProxy', 'Traefik']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Technical <span className="text-gradient">Expertise</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        A comprehensive set of skills developed through years of practical experience
                        in infrastructure management and software delivery.
                    </motion.p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="skill-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-icon">
                                {category.icon}
                            </div>
                            <h3 className="skill-card-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
