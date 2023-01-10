import { Outlet, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import { fetchDestination, fetchHotel } from "../stores/actions/actionCreator"

export function DestinationDetailPage() {
  const { type, slug } = useParams()
  const destination = useSelector((state) => state.destinations.destination)
  const hotel = useSelector((state) => state.destinations.hotel)
  let data
  if (type === "destination") {
    data = destination
  } else {
    data = hotel
  }
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    let fetch = fetchDestination
    if (type !== "destination") {
      fetch = fetchHotel
    }
    dispatch(fetch(slug)).then((_) => {
      setLoad(false)
    })
  }, [])

  if (load) {
    return <Loader />
  }
  return (
    <div className="flex flex-col">
      <section
        style={{
          backgroundImage: `url(${
            type === "destination" ? data.destination.mainImg : data.image
          })`,
        }}
        className={`bg-cover bg-center bg-no-repeat w-full`}>
        <div className="flex-col flex mx-auto justify-start pt-20 px-10 backdrop-brightness-50">
          <div className="font-caramel text-xl font-bold text-white md:text-7xl">
            {type === "destination" ? data.destination.name : data.name},{" "}
            <h3 className="text-4xl font-light">
              {type === "destination" ? data.destination.City.name : data.City.name}
            </h3>
          </div>
          <div className="mt-14 sm:mt-6">
            <div className="flex gap-6" id="NavDetail">
              <NavLink
                to={""}
                className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                Information
              </NavLink>
              <NavLink
                to="review"
                className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                Review
              </NavLink>
              {/* <NavLink
                  to="covid"
                  className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                  Covid Stats
                </NavLink> */}
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  )
}
