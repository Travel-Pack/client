import { Outlet, ScrollRestoration } from "react-router-dom"
import NavbarTravel from "./components/NavbarTravel"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
export default function App() {
  return (
    <div className="App selection:bg-yelloku">
      <ToastContainer />
      <NavbarTravel />
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}
