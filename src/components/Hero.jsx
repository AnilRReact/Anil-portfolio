import React from "react";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-32 px-4">
      <img
        src={profilePic}
        alt="Anil Reddy"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
      />
      <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Anil Reddy 👋</h2>
      <p className="text-blue-600 font-semibold text-lg mt-2 tracking-wide">
        Frontend Developer | React.js Enthusiast | UI Builder 🚀
      </p>
      <p className="mt-4 max-w-xl text-gray-600">
        I craft beautiful, fast, and accessible websites using modern frontend tools and clean code.
      </p>
      <a
        href="#projects"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
