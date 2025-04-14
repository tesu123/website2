import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Choose your preferred style by uncommenting one of these options:
  const buttonStyles = {
    // OPTION 1: Glassmorphism style (modern frosted glass effect)
    glass: "p-3 bg-white/10 dark:bg-gray-800/80 text-emerald-500 dark:text-emerald-400 backdrop-blur-md rounded-full shadow-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 transition-all duration-300 border border-emerald-500/20",
    
    // OPTION 2: Gradient floating style (vibrant and eye-catching)
    gradient: "p-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300",
    
    // OPTION 3: Minimal style (subtle and clean)
    minimal: "p-3 bg-gray-800 text-gray-200 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300",
    
    // OPTION 4: Neumorphic style (soft 3D effect)
    neumorphic: "p-3 bg-gray-100 dark:bg-gray-800 text-emerald-500 dark:text-emerald-400 rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.5)] dark:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.05)] hover:shadow-inner hover:bg-emerald-500 hover:text-white transition-all duration-300"
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className={buttonStyles.glass} // Change to your preferred style (glass, gradient, minimal, neumorphic)
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollToTop;


// import React, { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button on scroll
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     isVisible && (
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition duration-300"
//         aria-label="Go to top"
//       >
//         <FaArrowUp />
//       </button>
//     )
//   );
// };

// export default ScrollToTop;