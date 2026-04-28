import { Search, Filter } from "lucide-react";
import "../styles/TransactionControls.scss";

const TransactionControls = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="transaction-controls">
      {/* Search */}
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* Filter */}
      <div className="filter-box">
        <Filter size={18} />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionControls;
