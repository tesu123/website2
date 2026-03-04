import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-semibold text-neutral-900 dark:text-neutral-100"
        >
          Abhijit Rabidas
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-400">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neutral-900 dark:hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="hidden md:flex items-center gap-4 text-neutral-500">
          <a
            href="https://github.com/Abhijit-Rabidas"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white"
          >
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-800 dark:text-neutral-200"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}

            <div className="flex gap-4 pt-2">
              <FaGithub />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
