// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-12 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <div className="relative mx-auto w-64 h-52 sm:w-80 sm:h-64 md:w-96 md:h-72">
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-14 md:h-16 bg-gradient-to-t from-blue-900 to-blue-800 rounded-b-3xl"></div>
          <div className="absolute inset-x-3 sm:inset-x-4 top-3 sm:top-4 h-40 sm:h-48 bg-white rounded-t-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-12 sm:h-14 md:h-16 bg-purple-500 rounded-full"></div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-3 sm:h-4 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 md:w-32 h-1 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 rounded-full"></div>
          <div className="absolute -top-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 border-4 border-purple-400 rounded-full"></div>
          <div className="absolute -top-6 -right-6 w-8 sm:w-10 h-8 sm:h-10 bg-pink-500 rounded-full opacity-70"></div>
          <div className="absolute top-10 sm:top-12 -left-6 sm:-left-8">
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute top-16 sm:top-20 -right-8 sm:-right-10">
            <svg
              className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 112 0 1 1 0 010 0zm1-9a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1z" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
        Oops, page not found!
      </h2>
      <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition shadow-lg text-sm sm:text-base"
      >
        <FaDownload className="text-lg sm:text-xl" />
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
