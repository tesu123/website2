import React, { useEffect, useState, useRef } from "react";
import img from "./assets/images/profileimg.png";
import resume from "./assets/files/Abhijit_Rabidas.pdf";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Hero() {
  const [dynamicText, setDynamicText] = useState("");
  const phrases = [
    "⚡ Web Developer",
    "🎓 MCA Student @ JU",
    "🚀 Tech Enthusiast",
    "🧩 Problem Solver",
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
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl p-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-widest">
              <span className="text-cyan-400">{"<"}</span>
              Abhijit Rabidas
              <span className="text-purple-400">{"/>"}</span>
            </h1>

            <div className="h-16 sm:h-20 mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold tracking-wide">
                {`> `}
                <span className="text-cyan-400">
                  {dynamicText}
                  <span
                    className={`inline-block w-[8px] h-[1.2em] bg-purple-400 ml-1 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </span>
              </p>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Welcome to my dev world 🌍. I love solving problems, building
              futuristic web apps, and leveling up my coding journey one commit
              at a time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 font-bold rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-500 shadow-[0_0_10px_rgba(0,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,255,255,1)] text-center"
              >
                ⚔ Contact Me
              </a>
              <a
                href={resume}
                download="Abhijit_Rabidas_Resume.pdf"
                className="px-6 py-3 font-bold rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition duration-500 shadow-[0_0_10px_rgba(200,0,255,0.6)] hover:shadow-[0_0_20px_rgba(200,0,255,1)] text-center"
              >
                🎮 Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-8 mt-10">
              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-cyan-400 transition transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/aj_das_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-pink-400 transition transform hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Profile image with glowing ring */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_25px_rgba(0,255,255,0.5)] group-hover:shadow-[0_0_50px_rgba(200,0,255,0.9)] transition duration-700">
              <img
                src={img}
                alt="Abhijit Rabidas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
