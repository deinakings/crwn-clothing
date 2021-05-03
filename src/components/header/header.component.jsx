import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
