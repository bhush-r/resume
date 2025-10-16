// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './cursor.css';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState('default');

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', mouseMove);

//     return () => {
//       window.removeEventListener('mousemove', mouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseOver = () => setCursorVariant('link');
//     const handleMouseOut = () => setCursorVariant('default');

//     document.querySelectorAll('a, button, .work__item, .icon-link').forEach(el => {
//       el.addEventListener('mouseover', handleMouseOver);
//       el.addEventListener('mouseout', handleMouseOut);
//     });

//     return () => {
//       document.querySelectorAll('a, button, .work__item, .icon-link').forEach(el => {
//         el.removeEventListener('mouseover', handleMouseOver);
//         el.removeEventListener('mouseout', handleMouseOut);
//       });
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 10,
//       y: mousePosition.y - 10,
//       height: 20,
//       width: 20,
//       backgroundColor: 'var(--title-color)',
//       mixBlendMode: 'difference'
//     },
//     link: {
//       x: mousePosition.x - 25,
//       y: mousePosition.y - 25,
//       height: 50,
//       width: 50,
//       backgroundColor: '#fff',
//       mixBlendMode: 'difference'
//     }
//   };

//   return (
//     <motion.div
//       className="custom-cursor"
//       variants={variants}
//       animate={cursorVariant}
//       transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//     />
//   );
// };

// export default CustomCursor;