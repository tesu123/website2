import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
                About Me
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I'm Abhijit Rabidas, a passionate software developer specializing in creating innovative digital solutions. Currently pursuing my Master's in Computer Applications at Jadavpur University.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:your.email@example.com" 
                className="text-red-400 hover:text-red-300 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                abhijit.rabidas@example.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-red-500">
                Connect With Me
              </h3>
            </div>
            <p className="text-gray-400">
              Feel free to reach out through any of these platforms:
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/aj_das_01?igsh=cnVmMnF1a3M4MjM2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhijit-rabidas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Abhijit-Rabidas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Abhijit Rabidas. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;