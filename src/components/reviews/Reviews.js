import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.restaurant.reviews.map(review => {
      return(
        <Review key={review.id} review={review}/>
      )
    })
  }
  render() {
    console.log(this.props.restaurant.reviews)
    return (
      <ul>
        {
          this.renderReviews()
        }
      </ul>
    );
  }
};

export default Reviews;