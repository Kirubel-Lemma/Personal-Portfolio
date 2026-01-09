import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    Kirubel<span className="text-gradient">.</span>
                </div>
                <p className="footer-copy">
                    © {new Date().getFullYear()} Kirubel Lemma. Built with React & Passion.
                </p>
                <div className="footer-socials">
                    <a href="https://github.com/Kirubel-Lemma" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/kirubel-lemma" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
