import { FETCH_NEED_PREMIUM, FETCH_REVIEWS, FETCH_USER } from "../actions/actionType"

const initiateState = {
  reviews: [],
  user: {},
  needPremium: false
}

export default function othersReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return { ...state, reviews: action.payload }
    case FETCH_USER:
      return { ...state, user: action.payload }
    case FETCH_NEED_PREMIUM:
      return { ...state, needPremium: action.payload }
    default:
      return state
  }
}