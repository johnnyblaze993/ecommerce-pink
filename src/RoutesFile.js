import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Category from "./pages/category/Category";
import Footer from "./components/Footer";
import OrderPlaced from "./pages/OrderPlaced";
import { AnimatePresence } from "framer-motion";

const RoutesFile = () => {
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/order-placed" element={<OrderPlaced />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default RoutesFile;
