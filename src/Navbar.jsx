import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
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
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Abhijit-Rabidas",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/abhijit-rabidas",
      label: "LinkedIn",
    },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/aj_das_01",
      label: "Instagram",
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Brand Logo/Name */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
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
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  activeSection === link.id
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-gray-500 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-1/2 bottom-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                    activeSection === link.id
                      ? "w-full -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:-translate-x-1/2"
                  }`}
                ></span>
              </a>
            ))}

            {/* Social Icons for Desktop */}
            <div className="ml-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 dark:bg-white my-1.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? isClosing
                ? "max-h-0 opacity-0"
                : "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`pt-4 pb-8 space-y-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2 transition-opacity duration-300 ${
              menuOpen && !isClosing ? "opacity-100" : "opacity-0"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setMenuOpen(false);
                    setIsClosing(false);
                  }, 300);
                }}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-emerald-500/10 to-teal-600/10 text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Social Icons for Mobile */}
            <div className="flex justify-center space-x-4 pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={social.label}
                >
                  {social.icon}
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
