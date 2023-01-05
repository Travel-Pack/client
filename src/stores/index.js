import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux"
import thunk from "redux-thunk"
import { contactReducer } from "./reducers/rootReducer"

const combine = combineReducers({ contactReducer })

const store = createStore(combine, applyMiddleware(thunk))

export default store
