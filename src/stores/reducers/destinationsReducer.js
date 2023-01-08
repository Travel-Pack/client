import { FETCH_DESTINATION, FETCH_DESTINATIONS_BY_CITY, FETCH_HIGHLIGHTED_DESTINATION } from "../actions/actionType"

const initiateState = {
  highlightedDestinations: [],
  destination: {},
  destinationsByCity: [],
  hotelsByCity: [{
    "id": 2,
    "name": "Swiss-Belinn Tunjungan, Surabaya",
    "slug": "Swiss-Belinn-Tunjungan-Surabaya",
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/0c/98/b0/be/swiss-belinn-tunjungan.jpg",
    "geocoding": "-7.262066, 112.740918",
    "isRecommended": false,
    "price": 450000,
    "CityId": 3
  }],
  hotel: {
    "id": 2,
    "name": "Swiss-Belinn Tunjungan, Surabaya",
    "slug": "Swiss-Belinn-Tunjungan-Surabaya",
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/0c/98/b0/be/swiss-belinn-tunjungan.jpg",
    "geocoding": "-7.262066, 112.740918",
    "isRecommended": false,
    "price": 450000,
    "CityId": 3
  }
}

export default function destinationsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_HIGHLIGHTED_DESTINATION:
      return { ...state, highlightedDestinations: action.payload }
    case FETCH_DESTINATION:
      return { ...state, destination: action.payload }
    case FETCH_DESTINATIONS_BY_CITY:
      return { ...state, destinationsByCity: action.payload }
    default:
      return state
  }
}