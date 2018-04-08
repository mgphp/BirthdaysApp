import React, { Component } from 'react'
import Suggestions from './suggestions'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      query: '',
      results: []
    }

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(){
    let filteredData = this.props.allBirthdays.filter(birthday => {
     const regex = new RegExp(this.state.query, 'gi');
     return birthday.name.match(regex);
    });

    this.setState({
      results: filteredData
    })
  }

  handleInputChange(){
    this.setState({
      query: this.search.value
    }, () => {

      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <div className="box__white search-birthdays">
        <div className="box__title">Search Birthdays</div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange.bind(this)}
          />
          <Suggestions results={this.state.results} />
        </form>
      </div>
    )
  }
}

export default Search