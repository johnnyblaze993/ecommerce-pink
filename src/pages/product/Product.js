import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectItemsStatus,
  selectItemsError,
  fetchItems,
} from "../../features/items/itemSlice";

import { motion } from "framer-motion";

import { addItem } from "../../features/items/cart/cartSlice";

import { useEffect } from "react";

//styles
import {
  mainContainerStyle,
  productContainerStyle,
  backToProductsStyle,
  backToHomeStyle,
  imgStyle,
  descriptionStyle,
  addToCartStyle,
} from "./product.styles";

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

      //if there is an error, navigate to the home page
    } else if (itemsStatus === "failed") {
      navigate("/");
    }
  }, [itemsStatus, dispatch, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: 900,
          height: "10vh",
          fontSize: "4rem",
          width: "100%",
          textTransform: "Capitalize",
          backgroundColor: "hotPink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {items[id - 1].category}
      </h2>
      <div style={mainContainerStyle}>
        {itemsStatus === "loading" && <div>Loading...</div>}
        {itemsStatus === "succeeded" && (
          <div style={productContainerStyle}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
              }}
            >
              <img
                src={items[id - 1].image}
                alt={items[id - 1].title}
                style={imgStyle}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "0",
                  height: "30%",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  justifyContent: "space-around",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  padding: "1rem",
                }}
              >
                <div>{items[id - 1].title}</div>
                <div>${items[id - 1].price}</div>
              </div>
            </div>

            <p style={descriptionStyle}>{items[id - 1].description}</p>
            <button
              style={addToCartStyle}
              onClick={() => {
                dispatch(addItem(items[id - 1]));
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
        {itemsStatus === "failed" && <div>{itemsError}</div>}
        <button
          onClick={() => navigate("/products")}
          style={backToProductsStyle}
        >
          Back to Products
        </button>

        <br />
        <button onClick={() => navigate("/")} style={backToHomeStyle}>
          Back to Home
        </button>
      </div>
    </motion.div>
  );
};

export default Product;
