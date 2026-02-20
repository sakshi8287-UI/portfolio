import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    textActive: "text-orange-600",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-gray-800 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textActive: "text-orange-400",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (item) => {
    setActiveSection(item.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 mt-4 px-2">
      <nav
        className={`flex items-center justify-between gap-4 w-full max-w-5xl ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 sm:px-6 py-2 shadow-lg`}
      >
        {/* Logo */}
        <a
          href="#"
          className={`text-xl font-bold ${colors.textPrimary} whitespace-nowrap`}
        >
          Portfolio<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={`px-2 py-1 font-medium transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? colors.textActive
                  : `${colors.textSecondary} hover:text-orange-500`
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {darkMode ? (
              <FaSun className="w-5 h-5 text-yellow-300" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white whitespace-nowrap`}
          >
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {isMenuOpen ? <FaTimes className="w-5 h-5 text-white" /> : <FaBars className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`absolute top-full left-0 right-0 mt-3 lg:hidden rounded-xl shadow-lg backdrop-blur-lg ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            }`}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className={`block text-center py-2 font-medium ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
