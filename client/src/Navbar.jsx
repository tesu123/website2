import React, { useState, useEffect } from "react";

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

      const sections = ["home", "about", "skills", "projects", "contact"];
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
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: "github", url: "https://github.com/Abhijit-Rabidas" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/abhijit-rabidas" },
    { icon: "twitter", url: "#" },
    { icon: "instagram", url: "https://www.instagram.com/aj_das_01" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md"
            >
              Abhijit R.
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-blue-400 font-medium"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"></span>
                )}
              </a>
            ))}

            {/* Social Icons for Desktop */}
            <div className="ml-6 flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-200 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-200 my-1.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-200 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-8 space-y-2 bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl mt-2 border border-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-blue-400"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <hr className="border-t border-gray-700 mx-4 my-4" />

            {/* Social Icons for Mobile */}
            <div className="flex justify-center space-x-8 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
