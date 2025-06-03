"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Users,
  BookOpen,
  Code,
  User,
  LogOut,
  Trophy,
  Briefcase,
  FileText,
  Zap,
  Mail,
} from "lucide-react"
import { UserMenu } from "./UserMenu"
import { ComingSoonModal } from "./ComingSoonModal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")
  const location = useLocation()
  const { currentUser, logout } = useAuth()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Close menu when navigating to a new page
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  // Prevent body scroll when menu is open and add push effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("menu-open")
    } else {
      document.body.style.overflow = "unset"
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.classList.remove("menu-open")
    }
  }, [isMenuOpen])

  const upcomingFeatures = [
    "Interview Assistance",
    "DSA Visual Guide",
    "DSA (Leetcode Solutions)",
    "Developers Roadmap",
    "AI Powered IDE",
  ]

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature)
    setIsComingSoonOpen(true)
  }

  const handleLogout = async () => {
    try {
      await logout()
      closeMenu()
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-arno-dark-800/80 backdrop-blur-lg border-b border-arno-dark-600">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-white font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            ArnoCodes
            <span className="text-arno-blue-400">/&gt;</span>
          </Link>

          {/* Desktop Menu - Only show if user is authenticated */}
          {currentUser && (
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              <ul className="flex items-center space-x-8">
                {["Courses", "Practice", "Mentorship", "Competitions", "Jobs", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-arno-blue-400 transition-colors font-mono text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}

                {/* Upcoming Features Dropdown */}
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-arno-blue-400 transition-colors focus:outline-none font-mono text-sm">
                      More
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-56 bg-arno-dark-800/95 backdrop-blur-lg border-arno-dark-600"
                    >
                      {upcomingFeatures.map((feature) => (
                        <DropdownMenuItem
                          key={feature}
                          onClick={() => handleFeatureClick(feature)}
                          className="text-gray-300 hover:text-white hover:bg-arno-dark-700 cursor-pointer flex items-center justify-between font-mono"
                        >
                          <span>{feature}</span>
                          <span className="text-xs bg-arno-blue-400/20 text-arno-blue-400 px-2 py-1 rounded-full">
                            Soon
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>

              {/* User Menu */}
              <UserMenu />
            </div>
          )}

          {/* Auth buttons for non-authenticated users on desktop */}
          {!currentUser && (
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              <Link
                to="/auth"
                className="text-gray-300 hover:text-arno-blue-400 transition-colors px-4 py-2 rounded-lg border border-arno-dark-600 hover:border-arno-blue-400 font-mono text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/auth"
                className="bg-arno-blue-400 text-white px-4 py-2 rounded-lg hover:bg-arno-blue-500 transition-colors font-mono text-sm"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none ml-auto">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay and Sidebar */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Glassmorphism Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Content Push Effect */}
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out ${
            isMenuOpen ? "transform -translate-x-80" : "transform translate-x-0"
          }`}
        >
          {/* This div represents the pushed content area with glassmorphism */}
          <div className="w-full h-full bg-gradient-to-r from-arno-dark-900/20 via-arno-blue-400/5 to-transparent backdrop-blur-[2px]" />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-arno-dark-900/95 backdrop-blur-xl shadow-2xl border-l border-arno-blue-400/20 overflow-y-auto transition-transform duration-300 ease-out ${
            isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end p-4 border-b border-arno-dark-600">
            <button
              onClick={closeMenu}
              className="p-2 text-gray-400 hover:text-white hover:bg-arno-dark-700 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Profile Section - Only show if authenticated */}
          {currentUser && (
            <div className="p-4 border-b border-arno-dark-600">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-arno-blue-400/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-arno-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium text-sm font-mono truncate">{currentUser.email}</div>
                  <div className="text-gray-400 text-xs">Authenticated User</div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-mono border border-red-500/30 hover:border-red-500/50"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}

          {/* Navigation Items */}
          <nav className="p-4 flex-1">
            <ul className="space-y-2">
              {currentUser ? (
                <>
                  {[
                    { name: "Home", icon: Home, path: "/" },
                    { name: "Courses", icon: BookOpen, path: "/courses" },
                    { name: "Practice", icon: Code, path: "/practice" },
                    { name: "Mentorship", icon: Users, path: "/mentorship" },
                    { name: "Competitions", icon: Trophy, path: "/competitions" },
                    { name: "Jobs", icon: Briefcase, path: "/jobs" },
                    { name: "Blog", icon: FileText, path: "/blog" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-arno-dark-700/50 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        <item.icon className="w-5 h-5 text-arno-blue-400" />
                        <span className="font-medium font-mono">{item.name}</span>
                      </Link>
                    </li>
                  ))}

                  {/* Upcoming Features Section */}
                  <li className="pt-4 mt-4 border-t border-arno-dark-600">
                    <div className="px-4 py-2">
                      <span className="text-gray-500 text-xs font-mono uppercase tracking-wide">// Coming Soon</span>
                    </div>
                    {upcomingFeatures.map((feature) => (
                      <button
                        key={feature}
                        onClick={() => {
                          handleFeatureClick(feature)
                          closeMenu()
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-arno-dark-700/30 rounded-lg transition-colors text-sm font-mono"
                      >
                        <span>{feature}</span>
                        <span className="text-xs bg-arno-blue-400/20 text-arno-blue-400 px-2 py-1 rounded-full">
                          Soon
                        </span>
                      </button>
                    ))}
                  </li>
                </>
              ) : (
                <>
                  {/* Non-authenticated user menu */}
                  {[
                    { name: "Home", icon: Home, path: "/" },
                    { name: "About", icon: Info, path: "/about" },
                    { name: "Features", icon: Zap, path: "/features" },
                    { name: "Contact", icon: Mail, path: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-arno-dark-700/50 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        <item.icon className="w-5 h-5 text-arno-blue-400" />
                        <span className="font-medium font-mono">{item.name}</span>
                      </Link>
                    </li>
                  ))}

                  {/* Auth buttons for mobile */}
                  <li className="pt-4 mt-4 border-t border-arno-dark-600 space-y-3">
                    <Link
                      to="/auth"
                      className="flex items-center justify-center w-full px-4 py-3 text-gray-300 border border-arno-dark-600 rounded-lg hover:bg-arno-dark-700/50 hover:border-arno-blue-400 transition-colors font-mono"
                      onClick={closeMenu}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth"
                      className="flex items-center justify-center w-full px-4 py-3 bg-arno-blue-400 text-white rounded-lg hover:bg-arno-blue-500 transition-colors font-mono"
                      onClick={closeMenu}
                    >
                      Get Started
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-arno-dark-600 bg-arno-dark-800/50">
            <p className="text-xs text-gray-500 text-center font-mono">© 2024 ArnoCodes • v2.0</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} feature={selectedFeature} />
    </>
  )
}

export default Navbar
