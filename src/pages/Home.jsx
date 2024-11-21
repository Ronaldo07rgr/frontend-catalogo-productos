import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('../public/fondo.jpg')" }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            ¡Bienvenido a Gestión de Catálogo!
          </h1>
          <p className="text-lg">Descubre nuestros productos y servicios</p>
          <button className="mt-4 px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded-full transition duration-300">
            Explorar Catálogo
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </section>

      {/* Tarjetas Destacadas */}
      <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">¿Qué Ofrecemos?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {["Productos", "Pedidos", "Soporte"].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`https://via.placeholder.com/400x200?text=${item}`}
                alt={item}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{item}</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-100 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Juan Pérez", "María González"].map((client, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white p-4 rounded-lg shadow-md max-w-xs"
            >
              <p className="italic">
                "Excelente servicio, lo recomiendo mucho."
              </p>
              <h3 className="text-lg font-bold mt-4">- {client}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto flex justify-around">
          {[
            { value: "500+", label: "Productos" },
            { value: "300+", label: "Clientes Satisfechos" },
            { value: "1M+", label: "Pedidos Entregados" },
          ].map((stat, index) => (
            <div key={index} data-aos="fade-up" className="text-center">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <h4 className="text-lg font-bold">Gestión de Catálogo</h4>
            <p className="text-sm">© 2024 Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            {[
              {
                name: "Facebook",
                icon: <FaFacebook />,
                color: "text-blue-600",
              },
              {
                name: "Instagram",
                icon: <FaInstagram />,
                color: "text-pink-600",
              },
              {
                name: "LinkedIn",
                icon: <FaLinkedin />,
                color: "text-blue-700",
              },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`text-2xl text-white hover:${social.color} hover:scale-110 transition-all duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
