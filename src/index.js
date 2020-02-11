import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
