import React from "react";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          backgroundColor: "hotPink",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "10vh",
          fontSize: "3rem",
          //make as bold as possible
          fontWeight: "900",
        }}
      >
        <motion.button
          onClick={() => {
            navigate("/category/electronics");
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          Electronics
        </motion.button>
        <motion.button
          onClick={() => {
            navigate("/category/men's clothing");
          }}
        >
          Men's
        </motion.button>
        <button
          onClick={() => {
            navigate("/category/women's clothing");
          }}
        >
          Women's
        </button>
        <motion.button
          onClick={() => {
            navigate("/category/jewelery");
          }}
        >
          Jewelery
        </motion.button>
      </div>
      <HomeBanner />
    </div>
  );
};

export default Home;
