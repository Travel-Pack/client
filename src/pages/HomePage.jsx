import { Carousel } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import Cards from "../components/HomeSection/Cards"
import Compass from "../components/svg/Compass"
import FooterTeam from "./FooterTeam"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import {
  fetchCities,
  fetchHighlightedDestination,
  fetchReviews,
} from "../stores/actions/actionCreator"
import Loader from "../components/Loader"
import ScrollToTopBtn from "../components/ScrollToTopBtn"

export function HomePage() {
  const [load, setLoad] = useState(true)
  const nav = useNavigate()
  const dispatch = useDispatch()
  const cities = useSelector((state) => state.cities.cities)
  const reviews = useSelector((state) => state.others.reviews)

  function navToStep() {
    nav("/travelItenerary")
  }

  /* Fetch data from API */
  const destinations = useSelector(
    (state) => state.destinations.highlightedDestinations
  )
  /*  */
  useEffect(() => {
    dispatch(fetchCities())
      .then((_) => {
        dispatch(fetchHighlightedDestination())
          .then((_) => {
            dispatch(fetchReviews())
              .then(_ => {
                setLoad(false)
              })
          })
      })
  }, [])

  if (load) return <Loader />
  return (
    <div className="bg-stone-50">
      <ScrollToTopBtn />
      <div className="flex-col flex h-screen items-center justify-evenly bg-cover bg-[url('./assets/images/giliTrawangan.jpg')]">
        <div>
          <h1 className="text-center font-bold text-3xl xl:text-7xl text-white">
            Travel Pack
          </h1>
          <h1 className="xl:text-5xl text-3xl font-light text-white space px-16 text-center xl:px-0 xl:text-left">
            Join Global community to list all worth destination in Nusantara
          </h1>
          <button className="bg-yelloku py-3 px-11 block mx-auto mt-2 lowercase tracking-wider">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-col flex pb-10">
        <div className="bg-yelloku flex flex-col xl:flex-row items-center justify-center py-10 xl:gap-14 gap-3">
          <div className="flex items-center">
            <Compass />
            <input
              type="text"
              placeholder="Where to?"
              className="bg-transparent border-0 border-b-2  pr-20 border-zinc-900 py-2 placeholder:text-lg placeholder:text-zinc-900 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Province?"
              className="bg-transparent border-0 border-b-2  pr-20 border-zinc-900 py-2 placeholder:text-lg placeholder:text-zinc-900 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City?"
              className="bg-transparent border-0 border-b-2  pr-20 border-zinc-900 py-2 placeholder:text-lg placeholder:text-zinc-900 focus:outline-none"
            />
          </div>
          <div>
            <button className="bg-zinc-900 text-yellow-50 px-14 py-2.5 active:scale-95 duration-200">
              find now
            </button>
          </div>
        </div>
        <section className="destination-text bg-white w-full">
          <div className="container mx-auto py-4">
            <div className="max-w-3xl">
              <div className="py-10">
                <h1 className="xl:text-5xl text-3xl tracking-wide border-l-4 border-zinc-900 pl-7 font-bold">
                  Choose The
                  <span className="font-light"> Destinations Just Right </span>
                  For Your Vacation
                </h1>
                <p className="mt-4 pl-7 font-light text-lg text-gray-500  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima dolorem placeat atque ad! Eaque, ratione totam? Ad
                  placeat laborum
                </p>
              </div>
            </div>
          </div>
        </section>
        <Cards type="city" cities={cities} />
        <div className="container mx-auto my-4">
          <div className="max-w-3xl">
            <div className="py-10">
              <h1 className="xl:text-5xl text-3xl tracking-wide border-l-4 border-zinc-900 pl-7 font-bold">
                Amazing{" "}
                <span className="font-light">
                  Destinations And Fun Adventures{" "}
                </span>
                Waiting For You
              </h1>
              <p className="mt-4 pl-7 font-light text-lg text-gray-500  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                dolorem placeat atque ad! Eaque, ratione totam? Ad placeat
                laborum
              </p>
            </div>
          </div>
        </div>
        <Cards type="destination" destinations={destinations} />
      </div>

      <section id="quote" className="flex mt-24 xl:flex-row flex-col">
        <div className="bg-yelloku xl:w-1/2 flex justify-center items-center">
          <div className="xl:text-7xl text-5xl font-lucky-guy py-8 xl:py-32 px-14 xl:px-48 text-center">
            Theres <br /> Users reviews so far!
          </div>
        </div>
        <div className="xl:w-1/2">
          <div
            className={`h-96 xl:h-full w-full bg-black px-5 xl:px-24 text-white`}>
            <Carousel slideInterval={5000}>
              {reviews.map((el, index) => {
                return (
                  <div className="bg-opacity-20" key={index}>
                    <p className="xl:text-3xl text-lg mb-10">
                      {el.comment}
                    </p>
                    <h3 className="text-xl">By {el.user}</h3>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>

      <div className="container mx-auto my-4">
        <div className="max-w-3xl">
          <div className="py-10">
            <h1 className="xl:text-5xl text-3xl tracking-wide border-l-4 border-zinc-900 pl-7 font-bold">
              Lets go
              <span className="font-light"> Book the Destination wanted </span>
              right now!
            </h1>
            <button
              onClick={navToStep}
              className="bg-yelloku text-lg font-medium py-2.5 px-16 block mt-5 lowercase tracking-wider">
              Go to Book
            </button>
          </div>
        </div>
      </div>

      <FooterTeam />
    </div>
  )
}
