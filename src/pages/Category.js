import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  selectItemsStatus,
  selectItemsError,
  fetchItems,
} from "../features/items/itemSlice";

//import cartSlice functions
import {
  addItem,
  removeItem,
  clearCart,
  selectCartItems,
  increaseQty,
  decreaseQty,
} from "../features/items/cart/cartSlice";

import { useEffect } from "react";
import {
  ArrowBack,
  ArrowDropDown,
  ArrowDropUp,
  ArrowForward,
  Delete,
} from "@mui/icons-material";

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

  const itemsInCart = useSelector(selectCartItems);
  console.log(itemsInCart);

  const gridformatStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gridGap: "1rem",
    listStyle: "none",
    padding: " 1rem",
  };
  const cardformatStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "35vh",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "hotPink",

    paddingBottom: "1rem",
    position: "relative",
  };

  const buttonStyle = {
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

  const titleStyle = {
    textAlign: "center",
    fontWeight: 900,
    height: "10vh",
    fontSize: "4rem",
    marginBottom: "2rem",
    textTransform: "Capitalize",
    backgroundColor: "hotPink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgStyle = {
    height: "250px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
    marginBottom: "1rem",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const imgBandStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "40%",
    position: "absolute",
    bottom: "1rem",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
  };

  const itemQtyStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    width: "100%",
    padding: "1rem",
    marginBottom: "1rem",
    gap: "1rem",
  };

  return (
    <div style={{ height: "88vh", width: "100vw" }}>
      <h2 style={titleStyle}>{category}</h2>

      {itemsStatus === "loading" && <div>Loading...</div>}
      {
        //on succeeded, filter the items by category and show onne time each

        itemsStatus === "succeeded" && (
          <ul style={gridformatStyle}>
            {items
              //filter by category and show only one time each
              .filter((item) => item.category === category)
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
                    <img src={item.image} alt={item.title} style={imgStyle} />{" "}
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
                    {itemsInCart.find(
                      (cartItem) => cartItem.id === item.id
                    ) && (
                      <div style={itemQtyStyle}>
                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                          }}
                        >
                          <div
                            onClick={() =>
                              dispatch(
                                //dispatch the increaseQty function
                                increaseQty(item)
                              )
                            }
                          >
                            <ArrowBack />
                          </div>
                          <p>
                            {
                              //useselector to get the item.quantity from the cart
                              itemsInCart.find(
                                (cartItem) => cartItem.id === item.id
                              )
                                ? itemsInCart.find(
                                    (cartItem) => cartItem.id === item.id
                                  ).quantity
                                : 0
                            }
                          </p>

                          <div onClick={() => dispatch(decreaseQty(item))}>
                            <ArrowForward />
                          </div>
                        </div>
                        <Delete onClick={() => dispatch(removeItem(item))} />
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <button
                      onClick={() => navigate(`/products/${item.id}`)}
                      style={{
                        color: "Black",
                        fontWeight: "bold",
                        fontSize: "2rem",

                        border: "none",
                      }}
                    >
                      More Info
                    </button>
                    <button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "1rem",
                        fontSize: "1.5rem",
                        border: "none",
                        borderRadius: "10px",
                      }}
                      onClick={() => dispatch(addItem(item))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            {
              //if the cart is not empty, show the clear cart button
              itemsInCart.length > 0 && (
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "1rem",
                    fontSize: "1.5rem",
                    border: "none",
                    position: "absolute",
                    top: "6rem",
                    right: "1rem",
                    width: "15rem",
                  }}
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              )
            }
          </ul>
        )
      }
      {itemsStatus === "failed" && <div>{itemsError}</div>}
      <button onClick={() => navigate("/")} style={buttonStyle}>
        Back to Home
      </button>
    </div>
  );
};

export default Category;
