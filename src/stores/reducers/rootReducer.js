export function contactReducer(state = [], action) {
  switch (action.type) {
    case "DATA_BUILDER":
      return action.payload
    default:
      return state
  }
}