import React, { useState, useEffect } from 'react';
import './topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faLaptopCode, 
  faBriefcase, 
  faImages, 
  faBlog, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

// 🔴 moved outside component (important fix)
const menuItems = [
  { name: 'Home', href: '#home', icon: faHome },
  { name: 'About', href: '#about', icon: faUser },
  { name: 'Skills', href: '#services', icon: faLaptopCode },
  { name: 'Experience', href: '#resume', icon: faBriefcase },
  { name: 'Works', href: '#portfolio', icon: faImages },
  { name: 'Blog', href: '#blog', icon: faBlog },
  { name: 'Contact', href: '#contact', icon: faEnvelope },
];

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const sections = menuItems.map(item => document.querySelector(item.href)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));

    // ✔ proper cleanup
    return () => observer.disconnect();

  }, []);

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar__container container">
        <a href="#home" className="custom-navbar__brand">
          <span className="brand-text">Bhushan</span>
          <span className="brand-dot">.</span>
        </a>

        <button
          className={`custom-navbar__toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>

        <div className={`custom-navbar__menu ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className={`custom-navbar__link ${activeLink === item.href.substring(1) ? 'active' : ''}`} 
              onClick={() => {
                setActiveLink(item.href.substring(1));
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
