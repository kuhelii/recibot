import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./styles/index.scss";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/* Wrap App with BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
