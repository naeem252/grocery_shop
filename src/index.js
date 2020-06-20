import React from "react";
import ReactDOM from "react-dom";
import "./grid.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import productReducer from "./store/reducers/productReducer";
import cartReducer from "./store/reducers/cartReducer";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combineStore = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
const store = createStore(
  combineStore,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
