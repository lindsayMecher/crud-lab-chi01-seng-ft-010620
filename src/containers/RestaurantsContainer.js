import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput createRestaurant={this.props.createRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createRestaurant: restaurant => dispatch({type: "CREATE_RESTAURANT", payload: restaurant}),
    deleteRestaurant: restaurantId => dispatch({type: "DELETE_RESTAURANT", payload: restaurantId})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);


