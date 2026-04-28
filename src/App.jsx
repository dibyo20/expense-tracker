import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ExpenseFormPage from "./pages/ExpenseFormPage";
import ReportsPage from "./pages/ReportsPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/add-expense" element={<ExpenseFormPage />} />
        <Route path="/edit-expense/:id" element={<ExpenseFormPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </div>
  );
};

export default App;
