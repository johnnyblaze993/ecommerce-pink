import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default RoutesFile;
