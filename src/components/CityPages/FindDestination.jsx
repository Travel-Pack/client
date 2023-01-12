import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams, NavLink } from "react-router-dom"
import { fetchCity } from "../../stores/actions/actionCreator"
import Loader from "../Loader"

export default function FindDestination() {
  const city = useSelector((state) => state.cities.city)
  const { citySlug, type } = useParams()
  const [active, setActive] = useState(null)
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCity(citySlug)).then((_) => {
      setLoad(false)
    })
  }, [])

  function handleSort() {
    setActive("bg-white text-black")
  }

  if (load) {
    return <Loader />
  }
  return (
    <div className="bg-stone-50 mt-20">
      <div
        style={{ backgroundImage: `url(${city.city.image})` }}
        className="h-96 px-16 flex flex-col justify-end bg-zinc-400 bg-blend-multiply bg-cover ">
        <h1 className="text-white font-semibold text-6xl pb-10">
          Find The next <br /> Destination in {city.city.name}
        </h1>
        <div className="flex gap-10">
          <NavLink
            className={`hover:bg-white hover:text-black text-white duration-200 py-2.5 px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            to="destination">
            Destination
          </NavLink>

          <NavLink
            className={`hover:bg-white hover:text-black text-white duration-200 py-2.5 px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            to="hotel">
            Hotel
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  )
}
