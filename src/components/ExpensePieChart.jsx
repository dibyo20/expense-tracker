import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import { Pie } from "react-chartjs-2";
import "../styles/ExpensePieChart.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = () => {
  const { expenses } = useContext(ExpenseDataContext);

  const categoryTotals = {};

  expenses.forEach((e) => {
    categoryTotals[e.category] =
      (categoryTotals[e.category] || 0) + Number(e.amount);
  });

  const labels = Object.keys(categoryTotals);
  const values = Object.values(categoryTotals);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#00C49F",
          "#00BFFF",
          "#FFBB28",
          "#FF4C4C",
          "#A78BFA",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e6f1ff",
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <h3>Expenses by Category</h3>

      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpensePieChart;
