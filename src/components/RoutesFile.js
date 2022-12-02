import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import Products from "./Products";
import Home from "./Home";
import Header from "./Header";
import Cart from "./Cart";
import Category from "./Category";

const RoutesFile = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default RoutesFile;
