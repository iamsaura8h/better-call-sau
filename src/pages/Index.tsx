
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Add observer for smooth animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Target all elements that should animate on scroll
    document.querySelectorAll('.animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right')
      .forEach(element => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-0');
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </Layout>
  );
};

export default Index;
