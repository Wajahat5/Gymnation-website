import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Locations from './components/Locations/Locations';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Locations />
        <Features />
        <Testimonials />
        {/* Other sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
