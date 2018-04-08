import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class BirthdayForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      name: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let birthday = this.state.startDate._d;
    this.props.addBirthday({name, birthday})
    this.refs.birthdayForm.reset();
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="box__white">
        <div className="box__title">Add Birthday</div>
        <form className="add-remove" ref="birthdayForm" onSubmit={this.onSubmit}>
          <input
            type="input"
            placeholder="Enter name"
            name="name"
            ref="name"
            required
            className="form-item"/>
          <br />
          <div className="error" id="usernameError"/>
          <DatePicker
            name="birthday"
            placeholder="Enter name"
            dateFormat="DD-MM-YYYY"
            selected={this.state.startDate}
            onChange={this.handleChange}
            required
          />
          <button>Add Birthday</button>
        </form>
      </div>
    )
  }
}

export default BirthdayForm;
