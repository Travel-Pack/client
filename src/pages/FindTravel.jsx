import { useState, useEffect } from "react"
import TravelCards from "../components/CityPages/TravelCards"
import SearchForm from "../components/TravelSection/SearchForm"
import { useDispatch } from "react-redux"
import { fetcDestinations } from "../stores/actions/actionCreator"
import Loader from "../components/Loader"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
export default function FindTravel() {
  const [active, setActive] = useState(null)
  const dispatch = useDispatch()
  const [load, setLoad] = useState(true)

  function handleSort(params) {
    setActive("bg-white text-black");
    setLoad(true)
    dispatch(fetcDestinations(params))
      .then(_ => {
        setLoad(false)
      })
  }

  useEffect(() => {
    dispatch(fetcDestinations()).then((_) => {
      setLoad(false)
    })
  }, [])

  if (load) {
    return <Loader />
  }
  return (
    <div className="bg-stone-50 md:mt-20">
      <ScrollToTopBtn />
      <div className="md:h-96 pt-10 md:px-16 md:pt-0 flex flex-col justify-end bg-zinc-400 bg-blend-multiply bg-[url('https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] bg-cover ">
        <h1 className="text-white font-semibold text-center md:text-left md:text-6xl text-4xl pb-2 md:pb-10">
          Find The next <br /> Destination
        </h1>
        <div className="flex justify-between md:justify-start">
          <div
            className={`hover:bg-white hover:text-black text-white duration-200 md:py-2.5 px-1 py-1 md:px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort("costLowToHigh")}>
            <h1 className="">Price Low to High</h1>
          </div>

          <div
            className={`hover:bg-white hover:text-black text-white duration-200 md:py-2.5 px-1 py-1 md:px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort("costHighToLow")}>
            <h1 className="">Price High to Low</h1>
          </div>
          <div
            className={`hover:bg-white hover:text-black text-white duration-200 md:py-2.5 px-1 py-1 md:px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort("name")}>
            <h1 className="">Name (A-Z)</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto px-3 md:px-16 flex justify-center py-3 md:py-10 gap-5 min-h-full">
        <TravelCards />

        <SearchForm />
      </div>
    </div>
  )
}
