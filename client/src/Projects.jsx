import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Portfolio from "./assets/images/portfolioNew.png";
import Monetrix from "./assets/images/Monetrix.jpg";
import microdome from "./assets/images/MicrodomeNew.jpg";
import Jurms from "./assets/images/jurms.jpg";
import Btds from "./assets/images/btds.jpg";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      pimage: Portfolio,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Vite"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "https://www.abhijitrabidas.me",
      category: "web",
    },
    {
      pimage: microdome,
      title: "Microdome",
      description:
        "Online coaching platform offering structured courses and study materials.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/souravghoshofficial/microdome",
      demo: "https://www.microdomeclasses.in/",
      category: "fullstack",
    },
    {
      pimage: Monetrix,
      title: "Monetrix",
      description:
        "Finance management web app for tracking spending and analyzing habits.",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "https://monetrix.tech/",
      category: "fullstack",
    },
    {
      pimage: Jurms,
      title: "Routine Management System",
      description:
        "System for managing academic schedules for students and faculty.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "https://jurms.collegebyte.in/",
      category: "fullstack",
    },
    {
      pimage: Btds,
      title: "Brain Tumor Detection",
      description:
        "AI system for detecting and segmenting brain tumors from CT scans.",
      tags: ["MATLAB", "SVM", "Image Processing"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "#",
      category: "ai",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
  ];

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 px-6
      bg-white dark:bg-neutral-950
      text-neutral-900 dark:text-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">
            Some of the work I have built recently.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-sm rounded-md border transition ${
                activeFilter === f.id
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Abhijit-Rabidas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
            px-6 py-3 rounded-md text-sm font-medium
            border border-neutral-300
            dark:border-neutral-700
            hover:bg-neutral-100
            dark:hover:bg-neutral-900
            transition"
          >
            View All Projects
          </a>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="border border-neutral-200 dark:border-neutral-800
      rounded-xl overflow-hidden
      hover:shadow-md transition"
    >
      <img
        src={project.pimage}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md
              bg-neutral-100 dark:bg-neutral-900
              text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm
            border border-neutral-300 dark:border-neutral-700
            px-3 py-2 rounded-md
            hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <FaGithub /> Code
          </a>

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm
              bg-neutral-900 text-white
              dark:bg-white dark:text-black
              px-3 py-2 rounded-md"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}

        </div>

      </div>
    </div>
  );
}
