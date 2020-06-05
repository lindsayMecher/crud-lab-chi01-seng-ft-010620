import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor(){
    super()
    this.state = {
      text: "",
      restaurantId: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      restaurantId: this.props.restaurant.id
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.props)
    this.props.createReview(this.state)
    this.setState({
      text: "",
      restaurantId: ""
    })
  }

  render() {
    console.log(this.props, this.state)
    return (
      <div>
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
          <label>Enter Review: </label>
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

export default ReviewInput;
