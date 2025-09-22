import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Portfolio from "./assets/images/portfolioNew.jpg";
import Monetrix from "./assets/images/monetrix.jpg";
import microdome from "./assets/images/MicrodomeNew.jpg";
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
        "Finance Management Web App to help users manage daily spending, track budgets, and analyze financial habits",
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
      className="relative min-h-screen w-full overflow-hidden py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono"
      id="projects"
    >
      {/* Animated background grid like Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-widest">
            <span className="text-cyan-400">{"<"}</span>
            Projects
            <span className="text-purple-400">{"/>"}</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-semibold border transition-all duration-500 shadow-[0_0_10px_rgba(0,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,255,255,1)] ${
                activeFilter === filter.id
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Scrollable Projects on Mobile */}
        <div className="md:hidden border border-gray-700 rounded-xl max-h-[80vh] overflow-y-auto px-3 py-6 space-y-6 shadow-[0_0_15px_rgba(200,0,255,0.3)]">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Grid on larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Abhijit-Rabidas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-bold rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition duration-500 shadow-[0_0_10px_rgba(200,0,255,0.6)] hover:shadow-[0_0_20px_rgba(200,0,255,1)] inline-flex items-center"
          >
            🚀 View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

// const ProjectCard = ({ project }) => (
//   <article className="group relative bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:-translate-y-2 text-xs sm:text-sm">
//     <div className="h-30 overflow-hidden relative">
//       <img
//         src={project.pimage}
//         alt={project.title}
//         className="w-full h- object-cover transition-transform duration-700 group-hover:scale-110"
//         loading="lazy"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//     </div>

//     <div className="p-6">
//       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
//         {project.title}
//       </h3>
//       <p className="text-gray-400 mb-4">{project.description}</p>

//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tags.map((tag, i) => (
//           <span
//             key={i}
//             className="text-xs font-medium px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div className="flex space-x-3">
//         <a
//           href={project.github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
//         >
//           <FaGithub className="mr-2" /> Code
//         </a>
//         <a
//           href={project.demo}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition ${
//             project.demo === "#"
//               ? "bg-gray-700 text-gray-500 cursor-not-allowed"
//               : "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:shadow-lg hover:shadow-purple-500/40"
//           }`}
//           onClick={(e) => project.demo === "#" && e.preventDefault()}
//         >
//           <FaExternalLinkAlt className="mr-2" /> Demo
//         </a>
//       </div>
//     </div>
//   </article>
// );

const ProjectCard = ({ project }) => (
  <article className="group relative bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:-translate-y-2 text-xs sm:text-sm">
    {/* Image Section */}
    <div className="h-35 sm:h-60 overflow-hidden relative">
      <img
        src={project.pimage}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-medium px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
        >
          <FaGithub className="mr-2" /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition ${
            project.demo === "#"
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:shadow-lg hover:shadow-purple-500/40"
          }`}
          onClick={(e) => project.demo === "#" && e.preventDefault()}
        >
          <FaExternalLinkAlt className="mr-2" /> Demo
        </a>
      </div>
    </div>
  </article>
);


export default Projects;
