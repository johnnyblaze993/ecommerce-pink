import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-5">
      <div>Logo</div>
      <div className="flex align-middle gap-4">
        <span>Login</span>
        <span>
          <Link to="/cart">Cart</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
