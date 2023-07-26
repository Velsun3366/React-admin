import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
// import "./assets/theme/global.scss";
import "@/assets/theme/global.scss";
import App from "./App";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
