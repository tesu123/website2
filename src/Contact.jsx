// import React from "react";
// import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

// function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic here
//   };

//   return (
//     <section className="py-20 bg-gray-50 dark:bg-gray-900" id="contact">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800 rounded-full mb-4">
//             CONTACT ME
//           </span>
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
//             Let's <span className="text-blue-600 dark:text-blue-400">Connect</span>
//           </h2>
//           <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         </div>

//         {/* Contact Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info Box */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
//               Contact Information
//             </h3>

//             <div className="space-y-8">
//               {/* Address */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-6">
//                   <FiMapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Location</h4>
//                   <a
//                     href="https://www.google.com/maps/place/147,+Ananda+Pally,+Bapuji+Nagar,+Jadavpur,+Kolkata,+West+Bengal+700092/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                   >
//                     Jadavpur, Kolkata, West Bengal
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-6">
//                   <FiPhone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
//                   <a
//                     href="tel:+917679489050"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                   >
//                     +91 7679489050
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-6">
//                   <FiMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
//                   <a
//                     href="mailto:ajdas123.ff@gmail.com"
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                   >
//                     ajdas123.ff@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
//               Send Me a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Phone (Optional)
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                   placeholder="+91 1234567890"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                   placeholder="Your message here..."
//                   required
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
//               >
//                 Send Message
//                 <FiSend className="ml-2 -mr-1 w-5 h-5" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800 rounded-full mb-4">
            CONTACT ME
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Let's{" "}
            <span className="text-blue-600 dark:text-blue-400">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Box */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-6">
                  <FiMapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h4>
                  <a
                    href="https://www.google.com/maps/place/147,+Ananda+Pally,+Bapuji+Nagar,+Jadavpur,+Kolkata,+West+Bengal+700092/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Jadavpur, Kolkata, West Bengal
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-6">
                  <FiPhone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+917679489050"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 7679489050
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-6">
                  <FiMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:ajdas123.ff@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    ajdas123.ff@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="+91 1234567890"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="ml-2 -mr-1 w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  Failed to send message. Please try again later or contact me
                  directly at ajdas123.ff@gmail.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
