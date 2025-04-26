import React from "react";

const Education = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold">B.Tech - Mechanical Engineering</h3>
          <p className="text-gray-600">Yogi Vemana University, Kadapa | July 2024</p>
          <p className="mt-2 text-sm text-gray-600">Final Grade: 80 CGPA</p>
        </div>
        <div className="bg-white p-6 shadow rounded-xl mt-4">
          <h3 className="text-xl font-semibold">Higher Secondary Education </h3>
          <p className="text-gray-600">Sri chaitanya junior colleage | MPC</p>
          <p className="mt-2 text-sm text-gray-600">Final Grade: 95 CGPA</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
