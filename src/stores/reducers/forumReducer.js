import { FETCH_TOPICS, FETCH_MESSAGES, FETCH_FORUM_ID, FETCH_NEW_MESSAGE, FETCH_TOPIC_BY_ID } from "../actions/actionType"

const initialState = {
  topics: [],
  topic: {},
  messages: [],
  id: 0,
}

export default function forumReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPICS:
      return { ...state, topics: action.payload }
    case FETCH_TOPIC_BY_ID:
        return { ...state, topic: action.payload }
    case FETCH_MESSAGES:
      return { ...state, messages: action.payload }
    case FETCH_FORUM_ID:
        return { ...state, id: action.payload }
    case FETCH_NEW_MESSAGE:
        return { ...state, messages: [...state.messages, action.payload] }    
    default:
      return state
  }
}