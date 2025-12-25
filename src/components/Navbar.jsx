import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const items = useSelector((s) => s.cart.items);
  const totalCount = items.reduce((sum, it) => sum + it.quantity, 0);
  const name = localStorage.getItem("mini_cart_user");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("mini_cart_user");
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">MiniCart</Link>
        <Link to="/products" className="nav-link">Products</Link>
      </div>

      <div className="nav-right">
        {name ? <span className="greet">Hi, {name}</span> : <Link to="/login" className="nav-link">Login</Link>}
        <Link to="/checkout" className="cart-link">🛒 {totalCount}</Link>
        {name && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}
