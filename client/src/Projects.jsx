import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Portfolio from "./assets/images/portfolioNew.png";
import Monetrix from "./assets/images/monetrix.png";
import microdome from "./assets/images/MicrodomeNew.png";
import DummyProjectTh from "./assets/images/dummy.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      pimage: Portfolio,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio built with React and Tailwind CSS",
      tags: ["React", "Tailwind CSS", "Vite", "Node.js"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "https://www.abhijitrabidas.live",
      category: "web",
    },
    {
      pimage: microdome,
      title: "Microdome",
      description:
        "An online coaching website for entrance exams and semester batches, offering structured courses and study materials",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/souravghoshofficial/microdome",
      demo: "https://www.microdomeclasses.in/",
      category: "fullstack",
    },
    {
      pimage: Monetrix,
      title: "Monetrix",
      description:
        "Finance Management Web App to help users manage daily spending,track budgets, and analyze financial habits",
      tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "https://monetrix.tech/",
      category: "web",
    },
    {
      pimage: DummyProjectTh,
      title: "AI Image Generator",
      description: "Web application that generates images using AI models",
      tags: ["React", "Python", "TensorFlow", "Flask"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "#",
      category: "ai",
    },
    {
      pimage: DummyProjectTh,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with maps",
      tags: ["React", "API", "Chart.js", "Geolocation"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "#",
      category: "web",
    },
    {
      pimage: DummyProjectTh,
      title: "Chat Application",
      description: "Real-time messaging platform with user authentication",
      tags: ["React", "Firebase", "WebSockets", "Tailwind CSS"],
      github: "https://github.com/Abhijit-Rabidas/",
      demo: "#",
      category: "fullstack",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      className="relative py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
      id="projects"
      aria-labelledby="projects-heading"
    >
      {/* Background glowing shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-64 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Scrollable Projects Box on Mobile */}
        <div className="md:hidden border border-gray-700 rounded-xl max-h-[85vh] overflow-y-auto px-2 py-4 space-y-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Grid on larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Abhijit-Rabidas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            View All Projects
            <svg
              className="ml-3 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index }) => (
  <article
    className="group relative bg-gray-900 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
    aria-labelledby={`project-${index}-title`}
  >
    <div className="h-48 overflow-hidden relative">
      <img
        src={project.pimage}
        alt={`Screenshot of ${project.title}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3
        id={`project-${index}-title`}
        className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
      >
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex space-x-3 mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition-all duration-300"
        >
          <FaGithub className="mr-2" /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group/demo ${
            project.demo === "#"
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
          }`}
          aria-label={`View live demo of ${project.title}`}
          onClick={(e) => project.demo === "#" && e.preventDefault()}
        >
          <FaExternalLinkAlt className="mr-2 group-hover/demo:translate-x-1 transition-transform duration-300" />
          Demo
        </a>
      </div>
    </div>

    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 transform rotate-45 origin-bottom-left translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>
  </article>
);

export default Projects;
