import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Server, Shield } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Terminal size={16} />
                        <span>DevOps & Infrastructure Engineer</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Building Scalable <br />
                        <span className="text-gradient">Infrastructure</span> for the Future
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        I'm <strong>Kirubel Lemma</strong>, a passionate DevOps Engineer with 3+ years of experience
                        in optimizing software delivery pipelines, infrastructure automation, and container orchestration.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a href="#projects" className="hero-btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="hero-btn-secondary">
                            Let's Talk
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">99.9%</span>
                            <span className="stat-label">System Uptime</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="visual-card glass">
                        <div className="card-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                            <span className="card-title">deployment_pipeline.yaml</span>
                        </div>
                        <div className="card-body">
                            <pre>
                                <code>
                                    <span className="code-key">name</span>: CI/CD Pipeline{'\n'}
                                    <span className="code-key">on</span>: [push]{'\n\n'}
                                    <span className="code-key">jobs</span>:{'\n'}
                                    {'  '}<span className="code-key">build</span>:{'\n'}
                                    {'    '}<span className="code-key">runs-on</span>: ubuntu-latest{'\n'}
                                    {'    '}<span className="code-key">steps</span>:{'\n'}
                                    {'      '}- <span className="code-key">uses</span>: actions/checkout@v3{'\n'}
                                    {'      '}- <span className="code-key">name</span>: Deploy to K8s{'\n'}
                                    {'        '}<span className="code-key">run</span>: kubectl apply -f manifest/
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="floating-icon icon-1 glass">
                        <Server size={24} color="var(--accent-primary)" />
                    </div>
                    <div className="floating-icon icon-2 glass">
                        <Shield size={24} color="var(--accent-secondary)" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
