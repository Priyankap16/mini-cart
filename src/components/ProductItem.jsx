import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import "./ProductItem.css";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }));
   navigate("/cart");
  };

  return (
    <div className="card">
      <img className="card-image" src={product.image} alt={product.title} />
      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <div className="card-price">${product.price}</div>
        <button className="btn" onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}
