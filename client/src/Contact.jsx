import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${ApiUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6
      bg-white dark:bg-neutral-950
      text-neutral-900 dark:text-neutral-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Contact
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">
            Feel free to reach out for collaboration or opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div className="space-y-8">

            <h3 className="text-xl font-semibold">Get in touch</h3>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <FiMapPin className="mt-1 text-neutral-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Jadavpur, Kolkata, West Bengal
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FiPhone className="mt-1 text-neutral-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+917679489050"
                    className="text-neutral-500 dark:text-neutral-400 hover:underline"
                  >
                    +91 7679489050
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FiMail className="mt-1 text-neutral-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:ajdas123.ff@gmail.com"
                    className="text-neutral-500 dark:text-neutral-400 hover:underline"
                  >
                    ajdas123.ff@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-5 pt-4 text-neutral-500 dark:text-neutral-400">

              <a
                href="https://github.com/Abhijit-Rabidas"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhijit-rabidas"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://www.instagram.com/aj_das_01"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>

            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md
              border border-neutral-300
              dark:border-neutral-700
              bg-transparent
              focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md
              border border-neutral-300
              dark:border-neutral-700
              bg-transparent
              focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md
              border border-neutral-300
              dark:border-neutral-700
              bg-transparent
              focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2
              w-full px-6 py-3 rounded-md
              bg-neutral-900 text-white
              dark:bg-white dark:text-black
              hover:opacity-90 transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <FiSend />
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Failed to send message.
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}
