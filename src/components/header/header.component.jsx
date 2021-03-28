import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Logo
      </Link>
      <div className="links">
        <Link className="header-link" to="/shop">
          Shop
        </Link>
        <Link className="header-link" to="/sign-in">
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;
