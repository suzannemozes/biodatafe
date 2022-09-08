import FactDetail from "./FactDetail";
import { useState } from "react"

import NewFact from "../components/NewFact/NewFact";
import Facts from "../components/Facts/Facts";
import React from "react";

const FactsPage = () => {
  const [facts, setFacts] = useState([]);

  const addFactHandler = (fact) => {
    setFacts((prevFacts) => {
      return [fact, ...prevFacts];
    });
  };


  return (
    <div>
      <h1>The Facts Page</h1>
      <NewFact onAddFact={addFactHandler} />
      <Facts items={facts} />
    </div>
  )
}

export default FactsPage;