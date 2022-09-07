import React from "react";

import FactItem from "./FactItem";
import './FactsList.css'

const FactsList = props => {
  if (props.items.length === 0) {
    return <h2 className="facts-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="facts-list">
      {props.items.map((fact) => (
        <FactItem
          key={fact.id}
          title={fact.title}
          description={fact.description}
          date={fact.date}
        />
      ))}
    </ul>
  );
};

export default FactsList;