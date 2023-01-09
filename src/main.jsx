import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import router from "./routes"
import store from "./stores"
import "flowbite"
import { ToastContainer, toast } from "react-toastify"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer />

    <RouterProvider router={router} />
  </Provider>
)
