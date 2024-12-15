import React, { useState, useRef, useEffect } from "react";
import TerminalContent from "./TerminalContent";

const TerminalWindow = ({ contentId, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });
  const windowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setWindowPos({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const startDragging = (e) => {
    if (e.target.classList.contains("terminal-drag-handle")) {
      offset.current = {
        x: e.clientX - windowPos.x,
        y: e.clientY - windowPos.y,
      };
      setIsDragging(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div
        ref={windowRef}
        className="relative w-full max-w-3xl bg-black rounded-lg border border-gray-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition transform origin-center scale-95 animate-fadeIn"
        style={{
          top: windowPos.y,
          left: windowPos.x,
          position: isDragging ? "absolute" : "relative",
        }}
        onMouseDown={startDragging}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between bg-gray-800 p-2 terminal-drag-handle cursor-move select-none">
          <div className="flex space-x-2">
            <div
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
              onClick={onClose}
            ></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm text-gray-400 absolute left-1/2 transform -translate-x-1/2 select-none pointer-events-none">
            Terminal
          </div>
          <div></div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 overflow-auto text-sm text-gray-100 flex-1 leading-relaxed">
          <TerminalContent contentId={contentId} />
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
