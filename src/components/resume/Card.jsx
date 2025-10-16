import React from "react";

function Card(props) {
  const handleClick = () => {
    if (props.link) {
      window.open(props.link, '_blank'); // Open link in new tab
    }
  };

  // Added 'resume__item' class for GSAP targeting in Resume.jsx
  return (
    <div className="timeline__item resume__item"> 
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      {props.link ? (
        <h3 
          className="timeline__title" 
          onClick={handleClick} 
          style={{ cursor: 'pointer', color: 'var(--first-color)' }} // Updated color for better theme integration
        >
          {props.title}
        </h3>
      ) : (
        <h3 className="timeline__title">{props.title}</h3>
      )}
      <p className="timeline__text">{props.desc}</p>
    </div>
  );
}

export default Card;
