import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import Cart from "./Pages/Cart/Cart";
import MyPage from "./Pages/MyPage/MyPage";
import Payment from "./Pages/Payment/Payment";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Main from "./Pages/Main/Main";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/MyPage" component={MyPage} />
        <Route exact path="/Payment" component={Payment} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
