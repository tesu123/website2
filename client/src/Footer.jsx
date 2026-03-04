import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      border-t border-neutral-200 dark:border-neutral-800
      bg-white dark:bg-neutral-950
      text-neutral-700 dark:text-neutral-400
      py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* About */}
          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Abhijit Rabidas
            </h3>

            <p className="text-sm leading-relaxed">
              Software developer passionate about building modern web
              applications and solving real-world problems.
            </p>

            <a
              href="mailto:ajdas123.ff@gmail.com"
              className="text-sm hover:underline"
            >
              ajdas123.ff@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Navigation
            </h3>

            <ul className="space-y-2 text-sm">
              {["home", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-neutral-900 dark:hover:text-white transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Connect
            </h3>

            <div className="flex gap-4 text-neutral-500 dark:text-neutral-400">

              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/aj_das_01"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 flex flex-col md:flex-row justify-between text-sm">

          <p>
            © {new Date().getFullYear()} Abhijit Rabidas
          </p>

          <p className="mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
