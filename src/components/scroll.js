// // components/ScrollAnimation.js
// import React, { useEffect } from 'react';

// function ScrollAnimation() {
//   const scrollElements = document.querySelectorAll('.js-scroll');

//   const elementInView = (el, dividend = 1) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//       elementTop <=
//       (window.innerHeight || document.documentElement.clientHeight) / dividend
//     );
//   };

//   const elementOutofView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//       elementTop > (window.innerHeight || document.documentElement.clientHeight)
//     );
//   };

//   const displayScrollElement = (element) => {
//     element.classList.add('scrolled');
//   };

//   const hideScrollElement = (element) => {
//     element.classList.remove('scrolled');
//   };

//   const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//       if (elementInView(el, 1.25)) {
//         displayScrollElement(el);
//       } else if (elementOutofView(el)) {
//         hideScrollElement(el);
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScrollAnimation);

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScrollAnimation);
//     };
//   }, []);

//   return null;
// }

// export default ScrollAnimation;



// import React, { useState } from 'react';
// import './Card.css';

// function ScrollAnimation({ title, content }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`card ${isHovered ? 'hovered' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h2>{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// }

// export default ScrollAnimation;

// افحص عناصر .js-scroll عند التمرير وأضف الكلاس .scrolled إذا كانت مرئية على الشاشة
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".js-scroll");
  
  elements.forEach(function (element) {
    const boundingBox = element.getBoundingClientRect();
    
    if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
      element.classList.add("scrolled");
    } else {
      element.classList.remove("scrolled");
    }
  });
});