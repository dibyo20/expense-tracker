import ReportCards from "../components/ReportCards.jsx";
import ExpensePieChart from "../components/ExpensePieChart.jsx";
import CategoryBreakDown from "../components/CategoryBreakDown.jsx";
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

        <CategoryBreakDown />
      </div>
    </>
  );
};

export default Reports;
