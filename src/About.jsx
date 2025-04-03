import React from "react";

function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-gray-800 rounded-full mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="text-emerald-600 dark:text-emerald-400">Profile</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Personal Introduction */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Who Am I?</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Hello! I'm <span className="font-semibold text-emerald-600 dark:text-emerald-400">Abhijit Rabidas</span>, a passionate software developer and computer science enthusiast from <span className="font-semibold text-emerald-600 dark:text-emerald-400">Haldibari, India</span>. Currently pursuing my Master of Computer Applications (MCA) at Jadavpur University, I combine academic excellence with practical development skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in computer science principles and hands-on experience in modern technologies, I specialize in creating efficient, scalable solutions. My approach blends analytical thinking with creative problem-solving to deliver impactful results.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {/* MCA */}
              <div className="relative pl-8 border-l-2 border-emerald-500/20 dark:border-emerald-400/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">2024 - 2026</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mt-1">Master of Computer Applications (MCA)</h4>
                <p className="text-gray-600 dark:text-gray-400">Jadavpur University</p>
              </div>

              {/* BSc */}
              <div className="relative pl-8 border-l-2 border-emerald-500/20 dark:border-emerald-400/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">2020 - 2023</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mt-1">BSc Computer Science (Hons)</h4>
                <p className="text-gray-600 dark:text-gray-400">Ananda Chandra College, University of North Bengal</p>
              </div>

              {/* Achievement */}
              <div className="relative pl-8 border-l-2 border-emerald-500/20 dark:border-emerald-400/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">2024</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mt-1">WB JECA Rank 61</h4>
                <p className="text-gray-600 dark:text-gray-400">West Bengal Joint Entrance for MCA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;