import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import TerminalWindow from "./TerminalWindow";
import TopBar from "./TopBar";
import Chatbot from "./Chatbot";

/**
 * Desktop component simulating a macOS-like desktop:
 * - Gradient background wallpaper
 * - TopBar with a pseudo Apple logo, device name, and clock
 * - Folder icons representing About, Projects, Blog, Contact
 * - Responsive layout (on mobile, icons stack and scale)
 * Double-clicking an icon opens a TerminalWindow with that content.
 */

const Desktop = () => {
  const [openWindow, setOpenWindow] = useState(null);
  const icons = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const handleIconDoubleClick = (id) => {
    setOpenWindow(id);
  };

  const handleClose = () => {
    setOpenWindow(null);
  };

  return (
    <div
      className="relative w-full h-full"
      style={{
        background: "linear-gradient(to bottom right, #5e5cbd, #363793)",
      }}
    >
      <TopBar />
      {/* Desktop Icons Area */}
      <div className="w-full h-full flex items-center justify-center pt-16 pb-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {icons.map((icon) => (
            <Icon
              key={icon.id}
              label={icon.label}
              onDoubleClick={() => handleIconDoubleClick(icon.id)}
            />
          ))}
        </div>
      </div>

      {openWindow && (
        <TerminalWindow contentId={openWindow} onClose={handleClose} />
      )}
      <Chatbot />
    </div>
  );
};

export default Desktop;
