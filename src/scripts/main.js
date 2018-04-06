import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TodaysBirthday from './components/todaysBirthday';

import '../styles/styles.scss';
//import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysBirthday: '06-04-2000'
    }
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