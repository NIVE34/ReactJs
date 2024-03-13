import React, { useState } from 'react';
import './styles.css';

const Calendarview = ({ orders, deleteOrder }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const ordersArray = Array.isArray(orders) ? orders : [];

  const filteredOrders = selectedDate ? ordersArray.filter(order => order.orderDate === selectedDate) : ordersArray;

  return (
    <div className="Calendarview">
      <div>
       <h2>Select a Date</h2>
        <input type="date" onChange={(e) => handleDateClick(e.target.value)} />
      </div>

      <div className="orders-list">
        <h3 className="centered-text">Orders for {selectedDate || "all dates"}</h3>
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
            {filteredOrders.map(order => (
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
    </div>
  );
};

export default Calendarview;
