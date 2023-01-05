import { useState } from "react"

export const baseUrl = "http://localhost:3000"

export function setData(payload) {
  return {
    type: "DATA_BUILDER",
    payload,
  }
}

export function fetchData() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/contacts`, {
        method: "GET",
      })

      const data = await response.json()
      if (!response.ok) throw response.statusText

      dispatch(setData(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDataById(id) {
  return async (dispatch, getState) => {
    try {
      const { contactReducer } = getState()
      const response = await fetch(`${baseUrl}/contacts/${id}`, {
        method: "GET",
      })
      const data = await response.json()

      if (!response.ok) throw response.statusText

      dispatch(setData(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteData(id) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/contacts/${id}`, {
        method: "DELETE",
      })

      const data = await response.json()

      dispatch(fetchData())
    } catch (error) {
      console.log(error)
    }
  }
}

export function addData(payload) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/contacts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw response.statusText
      const data = await response.json()

      dispatch(fetchData(data))
    } catch (error) {
      console.log(error)
    }
  }
}
