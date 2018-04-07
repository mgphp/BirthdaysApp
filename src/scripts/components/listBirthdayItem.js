import React, {Component} from 'react';

class listBirthdayItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickRemove() {
    let index = this.props.index;
    this.props.removeBirthday(index);
  }

  render () {
    return(
      <li className="birthdays__item" id={this.props.index}>
          <label htmlFor={this.props.birthday.name}>{this.props.birthday.name} - {this.props.birthday.birthday}</label>
        <button type="button" className="close" onClick={this.onClickRemove}>&times;</button>
      </li>
    );
  }
}


export default listBirthdayItem;
