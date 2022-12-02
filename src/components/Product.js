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

  const cardformat = "p-4 border-2 border-gray-300 rounded-md";

  return (
    <div>
      <h1>Single Product Page</h1>
      {itemsStatus === "loading" && <div>Loading...</div>}
      {itemsStatus === "succeeded" && (
        <div className={cardformat}>
          <h2>{items[id - 1].title}</h2>
          <p>{items[id - 1].description}</p>
          <p>{items[id - 1].price}</p>
          <img
            src={items[id - 1].image}
            alt={items[id - 1].title}
            className=" w-1/2 h-1/2 mx-auto"
          />
          <p> {items[id - 1].category}</p> <br />
          <button>Add to Cart</button>
        </div>
      )}
      {itemsStatus === "failed" && <div>{itemsError}</div>}
      <button onClick={() => navigate("/products")}>Back to Products</button>

      <br />
      <button onClick={() => navigate("/")}> Home</button>
    </div>
  );
};

export default Product;
