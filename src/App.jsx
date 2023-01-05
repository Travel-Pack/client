import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./pages/FooterTeam"

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}
