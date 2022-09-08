import React, { useState } from "react";

import "./CharacterForm.css";

const CharacterForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

  const characterData = {
    title: enteredTitle,
    description: enteredDescription,
    date: new Date(enteredDate),
    };
    
    props.onSaveCharacterData(characterData);
    setEnteredTitle('');
    setEnteredDescription('');
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
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-fact__control">
          <label>Date</label>
          <input
            type="date"
            min="1820-01-01"
            max="1899-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-fact__actions">
        <button type="submit">Add Character</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default CharacterForm;
