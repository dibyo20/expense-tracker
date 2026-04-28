import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import ExpenseList from "../components/ExpenseList";
import "../styles/DashBoard.scss";
import DashboardHeader from "../components/DashboardHeader";
import SummaryCards from "../components/SummaryCards";
import TransactionControls from "../components/TransactionControls";

const DashBoard = () => {
  const { expenses } = useContext(ExpenseDataContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch =
      search === "" ||
      expense.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || expense.category === selectedCategory;
    console.log(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>

      <div className="dashboard">
        <div className="dashboard-header">
          <DashboardHeader />
          <SummaryCards />
        </div>

        <div className="transactions">
          <div className="expense-list-container">
            <TransactionControls
              search={search}
              setSearch={setSearch}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <ExpenseList expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
