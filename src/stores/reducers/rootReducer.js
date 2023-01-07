import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import destinationsReducer from './destinationsReducer';
import travelStepsReducer from './travelStepReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  destinations: destinationsReducer,
  travelSteps: travelStepsReducer
})

export default rootReducer