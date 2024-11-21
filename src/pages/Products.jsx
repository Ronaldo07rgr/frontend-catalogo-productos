import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Form from '../components/Form';
import mockData from '../data/mockData.json';
import Pagination from '../components/Pagination';

function Products() {
  const [products, setProducts] = useState(mockData.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const handleAdd = (product) => {
    if (product.id) {
      const updatedProducts = products.map((p) =>
        p.id === product.id ? product : p
      );
      setProducts(updatedProducts);
    } else {
      const newProduct = { ...product, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <Form
        initialData={editingProduct}
        onSubmit={handleAdd}
        fields={[
          { name: 'name', label: 'Nombre del Producto' },
          { name: 'price', label: 'Precio', type: 'number' },
          { name: 'stock', label: 'Stock', type: 'number' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
