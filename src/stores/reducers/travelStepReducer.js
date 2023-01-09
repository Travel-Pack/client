import { FETCH_TRAVELSTEPS, GENERATES_TRAVELSTEPS } from "../actions/actionType"

const initiateState = {
  travelSteps: [],
  generatedTravelSteps: []
}

export default function travelStepsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_TRAVELSTEPS:
      return { ...state, travelSteps: action.payload }
    case GENERATES_TRAVELSTEPS:
      return { ...state, generatedTravelSteps: action.payload }
    default:
      return state
  }
}