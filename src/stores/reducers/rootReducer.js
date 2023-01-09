import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import destinationsReducer from './destinationsReducer';
import othersReducer from './othersReducer';
import travelStepsReducer from './travelStepReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  destinations: destinationsReducer,
  travelSteps: travelStepsReducer,
  others: othersReducer
})

export default rootReducer