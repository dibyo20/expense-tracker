import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext.jsx";
import "../styles/CategoryBreakDown.scss";

const COLORS = {
  Food: "#00C49F",
  Shopping: "#FF4C4C",
  Bills: "#00BFFF",
  Transport: "#FFBB28",
  Entertainment: "#A78BFA",
};

const CategoryBreakdown = () => {
  const { expenses } = useContext(ExpenseDataContext);
  const categoryTotals = {};

  expenses.forEach((e) => {
    categoryTotals[e.category] =
      (categoryTotals[e.category] || 0) + Number(e.amount);
  });

  const total = Object.values(categoryTotals).reduce((a, b) => a + b, 0); // This line calculates the total amount of expenses by summing up all the values in the categoryTotals object. It uses Object.values to get an array of the values (which are the totals for each category) and then applies the reduce method to sum them up, starting with an initial value of 0.

  const sortedData = Object.entries(categoryTotals).sort(
    // This line sorts the category totals in descending order based on the total amount for each category. Object.entries converts the categoryTotals object into an array of [key, value] pairs, which can then be sorted using the sort method. The sorting function (a, b) => b[1] - a[1] compares the second element of each pair (the total amount) and sorts them in descending order.
    (a, b) => b[1] - a[1],
  );

  return (
    <div className="breakdown-card">
      <h3>Category Breakdown</h3>

      {sortedData.map(([category, value]) => {
        const percent = (value / total) * 100;

        return (
          <div key={category} className="bar-item">
            <div className="bar-top">
              <span>{category}</span>
              <span>${value.toFixed(2)}</span>
            </div>

            <div className="bar-bg">
              <div
                className="bar-fill"
                style={{
                  width: `${percent}%`,
                  backgroundColor: COLORS[category] || "#00ffb3",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBreakdown;
