import React from "react";
import { useState } from "react"

import CharacterDetail from "./CharacterDetail";
import NewCharacter from "../components/NewCharacter/NewCharacter";
import Characters from "../components/Characters/Characters";


const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  const addCharacterHandler = (character) => {
    setCharacters((prevCharacters) => {
      return [character, ...prevCharacters];
    });
  };


  return (
    <div>
      <h1>The Characters Page</h1>
      <NewCharacter onAddCharacter={addCharacterHandler} />
      <Characters items={characters} />
    </div>
  )
}

export default CharactersPage;