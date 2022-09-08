import React from 'react';

import './CharacterDate.css';

const CharacterDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='fact-date'>
      <div className='fact-date__month'>{month}</div>
      <div className='fact-date__year'>{year}</div>
      <div className='fact-date__day'>{day}</div>
    </div>
  );
};

export default CharacterDate;