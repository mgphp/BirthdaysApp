import React from 'react';
import { parseDateStr, getAgefromDate } from '../utils/dates';

const UpcomingBirthday = (props) => {

  const upcomingBirthdays = props.upcoming.map((birthday,index) => {
    return (
      <div className="upcoming__item">
        <div className="upcoming__name" key={index}>{birthday.name}</div>
        <span>Who will Turn {getAgefromDate(birthday.birthday)} on the {parseDateStr(birthday.birthday)}</span>
      </div>
    )
  });

  return (
    <div className="white-box">
      <div className="box-title">Upcoming Birthdays (Next 2 weeks)</div>
      <div className="upcoming__birthday">
        {upcomingBirthdays}
      </div>
    </div>
  )
}

export default UpcomingBirthday;