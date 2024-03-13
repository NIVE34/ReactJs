import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ProductsManagement from "./Components/ProductsManagement";
import OrdersManagement from "./Components/OrdersManagement";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
          <NavItem to="/" text="Dashboard" />
          <NavItem to="/products" text="Products Management" style={{ marginTop: '5px' }} />
          <NavItem to="/orders" text="Orders Management" style={{ marginTop: '5px' }} />
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          
        </Routes>
      </div>
    </Router>
  );
}


function NavItem({ to, text }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {text}
      </Link>
    </li>
  );
}

export default App;
