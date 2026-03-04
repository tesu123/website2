import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUser,
  FaAward,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";
import image from "./assets/images/image.png";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6
      bg-white dark:bg-neutral-950
      text-neutral-900 dark:text-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            About Me
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">
            A quick introduction about myself, education and skills.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-neutral-800 shadow text-neutral-900 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 sm:p-10">

          {/* ABOUT TAB */}
          {activeTab === "about" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Personal Information
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Full Name", value: "Abhijit Rabidas" },
                    { label: "Location", value: "Haldibari, India" },
                    { label: "Phone", value: "7679489050" },
                    { label: "Education", value: "MCA @ Jadavpur University" },
                  ].map((info, i) => (
                    <div
                      key={i}
                      className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg"
                    >
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Hello! I'm <strong>Abhijit Rabidas</strong>, a passionate
                  software developer focused on building modern web
                  applications and solving real-world problems. Currently
                  pursuing my MCA at Jadavpur University.
                </p>

                <div className="flex items-start gap-3 border-l-4 border-neutral-900 dark:border-white pl-4">
                  <FaLightbulb className="mt-1 text-neutral-600 dark:text-neutral-300" />
                  <p className="text-neutral-600 dark:text-neutral-400">
                    I enjoy combining logical thinking with creativity to
                    develop meaningful digital experiences.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-center">

                <img
                  src={image}
                  alt="Abhijit Rabidas"
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover border border-neutral-200 dark:border-neutral-800 mb-8"
                />

                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { value: "3+", label: "Projects" },
                    { value: "0+", label: "Years Exp" },
                    { value: "#61", label: "WB JECA Rank" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg text-center"
                    >
                      <p className="text-lg font-semibold">{stat.value}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="space-y-6">
              {[
                {
                  year: "2024 - 2026",
                  title: "MCA",
                  place: "Jadavpur University",
                  current: true,
                },
                {
                  year: "2020 - 2023",
                  title: "BSc Computer Science (Hons)",
                  place: "Ananda Chandra College, NBU",
                },
                {
                  year: "2024",
                  title: "WB JECA Rank 61",
                  place: "West Bengal Joint Entrance Board",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                        {edu.year}
                      </p>
                      <h4 className="text-lg font-semibold">{edu.title}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {edu.place}
                      </p>
                    </div>

                    {edu.current && (
                      <span className="text-xs px-3 py-1 rounded-full
                      bg-neutral-900 text-white
                      dark:bg-white dark:text-neutral-900">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="grid md:grid-cols-2 gap-6">

              {[
                {
                  category: "Frontend",
                  skills: ["React", "Next.js", "Tailwind", "JavaScript", "HTML", "CSS"],
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
                  className="border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg"
                >
                  <h4 className="font-semibold mb-4">{group.category}</h4>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-md
                        border border-neutral-200 dark:border-neutral-700
                        text-neutral-600 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
