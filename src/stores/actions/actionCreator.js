import axios from 'axios';
import { FETCH_CITIES, FETCH_CITY, FETCH_DESTINATION, FETCH_HIGHLIGHTED_DESTINATION } from './actionType';
const baseUrl = "http://localhost:3000";

export function fetchCities() {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: `${baseUrl}/cities`
      })
      dispatch({
        type: FETCH_CITIES,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchCity(slug) {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: `${baseUrl}/cities/${slug}`
      })
      dispatch({
        type: FETCH_CITY,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchHighlightedDestination() {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: `${baseUrl}/destinations/highlighted`
      })
      dispatch({
        type: FETCH_HIGHLIGHTED_DESTINATION,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchDestination(slug) {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: `${baseUrl}/destinations/${slug}`
      })
      dispatch({
        type: FETCH_DESTINATION,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchTravelSteps() {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: `${baseUrl}/travelSteps`,
        headers: localStorage.access_token
      })
      dispatch({
        type: FETCH_DESTINATION,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}