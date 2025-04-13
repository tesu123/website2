import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isClosing, setIsClosing] = useState(false);

  // Debounce scroll handler
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateActiveSection = () => {
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

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 50);
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      url: "https://github.com/Abhijit-Rabidas",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn className="text-lg" />,
      url: "https://www.linkedin.com/in/abhijit-rabidas",
      label: "LinkedIn",
    },
    { icon: <FaTwitter className="text-lg" />, url: "#", label: "Twitter" },
    {
      icon: <FaInstagram className="text-lg" />,
      url: "https://www.instagram.com/aj_das_01",
      label: "Instagram",
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Brand Logo/Name */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
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
                className={`relative px-3 py-2 rounded-lg text-sm sm:text-base ${
                  activeSection === link.id
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-gray-500 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-1/2 bottom-0 h-0.5 w-4/5 bg-emerald-500 -translate-x-1/2"></span>
                )}
              </a>
            ))}

            {/* Social Icons */}
            <div className="ml-4 flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end">
              <div
                className={`h-0.5 bg-gray-800 dark:bg-white transition-all ${
                  menuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6 mb-1.5"
                }`}
              ></div>
              <div
                className={`h-0.5 bg-gray-800 dark:bg-white transition-all ${
                  menuOpen ? "opacity-0" : "w-5 mb-1.5"
                }`}
              ></div>
              <div
                className={`h-0.5 bg-gray-800 dark:bg-white transition-all ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-4"
                }`}
              ></div>
            </div>
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
          <div className="pt-2 pb-6 space-y-1 bg-white dark:bg-gray-900 mt-2">
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
                className={`block px-4 py-3 text-sm ${
                  activeSection === link.id
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="flex justify-center space-x-4 pt-4 px-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
