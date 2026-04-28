import React, { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenses }) => {
  const { loading } = useContext(ExpenseDataContext);

  if (loading) return <p>Loading...</p>;

  if (expenses.length === 0) {
    return <p style={{ color: "var(--text-muted)" }}>No transactions yet</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
export default ExpenseList;
