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
  FETCH_TOPICS,
  FETCH_MESSAGES,
  FETCH_FORUM_ID,
  FETCH_NEW_MESSAGE,
  FETCH_TOPIC_BY_ID,
  FETCH_NEED_PREMIUM,
  FETCH_WEATHER_DATA,
  SAVE_TRAVELSTEPS_CRITERIA,
} from "./actionType"
// export const baseUrl = "https://travel-pack-server.foxhub.space"
export const baseUrl = "http://localhost:3000"

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
        notifyError(error)
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
        notifyError(error)
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
          payload: res.data,
        })
      })
      .catch((error) => {
        notifyError(error)
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
        notifyError(error)
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
        notifyError(error)
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
          localStorage.setItem("email", res.data?.email)
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
    const { cost, fun, internet, safety, comment, DestinationId, HotelId } = review
    return axios({
      method: "POST",
      url: `${baseUrl}/reviews`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: { cost, fun, internet, safety, comment, DestinationId, HotelId },
    })
      .then((res) => {
        notifySuccess("Successfully add review")
        return "ok"
      })
      .catch((error) => {
        //ganti ke swal
        notifyError(error)
        return "error"
      })
  }
}

export function fetcDestinations(params, data) {
  return (dispatch, getState) => {
    let url = `${baseUrl}/publics/destinations`
    let addedFilter = false
    if (params) {
      url += `?orderBy=${params}`
      addedFilter = true
    }
    if (data) {
      data.filterCost = data.filterCost * 1000
      if (addedFilter) {
        url += "&"
        addedFilter = false
      } else {
        url += "?"
      }
      for (let key in data) {
        if (data[key]) {
          if (addedFilter) {
            url += "&"
            addedFilter = false
          }
          url += `${key}=${data[key]}`
          addedFilter = true
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
        notifyError(error)
      })
  }
}

export function generateTravelStep(inputData) {
  return (dispatch, getState) => {
    const { budget, numberOfDestination, allocationDestination, CityId, DestinationIds } =
      inputData
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
        dispatch({
          type: FETCH_NEED_PREMIUM,
          payload: res.data.needPremium,
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
      url: `${baseUrl}/publics/reviews`
    })
      .then((res) => {
        dispatch({
          type: FETCH_REVIEWS,
          payload: res.data.reviewByUser,
        })
      })
      .catch((error) => {
        notifyError(error)
      })
  }
}

export function fetchHotel(slug) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/publics/hotels/${slug}`
    })
      .then((res) => {
        dispatch({
          type: FETCH_HOTEL,
          payload: res.data,
        })
      })
      .catch((error) => {
        notifyError(error)
      })
  }
}

export async function getTransactionToken() {
  const { data } = await axios({
    method: "POST",
    url: `${baseUrl}/midtrans`,
    headers: {
      access_token: localStorage.access_token,
    },
  })
  return data.transactionToken
}

export function activatePremium() {
  return (dispatch, getState) => {
    return axios({
      method: "PATCH",
      url: `${baseUrl}/users/activatePremium`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((_) => {
        console.log("Successfully updated")
      })
      .catch((error) => {
        notifyError(error)
      })
  }
}

export function fetchUserData() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/users`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_USER,
          payload: res.data.userById,
        })
      })
      .catch((error) => {
        notifyError(error)
      })
  }
}

export function updateUser(updateData) {
  return (dispatch, getState) => {
    const { fullName, phoneNumber, email, password, passwordConfirmation } = updateData
    let data = { fullName, phoneNumber, email, password, passwordConfirmation }
    if (password) {
      if (password !== passwordConfirmation) {
        throw { msg: "Password not match" }
      }
      data.password = password
    }
    return axios({
      method: "PUT",
      url: `${baseUrl}/users`,
      data,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (res) => {
        //ganti ke swal
        notifySuccess("Successfully updated profile!")
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: {
            email,
            password,
          },
        })
        localStorage.setItem("access_token", data.access_token)
        return "ok"
      })
      .catch((error) => {
        notifyError(error)
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
        notifySuccess("Successfully saved travel step")
        return "ok"
      })
      .catch((error) => {
        //ganti ke swal
        notifyError(error)
        return "error"
      })
  }
}

export function fetchTopics() {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/publics/topic`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_TOPICS,
          payload: res.data,
        })
      })
      .catch((error) => {
        notifyError(error)
      })
  }
}

export function fetchForumId(id) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_FORUM_ID,
      payload: id,
    })
  }
}

export function fetchMessages(id) {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/publics/topic/${id}`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_TOPIC_BY_ID,
          payload: res.data,
        })
        return res
      })
      .then((res) => {
        dispatch({
          type: FETCH_MESSAGES,
          payload: res.data.Messages,
        })
      })
      .catch((error) => {
        notifyError(error)
      })
  }
}

export function insertMessage(message) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_NEW_MESSAGE,
      payload: message,
    })
  }
}

export function saveTravelStepCriteria(data) {
  return (dispatch, getState) => {
    dispatch({
      type: SAVE_TRAVELSTEPS_CRITERIA,
      payload: data,
    })
  }
}

export function postTopic(data) {
  return (dispatch, getState) => {
    try {
      let { title, type } = data
      return axios({
        method: "POST",
        url: `${baseUrl}/topic`,
        data: { title, type },
        headers: { access_token: localStorage.access_token }
      })
        .then((res) => {
          //ganti ke swal
          notifySuccess("Successfully Create Topic!")
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
// export function fetchWeatherData(geocoding) {
  // return async (dispatch, getState) => {
  //   try {
  //     const latLong = geocoding?.split(", ")
  //     const { data } = await axios.get(
  //       `https://api.api-ninjas.com/v1/weather?lat=${latLong[0]}&lon=${latLong[1]}`,
  //       {
  //         headers: { "X-API-KEY": "LM70771SiGLHsyf0tUdFvw==pYI4irjldWvqfANa" },
  //       }
  //     )
  //     dispatch({
  //       type: FETCH_WEATHER_DATA,
  //       payload: data,
  //     })
  //   } catch (error) {
  //     notifyError(error)
  //   }
  // }
// }

// export function fetchWeatherData(geocoding) {
//   return (dispatch, getState) => {
//     const latLong = geocoding?.split(", ")
//     return axios
//       .get(`https://api.api-ninjas.com/v1/weather?lat=${latLong[0]}&lon=${latLong[1]}`, {
//         headers: { "X-API-KEY": "LM70771SiGLHsyf0tUdFvw==pYI4irjldWvqfANa" },
//       })
//       .then((res) => {
//         dispatch({
//           type: FETCH_WEATHER_DATA,
//           payload: res.data,
//         })
//       })
//       .catch((error) => {
//         notifyError(error.response.data?.msg)
//       })
//   }
// }
