import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "./redux/store";
import { app } from "./firebase";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store} app={app}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
