import React from "react";

import "./FactForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <buttom type="submit">Add Expense</buttom>
      </div>
    </form>
  );
};

export default ExpenseForm;