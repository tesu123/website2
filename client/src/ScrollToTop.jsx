import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`relative group p-4 rounded-full cursor-pointer 
          bg-black/40 backdrop-blur-md border border-cyan-400/30 
          shadow-[0_0_20px_rgba(0,255,255,0.4)] 
          hover:shadow-[0_0_35px_rgba(255,0,255,0.8)] 
          transition-all duration-500 animate-bounce-slow`}
      >
        {/* Glowing gradient ring */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40 blur-lg group-hover:opacity-70 group-hover:blur-xl transition-all duration-500"></span>

        {/* Icon */}
        <FaArrowUp
          className="w-5 h-5 text-cyan-300 relative z-10 transition-transform duration-500 group-hover:rotate-180 group-hover:text-purple-300"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
