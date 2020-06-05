import React, { Component } from 'react';

class Review extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={(reviewId) => this.props.deleteReview(this.props.review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
