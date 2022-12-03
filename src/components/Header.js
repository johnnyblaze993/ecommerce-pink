import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-5 h-20 bg-slate-700 text-white sticky">
      <div className="ml-5">Logo</div>
      <div className="flex align-middle gap-4 mr-5">
        <span
          className="
            text-xl font-bold 
        "
        >
          Login
        </span>
        <span>
          <NavLink to="/cart" className="text-xl font-bold">
            Cart
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Header;
