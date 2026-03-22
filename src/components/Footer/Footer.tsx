import React, { useEffect, useRef } from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';

const mapQuery = encodeURIComponent('Gym Nation, Near Circuit House, Dibrugarh, Assam 786001');
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`;

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className="main-footer bg-carbon" ref={footerRef}>
      <div className="container footer-container fade-up">

        <div className="contact-info">
          <img src={logo} alt="Gym Nation Logo" className="footer-logo" />
          <h2 className="contact-title">READY TO <span>DOMINATE?</span></h2>
          <p className="contact-desc">Call us directly for all membership inquiries and to book a tour of any branch.</p>

          <div className="phone-cta">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+916002364065" className="phone-number">+91 60023 64065</a>
          </div>

          <a href="tel:+916002364065" className="btn btn-primary book-tour-btn">Book a Tour</a>

          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Nation Locations Map"
          ></iframe>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gym Nation Dibrugarh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
