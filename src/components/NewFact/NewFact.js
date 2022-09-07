import React, { useState } from "react";

import FactForm from './FactForm';
import './NewFact.css';

const NewFact = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveFactDataHandler = (enteredFactData) => {
    const factData = {
      ...enteredFactData,
      id: Math.random().toString()
    };
    props.onAddFact(factData);//lifting state up to App.js
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-fact'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Fact</button>
      )}
      {isEditing && (
      <FactForm 
      onSaveFactData={saveFactDataHandler}
      onCancel={stopEditingHandler} />)}
    </div>
  );
};

export default NewFact;