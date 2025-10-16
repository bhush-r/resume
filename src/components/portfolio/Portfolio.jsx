import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from 'react-parallax-tilt'; // Import Tilt
import ProjectModal from './ProjectModal'; // Import the new modal component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [activeFilter, setActiveFilter] = useState('Everything');
    const [selectedProject, setSelectedProject] = useState(null); // State for the modal

    const filterItem = (categoryItem) => {
        setActiveFilter(categoryItem);
        if (categoryItem === "Everything") {
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
          return curElem.category === categoryItem;
        });
        setItems(updatedItems);
      };

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="work container section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
  
        <div className="work__filters">
          {/* Using Menu data to dynamically create filters ensures consistency */}
          <span 
              className={`work__item ${activeFilter === 'Everything' ? 'active-work' : ''}`} 
              onClick={() => filterItem('Everything')}
          >
              Everything
          </span>
          {[...new Set(Menu.map(item => item.category))].map(category => (
            <span 
              key={category}
              className={`work__item ${activeFilter === category ? 'active-work' : ''}`} 
              onClick={() => filterItem(category)}
            >
              {category}
            </span>
          ))}
        </div>
  
        <motion.div layout className="work__container grid">
          <AnimatePresence>
            {items.map((elem) => {
              const { id, image, title, category } = elem;
              return (
                <motion.div
                  layout
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  key={id}
                >
                  {/* Wrap the card content with Tilt for the subtle 3D effect */}
                  <Tilt 
                    tiltMaxAngleX={5} 
                    tiltMaxAngleY={5} 
                    perspective={1000} 
                    glareEnable={true} 
                    glareMaxOpacity={0.45} 
                    glareColor="#ffffff" 
                    glarePosition="all"
                    scale={1.02}
                  >
                    <div className="work__card">
                      <div className="work__thumbnail">
                        <img src={image} alt={title} className="work__img" />
                        <div className="work__mask"></div>
                      </div>
                      <span className="work__category">{category}</span>
                      <h3 className="work__title">{title}</h3>
                      {/* Updated button to open the modal */}
                      <button className="work__button" onClick={() => openModal(elem)} aria-label={`View details for ${title}`}>
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Render the Project Modal if a project is selected */}
        {/* AnimatePresence here handles the modal's exit transition */}
        <AnimatePresence>
          {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
        </AnimatePresence>

      </section>
    )
}

export default Portfolio;
