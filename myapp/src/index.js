import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import Reducer from "./reducer/Reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "IPHONE 12",
    description: "this is iphone 12",
  },
  {
    id: 2,
    name: "IPHONE 13",
    description: "this is sleep",
  },
  {
    id: 3,
    name: "IPHONE 11",
    description: "this is play",
  },
];

const store = createStore(Reducer, products, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
