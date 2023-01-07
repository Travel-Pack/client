import axios from 'axios';
import { FETCH_CITIES, FETCH_CITY, FETCH_DESTINATION, FETCH_HIGHLIGHTED_DESTINATION } from './actionType';
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
      url: `${baseUrl}/destinations?_limit=9`
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

export function registerUser(registerData){
  return (dispatch, getState)=>{
    const {fullName, phoneNumber, email, password, passwordConfirmation} = registerData;
    if(password !== passwordConfirmation){
      throw({msg: "Password not match"})
    }
    return axios({
      method: "POST",
      url: `${baseUrl}/users`,
      data: {
        fullName, phoneNumber, email, password,
        isPremium: false,
        role: "Customer"
      }
    })
      .then(res=>{
        //ganti ke swal
        console.log(res);
      })
      .catch(error=>{
        //ganti ke swal
        console.log(error);
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
      url: `${baseUrl}/users/login`,
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