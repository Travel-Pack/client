import { Outlet, ScrollRestoration } from "react-router-dom"
import NavbarTravel from "./components/NavbarTravel"
import "react-toastify/dist/ReactToastify.css"
export default function App() {
  return (
    <div className="App selection:bg-yelloku">
      <NavbarTravel />
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}
