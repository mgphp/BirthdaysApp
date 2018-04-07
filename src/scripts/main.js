import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TodaysBirthdays from './components/todaysBirthday';
import UpcomingBirthdays from './components/upcomingBirthday';
import ListBirthday from './components/listBirthday';
import BirthdayForm from './components/birthdayForm';

import { parseTodaysDate, parseNextTwoWeeks} from './utils/dates'

import BirthdayData from './data/birthdays'

import '../styles/styles.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.addBirthday = this.addBirthday.bind(this);
    this.removeBirthday = this.removeBirthday.bind(this);

    let today = BirthdayData.filter((person) => parseTodaysDate(person.birthday) === true);
    let nextTwoWeeks = BirthdayData.filter((person) => parseNextTwoWeeks(person.birthday) === true);

    this.state = {
      todaysBirthdays: today,
      upcomingBirthdays: nextTwoWeeks,
      allBirthdays: BirthdayData
    }
  }

  addBirthday(birthday) {
    this.setState({ allBirthdays: [...this.state.allBirthdays, birthday] });
  }

  removeBirthday(index) {
    console.log(index);
  }

  render() {
    return (
      <div className="container">
        <div className="col-left">
          <TodaysBirthdays today={this.state.todaysBirthdays} />
          <UpcomingBirthdays upcoming={this.state.upcomingBirthdays} />
        </div>
          <div className="col-right">
          <ListBirthday birthdays={this.state.allBirthdays} removeBirthday={this.removeBirthday} />
          <BirthdayForm addBirthday={this.addBirthday} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('react-container'));