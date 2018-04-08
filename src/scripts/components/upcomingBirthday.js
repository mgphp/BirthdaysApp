import React from 'react';
import { parseDateStr, getAgefromDate } from '../utils/dates';

const UpcomingBirthday = (props) => {

  const upcomingBirthdays = props.upcoming.map((birthday,index) => {
    return (
      <div className="upcoming__item" key={index}>
        <div className="upcoming__name">{birthday.name}</div>
        <span>Who will turn {getAgefromDate(birthday.birthday)} on the {parseDateStr(birthday.birthday)}</span>
      </div>
    )
  });

  return (
    <div className="box__white">
      <div className="box__title">Upcoming Birthdays (Next 2 weeks)</div>
      <div className="upcoming__birthday">
        {props.upcoming.length === 0 ? 'No upcoming birthdays' : ''}
        {upcomingBirthdays}
      </div>
    </div>
  )
}

export default UpcomingBirthday;