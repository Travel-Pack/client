import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
