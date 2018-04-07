import React from 'react';
import BirthdayListItem from './listBirthdayItem'

class BirthdayList extends React.Component {

  render () {
    const birthdays = this.props.birthdays.map((birthday, index) => {
      return (
        <BirthdayListItem birthday={birthday} key={index} removeBirthday={this.props.removeBirthday} />
      );
    })

    return (
      <div className="birthdays__list">
        <h2>All Birthdays</h2>
        <ul>
          {birthdays}
        </ul>
      </div>
    )
  }
}

export default BirthdayList;