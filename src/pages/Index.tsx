import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCube from '../components/ProjectCube';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling and other global effects
    const handleLoad = () => {
      // Add fade-in animation to sections
      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    };

    // Preload hero image
    const heroImg = new Image();
    heroImg.src = '/src/assets/hero-bg.jpg';

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProjectCube />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
