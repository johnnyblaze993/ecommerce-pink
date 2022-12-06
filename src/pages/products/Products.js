import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectItemsStatus,
  selectItemsError,
  fetchItems,
} from "../../features/items/itemSlice";

import { motion } from "framer-motion";

//import cartSlice functions
import {
  addItem,
  removeItem,
  selectCartItems,
  increaseQty,
  decreaseQty,
} from "../../features/items/cart/cartSlice";

//icons
import { ArrowBack, ArrowForward, Delete, Sync } from "@mui/icons-material";

import { useEffect } from "react";

//styles
import {
  gridformatStyle,
  cardformatStyle,
  buttonStyle,
  titleStyle,
  imgStyle,
  imgBandStyle,
  itemQtyStyle,
  btnContainerStyle,
  moreInfoStyle,
  addToCartStyle,
} from "./products.styles";

//helper functions
const cardQuantityBox = (item, itemsInCart, dispatch) => {
  return (
    <motion.div
      style={itemQtyStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <div onClick={() => dispatch(increaseQty(item))}>
          <ArrowBack />
        </div>
        <p>
          {itemsInCart.find((cartItem) => cartItem.id === item.id)
            ? itemsInCart.find((cartItem) => cartItem.id === item.id).quantity
            : 0}
        </p>

        <div onClick={() => dispatch(decreaseQty(item))}>
          <ArrowForward />
        </div>
      </div>
      <Delete onClick={() => dispatch(removeItem(item))} />
    </motion.div>
  );
};

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

  const itemsInCart = useSelector(selectCartItems);
  console.log(itemsInCart);

  return (
    <div style={{ height: "auto", width: "100vw" }}>
      <h2 style={titleStyle}>Products</h2>
      {itemsStatus === "loading" && (
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            fontSize: "8rem",
            color: "hotpink",
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          exit={{ rotate: 0 }}
        >
          <Sync />
        </motion.div>
      )}
      {itemsStatus === "succeeded" && (
        <ul style={gridformatStyle}>
          {items
            .filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.id === item.id)
            )
            .map((item) => (
              <li key={item.id} style={cardformatStyle}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <img src={item.image} alt={item.title} style={imgStyle} />
                  <div style={imgBandStyle}>
                    <div>
                      {item.title.length > 20
                        ? item.title.substring(0, 20) + "..."
                        : item.title}
                    </div>
                    <div>${item.price}</div>
                  </div>
                </div>

                <div>
                  {itemsInCart.find((cartItem) => cartItem.id === item.id) &&
                    cardQuantityBox(item, itemsInCart, dispatch)}
                </div>
                <div style={btnContainerStyle}>
                  <button
                    onClick={() => navigate(`/products/${item.id}`)}
                    style={moreInfoStyle}
                  >
                    More Info
                  </button>
                  <button
                    style={addToCartStyle}
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
      {itemsStatus === "failed" && <div>{itemsError}</div>}
      <button onClick={() => navigate("/")} style={buttonStyle}>
        Back to home
      </button>
    </div>
  );
};

export default Products;
