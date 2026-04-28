import { Search, Filter } from "lucide-react";
import "../styles/TransactionControls.scss";

const TransactionControls = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="transaction-controls">
      {/* SEARCH */}
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FILTER */}
      <div className="filter-box">
        <Filter size={18} />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="salary">Salary</option>
          <option value="food">Food & Dining</option>
          <option value="freelance">Freelance</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionControls;
