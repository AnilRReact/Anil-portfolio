import React from "react";

const certifications = [
  {
    title: "Frontend Development",
    provider: "Digital Edify",
  },
  {
    title: "JavaScript: Understanding the Weird Parts",
    provider: "Udemy",
  },
  {
    title: "Complete React Developer Course",
    provider: "Udemy",
  }
];

const Certifications = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg border dark:border-gray-700">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
