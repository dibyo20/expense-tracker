import React, { useContext, useState } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import "../styles/ExpenseForm.scss";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseDataContext);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    try {
      await addExpense({
        ...formData,
        amount: Number(formData.amount),
      });

      setFormData({
        title: "",
        amount: "",
        category: "",
        date: "",
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group amount">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Transport">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
