import React from "react";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-500">Precio: ${product.price}</p>
      <p className="text-gray-500">Stock: {product.stock}</p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
