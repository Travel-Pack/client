import { FETCH_TRAVELSTEPS, GENERATES_TRAVELSTEPS, SAVE_TRAVELSTEPS_CRITERIA } from "../actions/actionType"

const initiateState = {
  travelSteps: [],
  generatedTravelSteps: [],
  generatedTravelStepCriteria: {}
}

export default function travelStepsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_TRAVELSTEPS:
      return { ...state, travelSteps: action.payload }
    case GENERATES_TRAVELSTEPS:
      return { ...state, generatedTravelSteps: action.payload }
    case SAVE_TRAVELSTEPS_CRITERIA:
      return { ...state, generatedTravelStepCriteria: action.payload }
    default:
      return state
  }
}