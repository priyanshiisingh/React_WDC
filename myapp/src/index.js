import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import Reducer from "./reducer/Reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const chores = [
  {
    id: 1,
    text: "Take medicine",
  },
  {
    id: 2,
    text: "sleep",
  },
  {
    id: 3,
    text: "play",
  },
];

const store = createStore(Reducer, chores, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
