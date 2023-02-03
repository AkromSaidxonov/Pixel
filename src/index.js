import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { store } from "./common/store/store";
import "./assets/sass/main.scss";
import "react-toastify/dist/ReactToastify.css";

import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
