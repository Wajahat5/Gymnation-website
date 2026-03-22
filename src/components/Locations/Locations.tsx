import React, { useEffect, useRef } from 'react';
import './Locations.css';

interface LocationData {
  id: string;
  name: string;
  address: string;
  hours: string;
  features: string;
  image: string;
  themeClass: string;
}

const locations: LocationData[] = [
  {
    id: 'circuit-house',
    name: "GYM NATION (Main Hub)",
    address: "Near Circuit House, Dibrugarh, 786001",
    hours: "Open 5:00 AM - 10:30 PM (Sun 5am-12pm)",
    features: "The 24/7 Energy Hub. Standard equipment, dense clean layout.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1770&auto=format&fit=crop", // Dense gym floor vibe
    themeClass: "card-orange"
  },
  {
    id: 'xtreme',
    name: "GYM NATION XTREME (Performance)",
    address: "Khaliamari, opposite Shankerdev Hospital",
    hours: "Flexible 3, 6, 12 Month Plans",
    features: "Premium Powerlifting & Performance. Specialized hammer strength & competition plates.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1770&auto=format&fit=crop", // Heavy weights/powerlifting vibe
    themeClass: "card-orange"
  },
  {
    id: 'pink',
    name: "GYM NATION PINK (Women's Only)",
    address: "Railway Colony, near Sishu Niketan",
    hours: "Contact: +91 60023 64065",
    features: "Female Trainers & Private Studio. Comfort, community, results.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1770&auto=format&fit=crop", // Bright yoga/pilates functional studio vibe
    themeClass: "card-pink"
  }
];

const Locations: React.FC = () => {
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
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.location-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="locations" className="locations-section section-padding bg-carbon" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up">
          <h2>OUR <span>LOCATIONS</span></h2>
          <p>Three specialized hubs. One unstoppable community.</p>
        </div>

        <div className="locations-grid">
          {locations.map((loc, index) => (
            <div
              key={loc.id}
              className={`location-card fade-up ${loc.themeClass}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-image-wrapper">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${loc.image})` }}
                ></div>
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{loc.name}</h3>
                <div className="card-details">
                  <p className="address"><i className="fas fa-map-marker-alt"></i> {loc.address}</p>
                  <p className="hours"><i className="fas fa-clock"></i> {loc.hours}</p>
                  <p className="features"><i className="fas fa-dumbbell"></i> {loc.features}</p>
                </div>
                <button className="btn btn-outline">Explore Hub</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
