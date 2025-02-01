import React, { useEffect, useState } from "react";
import img from "./assets/images/profileimg.png";

function Hero() {
  const [dynamicText, setDynamicText] = useState("A Passionate Software Developer");
  const phrases = ["a Web Developer.", "pursuing my MCA at Jadavpur University"];
  let currentPhraseIndex = 0;
  let currentText = "I am ";
  let isErasing = false;
  let charIndex = 0;

  useEffect(() => {
    const typeEffect = () => {
      if (isErasing) {
        // Erase one character at a time
        currentText = "I am " + phrases[currentPhraseIndex].substring(0, charIndex--);
      } else {
        // Add one character at a time
        currentText = "I am " + phrases[currentPhraseIndex].substring(0, charIndex++);
      }

      // Update the displayed text
      setDynamicText(currentText);

      if (!isErasing && charIndex === phrases[currentPhraseIndex].length) {
        // Pause after typing the whole phrase
        setTimeout(() => (isErasing = true), 1000);
      } else if (isErasing && charIndex === 0) {
        // Move to the next phrase after erasing
        isErasing = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }

      // Adjust typing speed
      const speed = isErasing ? 60 : 100; // Erasing is faster than typing
      setTimeout(() => requestAnimationFrame(typeEffect), speed);
    };

    // Start the typing effect
    requestAnimationFrame(typeEffect);

    // Cleanup function to avoid memory leaks
    return () => clearTimeout(typeEffect);
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200 px-8 relative overflow-hidden"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-64 h-64 bg-emerald-500 rounded-full opacity-10 blur-3xl -top-32 -left-32"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl -bottom-32 -right-32"
          style={{
            animation: "float-delay 6s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:mr-32 mb-8 md:mb-0 transform -translate-y-10 w-[400px] overflow-hidden">
        <h1 className="text-5xl font-bold mb-2">Hello! I Am</h1>
        <h2
          className="text-4xl font-semibold mb-4"
          style={{
            background: "linear-gradient(to right, #34d399, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Abhijit Rabidas
        </h2>
        <p className="text-lg text-gray-400 whitespace-nowrap">
          <span className="font-medium">{dynamicText}</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a
            href="#"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-400"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-blue-400 text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/aj_das_01?igsh=cnVmMnF1a3M4MjM2"
            target="_blank"
            className="text-pink-500 text-2xl hover:scale-110 transition-transform duration-300 hover:text-pink-400"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abhijit-rabidas"
            target="_blank"
            className="text-blue-600 text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-500"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Abhijit-Rabidas"
            target="_blank"
            className="text-gray-400 text-2xl hover:scale-110 transition-transform duration-300 hover:text-gray-300"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="mt-6 inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </a>
      </div>

      {/* Image Section */}
      <div className="w-40 h-44 md:w-64 md:h-64 mt-8 md:mt-0 md:ml-32 transform -translate-y-10">
        <img
          src={img}
          alt="Abhijit Rabidas"
          className="rounded-full shadow-2xl object-cover border-4 border-emerald-500 hover:scale-110 hover:border-emerald-400 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default Hero;