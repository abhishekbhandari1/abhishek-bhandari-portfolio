import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import About from '@/components/About';
import BentoGrid from '@/components/BentoGrid';
import Timeline from '@/components/Timeline';
import SkillsEnhanced from '@/components/SkillsEnhanced';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll-triggered animations - delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing after animation triggers (one-time animation)
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-animate class
      const animatedElements = document.querySelectorAll('.scroll-animate');
      animatedElements.forEach((el) => observer.observe(el));
      
      // Cleanup function
      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <About />
        <BentoGrid />
        <SkillsEnhanced />
        <Certifications />
        <Timeline />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
