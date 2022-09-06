import React from 'react';

import FactDate from './FactDate';
import Card from '../UI/Card';
import './FactItem.css';

const FactItem = (props) => {
  return (
    <Card className='fact-item'>
      <FactDate date={props.date} />
      <div className='fact-item__title'></div>
        <h2>{props.title}</h2>
        <div className='fact-item__amtdesc'>{props.description}</div>
      
    </Card>
  );
}

export default FactItem;