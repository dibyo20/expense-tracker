import { useNavigate } from "react-router-dom";
import ExpenseList from "../components/ExpenseList";
import "../styles/DashBoard.scss";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import SummaryCards from "../components/SummaryCards";
import TransactionControls from "../components/TransactionControls";

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-header">
          <DashboardHeader />
          <SummaryCards />
        </div>

        <div className="transactions">
          <div className="expense-list-container">
            <TransactionControls />
            <ExpenseList />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
