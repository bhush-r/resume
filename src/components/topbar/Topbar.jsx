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

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State to track the active section

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#home', icon: faHome },
    { name: 'About', href: '#about', icon: faUser },
    { name: 'Skills', href: '#services', icon: faLaptopCode },
    { name: 'Experience', href: '#resume', icon: faBriefcase },
    { name: 'Works', href: '#portfolio', icon: faImages },
    { name: 'Blog', href: '#blog', icon: faBlog },
    { name: 'Contact', href: '#contact', icon: faEnvelope },
  ];

  // useEffect to observe sections and set the active link
  useEffect(() => {
    // Get all sections defined in the menu items
    const sections = menuItems.map(item => document.querySelector(item.href)).filter(Boolean);
    
    // Intersection Observer to detect which section is currently visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // We only care about entries that are intersecting
        if (entry.isIntersecting) {
          // IntersectionRatio and boundingClientRect are used to determine which section
          // is most prominently in the viewport, which helps prevent flicker
          setActiveLink(entry.target.id);
        }
      });
    }, {
      root: null, // viewport
      // Use a symmetric margin to check if the section is centrally located
      // This is a more robust way to track active sections in the center of the viewport
      rootMargin: "-50% 0px -50% 0px", 
      threshold: 0 // We track the section as soon as it enters the rootMargin box
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup function
    return () => sections.forEach(section => observer.unobserve(section));
  }, []); // Empty dependency array ensures this runs only once after mount


  return (
    <nav className="custom-navbar">
      <div className="custom-navbar__container container"> {/* Added container class here */}
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
                // Manually set active when clicked (for instant visual feedback)
                setActiveLink(item.href.substring(1)); 
                setMenuOpen(false); // Close menu on mobile after click
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
