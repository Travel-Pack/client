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
import { blackButton, yellowButton } from "../helpers/buttonStyle"

export function HomePage() {
  const [load, setLoad] = useState(true)
  const [defaultLength, setDefaultLength] = useState(true)
  const nav = useNavigate()
  const dispatch = useDispatch()
  const cities = useSelector((state) => state.cities.cities)
  const reviews = useSelector((state) => state.others.reviews)
  const [filteredCity, setFilteredCity] = useState([])

  useEffect(() => {
    if (cities.length) {
      const newCities = [...cities]
      if (defaultLength) {
        newCities?.splice(8, newCities.length - 1)
      } else {
        newCities.map((el) => {
          return el
        })
      }
      setFilteredCity(newCities)
    }
  }, [cities, defaultLength])

  function navToStep() {
    nav("/travel-step")
  }

  /* Fetch data from API */
  const destinations = useSelector((state) => state.destinations.highlightedDestinations)
  /*  */
  useEffect(() => {
    dispatch(fetchCities()).then((_) => {
      dispatch(fetchHighlightedDestination()).then((_) => {
        dispatch(fetchReviews()).then((_) => {
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
          <a href="#cities">
            <button
              className={` py-2.5 px-11 block mx-auto mt-2 lowercase font-medium text-xl ${yellowButton}`}>
              Let's Go!
            </button>
          </a>
        </div>
      </div>
      <div className="flex-col flex pb-10">
        <div className="bg-yelloku flex flex-col xl:flex-row items-center justify-center py-10 xl:gap-14 gap-3 h-10"></div>
        <section className="destination-text bg-white w-full" id="cities">
          <div className="container mx-auto py-4">
            <div className="max-w-3xl">
              <div className="py-10">
                <h1 className="xl:text-5xl text-3xl tracking-wide border-l-4 border-zinc-900 pl-7 font-bold">
                  Choose The
                  <span className="font-light"> Cities Just Right </span>
                  For Your Vacation
                </h1>
                <p className="mt-4 pl-7 font-light text-lg text-gray-500  ">
                  View destinations or hotels in the city of your choice. Click a city to
                  see available destinations and hotels.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Cards type="city" cities={filteredCity} />
        <button
          className={`${blackButton} py-2 text-2xl font-medium w-fit self-end px-6 mr-5`}
          onClick={() => setDefaultLength(!defaultLength)}>
          {defaultLength ? "Show all" : "hide cities"}
        </button>
        <div className="container mx-auto my-4">
          <div className="max-w-3xl">
            <div className="py-10">
              <h1 className="xl:text-5xl text-3xl tracking-wide border-l-4 border-zinc-900 pl-7 font-bold">
                Amazing{" "}
                <span className="font-light">Destinations And Fun Adventures </span>
                Waiting For You
              </h1>
              <p className="mt-4 pl-7 font-light text-lg text-gray-500  ">
                Best destinations based on users reviews.
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
          <div className={`h-96 xl:h-full w-full bg-black px-5 xl:px-24 text-white`}>
            <Carousel slideInterval={5000}>
              {reviews.map((el, index) => {
                return (
                  <div className="bg-opacity-20" key={index}>
                    <p className="xl:text-3xl text-lg mb-10">{el.comment}</p>
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
              <span className="font-light"> create your travel step </span>
              right now!
            </h1>
            <button
              onClick={navToStep}
              className={`${yellowButton} text-xl font-medium py-2.5 px-16 block mt-5 lowercase`}>
              Generate Travel Step
            </button>
          </div>
        </div>
      </div>

      <FooterTeam />
    </div>
  )
}
