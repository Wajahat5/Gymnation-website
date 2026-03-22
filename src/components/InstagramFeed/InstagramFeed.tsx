import React, { useEffect, useRef } from 'react';
import './InstagramFeed.css';

const feedItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Gym Nation Dibrugarh heavy deadlift session'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    alt: 'Ladies doing yoga at Gym Nation Pink Dibrugarh'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    alt: 'New hammer strength equipment arriving at Gymnation Xtreme'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    alt: 'Circuit House branch early morning gym workout'
  }
];

const InstagramFeed: React.FC = () => {
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

    const posts = document.querySelectorAll('.instagram-post');
    posts.forEach((post) => observer.observe(post));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="instagram-section" ref={sectionRef}>
      <div className="container">
        <div className="instagram-header fade-up visible">
          <h2>JOIN THE COMMUNITY</h2>
          <p>
            <a href="https://instagram.com/gymnation_dib" target="_blank" rel="noopener noreferrer">
              @gymnation_dib
            </a>
          </p>
        </div>

        <div className="instagram-grid">
          {feedItems.map((item, index) => (
            <a
              key={item.id}
              href="https://instagram.com/gymnation_dib"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="instagram-post-overlay">
                <i className="fab fa-instagram"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
