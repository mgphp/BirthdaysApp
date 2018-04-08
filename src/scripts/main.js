import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TodaysBirthdays from './components/todaysBirthday';
import UpcomingBirthdays from './components/upcomingBirthday';
import ListBirthday from './components/listBirthday';
import BirthdayForm from './components/birthdayForm';
import SearchBirthdays from './components/searchBirthdays';

import {parseTodaysDate, parseNextTwoWeeks, dateDiff, todaysDate} from './utils/dates';

import BirthdayData from './data/birthdays'

import '../styles/styles.scss';
import '../styles/date-picker.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    let today = BirthdayData.filter((person) => parseTodaysDate(person.birthday) === true);
    let nextTwoWeeks = BirthdayData.filter((person) => parseNextTwoWeeks(person.birthday) === true);
    let sortDates = BirthdayData.sort(function (a, b) {

      var aComps = a.birthday.split("-");
      var bComps = b.birthday.split("-");
      var aDate = new Date(aComps[1] + '-' + aComps[2] + '-' + aComps[0]);
      var bDate = new Date(bComps[1] + '-' + bComps[2] + '-' + bComps[0]);
      return aDate - bDate;
    });

    this.state = {
      todaysBirthdays: today,
      upcomingBirthdays: nextTwoWeeks,
      allBirthdays: sortDates
    }

    this.addBirthday = this.addBirthday.bind(this);
    this.removeBirthday = this.removeBirthday.bind(this);
  }

  addBirthday(birthday) {
    this.setState({allBirthdays: [...this.state.allBirthdays, birthday]});
  }

  removeBirthday(name) {
    var arr = this.state.allBirthdays;
    var index = arr.indexOf(name)
    arr.splice(index, 1);
    this.setState({allBirthdays: arr });
  }

  render() {
    return (
      <div>
        <div className="top-section">
          <h1>Birthday App - {todaysDate()}</h1>
        </div>
        <div className="main">
          <div className="container">
            <div className="col-left">
              <TodaysBirthdays today={this.state.todaysBirthdays}/>
              <UpcomingBirthdays upcoming={this.state.upcomingBirthdays}/>
              <SearchBirthdays />
            </div>
            <div className="col-right">
              <ListBirthday birthdays={this.state.allBirthdays} removeBirthday={this.removeBirthday}/>
              <BirthdayForm addBirthday={this.addBirthday}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('react-container'));