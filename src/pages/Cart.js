import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/items/cart/cartSlice";

//styles
const checkoutItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  margin: "1rem",
  fontWeight: "bold",
  fontSize: "1.5rem",
};

const returnButtonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  position: "absolute",
  top: "-6rem",
  left: "1rem",
};

const containerStyle = {
  marginTop: "8rem",
  position: "relative",
  height: "auto",
  marginBottom: "8rem",
};

const Cart = () => {
  const navigate = useNavigate();

  const itemsInCart = useSelector(selectCartItems);

  return (
    <div style={containerStyle}>
      {itemsInCart.map((item) => (
        <div key={item.id} style={checkoutItemStyle}>
          <p>
            {item.title.length > 20
              ? item.title.substring(0, 20) + "..."
              : item.title}
          </p>
          <div>
            <p>
              ${item.price} X {item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div style={checkoutItemStyle}>
        <p>Total</p>
        <p>
          $
          {itemsInCart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}
        </p>
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
        style={returnButtonStyle}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default Cart;
