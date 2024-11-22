import React from "react";
import { FaTimes } from "react-icons/fa";
import FadeTransition from "./FadeTransition";

function ModalForm({ show, onClose, onSubmit, fields, initialData, title }) {
  return (
    <FadeTransition show={show}>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-out modal-content w-3/4 md:w-1/2 h-auto max-w-4xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <FaTimes size={17} />
            </button>
          </div>
          <form onSubmit={onSubmit}>
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  id={field.name}
                  name={field.name}
                  defaultValue={initialData ? initialData[field.name] : ""}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <div className="flex space-x-2 justify-end mt-5">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </FadeTransition>
  );
}

export default ModalForm;
