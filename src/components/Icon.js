import React from "react";

const Icon = ({ label, onClick, dock = false }) => {
  return (
    <div
      className={`flex flex-col items-center text-center cursor-pointer select-none group ${
        dock ? "transform transition-transform hover:scale-125" : ""
      }`}
      onClick={onClick}
    >
      {/* Folder icon */}
      <div className="w-16 h-14 bg-gradient-to-b from-blue-300 to-blue-500 rounded-md mb-2 relative group-hover:scale-105 transition-transform duration-200 shadow-lg">
        {/* Folder tab */}
        <div className="absolute top-0 left-0 w-6 h-2 bg-blue-400 rounded-b-md"></div>
        {/* Folder glyph (just a unicode char) */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-3xl text-white/90">
          📂
        </div>
      </div>
      <span className="text-sm text-white font-light">{label}</span>
    </div>
  );
};

export default Icon;
