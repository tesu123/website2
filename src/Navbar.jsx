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
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: 'github', url: 'https://github.com/Abhijit-Rabidas' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/abhijit-rabidas' },
    { icon: 'twitter', url: '#' }
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
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
              className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
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
                    ? "text-emerald-600 dark:text-emerald-400 font-medium" 
                    : "text-gray-700 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transition-all duration-300"></span>
                )}
              </a>
            ))}
            
            {/* Social Icons for Desktop */}
            <div className="ml-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                  activeSection === link.id
                    ? "bg-emerald-100 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Social Icons for Mobile */}
            <div className="flex justify-center space-x-6 pt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-300 text-2xl"
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