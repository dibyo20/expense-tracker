import Navbar from "../components/Navbar";
import ReportCards from "../components/ReportCards";
import ExpensePieChart from "../components/ExpensePieChart";
import CategoryBreakdown from "../components/CategoryBreakdown";
import "../styles/ReportPage.scss";

const Reports = () => {
  return (
    <>
      <div className="reports-page">
        <h2>Financial Reports</h2>

        <ReportCards />
        
        <div className="charts-section">
          <ExpensePieChart />
        </div>

        <CategoryBreakdown />
      </div>
    </>
  );
};

export default Reports;
