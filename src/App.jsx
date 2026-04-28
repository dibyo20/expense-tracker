import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ExpenseFormPage from "./pages/ExpenseFormPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/add-expense" element={<ExpenseFormPage />} />
        <Route path="/edit-expense/:id" element={<ExpenseFormPage />} />
      </Routes>
    </div>
  );
};

export default App;
