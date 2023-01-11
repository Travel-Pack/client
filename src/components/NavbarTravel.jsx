import { Navbar } from "flowbite-react"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { BsFillPersonFill } from "react-icons/bs"
import { notifySuccess } from "../helpers/notify"

export default function NavbarTravel() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const [active, isActive] = useState(false)
  const navigate = useNavigate()
  const loggedIn = localStorage.getItem("access_token")

  function handleLogout() {
    navigate("/login")
    notifySuccess("Signed out")
    return localStorage.clear()
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const visible = prevScrollpos > currentScrollPos
      setPrevScrollpos(currentScrollPos)
      setVisible(visible)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollpos, loggedIn])

  return (
    <nav>
      <nav
        className={`hidden md:flex bg-white bg-opacity-90 items-center z-50 justify-between fixed w-full px-20 shadow-sm backdrop-blur-md duration-200 h-[80px] ${
          visible ? "top-0" : "-top-[80px]"
        }`}>
        <NavLink to={"/"} className="text-2xl">
          Travel <span className="font-bold">Pack</span>
        </NavLink>
        <div className="flex justify-center items-center gap-10" id="navbarLink">
          <div>
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/"}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/travel-step"}>
              Travel Step
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/find-travel"}>
              Find Destination
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/my-travel-step"}>
              My Travel
            </NavLink>
          </div>
          <div className="mr-16">
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/forum"}>
              Forum
            </NavLink>
          </div>
          <div>
            <NavLink className="font-medium" to={"/profile"}>
              <BsFillPersonFill className="w-5 h-5 hover:text-yelloku duration-400" />
            </NavLink>
          </div>
          <div>
            {loggedIn ? (
              <button
                className="font-medium hover:border-b-4 border-yelloku duration-400"
                onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink
                className="font-medium hover:border-b-4 border-yelloku duration-400"
                to={"/login"}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      <Navbar
        fluid={true}
        rounded={true}
        className="md:hidden md:w-0 md:h-0 fixed bg-transparent z-50">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            to={"/"}
            className="block md:hidden py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Home
          </NavLink>
          <NavLink
            to={"/travel-step"}
            className="block md:hidden py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Travel Step
          </NavLink>
          <NavLink
            to={"/find-travel"}
            className="block md:hidden py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Find Tour
          </NavLink>
          <NavLink
            to={"/forum"}
            className="block md:hidden py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Forum
          </NavLink>
          {loggedIn ? (
            <button
              onClick={() => handleLogout}
              onTouchStart={handleLogout}
              className="block md:hidden py-2 pl-3 pr-4 text-left text-black bg-yelloku font-medium">
              Logout
            </button>
          ) : (
            <NavLink
              className="block md:hidden py-2 pl-3 pr-4 text-black bg-yelloku font-medium"
              to={"/login"}>
              Login
            </NavLink>
          )}
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}
