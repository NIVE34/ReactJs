import React, { useState } from 'react';
import Calendarview from './Calendarview'; 
import './styles.css';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Tom Cruise', orderDate: '2024-03-12', status: 'Pending' },
    { id: 2, customerName: 'Robert Downey Jr', orderDate: '2024-03-10', status: 'Shipped' },
    { id: 3, customerName: 'Tom Holland', orderDate: '2024-03-10', status: 'Pending' },
    { id: 4, customerName: 'Taylor Swift', orderDate: '2024-03-09', status: 'Shipped' },
    { id: 5, customerName: 'Zendaya', orderDate: '2024-03-09', status: 'Shipped' },
    { id: 6, customerName: 'Ed Sheeran', orderDate: '2024-03-08', status: 'Pending' },
    { id: 7, customerName: 'Samantha', orderDate: '2024-03-08', status: 'Shipped' }
  ]);

  const deleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="orders-management">
      <div className="background"></div>  
      
      <Calendarview orders={orders} deleteOrder={deleteOrder} />
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
      </table>
      
    </div>
  );
  
          
};

export default OrdersManagement;
