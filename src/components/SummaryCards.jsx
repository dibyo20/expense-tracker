import "../styles/SummaryCard.scss";
import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext.jsx";

const SummaryCards = () => {
  const { expenses } = useContext(ExpenseDataContext);

  const { income, expense } = expenses.reduce(
    (acc, item) => {
      const amount = Number(item.amount);

      if (item.type === "income") acc.income += amount;
      else acc.expense += amount;

      return acc;
    },
    { income: 0, expense: 0 }, // This line initializes the accumulator with an object that has income and expense properties set to 0. This ensures that we have a starting point for our calculations when we use the reduce method to iterate over the expenses array.
  );

  const totalBalance = income - expense;

  return (
    <div className="summary-cards">
      <div className="card">
        <p>Total Balance</p>
        <h3>₹{totalBalance.toFixed(2)}</h3>
      </div>

      <div className="card">
        <p>Total Income</p>
        <h3>₹{income.toFixed(2)}</h3>
      </div>

      <div className="card">
        <p>Total Expenses</p>
        <h3 className="expense">₹{expense.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default SummaryCards;
