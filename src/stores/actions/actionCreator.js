import axios from "axios"
import { notifyError, notifySuccess } from "../../helpers/notify"
import {
  FETCH_CITIES,
  FETCH_CITY,
  FETCH_DESTINATION,
  FETCH_DESTINATIONS,
  FETCH_DESTINATIONS_BY_CITY,
  FETCH_HIGHLIGHTED_DESTINATION,
  FETCH_HOTEL,
  FETCH_REVIEWS,
  FETCH_TRAVELSTEPS,
  FETCH_USER,
  GENERATES_TRAVELSTEPS,
} from "./actionType"
const baseUrl = "http://localhost:3000"

export function fetchCities() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/cities`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_CITIES,
          payload: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function fetchCity(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/cities/${slug}`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_CITY,
          payload: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function fetchHighlightedDestination() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/publics/destinations/best`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_HIGHLIGHTED_DESTINATION,
          payload: res.data.slice(0, 6),
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function fetchDestination(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/publics/destinations/${slug}`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_DESTINATION,
          payload: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function fetchTravelSteps() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/travel-steps`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_TRAVELSTEPS,
          payload: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function registerUser(registerData) {
  return (dispatch, getState) => {
    try {
      const { fullName, phoneNumber, email, password, passwordConfirmation } =
        registerData
      if (password !== passwordConfirmation) {
        throw { msg: "Password not match" }
      }
      return axios({
        method: "POST",
        url: `${baseUrl}/register`,
        data: {
          fullName,
          phoneNumber,
          email,
          password,
          isPremium: false,
          role: "Customer",
        },
      })
        .then((res) => {
          //ganti ke swal
          notifySuccess("Successfully register!")
          return "ok"
        })
        .catch((error) => {
          //ganti ke swal
          if (error.message === "Network Error") {
            return notifyError(error.message)
          }
          notifyError(error.response.data?.msg)
          return "error"
        })
    } catch (error) {
      notifyError(error.msg)
    }
  }
}

export function loginUser(loginData) {
  return (dispatch, getState) => {
    try {
      const { email, password } = loginData
      if (!password || !email) {
        throw { msg: "Username or password cannot be empty" }
      }
      return axios({
        method: "POST",
        url: `${baseUrl}/login`,
        data: { email, password },
      })
        .then((res) => {
          localStorage.setItem("access_token", res.data?.access_token)
          notifySuccess("Succesfully signed in")
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            return notifyError(error.message)
          }
          if (error.response.data?.msg) {
            return notifyError(error.response.data?.msg)
          }
          return error
        })
    } catch (error) {
      notifyError(error.msg)
    }
  }
}

export function postReview(review) {
  return (dispatch, getState) => {
    const { cost, fun, internet, safety, comment, DestinationId, HotelId } =
      review
    return axios({
      method: "POST",
      url: `${baseUrl}/reviews`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: { cost, fun, internet, safety, comment, DestinationId, HotelId },
    })
      .then((res) => {
        console.log("Successfully add review")
        return "ok"
      })
      .catch((error) => {
        //ganti ke swal
        console.log(error)
        return "error"
      })
  }
}

export function fetcDestinations(params, data) {
  return (dispatch, getState) => {
    let url = `${baseUrl}/publics/destinations`;
    let addedFilter = false;
    if(params){
      url += `?orderBy=${params}`;
      addedFilter = true;
    }
    if(data){
      data.filterCost = data.filterCost * 1000;
      if(addedFilter){
        url += "&";
        addedFilter = false;
      }
      else{
        url += "?";
      }
      for(let key in data){
        if(data[key]){
          if(addedFilter){
            url += "&";
            addedFilter = false;
          }
          url += `${key}=${data[key]}`;
          addedFilter = true;
        }
      }
    }
    return axios({
      method: "GET",
      url,
    })
      .then((res) => {
        dispatch({
          type: FETCH_DESTINATIONS,
          payload: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function generateTravelStep(inputData) {
  return (dispatch, getState) => {
    const {
      budget,
      numberOfDestination,
      allocationDestination,
      CityId,
      DestinationIds,
    } = inputData
    const budgetDestination = (budget * allocationDestination) / 100
    const budgetHotel = budget - budgetDestination
    return axios({
      method: "POST",
      url: `${baseUrl}/travel-steps/generates`,
      headers: { access_token: localStorage.access_token },
      data: {
        budgetDestination,
        budgetHotel,
        CityId,
        DestinationIds,
        numberOfDestination: +numberOfDestination,
      },
    })
      .then((res) => {
        dispatch({
          type: GENERATES_TRAVELSTEPS,
          payload: res.data.travelStep,
        })
        return "ok"
      })
      .catch((error) => {
        notifyError(error.response.data?.msg)

        return "error"
      })
  }
}

export function fetchReviews() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/publics/reviews`,
      //nanti hapus
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_REVIEWS,
          payload: res.data.reviewByUser,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function fetchHotel(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/hotels/${slug}`,
      //nanti hapus
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_HOTEL,
          payload: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export async function getTransactionToken() {
  const {data} = await axios({
    method: "POST",
    url: `${baseUrl}/midtrans`,
    headers: {
      access_token: localStorage.access_token,
    },
  })
  return data.transactionToken;
}

export function activatePremium(){
  return (dispatch, getState) => {
    return axios({
      method: "PATCH",
      url: `${baseUrl}/users/activatePremium`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(_=> {
        console.log("Successfully updated");
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function fetchUserData(){
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/users`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(res=> {
        dispatch({
          type: FETCH_USER,
          payload: res.data.userById
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function updateUser(updateData) {
  return (dispatch, getState) => {
    const { fullName, phoneNumber, email, password, passwordConfirmation } = updateData;
    let data = { fullName, phoneNumber, email, password, passwordConfirmation };
    if(password){
      if (password !== passwordConfirmation) {
        throw { msg: "Password not match" }
      }
      data.password = password;
    }
    return axios({
      method: "PUT",
      url: `${baseUrl}/users`,
      data,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(async (res) => {
        //ganti ke swal
        notifySuccess("Successfully updated profile!")
        const {data} = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: {
            email,
            password
          }
        })
        localStorage.setItem("access_token", data.access_token);
        return "ok"
      })
      .catch((error) => {console.log(error);
        //ganti ke swal
        if (error.message === "Network Error") {
          return notifyError(error.message)
        }
        notifyError(error.response.data.msg)
        return "error"
      })
  }
}

export function saveTravelStep(travelStepData) {
  return (dispatch, getState) => {
    const { name, HotelId, DestinationIds } = travelStepData
    return axios({
      method: "POST",
      url: `${baseUrl}/travel-steps`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: { name, HotelId, DestinationIds },
    })
      .then((res) => {
        console.log("Successfully saved travel step")
        return "ok"
      })
      .catch((error) => {
        //ganti ke swal
        console.log(error)
        return "error"
      })
  }
}