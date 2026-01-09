import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="container section-padding">
          <div className="section-header">
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I am a DevOps Engineer with over 3 years of experience specializing in Linux systems,
              Kubernetes orchestration, and CI/CD automation. My mission is to build scalable,
              highly available systems that empower developers and ensure reliable service delivery.
            </p>
            <p>
              With a Bachelor's Degree in Computer Science and a deep interest in infrastructure security,
              I strive to implement GitOps workflows and observability solutions that provide maximum visibility into system performance.
            </p>
          </div>
        </section>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
