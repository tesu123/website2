import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUser,
  FaAward,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";

import image from "./assets/images/image.png";

function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      className="relative py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden"
      id="about"
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
              opacity: 0.05 + Math.random() * 0.05,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-gray-800 rounded-full mb-4">
            GET TO KNOW ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            {[
              {
                id: "about",
                label: "About",
                icon: <FaUser className="mr-2" />,
              },
              {
                id: "education",
                label: "Education",
                icon: <FaGraduationCap className="mr-2" />,
              },
              {
                id: "skills",
                label: "Skills",
                icon: <FaCode className="mr-2" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Personal Introduction */}
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-4 text-white">
                    <FaUser className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Personal Info
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Full Name
                    </p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      Abhijit Rabidas
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      Haldibari, India
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      abhijit@example.com
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Education
                    </p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      MCA @ Jadavpur Univ.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Hello! I'm{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Abhijit Rabidas
                  </span>
                  , a passionate software developer currently pursuing my Master
                  of Computer Applications at Jadavpur University. With a strong
                  foundation in computer science and hands-on experience in
                  modern technologies, I specialize in creating efficient,
                  scalable solutions.
                </p>

                <div className="flex items-center bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
                  <FaLightbulb className="text-emerald-500 mr-3 text-xl" />
                  <p className="text-gray-700 dark:text-gray-300">
                    My approach blends analytical thinking with creative
                    problem-solving to deliver impactful digital experiences.
                  </p>
                </div>
              </div>

              {/* Image or Stats */}
              <div className="bg-gray-50 dark:bg-gray-700 p-10 flex flex-col justify-center items-center">
                <div className="relative group mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
                  <div className="relative">
                    <img
                      src={image}
                      alt="Abhijit Rabidas"
                      className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-gray-800 group-hover:border-transparent transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/10 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      10+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Projects
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      3+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Years Experience
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      #61
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      WB JECA Rank
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="p-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-4 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Education & Achievements
                </h3>
              </div>

              <div className="space-y-8">
                {/* MCA */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>
                  <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                    <FaGraduationCap className="h-3 w-3" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                          2024 - 2026
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                          Master of Computer Applications
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Jadavpur University
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 rounded-full">
                        Current
                      </span>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      Specializing in advanced algorithms, machine learning, and
                      full-stack development.
                    </p>
                  </div>
                </div>

                {/* BSc */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>
                  <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                    <FaGraduationCap className="h-3 w-3" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                      2020 - 2023
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      BSc Computer Science (Hons)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ananda Chandra College, University of North Bengal
                    </p>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      Graduated with honors, focusing on core computer science
                      concepts and software development.
                    </p>
                  </div>
                </div>

                {/* Achievement */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>
                  <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                    <FaAward className="h-3 w-3" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                      2024
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      WB JECA Rank 61
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      West Bengal Joint Entrance for MCA
                    </p>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      Secured All India Rank 61 among thousands of candidates in
                      the competitive MCA entrance examination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="p-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-4 text-white">
                  <FaCode className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Technical Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                    ],
                  },
                  {
                    category: "Backend",
                    skills: [
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Firebase",
                      "REST APIs",
                    ],
                  },
                  {
                    category: "Languages",
                    skills: ["JavaScript", "Python", "Java", "C", "SQL"],
                  },
                  {
                    category: "Tools",
                    skills: ["Git", "VS Code", "Figma", "Postman", "Linux"],
                  },
                ].map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-200 dark:border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
