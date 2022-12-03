import React from "react";
import { useNavigate } from "react-router-dom";

const button =
  "bg-slate-500 text-white text-xl font-bold p-2 rounded  transition duration-500 ease-in-out transform hover:scale-110 align-middle";

const homeStyle = "flex justify-center items-center text-5xl";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      className={homeStyle}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1540760938999-077b8231d890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60")`,

        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
        height: "85vh",
      }}
    >
      <button onClick={() => navigate("/products")} className={button}>
        Shop All Products
      </button>
    </div>
  );
};

export default HomeBanner;
