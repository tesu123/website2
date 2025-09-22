import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-300 py-16 px-6 overflow-hidden">
      {/* Floating glowing orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm Abhijit Rabidas, a passionate software developer crafting
              digital solutions with code & creativity. Currently pursuing MCA
              at Jadavpur University.
            </p>
            <a
              href="mailto:ajdas123.ff@gmail.com"
              className="inline-flex items-center text-gray-300 hover:text-blue-400 transition"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
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

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {["home", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="group flex items-center text-gray-400 hover:text-white transition"
                  >
                    <span className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h3>
            <p className="text-gray-400">
              Let’s connect & build something cool 🚀
            </p>
            <div className="flex gap-4 pt-2">
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
                { icon: <FaTwitter />, url: "#", label: "Twitter" },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/aj_das_01",
                  label: "Instagram",
                },
                { icon: <FaFacebookF />, url: "#", label: "Facebook" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white shadow-md transition transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Abhijit Rabidas. All rights reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Designed with ❤️ in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              React & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
