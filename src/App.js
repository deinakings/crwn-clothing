import "./styles.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

export default function App() {
  return (
    <div>
      <Route exact={true} path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}
