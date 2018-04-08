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
      <div className="box__white all-birthdays">
        <div className="birthdays__list">
          <div className="box__title">All Birthdays</div>
          <ul>
            {birthdays}
          </ul>
        </div>
      </div>
    )
  }
}

export default BirthdayList;