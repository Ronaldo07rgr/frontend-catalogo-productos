import React, { useState } from "react";
import { FaBoxOpen, FaEdit, FaTrashAlt } from "react-icons/fa"; // Iconos
import FadeTransition from "./FadeTransition";

function ProductCard({ product, onEdit, onDelete }) {
  const [show, setShow] = useState(true);

  const handleDelete = () => {
    setShow(false);
    setTimeout(() => onDelete(product.id), 300);
  };

  return (
    <FadeTransition show={show}>
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        {/* Imagen del producto */}
        <div className="h-48 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-inner">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <FaBoxOpen className="text-gray-400 text-6xl" />
          )}
        </div>

        {/* Contenido del producto */}
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <p className="mt-2 text-lg font-medium text-gray-700">
            <span className="font-bold">Precio:</span> ${product.price}
          </p>

          {/* Estado de stock */}
          <div className="mt-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock > 0 ? "En stock" : "Agotado"}
            </span>
          </div>
        </div>

        {/* Botones */}
        <div className="mt-6 flex space-x-2 justify-end">
          <button
            onClick={() => onEdit(product)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
          >
            <FaEdit className="inline mr-2" /> Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
          >
            <FaTrashAlt className="inline mr-2" /> Eliminar
          </button>
        </div>
      </div>
    </FadeTransition>
  );
}

export default ProductCard;
