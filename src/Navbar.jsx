import React, { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <div className="text-white text-lg font-bold hover:text-emerald-400 transition-all duration-300">
          Abhijit R.
        </div>

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

        <div
          className={`${
            menuOpen
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 translate-y-[-20px]"
          } fixed top-0 right-0 w-2/3 h-full bg-gray-900 text-white rounded-l-lg shadow-lg overflow-y-auto md:static md:w-auto md:h-auto md:block md:opacity-100 md:translate-y-0 md:bg-transparent md:shadow-none md:rounded-none transition-all duration-300 flex flex-col justify-between`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-6 md:p-0">
            <li>
              <a
                className="block py-4 px-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block py-4 px-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block py-4 px-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="block py-4 px-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block py-4 px-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-300 md:hover:bg-transparent md:hover:text-emerald-400"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="md:hidden mt-auto p-6 border-t border-gray-700">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                >
                  <i className="fab fa-twitter text-xl"></i>
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
