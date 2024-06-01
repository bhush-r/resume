import React from "react";

function Card(props) {
  const handleClick = () => {
    if (props.link) {
      window.location.href = props.link;
    }
  };

  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      {props.link ? (
        <h3 
          className="timeline__title" 
          onClick={handleClick} 
          style={{ cursor: 'pointer', color: 'blue' }}
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



/////////////OLD CODE///

// Card.jsx

// import React from "react";

// function Card(props) {
//   return (
//     <div className="timeline__item">
//       <i className={props.icon}></i>
//       <span className="timeline__date">{props.year}</span>
//       <h3 className="timeline__title">{props.title}</h3>
//       <p className="timeline__text">{props.desc}</p>
//     </div>
//   );
// }

// export default Card;
