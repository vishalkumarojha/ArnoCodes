"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCoursesDropdown = () => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)

  const navItems = [
    { name: "Courses", link: "/courses", hasDropdown: true },
    { name: "Practice", link: "/practice" },
    { name: "Mentorship", link: "/mentorship" },
    { name: "Competitions", link: "/competitions" },
    { name: "Jobs", link: "/jobs" },
    { name: "Blog", link: "/blog" },
  ]

  const courseDropdownItems = [
    { name: "A2Z DSA Course", link: "/sheet/0" },
    { name: "SDE Sheet", link: "/sheet/1" },
    { name: "79 Sheet", link: "/sheet/2" },
    { name: "Blind 75", link: "/sheet/3" },
  ]

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
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleCoursesDropdown}
                        className="text-gray-300 hover:text-white transition-colors flex items-center"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isCoursesDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-arno-dark-700 ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {courseDropdownItems.map((courseItem, courseIndex) => (
                              <Link
                                key={courseIndex}
                                to={courseItem.link}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-arno-dark-600 hover:text-white"
                                role="menuitem"
                              >
                                {courseItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-gray-300 hover:text-white transition-colors block py-2 md:py-0"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

