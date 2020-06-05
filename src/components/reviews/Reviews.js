import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.filteredReviews().map(review => {
      return(
        <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
      )
    })
  }

  filteredReviews = () => {
      const reviews = this.props.reviews
      return reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
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