import React from "react";
import ReactDOM from "react-dom";
import "index";
import App from "components/App";
 
// importing css stylesheet to use the bootstrap class
// add this line only in this file
import "bootstrap/dist/css/bootstrap.min.css";
 
 // Use this after the variable declaration
ReactDOM.render(
    <App />,
  document.getElementById("root")
);
