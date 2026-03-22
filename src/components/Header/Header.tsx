import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src={logo} alt="Gym Nation Logo" className="logo-img" />
        </a>
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#locations" onClick={() => setIsMobileMenuOpen(false)}>Locations</a></li>
            <li><a href="#programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</a></li>
            <li><a href="#membership" onClick={() => setIsMobileMenuOpen(false)}>Membership</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
