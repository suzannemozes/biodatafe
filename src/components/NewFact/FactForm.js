import React, { useState } from "react";

import "./FactForm.css";

const FactForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

  const factData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
    };
    
    props.onSaveFactData(factData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-fact__controls">
        <div className="new-fact__control">
          <label>Title</label>
          <input 
          type="text" 
          value={enteredTitle}
          onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-fact__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-fact__control">
          <label>Date</label>
          <input
            type="date"
            min="1700-01-01"
            max="1950-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-fact__actions">
        <button type="submit">Add fact</button>
      </div>
    </form>
  );
};

export default FactForm;
