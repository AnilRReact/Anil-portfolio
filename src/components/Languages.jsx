import React from "react";

const languages = ["English", "Hindi", "Telugu"];

const Languages = () => {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Languages Known</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {languages.map((lang, i) => (
            <span
              key={i}
              className="border border-gray-400 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
