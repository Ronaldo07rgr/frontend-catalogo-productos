import React from 'react';

function OrderCard({ order, onEdit, onDelete }) {
  return (
<div className="bg-white p-4 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold text-gray-800">Pedido de {order.customer}</h3>
  <p className="text-gray-500">Total: ${order.total}</p>
  <p className="text-gray-500">Fecha: {order.date}</p>
  <div className="mt-4 flex justify-between">
    <button
      onClick={() => onEdit(order)}
      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
    >
      Editar
    </button>
    <button
      onClick={() => onDelete(order.id)}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
    >
      Eliminar
    </button>
  </div>
</div>

  );
}

export default OrderCard;
