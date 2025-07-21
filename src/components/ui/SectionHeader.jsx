import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        { title }
      </h2>
      <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        { subtitle }
      </p>
    </div>
  );
};

export default SectionHeader;
