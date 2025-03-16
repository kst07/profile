import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Renamed to avoid conflict
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { id: "home", label: "Home", path: "/" }, // Added path for routing
    { id: "skills", label: "Skills", path: "/" },
    { id: "projects", label: "Projects", path: "/" },
    { id: "about", label: "About", path: "/" },
  ];

  return (
    <nav className="bg-gray-800/80 backdrop-blur-lg shadow-2xl fixed w-full top-0 z-50 border-b border-cyan-400/20">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400/10 w-1 h-1 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex justify-between items-center p-4 relative z-10">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <ScrollLink
            to="home"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer"
            onSetActive={() => setActiveSection("home")}
            onClick={() => navigate("/")} // Navigate to home on click
          >
            sirinapha
          </ScrollLink>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                className={`px-6 py-2 rounded-full text-lg cursor-pointer transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-cyan-400'
                    : 'text-cyan-100 hover:bg-gray-700/50'
                }`}
                onSetActive={() => setActiveSection(link.id)}
                onClick={() => navigate(link.path)} // Navigate to the specified path
              >
                {link.label}
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-cyan-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-cyan-400/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={500}
                  className={`block px-8 py-4 text-lg cursor-pointer transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-cyan-100 hover:bg-gray-700/30'
                  }`}
                  onClick={() => {
                    closeMenu(); // Close the mobile menu
                    navigate(link.path); // Navigate to the specified path
                  }}
                  onSetActive={() => setActiveSection(link.id)}
                >
                  {link.label}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;