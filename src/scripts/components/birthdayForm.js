/**
 * Created by markgr on 06/04/2018.
 */
import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

//import 'react-datepicker/dist/react-datepicker.css';
import BirthdayListItem from './listBirthdayItem';

class BirthdayForm extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let dob = this.refs.dob.value;
    this.props.addBirthday({name,dob})

    this.refs.birthdayForm.reset();
  }

  render() {
    return (
      <div>
        <h2>Add Birthday</h2>
        <form className="add-remove" ref="birthdayForm" onSubmit={this.onSubmit}>
         <input type="input"  placeholder="Enter name" ref="name" className="form-item"/><br/>
         <DatePicker //selected={this.state.startDate} // onChange={this.handleChange}
           /><br/>
          <button>Add Birthday</button>
        </form>
      </div>
    )
  }
}

export default BirthdayForm;
