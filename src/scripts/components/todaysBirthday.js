import React from 'react';

const TodaysBirthday = ({today}) => {

  if(!today) {
    return <div className="birthday__none">No birthday today...</div>
  }

  return (
    <div className="birthday__today">
      {today}
    </div>
  )

}

export default TodaysBirthday;