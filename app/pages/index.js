import React from "react";
import "./index.module.css"
import App from "./_app";
import { BrowserRouter } from "react-router-dom";

function IndexPage() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default IndexPage;


