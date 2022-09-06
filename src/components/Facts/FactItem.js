import React from 'react';

import FactDate from './FactDate';
import Card from '../UI/Card';
import './FactItem.css';

const FactItem = (props) => {
  return (
    <Card className='fact-item'>
      <FactDate date={props.date} />
      <div className='fact-item__description'>
        <h2>{props.title}</h2>
        <div className='fact-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default FactItem;