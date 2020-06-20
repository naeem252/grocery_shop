import React from "react";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductsShowcase from "./containers/ProductsShowcase/ProductsShowcase";
import CartProducts from "./containers/CartProducts/CartProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/cart" component={CartProducts} />
            <Route path="/" component={ProductsShowcase} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
