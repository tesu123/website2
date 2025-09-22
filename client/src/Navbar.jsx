import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "🏠 Home" },
    { id: "about", label: "👾 About" },
    { id: "projects", label: "🚀 Projects" },
    { id: "contact", label: "⚔ Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:scale-110 transition-transform duration-300"
          >
            {"</> Abhijit"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(0,255,255,0.8)] animate-pulse"></span>
                )}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex space-x-6 pl-6">
              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-xl transition transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/aj_das_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 text-xl transition transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(255,0,150,0.9)]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-cyan-400 my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-6 space-y-2 bg-black/90 rounded-lg shadow-[0_0_20px_rgba(200,0,255,0.6)] border border-gray-700 mt-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 font-semibold text-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-8 pt-4">
              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-2xl transition transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/aj_das_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 text-2xl transition transform hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
