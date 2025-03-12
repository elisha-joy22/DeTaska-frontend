import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiHome, FiClipboard, FiLogOut } from "react-icons/fi"; // Importing icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-blue-700 text-white h-screen p-4 transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      {/* Sidebar Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-6 focus:outline-none">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="flex items-center gap-2">
          <FiHome /> {isOpen && "Dashboard"}
        </Link>
        <Link to="/tasks" className="flex items-center gap-2">
          <FiClipboard /> {isOpen && "Tasks"}
        </Link>
        <Link to="/login" className="flex items-center gap-2">
          <FiLogOut /> {isOpen && "Logout"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
