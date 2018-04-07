import React from 'react';

const TodaysBirthday = (props) => {

  const todaysBirthday = props.today.map((today, index) => {
    return (
      <div key={index}>{today.name} - {today.birthday} </div>
    )
  });

  return (
    <div>
    <h2>Todays Birthday</h2>
      <div className="birthday__today">
        {todaysBirthday}
      </div>
    </div>
  )

}

export default TodaysBirthday;