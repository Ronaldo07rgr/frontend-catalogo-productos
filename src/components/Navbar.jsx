import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo o título */}
        <Link
          to="/"
          className="text-lg font-bold hover:text-blue-300 transition-all duration-300 ease-in-out"
        >
          Gestión de Catálogo
        </Link>

        {/* Botón del menú hamburguesa (visible solo en pantallas pequeñas) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none transition-transform duration-300 ease-in-out transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isMenuOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Menú de enlaces */}
        <div
          className={`${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } md:opacity-100 md:max-h-full overflow-hidden transition-all duration-300 ease-in-out absolute top-16 left-0 w-full bg-blue-600 md:static md:flex md:w-auto md:space-x-8 text-center`}
        >
          <Link
            to="/"
            className="block px-4 py-2 md:inline-block hover:bg-blue-700 hover:text-blue-300 rounded-3xl transition-all duration-300 ease-in-out"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 md:inline-block hover:bg-blue-700 hover:text-blue-300 rounded-3xl transition-all duration-300 ease-in-out"
          >
            Productos
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 md:inline-block hover:bg-blue-700 hover:text-blue-300 rounded-3xl transition-all duration-300 ease-in-out"
          >
            Pedidos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
