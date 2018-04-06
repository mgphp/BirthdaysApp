import React from 'react';

const BirthdayList = (props) => {
  const birthdays = props.birthdays.map((birthday) => {
    return (
      <BirthdayList/>
    );
  })

  return (
    <ul className="birthdays__list">
      {birthdays}
    </ul>
  )
}

