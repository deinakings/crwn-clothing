import "./styles.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

export default function App() {
  return <Route exact={true} path="/" component={Homepage} />;
}
