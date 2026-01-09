import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

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

const Experience = () => {
    return (
        <section id="experience" className="experience section-padding">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Professional <span className="text-gradient">Journey</span>
                    </motion.h2>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot glass">
                                <Briefcase size={20} />
                            </div>
                            <div className="timeline-content glass">
                                <div className="experience-header">
                                    <h3 className="role">{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <div className="experience-meta">
                                    <span className="meta-item"><Calendar size={14} /> {exp.period}</span>
                                    <span className="meta-item"><MapPin size={14} /> {exp.location}</span>
                                </div>
                                <ul className="experience-desc">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
