import React from 'react';

import './FactsFilter.css';

const FactsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='facts-filter'>
      <div className='facts-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='1898'>1898</option>
          <option value='1899'>1899</option>
          <option value='1900'>1900</option>
          <option value='1901'>1901</option>
        </select>
      </div>
    </div>
  );
};

export default FactsFilter;