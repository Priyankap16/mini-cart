import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import "./App.css";

/*
  Very simple route guard:
  If a user name exists in localStorage -> allow /products and /checkout.
  Otherwise redirect to /login.
*/
const PrivateRoute = ({ children }) => {
  const name = localStorage.getItem("mini_cart_user");
  if (!name) return <Navigate to="/login" replace />;
  return children;
};

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
