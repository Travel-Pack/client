import { Navbar } from "flowbite-react"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
function SvgNav() {
  return (
    <svg
      className="w-6 h-6"
      fill="black"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"></path>
    </svg>
  )
}

export default function NavbarTravel() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const [active, isActive] = useState(false)

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
  }, [prevScrollpos])

  return (
    <div>
      <div
        className={`hidden xl:flex bg-white bg-opacity-90 items-center z-50 justify-between fixed w-full px-20 shadow-sm backdrop-blur-md duration-200 h-[80px] ${
          visible ? "top-0" : "-top-[80px]"
        }`}>
        <NavLink to={"/"} className="text-2xl">
          Travel <span className="font-bold">Pack</span>
        </NavLink>
        <div className="flex justify-center gap-10" id="navbarLink">
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
              Find Tour
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
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/register"}>
              Register
            </NavLink>
          </div>
        </div>
      </div>

      <Navbar fluid={true} rounded={true} className="xl:hidden fixed bg-transparent z-50">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            to={"/"}
            className="block py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Home
          </NavLink>
          <NavLink
            to={"/travel-step"}
            className="block py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Travel Step
          </NavLink>
          <NavLink
            to={"/find-travel"}
            className="block py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Find Tour
          </NavLink>
          <NavLink
            to={"/forum"}
            className="block py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Forum
          </NavLink>
          <NavLink
            to={"/register"}
            className="block py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Register
          </NavLink>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}
