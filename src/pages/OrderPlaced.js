import React from "react";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
        backgroundColor: "#FF24E9",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          height: "60%",
          width: "60%",
        }}
      >
        <img
          src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif"
          alt="verified"
        />
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "hotPink",
          }}
        >
          Your order has been placed!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "4rem",
            color: "rgba(0, 0, 0, 0.3)",
          }}
        >
          Thank you for your order. We will send you a confirmation email when
          your order has shipped.
        </p>{" "}
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            fontSize: "1.5rem",
            border: "none",
            width: "60%",
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
