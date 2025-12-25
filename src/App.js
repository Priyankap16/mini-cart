import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ParentCompo from "./components/ParentCompo";
import Checkout from "./pages/Checkout";
import CategoryPage from "./components/CategoryPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/searchProduct" element={<ParentCompo />} />
           {/* <Route path="/searchProduct" element={<SearchProdct />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
