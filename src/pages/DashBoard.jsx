import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import "../styles/DashBoard.scss";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <ExpenseForm />
      </div>

      <div className="dashboard-right">
        <h2>Transaction History</h2>
        <div className="expense-list-container">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
