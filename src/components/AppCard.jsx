import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa"

function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="block w-full">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100 flex flex-col">
        <div className="w-full h-36 sm:h-40 mb-4 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
          <img 
            src={app.image} 
            alt={app.title}
            className="bg-cov object-contain"
          />
        </div>

        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-3 line-clamp-2">
          {app.title}
        </h3>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-2 sm:gap-0">
          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm">
            <FaDownload className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">{(app.downloads / 1000000).toFixed(1)}M</span>
          </div>

          <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs sm:text-sm">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.098 9.38c-.784-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.953z"/>
            </svg>
            <span className="font-medium">{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AppCard
