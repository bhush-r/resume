import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';

// This component uses the same CSS file: portfolio.css
const ProjectModal = ({ project, onClose }) => {
  // Effect for controlling body scroll when modal is open/closed
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Cleanup function to unlock scrolling when the component unmounts or project changes to null
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [project]); 

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.2 } },
  };

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // Handle case where project might be null during initial state transition
  if (!project) return null;

  return (
    // Use motion.div directly for the overlay
    <motion.div 
      className="modal__overlay" 
      onClick={onClose}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="modal__content" 
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
        variants={modalVariants}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close Project Details">
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <img src={project.image} alt={project.title} className="modal__image" />

        <div className="modal__details">
          <h2 className="modal__title">{project.title}</h2>
          <span className="modal__category">{project.category}</span>
          
          <p className="modal__description">{project.description}</p>

          {/* Technology Badges */}
          {project.tech && project.tech.length > 0 && (
            <>
              <h4 className='modal__tech-heading'>Technologies Used:</h4>
              <div className="modal__tech-tags">
                {project.tech.map((tag, index) => (
                  <span key={index} className="tech-badge">{tag}</span>
                ))}
              </div>
            </>
          )}

          {/* Action Links */}
          <div className="modal__actions">
            {project.live_link && (
              <a 
                href={project.live_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn modal__action-btn"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
              </a>
            )}
            {project.repo_link && (
              <a 
                href={project.repo_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn modal__action-btn modal__action-repo"
              >
                <FontAwesomeIcon icon={faCode} /> GitHub Repo
              </a>
            )}
            {/* Fallback action if neither link is available, though data should ideally provide one */}
            {!project.live_link && !project.repo_link && (
                <button className="btn modal__action-btn" disabled>No Links Available</button>
            )}
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
