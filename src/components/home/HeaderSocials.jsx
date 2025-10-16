import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'; // Added faPinterest

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        {/* GitHub Icon */}
        <a href="https://github.com/bhush-r" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/bhushan-lilhare-079497211/" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* Medium Icon */}
        <a href="https://medium.com/@bhushanlilhare956" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} />
        </a>
        
        {/* Twitter Icon */}
        <a href="https://x.com/bhushanlilhare1" className="home__social-link" target="_blank" rel="noopener noreferrer">
              {/* Use the faTwitter icon, which now renders as the X logo */}
            <FontAwesomeIcon icon={faTwitter} />
        </a>

        {/* Pinterest Icon */}
        <a href="https://www.pinterest.com/" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
        </a>
    </div>
  )
}

export default HeaderSocials;