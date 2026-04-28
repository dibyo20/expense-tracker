import "../styles/DashboardHeader.scss";
import { useNavigate } from "react-router-dom";

const DashboardHeader = ({ onRefresh }) => {
  const navigate = useNavigate();
  return (
    <div className="header-dashboard">
      <div className="das-div">
        <h2>Dashboard</h2>

        <div className="actions">
          <button className="refresh-btn" onClick={onRefresh}>
            Refresh
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
