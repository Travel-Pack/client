import {
  FETCH_NEED_PREMIUM,
  FETCH_REVIEWS,
  FETCH_USER,
  FETCH_WEATHER_DATA,
} from "../actions/actionType"

const initiateState = {
  reviews: [],
  user: {},
  needPremium: false,
  weatherData: {},
}

export default function othersReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return { ...state, reviews: action.payload }
    case FETCH_USER:
      return { ...state, user: action.payload }
    case FETCH_NEED_PREMIUM:
      return { ...state, needPremium: action.payload }
    case FETCH_WEATHER_DATA:
      return { ...state, weatherData: action.payload }
    default:
      return state
  }
}
