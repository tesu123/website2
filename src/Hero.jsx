import React, { useEffect, useState, useRef } from "react";
import img from "./assets/images/profileimg.png";

function Hero() {
  const [dynamicText, setDynamicText] = useState("");
  const phrases = [
    "Web Developer",
    "MCA Student @ Jadavpur University",
    "Tech Enthusiast",
    "Problem Solver",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);
  const animationRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, dynamicText.length - 1)
        : currentPhrase.substring(0, dynamicText.length + 1);

      setDynamicText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        // Pause at end of typing
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 1000);
      } else if (isDeleting && updatedText === "") {
        // Move to next phrase after deleting
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(150);
      }
    };

    animationRef.current = setTimeout(type, typingSpeed);

    return () => clearTimeout(animationRef.current);
  }, [dynamicText, currentPhraseIndex, isDeleting, typingSpeed]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden"
      id="home"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1 + Math.random() * 0.1,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Abhijit Rabidas
              </span>
            </h1>

            <div className="h-16 sm:h-20 mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
                {`I'm a `}
                <span className="text-emerald-400">
                  {dynamicText}
                  <span
                    className={`inline-block w-1 h-8 bg-emerald-400 ml-1 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </span>
              </p>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Crafting digital experiences with clean code and creative
              solutions. Currently mastering computer applications while
              building innovative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              {/* <a
                href="#projects"
                className="px-8 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a> */}
              <a
                href="D:\WEB_DEVELOPMENT\PROJECT\React_Portfolio\src\assets\files\Abhijit_Rabidas.pdf" // Update this path to where your CV is stored
                download="Abhijit_Rabidas_Resume.pdf" // This will be the suggested filename when downloaded
                className="px-8 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              {[
                {
                  icon: "linkedin-in",
                  url: "https://www.linkedin.com/in/abhijit-rabidas",
                  color: "text-blue-500 hover:text-blue-400",
                },
                {
                  icon: "github",
                  url: "https://github.com/Abhijit-Rabidas",
                  color: "text-gray-300 hover:text-white",
                },
                {
                  icon: "instagram",
                  url: "https://www.instagram.com/aj_das_01",
                  color: "text-pink-500 hover:text-pink-400",
                },
                {
                  icon: "twitter",
                  url: "#",
                  color: "text-blue-400 hover:text-blue-300",
                },
                {
                  icon: "facebook-f",
                  url: "#",
                  color: "text-blue-600 hover:text-blue-500",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.icon}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-spin-slow"></div>
            <div className="relative">
              <img
                src={img}
                alt="Abhijit Rabidas"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-gray-800 group-hover:border-transparent transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/10 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
