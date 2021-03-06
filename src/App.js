import "./styles.css";
import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromStanpshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      this.unsubscribeFromStanpshot = userRef.onSnapshot((snapshot) => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromStanpshot();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser
  });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
