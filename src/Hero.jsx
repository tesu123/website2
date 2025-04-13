import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { HiArrowNarrowDown } from "react-icons/hi";
import img from "./assets/images/profileimg.png"; // Converted to WebP format

function Hero() {
  const [dynamicText, setDynamicText] = useState("");
  const phrases = [
    "Web Developer",
    "MCA Student @ Jadavpur University",
    "Tech Enthusiast",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  // Simplified typing effect
  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setDynamicText(currentPhrase.substring(0, dynamicText.length - 1));
      } else {
        setDynamicText(currentPhrase.substring(0, dynamicText.length + 1));
      }

      // Determine typing speed
      const speed = isDeleting ? 50 : 150;

      if (!isDeleting && dynamicText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && dynamicText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }

      typingRef.current = setTimeout(type, speed);
    };

    typingRef.current = setTimeout(type, 150);
    return () => clearTimeout(typingRef.current);
  }, [dynamicText, currentPhraseIndex, isDeleting]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-900 overflow-hidden"
      id="home"
    >
      {/* Reduced background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-500/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i}s`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16">
          {/* Text content */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Abhijit Rabidas
              </span>
            </motion.h1>

            <div className="h-14 sm:h-16 mb-4">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                {`I'm a `}
                <span className="text-emerald-400">
                  {dynamicText}
                  <span className="inline-block w-1 h-6 bg-emerald-400 ml-1 animate-pulse"></span>
                </span>
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              Crafting digital experiences with clean code and creative
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-3 mt-6"
            >
              {[
                {
                  icon: <FaLinkedinIn />,
                  url: "https://www.linkedin.com/in/abhijit-rabidas",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  url: "https://github.com/Abhijit-Rabidas",
                  label: "GitHub",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/aj_das_01",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image - only show on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <img
                src={img}
                alt="Abhijit Rabidas"
                loading="lazy"
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <HiArrowNarrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </motion.div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
