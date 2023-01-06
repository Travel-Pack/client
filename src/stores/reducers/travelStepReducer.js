import { FETCH_TRAVELSTEPS } from "../actions/actionType"

const initiateState = {
  travelSteps: []
}

export default function travelStepsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_TRAVELSTEPS:
      return { ...initiateState, cities: action.payload }
    default:
      return state
  }
}