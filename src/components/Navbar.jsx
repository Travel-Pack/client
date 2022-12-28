import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <div className="flex">
        <h1>
          Travel <span className="font-bold">Pack</span>
        </h1>
        <div>
          <NavLink>Home</NavLink>
        </div>
      </div>
    </div>
  )
}
