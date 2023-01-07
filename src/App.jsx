import { Outlet, ScrollRestoration } from "react-router-dom"
import NavbarTravel from "./components/NavbarTravel"
export default function App() {
  return (
    <div className="App">
      <NavbarTravel />
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}
