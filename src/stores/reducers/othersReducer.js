import { FETCH_REVIEWS } from "../actions/actionType"

const initiateState = {
  reviews: []
}

export default function othersReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return { ...state, reviews: action.payload }
    default:
      return state
  }
}