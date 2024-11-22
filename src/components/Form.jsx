import React, { useState, useEffect } from 'react';

function Form({ initialData = {}, onSubmit, fields }) {
  const [formData, setFormData] = useState({ ...initialData });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...initialData }));
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label
            htmlFor={field.name}
            className="mb-2 text-sm font-semibold text-gray-700"
          >
            {field.label}
          </label>
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg hover:border-blue-500"
            placeholder={`Escribe ${field.label.toLowerCase()} aquí...`}
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ease-in-out "
      >
        Guardar
      </button>
    </form>
  );
}


export default Form;