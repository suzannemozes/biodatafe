import React from "react";

import CharacterDate from "./CharacterDate";
import Card from "../../UI/Card";
import "./CharacterItem.css";

const CharacterItem = (props) => {
  return (
    <li>
    <Card className="fact-item">
      <CharacterDate date={props.date} />
      <div className="fact-item__title"></div>
      <h2>{props.title}</h2>
      <div className="fact-item__amtdesc">{props.description}</div>
    </Card>
    </li>
  );
};

export default CharacterItem;
