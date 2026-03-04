import React, { useEffect, useState } from "react";
import img from "./assets/images/profileimg.png";
import resume from "./assets/files/Abhijit_Rabidas.pdf";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const phrases = [
    "Web Developer",
    "MCA Student @ Jadavpur University",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1000);
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6
      bg-white dark:bg-neutral-950
      text-neutral-900 dark:text-neutral-100"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Label */}
          <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
            Software Developer
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Abhijit Rabidas
          </h1>

          {/* Typing Text */}
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 h-7">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-neutral-600 dark:text-neutral-400">
            I build clean and scalable web applications focused on great user
            experience. Passionate about learning modern technologies and
            solving real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">

            <a
              href="#projects"
              className="px-6 py-3 text-sm font-medium rounded-md
              bg-neutral-900 text-white
              hover:bg-neutral-700
              dark:bg-white dark:text-neutral-900
              dark:hover:bg-neutral-200
              transition"
            >
              View Projects
            </a>

            <a
              href={resume}
              download
              className="px-6 py-3 text-sm font-medium rounded-md
              border border-neutral-300
              hover:bg-neutral-100
              dark:border-neutral-700
              dark:hover:bg-neutral-900
              transition"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center lg:justify-start mt-8 text-neutral-500 dark:text-neutral-400">

            <a
              href="https://github.com/Abhijit-Rabidas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhijit-rabidas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/aj_das_01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">

          <img
            src={img}
            alt="Abhijit Rabidas"
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80
            rounded-full object-cover
            border border-neutral-200 dark:border-neutral-800
            shadow-sm"
          />

        </div>

      </div>
    </section>
  );
}
