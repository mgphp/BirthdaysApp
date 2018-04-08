import React from 'react';
import { parseDateStr } from '../utils/dates';

const Suggestions = (props) => {
  const options = props.results.map((name,index) => (
    <li key={index}>
      <div className="search-name">{name.name}</div>
      <span>{parseDateStr(name.birthday)}</span>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;