import { FETCH_DESTINATION, FETCH_DESTINATIONS, FETCH_DESTINATIONS_BY_CITY, FETCH_HIGHLIGHTED_DESTINATION, FETCH_HOTEL } from "../actions/actionType"

const initiateState = {
  highlightedDestinations: [],
  destination: {},
  destinationsByCity: [],
  hotel: {},
  destinations: []
}

export default function destinationsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_HIGHLIGHTED_DESTINATION:
      return { ...state, highlightedDestinations: action.payload }
    case FETCH_DESTINATION:
      return { ...state, destination: action.payload }
    case FETCH_DESTINATIONS_BY_CITY:
      return { ...state, destinationsByCity: action.payload }
    case FETCH_DESTINATIONS:
      return { ...state, destinations: action.payload }
    case FETCH_HOTEL:
      return { ...state, hotel: action.payload }
    default:
      return state
  }
}