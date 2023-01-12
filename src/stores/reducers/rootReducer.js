import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import destinationsReducer from './destinationsReducer';
import othersReducer from './othersReducer';
import travelStepsReducer from './travelStepReducer';
import forumReducer from './forumReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  destinations: destinationsReducer,
  travelSteps: travelStepsReducer,
  forums: forumReducer,
  others: othersReducer
})

export default rootReducer