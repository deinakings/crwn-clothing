import "./styles.css";
import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        this.setState({ currentUser: userAuth });
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapshot) => {
        this.setState(
          {
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          },
          () => {
            console.log(this.state);
          }
        );
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInUpPage} />
      </div>
    );
  }
}
