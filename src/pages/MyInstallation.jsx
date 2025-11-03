import { useState, useEffect, useMemo } from 'react'
import toast from 'react-hot-toast'
import { FaDownload } from "react-icons/fa";

function MyInstallation() {
  const [installedApps, setInstalledApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem('installedApps') || '[]')
      setInstalledApps(data)
      setLoading(false)
    }, 500)
  }, [])

  const handleUninstall = (appId) => {
    const updated = installedApps.filter(a => a.id !== appId)
    setInstalledApps(updated)
    localStorage.setItem('installedApps', JSON.stringify(updated))
    toast.success('App uninstalled successfully!')
  }

  const sortedApps = useMemo(() => {
    let sorted = [...installedApps]
    if (sortBy === 'size-high') sorted.sort((a, b) => b.size - a.size)
    else if (sortBy === 'size-low') sorted.sort((a, b) => a.size - b.size)
    return sorted
  }, [installedApps, sortBy])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Installed Apps</h1>
          <p className="text-gray-600 mt-2">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-lg text-gray-700">
            <span className="text-blue-600 font-bold">{sortedApps.length}</span> Apps Found
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Sort By Size</option>
            <option value="size-high">Size: High to Low</option>
            <option value="size-low">Size: Low to High</option>
          </select>
        </div>

        {sortedApps.length > 0 ? (
          <div className="space-y-6">
            {sortedApps.map(app => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow gap-4"
              >
                <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={app.image} alt={app.title} className=" bg-cover " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">{app.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
                      <span className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                        <FaDownload />
                        {(app.downloads / 1000000).toFixed(1)}M
                      </span>
                      <span className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.098 9.38c-.784-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.953z"/>
                        </svg>
                        {app.ratingAvg}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:from-green-500 hover:to-emerald-600 transition w-full sm:w-auto"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg py-16">No apps installed yet.</p>
        )}
      </div>
    </div>
  )
}

export default MyInstallation
