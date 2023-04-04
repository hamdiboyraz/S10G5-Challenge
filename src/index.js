import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </>
    </BrowserRouter>
  </Provider>
);
