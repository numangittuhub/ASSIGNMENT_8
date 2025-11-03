// src/pages/Home.jsx
import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
import apps from "../data/apps.json";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../assets/hero.png";

function Home() {
  const topApps = apps.slice(0, 8);

  return (
    <div className="mx-auto px-4 py-8">
      <div className="text-center py-16 rounded-2xl mb-12 text-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          We Build <br />
          <span className="text-purple-600 font-extrabold">Productive</span> Apps
        </h1>
        <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-blue-600 px-5 py-3 rounded-xl shadow-md hover:shadow-lg border hover:border-blue-400 transition-all duration-300"
          >
            <FaAppStoreIos className="text-2xl md:text-3xl" />
            <p className="text-base font-semibold">App Store</p>
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-green-600 px-5 py-3 rounded-xl shadow-md hover:shadow-lg border hover:border-green-400 transition-all duration-300"
          >
            <IoLogoGooglePlaystore className="text-2xl md:text-3xl" />
            <p className="text-base font-semibold">Google Play</p>
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img src={hero} alt="Hero" className="w-full max-w-4xl h-auto object-cover" />
      </div>

      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-16 mb-12 rounded-2xl">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm md:text-base opacity-80 mb-2">
                Total Downloads
              </p>
              <h3 className="text-4xl md:text-5xl font-bold">29.6M</h3>
              <p className="text-sm mt-2 opacity-75">
                21% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm md:text-base opacity-80 mb-2">
                Total Reviews
              </p>
              <h3 className="text-4xl md:text-5xl font-bold">906K</h3>
              <p className="text-sm mt-2 opacity-75">
                46% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm md:text-base opacity-80 mb-2">Active Apps</p>
              <h3 className="text-4xl md:text-5xl font-bold">132+</h3>
              <p className="text-sm mt-2 opacity-75">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center mb-10 text-center px-4">
          <h2 className="text-3xl font-bold mb-2">Trending Apps</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/apps"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
