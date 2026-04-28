import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ExpenseDataContext } from "../context/ExpenseContext";
import ExpenseForm from "../components/ExpenseForm";

const ExpenseFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expenses, loading } = useContext(ExpenseDataContext);

  const existingExpense = expenses.find((exp) => exp.id === id);

  if (id && loading) return <p>Loading...</p>;

  if (id && !loading && !existingExpense) {
    return <p>Expense not found</p>;
  }

  return (
      <ExpenseForm
        initialData={existingExpense} 
        isEdit={!!id} 
        onCancel={() => navigate("/")} 
      />
  );
};

export default ExpenseFormPage;
