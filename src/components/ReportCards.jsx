import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import "../styles/ReportCards.scss";

const ReportCards = () => {
  const { expenses } = useContext(ExpenseDataContext);

  const { income, expense } = expenses.reduce(
    (acc, item) => {
      const amount = Number(item.amount);

      if (item.type === "income") acc.income += amount;
      else acc.expense += amount;

      return acc;
    },
    { income: 0, expense: 0 },
  );

  const totalBalance = income - expense;

  const categoryTotals = {};
  expenses.forEach((e) => {
    categoryTotals[e.category] =
      (categoryTotals[e.category] || 0) + Number(e.amount);
  });

  const topCategory = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1],
  )[0];

  return (
    <div className="report-cards">
      <div className="card">
        <p>Net Balance</p>
        <h3>₹{totalBalance.toFixed(2)}</h3>
      </div>

      <div className="card">
        <p>Total Income</p>
        <h3>₹{income.toFixed(2)}</h3>
      </div>

      <div className="card">
        <p>Total Expenses</p>
        <h3>₹{expense.toFixed(2)}</h3>
      </div>

      <div className="card">
        <p>Top Category</p>
        <h3>{topCategory?.[0] || "N/A"}</h3>
      </div>
    </div>
  );
};

export default ReportCards;
