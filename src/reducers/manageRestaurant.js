
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    console.log(state,action)
    let restaurant;
    let idx;
    let review;
    switch(action.type){
        case "CREATE_RESTAURANT":
            restaurant = {
                text: action.payload.text,
                id: cuid()
            }
            return {
                restaurants: state.restaurants.concat(restaurant)
            }
        case "UPDATE_RESTAURANT":
            console.log("updating restaurant")
            return state;
        case "DELETE_RESTAURANT":
            console.log("deleting restaurant")
            return {
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)
            };
        case "CREATE_REVIEW":
            console.log("creating review")
            console.log(state, action)
            const newReview = {
                text: action.payload.text,
                restaurantId: action.payload.restaurantId,
                id: cuidFn()
            }
            if(state.reviews === undefined){
                state.reviews = []
            }
            const newState = { ...state,
                reviews: [...state.reviews, newReview]
              }
              
            return newState;
        case "UPDATE_REVIEW":
            return state;
        case "DELETE_REVIEW":
            console.log('deleting review', action.payload)
            const filteredReviews = state.reviews.filter(review => review.id !== action.payload)
            return { ...state,
                reviews: [...filteredReviews]
              }
            default:
            return state;
    }
}

// const restaurant = {
//     text: "Bob Chinns",
//     id: 1234,
//     reviews: [
//         {
//             text: "great food!",
//             id: 2345,
//             restaurantId: 1234
//         }
//         ]
// }