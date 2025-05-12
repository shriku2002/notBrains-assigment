import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="/" className="logo">
          <span className="logo-text">notBrains.</span>
        </a>

        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span className={`nav-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#features">Features</a></li>
            <li className="nav-item"><a href="#blog">Blog</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <Button variant="text" size="small">Sign In</Button>
            <Button size="small">Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;