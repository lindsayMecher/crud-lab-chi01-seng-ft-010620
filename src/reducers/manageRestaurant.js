
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    console.log(state,action)
    let restaurant;
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
            let filtered = state.restaurants.filter(r => r.id === action.payload.restaurantId)
            filtered = {
                text: filtered.text,
                id: filtered.id,
                reviews: [
                    {text: action.payload.text,
                        id: cuid()
                    }
                ]
            }
            // spread the state
            // spread the restaurants
            // spread the current restaurant
            // create a new review obj from the payload 
            // update the selected restaurant obj to include reviews
            // insert this review into the list of reviews
            // return total state
            debugger
            return state;
        case "UPDATE_REVIEW":
            return state;
        case "DELETE_REVIEW":
            return state;
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