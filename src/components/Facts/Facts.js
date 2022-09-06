import React, { useState } from 'react';

import FactItem from './FactItem';
import Card from '../UI/Card';
import FactsFilter from './FactsFilter';
import './Facts.css';

const Facts = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredFacts = props.items.filter(fact => {
    return fact.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='facts'>
        <FactsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredFacts.map((fact) => (
          <FactItem
            key={fact.id}
            title={fact.title}
            amount={fact.amount}
            date={fact.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Facts;