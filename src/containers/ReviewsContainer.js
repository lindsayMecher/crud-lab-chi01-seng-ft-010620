import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} createReview={this.props.createReview}/>
          {this.props.reviews ?
            <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
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

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
