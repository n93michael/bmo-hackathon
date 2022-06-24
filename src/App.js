import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Language from "./pages/Language/Language";
import Screener from "./pages/Screener/Screener";
import LearnMore from "./pages/LearnMore/LearnMore";
import Products from "./pages/Products/Products";
import Tfsa from "./pages/Tfsa/Tfsa";
import Account from "./pages/Account/Account";
import Status from "./pages/Status/Status";
import Investing from "./pages/Investing/Investing";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/language" component={Language} />
        <Route path="/status" component={Status} />
        <Route path="/screener" component={Screener} />
        <Route path="/learnmore" component={LearnMore} />
        <Route path="/investing" component={Investing} />
        <Route path="/products" component={Products} />
        <Route path="/tfsa" component={Tfsa} />
        <Route path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
