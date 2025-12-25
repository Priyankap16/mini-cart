import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <h2>Welcome to MiniCart</h2>
      <p>A tiny demo shop — add items, manage cart, checkout (dummy).</p>
      <div className="welcome-actions">
        <Link to="/login" className="btn">Go to Login</Link>
        <Link to="/products" className="btn btn-secondary">Browse Products</Link>
      </div>
    </div>
  );
}
