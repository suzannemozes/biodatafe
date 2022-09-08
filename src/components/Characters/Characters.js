import React, { useState, useEffect } from "react";

import Card from "../../UI/Card";
import CharactersFilter from "./CharactersFilter";
import CharactersList from "./CharactersList"
import "./Characters.css";

const Characters = (props) => {
  const [filteredYear, setFilteredYear] = useState("1828");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredCharacters = props.items.filter((character) => {
    return character.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="facts">
        <CharactersFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <CharactersList items={filteredCharacters} />
      </Card>
    </div>
  );
};

export default Characters;
