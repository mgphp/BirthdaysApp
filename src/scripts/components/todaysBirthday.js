import React from 'react';
import { getAgefromDate } from '../utils/dates';

const TodaysBirthday = (props) => {

  const todaysBirthday = props.today.map((today, index) => {

    return (
        <div key={index}>{today.name} - <srong>{getAgefromDate(today.birthday)} today</srong></div>
    )
  });

  return (
    <div className="box__white">
      <div className="box__title">Todays Birthday</div>
        <div className="birthday__today">
          {props.today.length === 0 ? 'No Birthdays today' : ''}
          {todaysBirthday}
        </div>
    </div>
  )

}

export default TodaysBirthday;


