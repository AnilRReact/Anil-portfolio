import React from "react";
import { FaProjectDiagram, FaLaptopCode, FaCode, FaClipboardList, FaCloudSun, FaUserTie } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Website",
    desc: "Built a fully functional, responsive e-commerce website with a beautiful UI, filtering options, category browsing, and a simulated checkout experience. Integrated RESTful APIs for product data and styled entirely with Tailwind CSS.",
    tech: ["React", "Tailwind", "REST API"],
    icon: <FaProjectDiagram className="text-blue-500 text-3xl mb-2" />
  },
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio showcasing skills, projects, experience, and contact information. Built using React.js and Tailwind CSS with responsive layout and elegant styling.",
    tech: ["React", "Tailwind", "Responsive Design"],
    icon: <FaLaptopCode className="text-green-500 text-3xl mb-2" />
  },
  {
    title: "HRMS Dashboard",
    desc: "Designed and developed an HRMS application featuring employee dashboards, leave and attendance tracking, built with Redux Toolkit and Material UI. Focused on data handling and scalable state management.",
    tech: ["React", "Redux Toolkit", "Material UI"],
    icon: <FaClipboardList className="text-purple-500 text-3xl mb-2" />
  },
  {
    title: "WeatherSnap",
    desc: "A weather forecast app that provides real-time weather data and location-based personalization using the OpenWeatherMap API. Responsive layout and clean design.",
    tech: ["React", "API", "Tailwind CSS"],
    icon: <FaCloudSun className="text-yellow-500 text-3xl mb-2" />
  },
  {
    title: "Task Manager App",
    desc: "A productivity-focused web app that allows users to create, assign, and track tasks across categories. Features include local storage, CRUD functionality, and drag-drop columns.",
    tech: ["React", "Context API", "Tailwind"],
    icon: <FaClipboardList className="text-indigo-500 text-3xl mb-2" />
  },
  {
    title: "Admin Panel (Mini CMS)",
    desc: "Built a basic admin dashboard to manage users, products, and orders using React and a mock backend. Responsive layout and authentication included.",
    tech: ["React", "Axios", "Tailwind CSS"],
    icon: <FaUserTie className="text-gray-700 text-3xl mb-2" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              {p.icon}
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 my-3 text-sm">{p.desc}</p>
              <div className="text-xs text-blue-600">{p.tech.join(" | ")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
