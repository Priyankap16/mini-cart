import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    if (!items.length) return alert("Your cart is empty.");
    // dummy checkout: clear cart and show thanks
    dispatch(clearCart());
    navigate("/"); // back to welcome
    alert("ORDER DONE ✅");
  };

  return (
    <div className="checkout">
      <h2>Your Cart</h2>
      {console.log(items)}
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((it) => (
              <div className="cart-item" key={it.id}>
                <img src={it.image} alt={it.title} />
                <div className="cart-item-info">
                  <div className="cart-title">{it.title}</div>
                  <div className="cart-controls">
                    <button onClick={() => dispatch(decrementQty(it.id))}>-</button>
                    <span>{it.quantity}</span>
                    <button onClick={() => dispatch(incrementQty(it.id))}>+</button>
                    <button className="remove" onClick={() => dispatch(removeFromCart(it.id))}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-price">${(it.price * it.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <div>Subtotal: <strong>${subtotal}</strong></div>
            <div className="checkout-actions">
              <button onClick={handleCheckout} className="btn">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
