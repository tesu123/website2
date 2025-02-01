function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Section */}
          <div className="footer-col">
            {/* <h4 className="text-xl font-bold mb-4">About Me</h4> */}
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              About Me
              <span className="absolute top-8 left-0 w-15 h-0.5 bg-red-600"></span>
            </h4>
            <p className="text-gray-400">
              I'm Abhijit Rabidas, a passionate software developer always eager
              to learn and create innovative solutions. Let's connect and build
              something amazing!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-col">
            {/* <h4 className="text-xl font-bold mb-4">Quick Links</h4> */}
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute top-8 left-0 w-15 h-0.5 bg-red-600"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Me Section */}
          <div className="footer-col">
            {/* <h4 className="text-xl font-bold mb-4">Follow Me</h4> */}
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              Follow Me
              <span className="absolute top-8 left-0 w-15 h-0.5 bg-red-600"></span>
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xl"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/aj_das_01?igsh=cnVmMnF1a3M4MjM2"
                target="_blank"
                className="text-gray-400 hover:text-white text-xl"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                className="text-gray-400 hover:text-white text-xl"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                className="text-gray-400 hover:text-white text-xl"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">
          &copy; 2025 Abhijit Rabidas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
