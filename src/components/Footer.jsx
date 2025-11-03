function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hero IO</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-4">Your trusted app store for amazing apps</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p className="mt-6 text-xs sm:text-sm text-gray-500">© 2025 Hero IO. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
