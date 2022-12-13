import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "./pages/welcome/welcome";
import Nav from "./components/Nav";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "react-daisyui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Theme dataTheme="cupcake">
      <Welcome />
    </Theme>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
