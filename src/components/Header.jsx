import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Anil Reddy</h1>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:text-yellow-500 bg-blue-600 text-white px-3 py-1 rounded-md">About</a>
          <a href="#projects" className="hover:text-yellow-500 bg-blue-600 text-white px-3 py-1 rounded-md">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 bg-blue-600 text-white px-3 py-1 rounded-md">Contact</a>
          <a href="#Skills" className="hover:text-yellow-500 bg-blue-600 text-white px-3 py-1 rounded-md">Skills</a>
          <a href="/ANILREDDY_RESUME.pdf" download className="hover:text-yellow-500 bg-blue-600 text-white px-3 py-1 rounded-md">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
