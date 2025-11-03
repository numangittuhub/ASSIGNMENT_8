import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              HERO.IO
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "hover:text-purple-600 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "hover:text-purple-600 transition"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "hover:text-purple-600 transition"
              }
            >
              Installation
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg font-medium flex items-center gap-2 hover:from-purple-600 hover:to-purple-800 transition shadow-md"
            >
              <IoLogoGithub className="text-lg md:text-xl" />
              <span className="hidden sm:inline">Contribute</span>
            </a>

            <button
              className="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "text-gray-700 hover:text-purple-600 transition"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "text-gray-700 hover:text-purple-600 transition"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "text-gray-700 hover:text-purple-600 transition"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Installation
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
