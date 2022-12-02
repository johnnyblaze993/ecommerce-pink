import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cart Page</h1>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Cart;
