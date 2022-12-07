import { Whatshot } from "@mui/icons-material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";

//import cartSlice functions
import { selectCartItems } from "../features/items/cart/cartSlice";
import { Tooltip } from "@mui/material";

const logoStyle = {
  fontSize: "3rem",
  ml: "1rem",
};

const headerMainStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "black",
  height: "5rem",
  color: "white",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5rem",
  position: "relative",
};

const cartLengthStyle = {
  position: "relative",
  top: "-.3rem",
  right: "1.1rem",
  backgroundColor: "hotPink",
  color: "black",
  borderRadius: "50%",
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const rightNaveStyle = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={headerMainStyle}>
      {/* Left Nav */}
      <Tooltip title="Home" placement="right" arrow enterTouchDelay={1}>
        <motion.div
          whileHover={{ scale: 1.2, color: "#FF24E9", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Whatshot sx={logoStyle} />
        </motion.div>
      </Tooltip>
      {/* Right Nav */}
      <div style={rightNaveStyle}>
        <span style={linkStyle}>Login</span>
        <span>
          <NavLink to="/cart" style={linkStyle}>
            Cart
          </NavLink>
        </span>
        {/* CartNumber */}
        <div style={cartLengthStyle}>
          <span className="text-xl font-bold">
            {useSelector(selectCartItems).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
