import React, { useEffect, useState, useRef } from "react";
import img from "./assets/images/profileimg.png";
import resume from "./assets/files/Abhijit_Rabidas.pdf";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Hero() {
  const [dynamicText, setDynamicText] = useState("");
  const phrases = [
    "Web Developer",
    "MCA Student @ JU",
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
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
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
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Floating background shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition duration-500">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Abhijit Rabidas
              </span>
            </h1>

            <div className="h-16 sm:h-20 mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
                {`I'm a `}
                <span className="text-blue-400">
                  {dynamicText}
                  <span
                    className={`inline-block w-[2px] h-[1.2em] bg-blue-400 ml-1 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </span>
              </p>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences with clean code and creative
              solutions. Currently mastering computer applications while
              building innovative projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-500 text-center"
              >
                Contact Me
              </a>
              <a
                href={resume}
                download="Abhijit_Rabidas_Resume.pdf"
                className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-white/5 transition duration-500 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-8 mt-8">
              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-gray-200 transition transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/aj_das_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-pink-400 transition transform hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative bg-white/5 backdrop-blur-md p-4 rounded-full border border-gray-700 shadow-2xl hover:shadow-blue-500/20 transition duration-500">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <img
                src={img}
                alt="Abhijit Rabidas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
