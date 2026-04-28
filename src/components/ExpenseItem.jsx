import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext.jsx";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import "../styles/ExpenseItem.scss";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseDataContext);
  const navigate = useNavigate();

  const isIncome = expense.type === "income";

  return (
    <div className="expense-item">
      <div className="left">
        <h4>{expense.title}</h4>
        <p>
          {expense.date} • <span>{expense.category}</span>
        </p>
      </div>

      <div className="right">
        <span className={isIncome ? "income" : "expense"}>
          {isIncome ? "+" : "-"}₹{Math.abs(expense.amount)}
        </span>

        <div className="actions">
          <button onClick={() => navigate(`/edit-expense/${expense.id}`)}>
            <Pencil size={16} />
          </button>

          <button className="delete" onClick={() => deleteExpense(expense.id)}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
