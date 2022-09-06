import React, { useState } from 'react';

import NewFact from './components/NewFact/NewFact';
import Facts from "./components/Facts/Facts";

const DUMMY_FACTS = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [facts, setFacts] = useState(DUMMY_FACTS);

  const addFactHandler = (fact) => {
    setFacts((prevFacts) => {
      return [fact, ...prevFacts];
    });
  };

  return (
    <div>
      <NewFact onAddFact={addFactHandler} />
      <Facts items={facts} />
    </div>
  );
}

export default App;
