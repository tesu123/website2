import React, { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add scroll-based fade-in/fade-out effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-800 p-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-90 backdrop-blur-sm" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white text-lg font-bold hover:text-emerald-400 transition-all duration-300">
          Abhijit R.
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-white cursor-pointer z-50 md:hidden relative"
        >
          <i
            className={`fas ${
              menuOpen ? "fa-times" : "fa-bars"
            } text-2xl transition-all duration-300 hover:text-emerald-400`}
          ></i>
        </button>

        {/* Menu Links and Social Links */}
        <div
          className={`${
            menuOpen
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 translate-y-[-20px]"
          } absolute top-full right-0 w-1/2 bg-gray-900 text-white rounded-lg shadow-lg md:static md:w-auto md:block md:opacity-100 md:translate-y-0 md:bg-transparent md:shadow-none md:rounded-none transition-all duration-300`}
        >
          {/* Menu Links */}
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a
                className={`block py-4 px-6 transition-all duration-300 ${
                  !menuOpen ? "transform hover:scale-105" : ""
                } hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`block py-4 px-6 transition-all duration-300 ${
                  !menuOpen ? "transform hover:scale-105" : ""
                } hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400`}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`block py-4 px-6 transition-all duration-300 ${
                  !menuOpen ? "transform hover:scale-105" : ""
                } hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className={`block py-4 px-6 transition-all duration-300 ${
                  !menuOpen ? "transform hover:scale-105" : ""
                } hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400`}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={`block py-4 px-6 transition-all duration-300 ${
                  !menuOpen ? "transform hover:scale-105" : ""
                } hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Links (Visible on Small Screens) */}
          <div className="md:hidden mt-4 border-t border-gray-700 pt-4">
            <ul className="flex space-x-4 justify-center">
              <li>
                <a
                  href="https://github.com/Abhijit-Rabidas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhijit-rabidas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
