import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Logo
      </Link>
      <div className="links">
        <Link className="header-link" to="/shop">
          SHOP
        </Link>
        <Link className="header-link" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <button
            className="header-link button-link"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </button>
        ) : (
          <Link className="header-link" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
