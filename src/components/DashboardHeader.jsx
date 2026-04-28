import "../styles/DashboardHeader.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";

const DashboardHeader = ({ onRefresh }) => {
  const { handleRefresh, loading } = useContext(ExpenseDataContext);
  const navigate = useNavigate();
  return (
    <div className="header-dashboard">
      <div className="das-div">
        <h2>Dashboard</h2>

        <div className="actions">
          <button className="refresh-btn" onClick={handleRefresh}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
          <button onClick={() => navigate("/add-expense")} className="add-btn">
            + Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
