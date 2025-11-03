import { useState, useMemo } from "react";
import AppCard from "../components/AppCard";
import appsData from "../data/apps.json";
import { FaSearch, FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";

function AllApps() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredAndSortedApps = useMemo(() => {
    let filtered = appsData;
    if (search) {
      filtered = filtered.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortOrder === "high-low") {
      filtered = [...filtered].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      filtered = [...filtered].sort((a, b) => a.downloads - b.downloads);
    }
    return filtered;
  }, [search, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold  drop-shadow-sm">Our all Applictions</h1>
        <p className="text-lg text-gray-600 mt-2">Discover & explore the best apps for your daily life</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-4 rounded-2xl shadow-md">
        <p className="text-lg font-medium text-gray-700">
          Total Apps: <span className="text-green-600 font-semibold">{filteredAndSortedApps.length}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              <option value="">Sort by Downloads</option>
              <option value="high-low">High to Low</option>
              <option value="low-high">Low to High</option>
            </select>
            {sortOrder === "high-low" && <FaSortAmountDownAlt className="absolute right-3 top-3 text-green-500" />}
            {sortOrder === "low-high" && <FaSortAmountUp className="absolute right-3 top-3 text-green-500" />}
          </div>
        </div>
      </div>

      {filteredAndSortedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
          <p className="text-2xl text-gray-500 font-semibold">No App Found 😢</p>
        </div>
      )}
    </div>
  );
}

export default AllApps;
