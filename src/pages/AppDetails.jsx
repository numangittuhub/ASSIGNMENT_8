// src/pages/AppDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { FaDownload } from "react-icons/fa";
import toast from "react-hot-toast";
import appsData from "../data/apps.json";

function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const found = appsData.find((a) => a.id === parseInt(id));
      setApp(found || null);
      setLoading(false);

      const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setInstalled(installedApps.some((a) => a.id === parseInt(id)));
    }, 500);
  }, [id]);

  const handleInstall = () => {
    if (!app) return;

    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-red-600">App Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Image */}
        <div className="md:col-span-1">
          <div
            className="w-full h-64 md:h-80 rounded-xl shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${app.image})` }}
          ></div>
        </div>

        {/* Right: Details */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <p className="text-gray-600">{app.companyName}</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-semibold">Rating</p>
              <p className="text-yellow-500">⭐ {app.ratingAvg}</p>
            </div>
            <div>
              <p className="font-semibold">Downloads</p>
              <p>{app.downloads.toLocaleString()}+</p>
            </div>
            <div>
              <p className="font-semibold">Reviews</p>
              <p>{app.reviews.toLocaleString()}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              installed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <FaDownload className="text-lg" />
            {installed ? "Installed" : "Install"}
          </button>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold mb-2">About this app</h2>
            <p className="text-gray-700 leading-relaxed">{app.description}</p>
          </div>

          {/* Recharts: Review Chart */}
          <div>
            <h2 className="text-xl font-bold mb-4">User Ratings</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={app.ratings}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;
