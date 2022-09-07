import React from "react";

import "./FactsFilter.css";

const FactsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="facts-filter">
      <div className="facts-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1894">1894</option>
          <option value="1895">1895</option>
          <option value="1896">1896</option>
          <option value="1897">1897</option>
          <option value="1898">1898</option>
          <option value="1899">1899</option>
          <option value="1900">1900</option>
          <option value="1901">1901</option>
        </select>
      </div>
    </div>
  );
};

export default FactsFilter;
