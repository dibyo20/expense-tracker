import "../styles/SummaryCard.scss";

const SummaryCards = () => {
  return (
    <div className="summary-cards">
      <div className="card">
        <p>Total Balance</p>
        <h3>$5803.51</h3>
      </div>

      <div className="card">
        <p>Total Income</p>
        <h3>$6200.00</h3>
      </div>

      <div className="card">
        <p>Total Expenses</p>
        <h3 className="expense">$396.49</h3>
      </div>
    </div>
  );
};

export default SummaryCards;