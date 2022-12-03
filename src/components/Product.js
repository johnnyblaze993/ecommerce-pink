import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectItemsStatus,
  selectItemsError,
  fetchItems,
} from "../features/items/itemSlice";

import { useEffect } from "react";

const Product = () => {
  const items = useSelector(selectAllItems);
  const itemsStatus = useSelector(selectItemsStatus);
  const itemsError = useSelector(selectItemsError);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemsStatus, dispatch]);

  const cardformat =
    "p-4 border-2 border-gray-300 rounded-md flex flex-col justify-between bg-slate-100 hover:bg-slate-200 hover:shadow-lg transition duration-300 ease-in-out h-4/6 w-4/6 mx-auto my-10";

  const button =
    "bg-slate-500 text-white text-xl font-bold p-2 rounded  transition duration-500 ease-in-out  align-middle mt-10 ";

  return (
    <div
      className="
    flex flex-col items-center h-screen mx-auto justify-center relative p-10 w-4/5 
    "
    >
      {itemsStatus === "loading" && <div>Loading...</div>}
      {itemsStatus === "succeeded" && (
        <div className={cardformat}>
          <h1
            className="
            text-3xl font-bold text-center text-slate-500 my-8
            "
          >
            {items[id - 1].title}
          </h1>

          <p>{items[id - 1].price}</p>
          <img
            src={items[id - 1].image}
            alt={items[id - 1].title}
            className=" w-1/2 h-1/2 mx-auto"
          />
          <p>{items[id - 1].description}</p>
          <button className={button}>Add to Cart</button>
        </div>
      )}
      {itemsStatus === "failed" && <div>{itemsError}</div>}
      <button onClick={() => navigate("/products")} className={button}>
        Back to Products
      </button>

      <br />
      <button
        onClick={() => navigate("/")}
        className="
      absolute top-10 left-0 bg-slate-500 text-white text-xl font-bold p-2 rounded  transition duration-500 ease-in-out  align-middle 
      "
      >
        {" "}
        Back to Home
      </button>
    </div>
  );
};

export default Product;
