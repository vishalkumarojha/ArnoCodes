import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when navigating to a new page
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-arno-dark-800 bg-opacity-80 backdrop-blur-lg border-b border-arno-dark-600">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="text-2xl font-bold text-white">
            ArnoCodes
          </Link>

          {/* Desktop Menu (Pushed to Right) */}
          <ul className="hidden md:flex items-center space-x-8 ml-auto">
            {["Courses", "Practice", "Mentorship", "Competitions", "Jobs", "Blog"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none ml-auto">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Dropdown Menu - Now Full Width & Pushes Content */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={closeMenu}
        >
          <div
            className="absolute top-0 right-0 w-3/4 h-full bg-arno-dark-900 bg-opacity-90 backdrop-blur-lg shadow-xl p-6"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Move X Button to the Right */}
            <div className="flex justify-end">
              <button onClick={closeMenu} className="text-white p-2">
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="space-y-6 text-right">
              {["Courses", "Practice", "Mentorship", "Competitions", "Jobs", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white block text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;