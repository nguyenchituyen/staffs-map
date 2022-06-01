import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";

window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("root"));
});

export {};
