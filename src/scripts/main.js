import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TodaysBirthdays from './components/todaysBirthday';
import UpcomingBirthdays from './components/upcomingBirthday';
import ListBirthday from './components/listBirthday';
import BirthdayForm from './components/birthdayForm';
import SearchBirthdays from './components/searchBirthdays';

import {parseTodaysDate, parseNextTwoWeeks, sortedDates, todaysDate} from './utils/dates';

import BirthdayData from './data/birthdays'

import '../styles/styles.scss';
import '../styles/date-picker.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    let today = BirthdayData.filter((person) => parseTodaysDate(person.birthday) === true);
    let nextTwoWeeks = BirthdayData.filter((person) => parseNextTwoWeeks(person.birthday) === true);
    let sortDates = sortedDates(BirthdayData);

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
    const arr = this.state.allBirthdays;
    const index = arr.indexOf(name);
    arr.splice(index, 1);
    this.setState({allBirthdays: arr });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Birthday App</h1>
          <h2>{todaysDate()}</h2>
        </header>
        <main>
          <div className="container">
            <section className="container__left">
              <TodaysBirthdays today={this.state.todaysBirthdays}/>
              <UpcomingBirthdays upcoming={this.state.upcomingBirthdays}/>
              <SearchBirthdays allBirthdays={this.state.allBirthdays} />
            </section>
            <section className="container__right">
              <ListBirthday birthdays={this.state.allBirthdays} removeBirthday={this.removeBirthday}/>
              <BirthdayForm addBirthday={this.addBirthday}/>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('react-container'));