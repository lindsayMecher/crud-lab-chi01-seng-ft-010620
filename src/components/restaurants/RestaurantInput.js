import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createRestaurant(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label type="text"> Enter Restaurant Name: </label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
