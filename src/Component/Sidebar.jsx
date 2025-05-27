import React from 'react';
import { FaTachometerAlt, FaBook, FaCalculator, FaTasks } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Sidebar({ onNavigate, selectedPage }) {
  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Courses', icon: <FaBook /> },
    { name: 'CGPA', icon: <FaCalculator /> },
    { name: 'Assignments', icon: <FaTasks /> }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-blue-100 to-indigo-200 border-r p-6 min-h-screen shadow-lg">
      <h2 className="text-2xl font-bold mb-10 text-center text-indigo-900">Student Webkiosk</h2>
      <div className="flex flex-col gap-2 relative">
        {menuItems.map(({ name, icon }) => {
          const isActive = selectedPage === name;

          return (
            <button
              key={name}
              onClick={() => onNavigate(name)}
              className="relative flex items-center gap-3 px-4 py-3 font-medium rounded-lg text-indigo-800 hover:bg-indigo-100 transition duration-200 overflow-hidden"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebarActive"
                  className="absolute inset-0 bg-indigo-300/30 rounded-lg z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="text-lg z-10">{icon}</span>
              <span className="z-10">{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
