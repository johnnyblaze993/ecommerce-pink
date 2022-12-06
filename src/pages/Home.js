import React from "react";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import { motion } from "framer-motion";

//styles
const containerStyle = {
  backgroundColor: "hotPink",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "10vh",
  fontSize: "3rem",
  fontWeight: "900",
};

const hoverStyle = {
  scale: 1.1,
  x: [0, 1, -1, 1, -1, 1, -1, 0],
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={containerStyle}>
        <motion.button
          onClick={() => {
            navigate("/category/electronics");
          }}
          whileHover={hoverStyle}
        >
          Electronics
        </motion.button>
        <motion.button
          onClick={() => {
            navigate("/category/men's clothing");
          }}
          whileHover={hoverStyle}
        >
          Men's
        </motion.button>
        <motion.button
          onClick={() => {
            navigate("/category/women's clothing");
          }}
          whileHover={hoverStyle}
        >
          Women's
        </motion.button>
        <motion.button
          onClick={() => {
            navigate("/category/jewelery");
          }}
          whileHover={hoverStyle}
        >
          Jewelery
        </motion.button>
      </div>
      <HomeBanner />
    </motion.div>
  );
};

export default Home;
