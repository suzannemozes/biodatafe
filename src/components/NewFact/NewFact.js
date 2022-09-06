import React from 'react';

import FactForm from './FactForm';
import './NewFact.css';

const NewFact = (props) => {
  const saveFactDataHandler = (enteredFactData) => {
    const factData = {
      ...enteredFactData,
      id: Math.random().toString()
    };
    props.onAddFact(factData);
  };

  return (
    <div className='new-fact'>
      <FactForm onSaveFactData={saveFactDataHandler} />
    </div>
  );
};

export default NewFact;