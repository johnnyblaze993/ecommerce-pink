import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page of website</h1>
      <div className="flex justify-evenly p-4">
        <button
          onClick={() => {
            navigate("/category/electronics");
          }}
        >
          Electronics
        </button>
        <button
          onClick={() => {
            navigate("/category/men's clothing");
          }}
        >
          Mens
        </button>
        <button
          onClick={() => {
            navigate("/category/women's clothing");
          }}
        >
          Womens
        </button>
        <button
          onClick={() => {
            navigate("/category/jewelery");
          }}
        >
          jewelery
        </button>
      </div>
      <button onClick={() => navigate("/products")}>Shop All Products</button>
    </div>
  );
};

export default Home;
