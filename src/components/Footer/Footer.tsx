import React, { useEffect, useRef } from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3558.123456789!2d94.9123456!3d27.4812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374097f5a5a5a5a5%3A0x1234567890abcdef!2sGym%20Nation!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
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
