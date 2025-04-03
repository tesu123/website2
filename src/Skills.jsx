import React from "react";
import Clogo from "./assets/icons/cprog.png";
import Cpplogo from "./assets/icons/c_6132222.png";
import Pythonlogo from "./assets/icons/python.png";
import Javalogo from "./assets/icons/java.png";
import Htmllogo from "./assets/icons/html.png";
import Csslogo from "./assets/icons/css.png";
import Reactlogo from "./assets/icons/react.png";
import Jslogo from "./assets/icons/js.png";
import githublogo from "./assets/icons/github.png";
import gitlogo from "./assets/icons/git.png";
import VsCodelogo from "./assets/icons/vscode.png";
import Linuxlogo from "./assets/icons/linux.png";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      items: [
        { img: Clogo, name: "C", proficiency: "90%" },
        { img: Cpplogo, name: "C++", proficiency: "85%" },
        { img: Pythonlogo, name: "Python", proficiency: "80%" },
        { img: Javalogo, name: "Java", proficiency: "75%" },
      ],
    },
    {
      title: "Web Development",
      items: [
        { img: Htmllogo, name: "HTML5", proficiency: "95%" },
        { img: Csslogo, name: "CSS3", proficiency: "90%" },
        { img: Jslogo, name: "JavaScript", proficiency: "85%" },
        { img: Reactlogo, name: "React", proficiency: "80%" },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { img: githublogo, name: "GitHub", proficiency: "85%" },
        { img: gitlogo, name: "Git", proficiency: "80%" },
        { img: VsCodelogo, name: "VS Code", proficiency: "95%" },
        { img: Linuxlogo, name: "Linux", proficiency: "75%" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="skills" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-gray-800 rounded-full mb-4">
            MY EXPERTISE
          </span>
          <h2 id="skills-heading" className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-emerald-600 dark:text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{group.title}</h3>
              </div>

              <div className="space-y-5">
                {group.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-6 w-6 object-contain mr-3"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                      </div>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {item.proficiency}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-500 group-hover:bg-emerald-600"
                        style={{ width: item.proficiency }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">Other Proficiencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'Responsive Design', 'UI/UX Principles', 'Agile Methodologies', 'Debugging'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;