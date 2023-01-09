import axios from 'axios';
import { FETCH_CITIES, FETCH_CITY, FETCH_DESTINATION, FETCH_DESTINATIONS, FETCH_DESTINATIONS_BY_CITY, FETCH_HIGHLIGHTED_DESTINATION, FETCH_REVIEWS, GENERATES_TRAVELSTEPS } from './actionType';
const baseUrl = "http://localhost:3000";

export function fetchCities() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/cities`
    })
      .then(res=>{
        dispatch({
          type: FETCH_CITIES,
          payload: res.data
        })
      })
    .catch(error=>{
      console.log(error);
    })
  }
}

export function fetchCity(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/cities/${slug}`
    })
      .then(res=>{
        dispatch({
          type: FETCH_CITY,
          payload: res.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }
}


export function fetchHighlightedDestination() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/destinations`
    })
      .then(res=>{
        dispatch({
          type: FETCH_HIGHLIGHTED_DESTINATION,
          payload: res.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }
}

export function fetchDestination(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/destinations/${slug}`
    })
      .then(res=>{
        dispatch({
          type: FETCH_DESTINATION,
          payload: res.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
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

export function registerUser(registerData){
  return (dispatch, getState)=>{
    const {fullName, phoneNumber, email, password, passwordConfirmation} = registerData;
    if(password !== passwordConfirmation){
      throw({msg: "Password not match"})
    }
    return axios({
      method: "POST",
      url: `${baseUrl}/register`,
      data: {
        fullName, phoneNumber, email, password,
        isPremium: false,
        role: "Customer"
      }
    })
      .then(res=>{
        //ganti ke swal
        console.log(res);
        return "ok"
      })
      .catch(error=>{
        //ganti ke swal
        console.log(error);
        return "error"
      })
  }
}

export function loginUser(loginData){
  return (dispatch, getState)=>{
    const {email, password} = loginData;
    if(!password || !email){
      throw({msg: "Data cannot be empty"})
    }
    return axios({
      method: "POST",
      url: `${baseUrl}/login`,
      data: { email, password }
    })
      .then(res=>{
        localStorage.setItem("access_token", res.data.access_token);
      })
      .catch(error=>{
        //ganti ke swal
        console.log(error);
      })
  }
}

export function postReview(review){
  return (dispatch, getState)=>{
    const {cost, fun, internet, safety, comment} = review;
    return axios({
      method: "POST",
      url: `${baseUrl}/review`,
      // headers: {
      //   access_token: localStorage.access_token
      // },
      data: {cost, fun, internet, safety, comment}
    })
      .then(res=>{
        console.log("Successfully add review");
      })
      .catch(error=>{
        //ganti ke swal
        console.log(error);
      })
  }
}

export function fetchDestinationByCity(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      // url: `${baseUrl}/destinations?citySlug=${slug}`
      url: `${baseUrl}/destinationsByCity`
    })
      .then(res=>{
        dispatch({
          type: FETCH_DESTINATIONS_BY_CITY,
          payload: res.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }
}

export function fetcDestinations() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/destinations`
    })
      .then(res=>{
        dispatch({
          type: FETCH_DESTINATIONS,
          payload: res.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }
}

export function generateTravelStep(inputData) {
  return (dispatch, getState) => {
    const { budget, numberOfDestination, allocationDestination, CityId, DestinationsIds} = inputData;
    const budgetDestination = budget * allocationDestination / 100;
    const budgetHotel = budget - budgetDestination;
    return axios({
      method: "POST",
      url: `${baseUrl}/travel-steps/generates`,
      headers: {access_token: localStorage.access_token},
      data: {budgetDestination, budgetHotel, CityId, DestinationsIds, numberOfDestination}
    })
      .then(res=>{
        dispatch({
          type: GENERATES_TRAVELSTEPS,
          payload: res.data.travelStep
        })
        return "ok"
      })
      .catch(error=>{
        console.log(error);
        return "error"
      })
  }
}

export function fetchReviews() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/reviews`,
      //nanti hapus
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(res=>{
        dispatch({
          type: FETCH_REVIEWS,
          payload: res.data.reviewByUser
        })
      })
    .catch(error=>{
      console.log(error);
    })
  }
}