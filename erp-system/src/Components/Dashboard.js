import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="background"></div>
      <div className="dashboard-header">
      <h1 className="centered-text"> ERP Dashboard</h1>
      </div>
      <div className="dashboard-metrics boxed-section">
        <h2 className="centered-text">Key Metrics</h2>
        <div className="metric">
          <p className="centered-text">Total number of products: <strong>20</strong></p>
          <p className="centered-text">Total number of orders: <strong>7</strong></p>
        </div>
      </div>
      <div className="dashboard-navigation">
        <div className="dashboard-navigation centered-text">
          <div style={{ display: 'grid', flexDirection: 'column' }}>
            <Link to="/products" className="navigation-link">Products Management</Link>
            <div style={{ marginBottom: '10px' }}></div>
            <Link to="/orders" className="navigation-link">Orders Management</Link>
            </div>   
        </div>
      </div>
      </div>
  );
};

export default Dashboard;

