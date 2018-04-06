import React from 'react';

const listBirthdayItem = ({birthday, onBirthdaySelect}) => {
  return (
    <li onClick={() => onBirthdaySelect(birthday)} className="birthdays__list">
      {/*<label><input type="checkbox" value="">{}</label>*/}
    </li>
  );
}

