import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TodaysBirthday from './components/todaysBirthday';

import BirthdayData from './data/birthdays'

import '../styles/styles.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysBirthdays: null,
      upcomingBirthdays: [],
      allBirthdays: BirthdayData
    }

  }

  todaysBirthdays() {

  }

  upcomingBirthdays() {

  }
  
  render() {
    return (
      <div>
        <TodaysBirthday today={this.state.todaysBirthday} />
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('react-container'));