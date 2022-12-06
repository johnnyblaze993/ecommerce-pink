import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Footer from "./components/Footer";

const RoutesFile = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesFile;
