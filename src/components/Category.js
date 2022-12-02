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

const Category = () => {
  const items = useSelector(selectAllItems);
  const itemsStatus = useSelector(selectItemsStatus);
  const itemsError = useSelector(selectItemsError);
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemsStatus, dispatch]);

  const gridformat =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  const cardformat = "p-4 border-2 border-gray-300 rounded-md";

  return (
    <div>
      <h2>{category}</h2>

      {itemsStatus === "loading" && <div>Loading...</div>}
      {
        //on succeeded, filter the items by category
        itemsStatus === "succeeded" && (
          <ul className={gridformat}>
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <li key={item.id} className={cardformat}>
                  <button onClick={() => navigate(`/products/${item.id}`)}>
                    {item.title}
                  </button>
                  <button>Add to Cart</button>
                </li>
              ))}
          </ul>
        )
      }
      {itemsStatus === "failed" && <div>{itemsError}</div>}
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Category;
