import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectItemsStatus,
  selectItemsError,
  fetchItems,
} from "../features/items/itemSlice";

import { useEffect } from "react";

const gridformat =
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
const cardformat =
  "p-4 border-2 border-gray-300 rounded-md h-80 flex flex-col justify-between bg-slate-100 hover:bg-slate-200";

const Products = () => {
  const items = useSelector(selectAllItems);
  const itemsStatus = useSelector(selectItemsStatus);
  const itemsError = useSelector(selectItemsError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemsStatus, dispatch]);

  const button =
    "bg-slate-500 text-white text-xl font-bold p-2 rounded  transition duration-500 ease-in-out transform hover:scale-110 align-middle mt-10 absolute left-10 top-0 ";

  return (
    <div className="min-h-screen py-2 px-6 mb-32 relative">
      <h2 className="text-3xl font-bold text-center text-slate-500 my-8">
        Products
      </h2>
      {itemsStatus === "loading" && <div>Loading...</div>}
      {itemsStatus === "succeeded" && (
        <ul className={gridformat}>
          {items
            .filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.id === item.id)
            )
            .map((item) => (
              <li key={item.id} className={cardformat}>
                <p>
                  {item.title} - ${item.price}
                </p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-32 h-32 mx-auto
                  "
                />
                <button
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="
                  text-xl font-bold text-slate-500 
                   "
                >
                  More Info
                </button>
                <button
                  className="
                  bg-slate-500 text-white text-xl font-bold p-2 rounded   align-middle 
                  "
                >
                  Add to Cart
                </button>
              </li>
            ))}
        </ul>
      )}
      {itemsStatus === "failed" && <div>{itemsError}</div>}

      <button onClick={() => navigate("/")} className={button}>
        {" "}
        Back to home{" "}
      </button>
    </div>
  );
};

export default Products;