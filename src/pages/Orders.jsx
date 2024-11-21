import React, { useState } from 'react';
import OrderCard from '../components/OrderCard';
import Form from '../components/Form';
import mockData from '../data/mockData.json';
import Pagination from '../components/Pagination';

function Orders() {
  const [orders, setOrders] = useState(mockData.orders);
  const [editingOrder, setEditingOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 9;

  const handleAdd = (order) => {
    if (order.id) {
      const updatedOrders = orders.map((o) =>
        o.id === order.id ? order : o
      );
      setOrders(updatedOrders);
    } else {
      const newOrder = { ...order, id: Date.now() };
      setOrders([...orders, newOrder]);
    }
    setEditingOrder(null);
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
  };

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((o) => o.id !== id);
    setOrders(updatedOrders);
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Pedidos</h1>
      <Form
        initialData={editingOrder}
        onSubmit={handleAdd}
        fields={[
          { name: 'customer', label: 'Cliente' },
          { name: 'total', label: 'Total', type: 'number' },
          { name: 'date', label: 'Fecha', type: 'date' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
