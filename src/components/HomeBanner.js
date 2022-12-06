import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import { motion } from "framer-motion";

const buttonStyle = {
  backgroundColor: "black",
  padding: "3rem",
  borderRadius: "10px",
  fontSize: "8.5rem",
  fontWeight: "bold",
  color: "white",
  border: "1.5px solid white",
};

const bannerStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  height: "74vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div style={bannerStyle}>
      <motion.button
        onClick={() => navigate("/products")}
        style={buttonStyle}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 10,
        }}
        initial={{
          scale: 1,
          boxShadow: "none",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px 8px #FF24E9",
          y: [0, 2, -2, 2, -2, 2, -2, 0],
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragElastic={0.5}
        dragMomentum={false}
      >
        Shop All Products
      </motion.button>
    </div>
  );
};

export default HomeBanner;
