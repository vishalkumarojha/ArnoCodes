import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-10 bg-arno-dark-800 bg-opacity-70 backdrop-filter backdrop-blur-lg border-b border-arno-dark-600">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            ArnoCodes
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`md:flex items-center space-x-8 ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0">
                  Practice
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  to="/competitions"
                  className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0"
                >
                  Competitions
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

