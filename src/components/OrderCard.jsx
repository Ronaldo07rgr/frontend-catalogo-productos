import React, { useState } from "react";
import { FaShoppingBag, FaEdit, FaTrashAlt } from "react-icons/fa"; // Iconos
import FadeTransition from "./FadeTransition";

function OrderCard({ order, onEdit, onDelete }) {
  const [show, setShow] = useState(true);

  const handleDelete = () => {
    setShow(false);
    setTimeout(() => onDelete(order.id), 300);
  };

  return (
    <FadeTransition show={show}>
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        {/* Icono principal */}
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white p-3 rounded-full shadow-md">
            <FaShoppingBag size={24} />
          </div>
          <h3 className="ml-4 text-2xl font-bold text-gray-800">
            Pedido de {order.customer}
          </h3>
        </div>

        {/* Detalles del pedido */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold">Total:</span> ${order.total}
          </p>
          <p className="text-lg text-gray-500">
            <span className="font-bold">Fecha:</span> {order.date}
          </p>
        </div>

        {/* Estado del pedido */}
        <div className="mt-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              order.status === "Completado"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Botones */}
        <div className="mt-6 flex space-x-2 justify-end">
          <button
            onClick={() => onEdit(order)}
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

export default OrderCard;
