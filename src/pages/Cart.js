import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/items/cart/cartSlice";
import { Divider } from "@mui/material";

//styles

const returnButtonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  position: "absolute",
  top: "2rem",
  left: "2rem",
};

const mainContainerStyle = {
  display: "grid",
  placeItems: "center",
  height: "auto",
  backgroundColor: "#FF24E9",
  position: "relative",
  padding: "3rem",
};

const mainCardStyle = {
  borderRadius: "1rem",
  backgroundColor: "white",
  width: "60%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
};
const imgStyle = {
  width: "100px",
  height: "100px",
  objectFit: "contain",
  border: "1px solid black",
  padding: ".7rem",
  borderRadius: "1rem",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
};

const itemQtyStyle = {
  position: "absolute",
  top: "-.5rem",
  right: "-.5rem",
  backgroundColor: "hotPink",
  color: "black",
  borderRadius: "50%",
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "600",
};

const itemDetailsStyle = {
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "black",
  width: "75%",
  textAlign: "left",
};

const secondRowStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "2rem 0",
};

const placeOrderButtonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  top: "2rem",
  left: "1rem",
  width: "95%",
  margin: "auto",
  marginTop: "4rem",
};

const secondRowFlexStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
  padding: "1rem 2rem",
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "black",
};

//helper functions
const subTotal = (itemsInCart) => {
  itemsInCart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const Cart = () => {
  const navigate = useNavigate();

  const itemsInCart = useSelector(selectCartItems);

  return (
    <div style={mainContainerStyle}>
      <div style={mainCardStyle}>
        <div style={{ marginBottom: "2rem" }}>
          {itemsInCart.map((item) => (
            <div
              key={item.id}
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: ".5rem 2rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img src={item.image} alt={item.title} style={imgStyle} />
                  <div style={itemQtyStyle}>{item.quantity}</div>
                </div>
                <h1 style={itemDetailsStyle}>
                  {item.title.substring(0, 35) + "..."} <br />
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    3-day Shipping
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "black",
                    justifySelf: "Right",
                  }}
                >
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Divider
          sx={{
            width: "90%",
            margin: "auto",
          }}
        />
        <div style={secondRowStyle}>
          <div style={secondRowFlexStyle}>
            <div
              style={{
                fontSize: "1.5rem",
                color: "grey",
              }}
            >
              SubTotal
            </div>
            <div>
              $
              {itemsInCart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              padding: "1rem 2rem",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "black",
            }}
          >
            <div
              style={{
                //smqller font and make light grey
                fontSize: "1.5rem",
                color: "grey",
              }}
            >
              Shipping
            </div>
            <div>$3.99</div>
          </div>
        </div>
        <Divider
          sx={{
            width: "90%",
            margin: "auto",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "black",
                padding: "0 2rem",
                marginTop: "2rem",
              }}
            >
              <div>Total</div>
              <div>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "grey",
                  }}
                >
                  USD
                </span>{" "}
                $
                {(
                  itemsInCart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) *
                    1.1 +
                  3.99
                ).toFixed(2)}
              </div>
            </div>
            <button
              style={placeOrderButtonStyle}
              onClick={() => {
                navigate("/order-placed");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
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
