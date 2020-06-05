import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} createReview={this.props.createReview}/>
          {this.props.restaurant.reviews ?
            <Reviews restaurant={this.props.restaurant}/>
            :
            null
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch({type: "CREATE_REVIEW", payload: review}),
    deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", payload: reviewId})
  }
}



export default connect(null, mapDispatchToProps)(ReviewsContainer);
