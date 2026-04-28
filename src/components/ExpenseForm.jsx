import React, { useContext, useState, useEffect } from "react";
import { ExpenseDataContext } from "../context/ExpenseContext";
import "../styles/ExpenseForm.scss";
import { useNavigate } from "react-router-dom";

const ExpenseForm = ({ initialData, onCancel, isEdit }) => {
  const { addExpense, editExpense } = useContext(ExpenseDataContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "expense",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        amount: initialData.amount || "",
        category: initialData.category || "",
        date: initialData.date || "",
        type: initialData.type || "expense",
      });
    }
  }, [initialData]);

  if (isEdit && !initialData) {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    try {
      const data = {
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date,
        type: formData.type,
      };

      if (isEdit) {
        await editExpense(initialData.id, data);
        alert("Updated successfully");
      } else {
        await addExpense(data);
        alert("Added successfully");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <form className="expense-form" onSubmit={handleSubmit}>
        <h2>{isEdit ? "Edit Transaction" : "Add Transaction"}</h2>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
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
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
          </select>
        </div>

        <div className="form-group">
          <label>Type</label>
          <div className="type-toggle">
            <label className="radio">
              <input
                type="radio"
                name="type"
                value="income"
                checked={formData.type === "income"}
                onChange={handleChange}
              />
              <span>Income</span>
            </label>

            <label className="radio">
              <input
                type="radio"
                name="type"
                value="expense"
                checked={formData.type === "expense"}
                onChange={handleChange}
              />
              <span>Expense</span>
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            {isEdit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
