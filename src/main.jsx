import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ExpenseContext from "./context/ExpenseContext.jsx";
import "./styles/_variables.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ExpenseContext>
      <App />
    </ExpenseContext>
  </BrowserRouter>,
);
