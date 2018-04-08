import React from 'react';
import { parseDateStr } from '../utils/dates';

const Suggestions = (props) => {
  const options = props.results.map((name,index) => (
    <li key={index}>
      {name.name} - {parseDateStr(name.birthday,true)}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;