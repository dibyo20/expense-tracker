import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
