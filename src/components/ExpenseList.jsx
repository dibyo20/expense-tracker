import React, { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import "../styles/ExpenseList.scss";

const ExpenseList = () => {
  const { expenses, loading, error, deleteExpense } =
    useContext(ExpenseDataContext);

  return (
    <div className="expense-list">
      {loading ? (
        <p className="status">Loading expenses...</p>
      ) : error ? (
        <p className="status error">{error}</p>
      ) : expenses.length === 0 ? (
        <p className="status">No Expenses yet</p>
      ) : (
        <div className="expense-grid">
          {expenses.map((expense) => (
            <div className="expense-card" key={expense.id}>
              <div className="card-top">
                <h3>{expense.title}</h3>
                <span className="amount">₹{expense.amount}</span>
              </div>

              <div className="card-middle">
                <span className="category">{expense.category}</span>
                <span className="date">{expense.date}</span>
              </div>

              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={() => console.log("Edit", expense)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteExpense(expense.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
