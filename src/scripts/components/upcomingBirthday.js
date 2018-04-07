import React from 'react';

const UpcomingBirthday = (props) => {

  const upcomingBirthdays = props.upcoming.map((birthday,index) => {
    return (
      <div key={index}>{birthday.name} - {birthday.birthday} </div>
    )
  });

  return (
    <div>
      <h2>Upcoming Birthdays</h2>
      <div className="birthday__upcoming">
        {upcomingBirthdays}
      </div>
    </div>
  )
}

export default UpcomingBirthday;