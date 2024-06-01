// Sidebar.jsx
import React, { useState } from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`desktop-header-3 fixed-top ${isOpen ? 'desktop-header--open' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className='navbar-brand' href='/'>
            <img src={Logo} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                <i className="icon-home"></i> Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                <i className="icon-user-following"></i> About</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                <i className="icon-briefcase"></i> Skills</a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                <i className="icon-graduation"></i> Experience</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                <i className="icon-layers"></i> Works</a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">
                <i className="icon-note"></i> Blog</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                <i className="icon-bubble"></i> Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
