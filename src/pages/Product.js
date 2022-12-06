import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectItemsStatus,
  selectItemsError,
  fetchItems,
} from "../features/items/itemSlice";

import {
  addItem,
  removeItem,
  clearCart,
  selectCartItems,
  increaseQty,
  decreaseQty,
} from "../features/items/cart/cartSlice";

//import background image from assets folder in src
import background from "../assets/background.png";

import { useEffect } from "react";
import { ArrowBack, ArrowForward, Delete } from "@mui/icons-material";

const mainContainerStyle = {
  height: "75vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  //darken background image
  backgroundColor: "rgba(0,0,0,0.4)",
  backgroundBlendMode: "darken",
};

const productContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "60vh",
  width: "50%",
  alignItems: "center",
  border: "1px solid black",
  borderRadius: "10px",
  backgroundColor: "hotPink",

  paddingBottom: "1rem",
};

const backToProductsStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  position: "absolute",
  top: "6rem",
  left: "1rem",
  width: "15rem",
};

const backToHomeStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  position: "absolute",
  top: "6rem",
  left: "18rem",
  width: "15rem",
};

const titleStyle = {};

const imgStyle = {
  height: "400px",
  width: "100%",
  objectFit: "cover",
  objectPosition: "top",
  marginBottom: "1rem",
  //border radios the top corners
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

const descriptionStyle = {
  width: "100%",
  height: "auto",
  padding: "1rem",
  fontSize: "1.3rem",
  border: "none",
};

const addToCartStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
};

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

  return (
    <>
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
            {/* {items.find((cartItem) => cartItem.id === items[id - 1]) && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  width: "100%",
                  //padding on left and right
                  padding: "1rem",
                  marginBottom: "1rem",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <div
                    onClick={() =>
                      dispatch(
                        //dispatch the increaseQty function
                        increaseQty(items[id - 1])
                      )
                    }
                  >
                    <ArrowBack />
                  </div>
                  <p>
                    {
                      //useselector to get the item.quantity from the cart
                      items.find((cartItem) => cartItem.id === items[id - 1])
                        ? items.find(
                            (cartItem) => cartItem.id === items[id - 1]
                          ).quantity
                        : 0
                    }
                  </p>

                  <div
                    onClick={() =>
                      dispatch(
                        decreaseQty(
                          //dispatch the decreaseQty function
                          items.find(
                            (cartItem) => cartItem.id === items[id - 1]
                          )
                        )
                      )
                    }
                  >
                    <ArrowForward />
                  </div>
                </div>
                <Delete
                  onClick={() =>
                    dispatch(
                      removeItem(
                        //dispatch the removeItem function
                        items.find((cartItem) => cartItem.id === items[id - 1])
                      )
                    )
                  }
                />
              </div>
            )} */}
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
    </>
  );
};

export default Product;
