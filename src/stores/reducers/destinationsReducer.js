import { FETCH_DESTINATION, FETCH_HIGHLIGHTED_DESTINATION } from "../actions/actionType"

const initiateState = {
  highlightedDestinations: [],
  destination: {}
}

export default function destinationsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_HIGHLIGHTED_DESTINATION:
      return { ...initiateState, highlightedDestinations: action.payload }
    case FETCH_DESTINATION:
      return { ...initiateState, destination: action.payload }
    default:
      return state
  }
}