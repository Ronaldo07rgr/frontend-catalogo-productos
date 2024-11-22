import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaBox, FaClipboardList } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wider relative group"
        >
<h4 className="text-2xl font-bold text-white tracking-wide hover:text-blue-400 transition-all duration-300">
              Gestión de Catálogo
            </h4>
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300"></div>
        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none flex items-center"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 animate-pulse transition-transform duration-300 transform rotate-180" />
          ) : (
            <FaBars className="h-6 w-6 animate-pulse transition-transform duration-300 transform rotate-0" />
          )}
        </button>

        {/* Menú */}
        <div
          className={`${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } md:opacity-100 md:max-h-full overflow-hidden transition-all duration-500 ease-in-out absolute md:relative left-0 top-full w-full bg-blue-700 md:bg-transparent md:flex md:w-auto text-center z-50`}
        >
          <ul className="md:flex md:space-x-8">
            {[
              { name: "Inicio", to: "/", icon: <FaHome className="inline mr-2" /> },
              {
                name: "Productos",
                to: "/products",
                icon: <FaBox className="inline mr-2" />,
              },
              {
                name: "Pedidos",
                to: "/orders",
                icon: <FaClipboardList className="inline mr-2" />,
              },
            ].map((item, index) => (
              <li key={index} className="my-2 md:my-0">
                <Link
                  to={item.to}
                  className="relative block px-6 py-2 text-lg font-semibold rounded-lg hover:bg-blue-800 md:hover:bg-blue-600 hover:text-cyan-200 transition-all duration-300 group"
                >
                  {item.icon}
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Separador */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
    </nav>
  );
}

export default Navbar;
