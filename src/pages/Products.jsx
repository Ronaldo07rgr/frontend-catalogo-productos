import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalForm from "../components/ModalForm"; // Importa el componente ModalForm
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import ToastManager from "../components/ToastManager"; // Importa ToastManager
import mockData from "../data/mockData.json";

function Products() {
  const [products, setProducts] = useState(mockData.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const productsPerPage = 9;

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      id: editingProduct ? editingProduct.id : Date.now(),
    };

    if (editingProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id ? newProduct : product
      );
      setProducts(updatedProducts);
      ToastManager.success("¡Producto actualizado exitosamente!");
    } else {
      setProducts([...products, newProduct]);
      ToastManager.success("¡Producto añadido exitosamente!");
    }

    setEditingProduct(null);
    setShowForm(false); // Ocultar el formulario después de enviar
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true); // Mostrar el formulario en modo edición
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    ToastManager.error("Producto eliminado.");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <button
        onClick={() => setShowForm(true)} // Alterna la visibilidad
        className="bg-green-500 text-white px-6 py-3 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
      >
        Agregar
      </button>

      {/* Usar ModalForm */}
      <ModalForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleAdd}
        fields={[
          { name: "name", label: "Nombre" },
          { name: "price", label: "Precio", type: "number" },
          { name: "stock", label: "Stock", type: "number" },
        ]}
        initialData={editingProduct}
      />

      <div className="flex justify-between items-center my-4">
        <span className="text-lg font-medium">Productos Registrados</span>
        <SearchBar
          placeholder="Buscar productos..."
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Products;
