import React, {Component} from 'react';
import { parseDateStr,dateDiff } from '../utils/dates';

class listBirthdayItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickRemove() {
    let name = this.props.birthday.name;
    this.props.removeBirthday(name);
  }

  render () {
    return(
      <li className="birthdays__item">
        <div className="birthdays__item--group">
          <label htmlFor={this.props.birthday.name}>{this.props.birthday.name} - {parseDateStr(this.props.birthday.birthday,true)}</label>
          <span>{dateDiff(this.props.birthday.birthday)}</span>
        </div>
        <button type="button" key={this.props.birthday.index} className="close" onClick={this.onClickRemove}>&times;</button>
      </li>
    );
  }
}


export default listBirthdayItem;
