import { Navbar } from "flowbite-react"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { BsFillPersonFill } from "react-icons/bs"

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
            <NavLink className="font-medium" to={"/profile"}>
              <BsFillPersonFill className="w-5 h-5 hover:text-yelloku duration-400" />
            </NavLink>
          </div>
          <div>
            <NavLink
              className="font-medium hover:border-b-4 border-yelloku duration-400"
              to={"/login"}>
              Login
            </NavLink>
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
          <NavLink
            to={"/login"}
            className="block md:hidden py-2 pl-3 pr-4 text-black bg-yelloku font-medium">
            Login
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}
