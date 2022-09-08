import React from "react";

import CharacterItem from "./CharacterItem";
import './CharactersList.css'

const CharactersList = props => {
  if (props.items.length === 0) {
    return <h2 className="facts-list__fallback">No Characters Found for Selected Year </h2>
  }

  return (
    <ul className="facts-list">
      {props.items.map((character) => (
        <CharacterItem
          key={character.id}
          title={character.title}
          description={character.description}
          date={character.date}
        />
      ))}
    </ul>
  );
};

export default CharactersList;