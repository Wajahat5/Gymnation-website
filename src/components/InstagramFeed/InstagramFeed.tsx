import React, { useEffect, useRef } from 'react';
import './InstagramFeed.css';

const feedItems = [
  {
    id: 1,
    image: '/Gymnation-website/assets/instagram/reel1.jpg',
    url: 'https://www.instagram.com/reel/DMNuYh_yB5B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Gym Nation Dibrugarh heavy deadlift session'
  },
  {
    id: 2,
    image: '/Gymnation-website/assets/instagram/reel2.jpg',
    url: 'https://www.instagram.com/reel/DBtGhdxCoUC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Ladies doing yoga at Gym Nation Pink Dibrugarh'
  },
  {
    id: 3,
    image: '/Gymnation-website/assets/instagram/reel3.jpg',
    url: 'https://www.instagram.com/reel/DOgiaZoD04z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'New hammer strength equipment arriving at Gymnation Xtreme'
  },
  {
    id: 4,
    image: '/Gymnation-website/assets/instagram/reel4.jpg',
    url: 'https://www.instagram.com/reel/C551MMovE0z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
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
              href={item.url}
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
