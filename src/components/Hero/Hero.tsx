import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    title: 'UNLEASH YOUR',
    highlight: 'POTENTIAL',
    subtitle: "Dibrugarh's Premier Fitness Destination",
    buttonText: 'Find Your Hub'
  },
  {
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    title: 'RAW POWER',
    highlight: 'XTREME',
    subtitle: "Heavy-duty Performance & Specialized Gear",
    buttonText: 'View Equipment'
  },
  {
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    title: 'FIND YOUR',
    highlight: 'BALANCE',
    subtitle: "Female-focused Functional Training Studio",
    buttonText: 'Join the Community'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="hero" className="hero-slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="slide-content container">
            <h1 className="hero-title fade-up visible">
              {slide.title} <span>{slide.highlight}</span>
            </h1>
            <p className="hero-subtitle fade-up visible">{slide.subtitle}</p>
            <a href="#locations" className="btn btn-primary fade-up visible">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
