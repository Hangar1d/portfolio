import React, { useState, useEffect } from "react";
import { FiWifi, FiSearch } from "react-icons/fi";
import { RiBattery2Fill } from "react-icons/ri";

const TopBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = now.getHours();
      const mins = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 w-full h-6 bg-black/50 backdrop-blur flex items-center justify-between px-4 text-white text-xs z-50">
      {/* Left side: Apple and device name */}
      <div className="flex items-center space-x-4">
        <span className="text-xl"></span>
        <span>Khan's MacBook</span>
      </div>

      {/* Right side: Control Center, Wi-Fi, Battery, Time */}
      <div className="flex items-center space-x-4">
        {/* Right side: Battery, Wi-Fi, Search (Spotlight), Control Center, Time */}
        <div className="flex items-center space-x-2 text-gray-200 hover:text-gray-100 cursor-pointer">
          {/* Battery Icon */}
          <RiBattery2Fill size={16} />
          <span className="text-xs">80%</span>
        </div>
        {/* Wi-Fi symbol (using 📶 as a placeholder) */}
        <FiWifi
          className="text-gray-200 hover:text-gray-100 cursor-pointer"
          size={16}
        />
        {/* Search (Spotlight) */}
        <FiSearch
          className="text-gray-200 hover:text-gray-100 cursor-pointer"
          size={16}
        />
        {/* Time */}
        <span>{time}</span>
      </div>
    </div>
  );
};

export default TopBar;
