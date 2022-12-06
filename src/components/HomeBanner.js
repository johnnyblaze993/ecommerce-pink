import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import { motion } from "framer-motion";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,

        backgroundSize: "cover",
        height: "74vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.button
        onClick={() => navigate("/products")}
        style={{
          backgroundColor: "black",
          padding: "3rem",
          borderRadius: "10px",
          fontSize: "8.5rem",
          fontWeight: "bold",
          color: "white",
          border: "1.5px solid white",
        }}
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px 8px #FF24E9",
        }}
      >
        Shop All Products
      </motion.button>
    </div>
  );
};

export default HomeBanner;
