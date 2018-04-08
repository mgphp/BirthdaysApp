import React from 'react';

const Suggestions = (props) => {
  const options = props.results.map((name,index) => (
    <li key={index}>
      {name.name} - {name.birthday}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;