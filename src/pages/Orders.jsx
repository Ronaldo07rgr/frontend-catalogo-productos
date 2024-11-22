import React, { useState } from "react";
import OrderCard from "../components/OrderCard";
import ModalForm from "../components/ModalForm";  // Importa el componente ModalForm
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import ToastManager from "../components/ToastManager"; // Importa ToastManager
import mockData from "../data/mockData.json";

function Orders() {
  const [orders, setOrders] = useState(mockData.orders);
  const [editingOrder, setEditingOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const ordersPerPage = 9;

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newOrder = {
      customer: formData.get("customer"),
      total: formData.get("total"),
      date: formData.get("date"),
      id: editingOrder ? editingOrder.id : Date.now(),
    };

    if (editingOrder) {
      const updatedOrders = orders.map((order) =>
        order.id === editingOrder.id ? newOrder : order
      );
      setOrders(updatedOrders);
      ToastManager.success("¡Pedido actualizado exitosamente!");
    } else {
      setOrders([...orders, newOrder]);
      ToastManager.success("¡Pedido añadido exitosamente!");
    }

    setEditingOrder(null);
    setShowForm(false); // Ocultar el formulario después de enviar
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setShowForm(true); // Mostrar el formulario en modo edición
  };

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((o) => o.id !== id);
    setOrders(updatedOrders);
    ToastManager.error("Pedido eliminado.");
  };

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  return (
    <div className="container mx-auto p-4">
      <h5 className="text-2xl font-bold mb-5">Gestión de Pedidos</h5>
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
          { name: "customer", label: "Cliente" },
          { name: "total", label: "Total", type: "number" },
          { name: "date", label: "Fecha", type: "date" },
        ]}
        initialData={editingOrder}
      />

      <div className="flex justify-between items-center my-4">
        <span className="text-lg font-bold">Pedidos Registrados</span>
        <SearchBar
          placeholder="Buscar pedidos..."
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
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

export default Orders;
