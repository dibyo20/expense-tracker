import { useEffect, useState, createContext } from "react";
import api from "../services/api.js";

export const ExpenseDataContext = createContext();

const ExpenseContext = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // To get all expenses
  const fetchExpenses = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await api.get("/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch expenses");
    } finally {
      setLoading(false);
    }
  };

  // After every change in expenses, this function will be called
  useEffect(() => {
    fetchExpenses();
  }, []);

  // To add expense
  const addExpense = async (expense) => {
    setError("");

    try {
      const res = await api.post("/expenses", expense);
      setExpenses((prev) => [...prev, res.data]);
      return res.data;
    } catch (error) {
      console.error(error);
      setError("Failed to add expense");
    }
  };

  // To delete expense
  const deleteExpense = async (id) => {
    setError("");

    try {
      await api.delete(`/expenses/${id}`);
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      console.error(error);
      setError("Failed to delete expense");
    }
  };

  // To edit expense
  const editExpense = async (id, expense) => {
    setError("");

    try {
      const res = await api.patch(`/expenses/${id}`, expense);
      setExpenses((prev) => prev.map((e) => (e.id === id ? res.data : e)));
      return res.data;
    } catch (error) {
      console.error(error);
      setError("Failed to edit expense");
    }
  };

  // To refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ExpenseDataContext.Provider
      value={{
        expenses,
        loading,
        error,
        addExpense,
        deleteExpense,
        editExpense,
        handleRefresh,
      }}
    >
      {children}
    </ExpenseDataContext.Provider>
  );
};

export default ExpenseContext;
