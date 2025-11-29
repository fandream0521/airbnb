import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import classNames from 'classnames'
import filterData from "@/assets/data/filter_data.json"

const EntireFilter = memo(() => {
  const [filters, setFilters] =useState([]);

  function handleFilterClick(filter) {
    let newFilters = [...filters];
    if (filters.includes(filter)) {
      newFilters = newFilters.filter(item => item !== filter)
    } else {
      newFilters.push(filter);
    }
    setFilters(newFilters);
  }
  return (
    <EntireFilterWrapper>
      <ul className="list">
        {
          filterData.map(item => (
            <li key={item} className={classNames("item", {active: filters.includes(item)})} onClick={() => handleFilterClick(item)}>{item}</li>
          ))
        }
      </ul>
    </EntireFilterWrapper>
  )
})

export default EntireFilter