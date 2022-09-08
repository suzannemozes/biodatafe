import React, { useState } from "react";

import CharacterForm from './CharacterForm';
import './NewCharacter.css';

const NewCharacter = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveCharacterDataHandler = (enteredCharacterData) => {
    const characterData = {
      ...enteredCharacterData,
      id: Math.random().toString()
    };
    props.onAddCharacter(characterData);//lifting state up to App.js
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
        <button onClick={startEditingHandler}>Add New Character</button>
      )}
      {isEditing && (
      <CharacterForm 
      onSaveFactData={saveCharacterDataHandler}
      onCancel={stopEditingHandler} />)}
    </div>
  );
};

export default NewCharacter;