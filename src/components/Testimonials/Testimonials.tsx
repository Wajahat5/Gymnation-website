import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Finally, a gym that opens at 5 am. The morning crew at gymnation is intense and motivating.",
    author: "Rahul M.",
    location: "Main hub member"
  },
  {
    id: 2,
    quote: "I shifted to Xtreme for the new equipment. The plate-loaded machines are exactly what I needed.",
    author: "Vikram S.",
    location: "Xtreme Member"
  },
  {
    id: 3,
    quote: "The female-only studio is a game-changer. I feel safe, focused, and the trainers are incredible.",
    author: "Priya K.",
    location: "Pink Member"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="membership" className="testimonials-section section-padding bg-carbon" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up">
          <h2>MEMBER <span>STORIES</span></h2>
          <p>Real results from the Gym Nation community.</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"{testimonial.quote}"</p>
              <div className="author-info">
                <h4 className="author-name">{testimonial.author}</h4>
                <p className="author-location">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
