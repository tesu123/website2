import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
      fixed bottom-8 right-8 z-50
      p-3 rounded-full
      border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-neutral-900
      text-neutral-700 dark:text-neutral-300
      shadow-sm
      hover:bg-neutral-100 dark:hover:bg-neutral-800
      transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <FaArrowUp size={14} />
    </button>
  );
}
