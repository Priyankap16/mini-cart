import React from "react";
import { useSelector,useDispatch  } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckoutPage =()=>{
    navigate("/checkout");
  }

   const total = items.reduce((sum,item) => sum + item.price, 0); 

  const handleAdd =()=>{
  navigate("/searchProduct");
  }

  return (
    <div className="cart">
      <h2 className="cart-heading">CART  🛒  
     <button className="btn1" onClick={handleAdd}>Add more items</button>
      </h2>
      {items.map((item, index) => (
        <div className="card" key={index}>
            <button
              className="remove-btn"
              onClick={() => handleRemove(item.id)}
            >
              ✖
            </button>
          <img className="card-image" src={item.image} alt={item.title} />
          <div className="card-body">
            <div className="card-title">{item.title}</div>
            <div className="card-price">${item.price}</div>
          </div>     
        </div>
      ))}
     <div className="cart-total">
    <h2 > 
     <button className="btn1" onClick={handleCheckoutPage} >Add to Checkout</button>
      </h2>
    </div>
    </div>
  );
};

export default Cart;












