import React from "react";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  const navigate = useNavigate();

  const textHover =
    "hover:text-slate-300 transition duration-500 ease-in-out transform hover:scale-110";

  return (
    <div>
      <div
        className="flex justify-evenly p-4 
      bg-slate-600 text-white text-xl font-bold overflow-y-auto
      "
      >
        <button
          onClick={() => {
            navigate("/category/electronics");
          }}
          className={textHover}
        >
          Electronics
        </button>
        <button
          onClick={() => {
            navigate("/category/men's clothing");
          }}
          className={textHover}
        >
          Men's
        </button>
        <button
          onClick={() => {
            navigate("/category/women's clothing");
          }}
          className={textHover}
        >
          Women's
        </button>
        <button
          onClick={() => {
            navigate("/category/jewelery");
          }}
          className={textHover}
        >
          Jewelery
        </button>
      </div>
      <HomeBanner />
    </div>
  );
};

export default Home;
