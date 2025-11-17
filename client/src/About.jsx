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
      className="relative min-h-screen w-full overflow-hidden py-15 px-0 bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono text-sm"
    >
      {/* Animated neon grid background (like Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest text-white">
            <span className="text-cyan-400">{`<`}</span>
            About Me
            <span className="text-purple-400">{`/>`}</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/50 backdrop-blur-lg rounded-full p-1 border border-gray-700 shadow-[0_0_15px_rgba(0,255,255,0.3)] text-xs sm:text-sm">
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
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-500 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                    : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-black/40 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden px-0">
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Personal Info */}
              <div className="p-10">
                <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-full mr-4 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
                    <FaUser />
                  </span>
                  Personal Info
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Full Name", value: "Abhijit Rabidas" },
                    { label: "Location", value: "Haldibari, India" },
                    { label: "Phone", value: "7679489050" },
                    { label: "Education", value: "MCA @ Jadavpur Univ." },
                  ].map((info, i) => (
                    <div
                      key={i}
                      className="bg-black/60 border border-gray-700 p-4 rounded-lg hover:border-cyan-400/50 transition"
                    >
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="font-semibold text-cyan-400">
                        {info.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Hello! I’m{" "}
                  <span className="font-bold text-purple-400">
                    Abhijit Rabidas
                  </span>
                  , a software developer passionate about building futuristic
                  apps and solving real-world problems. Currently pursuing my
                  MCA at Jadavpur University 🎓.
                </p>

                <div className="flex items-center bg-black/60 p-4 rounded-lg border-l-4 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                  <FaLightbulb className="text-cyan-400 mr-3 text-xl" />
                  <p className="text-gray-300">
                    “Code is my superpower. I love blending logic + creativity
                    ⚔”
                  </p>
                </div>
              </div>

              {/* Profile Image + Stats */}
              <div className="bg-black/40 border-l border-gray-800 p-10 flex flex-col justify-center items-center">
                <div className="relative group mb-10">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
                  <div className="relative">
                    <img
                      src={image}
                      alt="Abhijit Rabidas"
                      className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-gray-900 shadow-[0_0_30px_rgba(200,0,255,0.5)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { value: "3+", label: "Projects" },
                    { value: "0+", label: "Years Exp" },
                    { value: "#61", label: "WB JECA Rank" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-black/50 border border-gray-700 p-4 rounded-lg text-center hover:border-purple-500/50 transition"
                    >
                      <p className="text-2xl font-bold text-cyan-400">
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
              <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-full mr-4 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
                  <FaGraduationCap />
                </span>
                Education & Achievements
              </h3>

              <div className="space-y-10">
                {[
                  {
                    year: "2024 - 2026",
                    title: "MCA",
                    place: "Jadavpur University",
                    current: true,
                    icon: <FaGraduationCap />,
                  },
                  {
                    year: "2020 - 2023",
                    title: "BSc Computer Science (Hons)",
                    place: "Ananda Chandra College, NBU",
                    icon: <FaGraduationCap />,
                  },
                  {
                    year: "2024",
                    title: "WB JECA Rank 61",
                    place: "West Bengal Joint Entrance Board",
                    icon: <FaAward />,
                  },
                ].map((edu, i) => (
                  <div key={i} className="relative pl-10 text-xs sm:text-sm">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                    <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black shadow-md">
                      {edu.icon}
                    </div>
                    <div className="bg-black/50 border border-gray-700 p-6 rounded-xl hover:border-cyan-400/50 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm font-semibold text-cyan-400 mb-1">
                            {edu.year}
                          </div>
                          <h4 className="text-xl font-bold text-white">
                            {edu.title}
                          </h4>
                          <p className="text-gray-400">{edu.place}</p>
                        </div>
                        {edu.current && (
                          <span className="px-3 py-1 text-xs font-bold bg-cyan-500/20 text-cyan-400 rounded-full">
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
              <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-full mr-4 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
                  <FaCode />
                </span>
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "JavaScript",
                      "HTML",
                      "CSS",
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
                    skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
                  },
                ].map((group, index) => (
                  <div
                    key={index}
                    className="bg-black/50 border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 transition"
                  >
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-800 text-gray-200 rounded-full border border-gray-700 hover:border-cyan-400/50 transition"
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
