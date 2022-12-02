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
const cardformat = "p-4 border-2 border-gray-300 rounded-md";

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

  return (
    <div>
      <h1>Products</h1>
      {itemsStatus === "loading" && <div>Loading...</div>}
      {itemsStatus === "succeeded" && (
        <ul className={gridformat}>
          {items.map((item) => (
            <li key={item.id} className={cardformat}>
              <button onClick={() => navigate(`/products/${item.id}`)}>
                {item.title}
              </button>
              <button>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
      {itemsStatus === "failed" && <div>{itemsError}</div>}

      <button onClick={() => navigate("/")}> Back to home </button>
    </div>
  );
};

export default Products;
