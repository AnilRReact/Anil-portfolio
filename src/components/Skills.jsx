import React from "react";

const skills = [
  "React.js", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Redux Toolkit", "REST APIs",
  "Axios", "Git", "Netlify", "Material UI",
  "Context API", "Responsive Design"
];

const Skills = () => {
  return (
    <section className="py-10 bg-white border-b border-gray-200" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border border-blue-500 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
