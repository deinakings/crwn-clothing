import "./styles.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up-page.component";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Route exact={true} path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sign-in" component={SignInUpPage} />
    </div>
  );
}
