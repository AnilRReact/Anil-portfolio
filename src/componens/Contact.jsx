import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect!</h2>
        <p className="text-gray-600 mb-8">I'm always open to new opportunities and collaborations.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:anilchalla0713@gmail.com"
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/anil-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            View LinkedIn
          </a>
          <a
            href="/ANILREDDY_RESUME.pdf"
            download
            className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
