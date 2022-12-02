import React from "react";
import ReactDOM from "react-dom/client";
import "index";
import App from "routes/App";

// importing css stylesheet to use the bootstrap class
// add this line only in this file
import "bootstrap/dist/css/bootstrap.min.css";

// Use this after the variable declaration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
