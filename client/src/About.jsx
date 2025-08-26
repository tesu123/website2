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
      id="about"
      className="relative py-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 overflow-hidden"
    >
      {/* Floating background shapes (like Hero) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-64 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-gray-700 shadow-md">
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
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Personal Info */}
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 text-white">
                    <FaUser className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Personal Info
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Full Name", value: "Abhijit Rabidas" },
                    { label: "Location", value: "Haldibari, India" },
                    { label: "Phone No", value: "7679489050" },
                    { label: "Education", value: "MCA @ Jadavpur Univ." },
                  ].map((info, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-gray-700 p-4 rounded-lg"
                    >
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="font-medium text-white">{info.value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Hello! I'm{" "}
                  <span className="font-semibold text-blue-400">
                    Abhijit Rabidas
                  </span>
                  , a passionate software developer currently pursuing my Master
                  of Computer Applications at Jadavpur University. With a strong
                  foundation in computer science and hands-on experience in
                  modern technologies, I specialize in creating efficient,
                  scalable solutions.
                </p>

                <div className="flex items-center bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <FaLightbulb className="text-blue-400 mr-3 text-xl" />
                  <p className="text-gray-300">
                    My approach blends analytical thinking with creative
                    problem-solving to deliver impactful digital experiences.
                  </p>
                </div>
              </div>

              {/* Profile Image + Stats */}
              <div className="bg-white/5 border-l border-gray-700 p-10 flex flex-col justify-center items-center">
                <div className="relative group mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75"></div>
                  <div className="relative">
                    <img
                      src={image}
                      alt="Abhijit Rabidas"
                      className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-gray-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { value: "3+", label: "Projects" },
                    { value: "0+", label: "Years Experience" },
                    { value: "#61", label: "WB JECA Rank" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-gray-700 p-4 rounded-lg shadow text-center"
                    >
                      <p className="text-2xl font-bold text-blue-400">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="p-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Education & Achievements
                </h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    year: "2024 - 2026",
                    title: "Master of Computer Applications",
                    place: "Jadavpur University",
                    current: true,
                    icon: <FaGraduationCap />,
                  },
                  {
                    year: "2020 - 2023",
                    title: "BSc Computer Science (Hons)",
                    place: "Ananda Chandra College, University of North Bengal",
                    icon: <FaGraduationCap />,
                  },
                  {
                    year: "2024",
                    title: "WB JECA Rank 61",
                    place: "West Bengal Joint Entrance for MCA",
                    icon: <FaAward />,
                  },
                ].map((edu, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                    <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                      {edu.icon}
                    </div>
                    <div className="bg-white/5 border border-gray-700 p-6 rounded-xl hover:shadow-lg transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm font-semibold text-blue-400 mb-1">
                            {edu.year}
                          </div>
                          <h4 className="text-xl font-bold text-white">
                            {edu.title}
                          </h4>
                          <p className="text-gray-400">{edu.place}</p>
                        </div>
                        {edu.current && (
                          <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="p-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 text-white">
                  <FaCode className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
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
                    skills: ["Node.js", "Express", "MySQL", "PostgreSQL"],
                  },
                  {
                    category: "Languages",
                    skills: ["C", "C++", "JavaScript", "Python", "Java", "SQL"],
                  },
                  {
                    category: "Tools",
                    skills: [
                      "Git",
                      "Github",
                      "VS Code",
                      "Vercel",
                      "Matlab",
                      "Postman",
                    ],
                  },
                ].map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-gray-700 p-6 rounded-xl hover:shadow-lg transition"
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-800 text-gray-200 rounded-full border border-gray-700 hover:border-blue-500/50 transition"
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

// function About() {
//   return <h1>hello</h1>;
// }

// export default About;
