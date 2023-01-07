import { FETCH_DESTINATION, FETCH_HIGHLIGHTED_DESTINATION } from "../actions/actionType"

const initiateState = {
  highlightedDestinations: [],
  destination: {}
}

export default function destinationsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_HIGHLIGHTED_DESTINATION:
      return { ...state, highlightedDestinations: action.payload }
    case FETCH_DESTINATION:
      return { ...state, destination: action.payload }
    default:
      return state
  }
}