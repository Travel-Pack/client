import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)

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
      <div className={`flex bg-white bg-opacity-90 items-center justify-between fixed w-full px-20 shadow-sm backdrop-blur-sm duration-200 h-[80px] ${visible ? 'top-0' : '-top-[80px]'}`}>
        <NavLink to={"/"} className="text-2xl">
          Travel <span className="font-bold">Pack</span>
        </NavLink>
        <div className="flex justify-center gap-10">
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div>
            <NavLink to={"/travel-step"}>Travel Step</NavLink>
          </div>
          <div>
            <NavLink to={"/find-travel"}>Find Tour</NavLink>
          </div>
          <div>
            <NavLink to={"forum"}>Forum</NavLink>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <NavLink to={"/register"}>Register</NavLink>
        </div>
      </div>
    </div>
  )
}
