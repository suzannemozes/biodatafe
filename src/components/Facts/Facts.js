import React, { useState, useEffect } from "react";
// import { getFacts } from '../services/facts-api'

import Card from "../UI/Card";
import FactsFilter from "./FactsFilter";
import FactsList from "./FactsList"
import "./Facts.css";

const Facts = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredFacts = props.items.filter((fact) => {
    return fact.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="facts">
        <FactsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <FactsList items={filteredFacts} />
      </Card>
    </div>
  );
};

export default Facts;
