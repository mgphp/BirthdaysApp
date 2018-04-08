import React from 'react';
import { getAgefromDate } from '../utils/dates';

const TodaysBirthday = (props) => {

  const todaysBirthday = props.today.map((today, index) => {
    return (
      <div key={index}>{today.name} - <srong>{getAgefromDate(today.birthday)} today</srong></div>
    )
  });

  return (
    <div className="white-box">
      <div className="box-title">Todays Birthday</div>
        <div className="birthday__today">
          {todaysBirthday}
        </div>
    </div>
  )

}

export default TodaysBirthday;


