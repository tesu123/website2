import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-600/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(60px)",
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              {/* <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500">
                About Me
              </h3> */}
              <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-teal-400">
                About Me
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I'm Abhijit Rabidas, a passionate software developer specializing
              in creating innovative digital solutions. Currently pursuing my
              Master's in Computer Applications at Jadavpur University.
            </p>
            <div className="pt-2">
              <a
                href="mailto:ajdas123.ff@gmail.com"
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                ajdas123.ff@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-teal-400">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3">
              {["home", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-teal-400">
                Connect With Me
              </h3>
            </div>
            <p className="text-gray-400">
              Feel free to reach out through any of these platforms:
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
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
                {
                  icon: <FaTwitter />,
                  url: "#",
                  label: "Twitter",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/aj_das_01",
                  label: "Instagram",
                },
                {
                  icon: <FaFacebookF />,
                  url: "#",
                  label: "Facebook",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r from-emerald-500 to-teal-600 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Abhijit Rabidas. All rights
              reserved.
            </p>
            {/* <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Sitemap
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
