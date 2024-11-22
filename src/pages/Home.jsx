import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaUser,
  FaBox,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('../public/fondo.jpg')" }}
        ></div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-6 md:px-12">
          {/* Título */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            ¡Bienvenido a Gestión de Catálogo!
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-2xl text-gray-200 mb-8 animate__animated animate__fadeIn animate__delay-1.5s">
            Explora, organiza y gestiona tus productos de manera fácil y
            eficiente
          </p>

          {/* Botón */}
          <button className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition-transform transform hover:scale-105">
            Explorar Catálogo
          </button>
        </div>

        {/* Efecto de partículas animadas (opcional) */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 opacity-10"></div>
      </section>

      {/* Tarjetas Destacadas */}
      <section className="container mx-auto my-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          ¿Qué Ofrecemos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Productos", icon: <FaBox /> },
            { name: "Pedidos", icon: <FaShoppingCart /> },
            { name: "Soporte", icon: <FaTools /> },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white p-8 rounded-2xl shadow-xl max-w-md transition-all duration-500 hover:shadow-2xl"
            >
              {/* Ícono moderno con color */}
              <div className="text-6xl text-lg text-gray-500 mb-6">
                {item.icon}
              </div>

              {/* Título y descripción */}
              <h3 className="text-2xl font-semibold text-lg text-gray-500 mb-4">
                {item.name}
              </h3>
              <p className="text-lg text-gray-500 opacity-80">
                Gestión eficiente para {item.name.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            { name: "Juan Pérez", text: "¡Gran servicio, volvería sin dudas!" },
            {
              name: "María González",
              text: "Los mejores productos del mercado.",
            },
          ].map((client, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center transition-all duration-500 hover:shadow-2xl"
            >
              {/* Ícono de persona usando react-icons */}
              <div className="mb-6">
                <FaUser className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              </div>

              {/* Testimonio */}
              <p className="italic text-gray-600 mb-4 text-lg">{client.text}</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50 py-5">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Información de la compañía */}
          <div className="flex flex-col items-start space-y-3">
            <h4 className="text-2xl font-bold text-white tracking-wide hover:text-blue-400 transition-all duration-300">
              Gestión de Catálogo
            </h4>
            <p className="text-sm text-gray-300">
              © 2024 Todos los derechos reservados.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-8">
            {[
              {
                name: "Facebook",
                icon: <FaFacebook />,
              },
              {
                name: "Instagram",
                icon: <FaInstagram />,
              },
              {
                name: "LinkedIn",
                icon: <FaLinkedin />,
              },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`text-2xl text-white hover:scale-125 hover:transition-transform hover:duration-300`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Separador visual */}
        <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mt-6"></div>

        {/* Enlaces adicionales */}
        <div className="container mx-auto flex justify-center mt-6">
          <div className="space-x-8">
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
